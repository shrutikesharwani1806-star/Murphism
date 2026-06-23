import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

// POST /api/auth/forgot-password — generate OTP and store it
export async function POST(req) {
  try {
    await connectDB();
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json({ success: false, error: 'Phone number is required.' }, { status: 400 });
    }

    const user = await User.findOne({ phone });
    if (!user) {
      return NextResponse.json({ success: false, error: 'No account found with this phone number.' }, { status: 404 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.resetOTP = otp;
    user.resetOTPExpiry = expiry;
    await user.save();

    // ── SMS Integration ──
    // To send real SMS, plug in Fast2SMS / Twilio here.
    // For now the OTP is logged to server console for testing.
    console.log(`[MURPHISM OTP] Phone: ${phone} | OTP: ${otp}`);
    // Example with Fast2SMS (uncomment and add FAST2SMS_API_KEY to .env.local):
    // await fetch('https://www.fast2sms.com/dev/bulkV2', {
    //   method: 'POST',
    //   headers: { authorization: process.env.FAST2SMS_API_KEY, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ route: 'q', message: `Your Murphism OTP is ${otp}. Valid for 10 minutes.`, language: 'english', flash: 0, numbers: phone }),
    // });

    return NextResponse.json({ success: true, message: 'OTP sent to your registered phone number.' });
  } catch (err) {
    console.error('Forgot password error:', err);
    return NextResponse.json({ success: false, error: 'Server error. Please try again.' }, { status: 500 });
  }
}
