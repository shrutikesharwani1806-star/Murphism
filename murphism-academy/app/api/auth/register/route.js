import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { signToken, getCookieOptions } from '@/lib/auth';

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, phone, password } = await req.json();

    if (!name || !email || !phone || !password) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ success: false, error: 'Password must be at least 6 characters.' }, { status: 400 });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ success: false, error: 'An account with this email already exists.' }, { status: 409 });
    }

    const user = await User.create({ name, email, phone, password, isAdmin: false });

    const token = await signToken({ id: user._id.toString(), email: user.email, name: user.name, isAdmin: user.isAdmin });
    const res = NextResponse.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
    });
    res.cookies.set('murphism_token', token, getCookieOptions());
    return res;
  } catch (err) {
    console.error('Register error:', err);
    return NextResponse.json({ success: false, error: 'Server error. Please try again.' }, { status: 500 });
  }
}
