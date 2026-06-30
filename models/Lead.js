import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    company: {
      type: String,
      trim: true,
      default: ''
    },
    revenue: {
      type: String,
      trim: true,
      default: ''
    },
    message: {
      type: String,
      trim: true,
      default: ''
    }
  },
  {
    timestamps: true  // Adds createdAt and updatedAt automatically
  }
);

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export default Lead;
