import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

// GET /api/auth/me — returns current user from database verifying token
export async function GET(req) {
  const token = req.cookies.get('murphism_token')?.value;
  if (!token) {
    return NextResponse.json({ success: false, user: null });
  }
  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ success: false, user: null });
  }

  try {
    await connectDB();
    const dbUser = await User.findById(payload.id);
    if (!dbUser) {
      return NextResponse.json({ success: false, user: null });
    }
    return NextResponse.json({
      success: true,
      user: {
        id: dbUser._id,
        email: dbUser.email,
        name: dbUser.name,
        isAdmin: dbUser.isAdmin
      }
    });
  } catch (err) {
    console.error('Error fetching me:', err);
    return NextResponse.json({ success: false, user: null });
  }
}
