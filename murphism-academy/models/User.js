import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, unique: true, trim: true, lowercase: true },
    phone:   { type: String, required: true, trim: true },
    password:{ type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    resetOTP:       { type: String, default: null },
    resetOTPExpiry: { type: Date,   default: null },
  },
  { timestamps: true }
);

// Hash password before save
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

UserSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.models.User || mongoose.model('User', UserSchema);
