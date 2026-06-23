import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    mobile: { type: String, trim: true, default: '' },
    course: { type: String, required: true, trim: true },
    message: { type: String, trim: true, default: '' },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'enrolled', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Enrollment ||
  mongoose.model('Enrollment', EnrollmentSchema);
