import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { signToken, getCookieOptions } from '@/lib/auth';

// POST /api/auth/reset-password — verify OTP then reset password
export async function POST(req) {
  try {
    await connectDB();
    const { phone, otp, newPassword } = await req.json();

    if (!phone || !otp || !newPassword) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ success: false, error: 'Password must be at least 6 characters.' }, { status: 400 });
    }

    const user = await User.findOne({ phone });
    if (!user || !user.resetOTP) {
      return NextResponse.json({ success: false, error: 'OTP not found. Please request a new one.' }, { status: 400 });
    }

    if (user.resetOTP !== otp) {
      return NextResponse.json({ success: false, error: 'Invalid OTP. Please try again.' }, { status: 400 });
    }

    if (new Date() > user.resetOTPExpiry) {
      return NextResponse.json({ success: false, error: 'OTP has expired. Please request a new one.' }, { status: 400 });
    }

    // Reset password (pre-save hook will hash it)
    user.password = newPassword;
    user.resetOTP = null;
    user.resetOTPExpiry = null;
    await user.save();

    // Auto-login after reset
    const token = await signToken({ id: user._id.toString(), email: user.email, isAdmin: user.isAdmin });
    const res = NextResponse.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
    });
    res.cookies.set('murphism_token', token, getCookieOptions());
    return res;
  } catch (err) {
    console.error('Reset password error:', err);
    return NextResponse.json({ success: false, error: 'Server error. Please try again.' }, { status: 500 });
  }
}
