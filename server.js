import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';

// Import db connection and routes
import connectDB from './db.js';
import leadRoutes from './routes/leadRoutes.js';

// Load environmental variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet());

// Workaround for express-mongo-sanitize compatibility with Express 5 read-only req.query getter
app.use((req, res, next) => {
  if (req.query) {
    const rawQuery = req.query;
    Object.defineProperty(req, 'query', {
      value: { ...rawQuery },
      writable: true,
      configurable: true,
      enumerable: true
    });
  }
  next();
});
app.use(mongoSanitize());

// Rate Limiter for API endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again after 15 minutes.'
  }
});
app.use('/api/', apiLimiter);

// Enable CORS with environment configurations
const corsOptions = {
  origin: process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : '*',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// JSON parsing middleware
app.use(express.json());

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Data folder path to store local JSON backup (if MongoDB is not connected)
const DATA_DIR = path.join(__dirname, 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

// Ensure data directory and backup files exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}
if (!fs.existsSync(SUBMISSIONS_FILE)) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
}
if (!fs.existsSync(SUBSCRIBERS_FILE)) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2));
}

// Connect to MongoDB
connectDB();

// Define MongoDB Schemas and Models for legacy endpoints
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  revenue: { type: String, default: 'Not Provided' },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});

const ContactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
const SubscriberModel = mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema);

// Helper function to read local JSON backup
const readLocalData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Helper function to write local JSON backup
const writeLocalData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error saving backup to ${filePath}:`, error);
  }
};

// Transporter setup for email notifications (Optional - configure in .env)
const getMailTransporter = () => {
  if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  return null;
};

// Mount Lead Routes
app.use('/api/leads', leadRoutes);

// API Endpoint: Handle Strategic Session Contact Form Submissions (Legacy)
app.post('/api/contact', async (req, res, next) => {
  const { name, email, company, revenue, message } = req.body;

  // Validation
  if (!name || !email || !company || !message) {
    return res.status(400).json({ success: false, error: 'Please fill all required fields.' });
  }

  const submissionData = {
    name,
    email,
    company,
    revenue: revenue || 'Not Provided',
    message,
    submittedAt: new Date().toISOString()
  };

  try {
    let savedDocId = null;
    const isMongoConnected = mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      // Save to MongoDB
      const contact = new ContactModel(submissionData);
      const savedDoc = await contact.save();
      savedDocId = savedDoc._id;
      console.log(`[MongoDB] New Application saved for: ${name} (${company})`);
    } else {
      // Save to local JSON backup
      const submissions = readLocalData(SUBMISSIONS_FILE);
      const newSubmission = { id: Date.now().toString(), ...submissionData };
      submissions.push(newSubmission);
      writeLocalData(SUBMISSIONS_FILE, submissions);
      savedDocId = newSubmission.id;
      console.log(`[Local JSON Backup] New Application saved for: ${name} (${company})`);
    }

    // Optional: Send Email Notification
    const transporter = getMailTransporter();
    if (transporter) {
      try {
        const mailOptions = {
          from: `"${name}" <${process.env.EMAIL_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          subject: `New Strategic Session Application from ${name}`,
          html: `
            <h3>New Strategic Session Application Received</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Annual Revenue:</strong> ${revenue}</p>
            <p><strong>Message / Bottleneck:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 10px; border-left: 3px solid #C9A227;">
              ${message.replace(/\n/g, '<br>') || 'N/A'}
            </blockquote>
          `,
        };
        await transporter.sendMail(mailOptions);
        console.log('Notification email sent successfully.');
      } catch (err) {
        console.error('Failed to send notification email:', err);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Application submitted successfully.',
      submissionId: savedDocId
    });

  } catch (error) {
    next(error);
  }
});

// API Endpoint: Handle Newsletter Subscriptions
app.post('/api/subscribe', async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email address is required.' });
  }

  const normalizedEmail = email.toLowerCase().trim();

  try {
    const isMongoConnected = mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      // Check if already subscribed in MongoDB
      const existing = await SubscriberModel.findOne({ email: normalizedEmail });
      if (existing) {
        return res.status(400).json({ success: false, error: 'This email is already subscribed.' });
      }

      // Save to MongoDB
      const newSub = new SubscriberModel({ email: normalizedEmail });
      await newSub.save();
      console.log(`[MongoDB] New subscriber: ${normalizedEmail}`);
    } else {
      // Check if already subscribed in JSON Backup
      const subscribers = readLocalData(SUBSCRIBERS_FILE);
      const alreadySubscribed = subscribers.some(sub => sub.email.toLowerCase() === normalizedEmail);
      if (alreadySubscribed) {
        return res.status(400).json({ success: false, error: 'This email is already subscribed.' });
      }

      // Save to local JSON backup
      const newSubscriber = {
        id: Date.now().toString(),
        email: normalizedEmail,
        subscribedAt: new Date().toISOString()
      };
      subscribers.push(newSubscriber);
      writeLocalData(SUBSCRIBERS_FILE, subscribers);
      console.log(`[Local JSON Backup] New subscriber: ${normalizedEmail}`);
    }

    return res.status(200).json({
      success: true,
      message: 'Subscribed to the newsletter successfully.'
    });

  } catch (error) {
    next(error);
  }
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Centralized Error Handler:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  Sales Overflow Backend running on port ${PORT}`);
  console.log(`===============================================`);
});
