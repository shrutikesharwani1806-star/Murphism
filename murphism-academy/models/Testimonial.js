import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    videoUrl: { type: String, required: true, trim: true }, // path like /reasons/filename.mp4
    label: { type: String, trim: true, default: '' }, // short tag e.g. "Graphic Design"
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial ||
  mongoose.model('Testimonial', TestimonialSchema);
