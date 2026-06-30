import Lead from '../models/Lead.js';
import { sendLeadNotificationEmail } from '../services/emailService.js';

export const createLead = async (req, res, next) => {
  try {
    const { fullName, email, phone, message } = req.body;

    console.log('Incoming Lead Submission:', { fullName, email, phone, messageLength: message ? message.length : 0 });

    // Validate required fields
    if (!fullName || !fullName.trim()) {
      console.warn('Submission rejected: Missing or empty fullName.');
      return res.status(400).json({
        success: false,
        error: 'Full name is required.'
      });
    }

    if (!email || !email.trim()) {
      console.warn('Submission rejected: Missing or empty email.');
      return res.status(400).json({
        success: false,
        error: 'Email is required.'
      });
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn(`Submission rejected: Invalid email format (${email}).`);
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    // Create and save lead to MongoDB
    const newLead = new Lead({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      message: message ? message.trim() : ''
    });

    const savedLead = await newLead.save();
    console.log('Lead saved successfully to MongoDB:', savedLead._id);

    // Send email notification (non-blocking — errors never affect the response)
    sendLeadNotificationEmail(savedLead).catch((err) => {
      console.error('[Email] Unexpected error in sendLeadNotificationEmail:', err.message);
    });

    res.status(201).json({
      success: true,
      message: 'Lead saved successfully.',
      data: {
        id: savedLead._id,
        fullName: savedLead.fullName,
        email: savedLead.email,
        phone: savedLead.phone,
        message: savedLead.message,
        createdAt: savedLead.createdAt
      }
    });
  } catch (error) {
    console.error('Error saving lead to MongoDB:', error.message);
    // Pass error to centralized error handler middleware
    next(error);
  }
};
