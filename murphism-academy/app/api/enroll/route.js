import connectDB from '@/lib/mongodb';
import Enrollment from '@/models/Enrollment';
import { sendEnrollmentEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, course, message } = body;

    if (!name || !email || !course) {
      return Response.json(
        { success: false, error: 'Name, email, and course are required.' },
        { status: 400 }
      );
    }

    await connectDB();

    const enrollment = await Enrollment.create({
      name,
      email,
      mobile,
      course,
      message: message || '',
    });

    // Notify admins via email (failsafe)
    try {
      await sendEnrollmentEmail({ name, email, mobile, course, message });
    } catch (emailErr) {
      console.error('Non-blocking enrollment email notification error:', emailErr);
    }

    return Response.json(
      {
        success: true,
        message: 'Enrollment submitted successfully! Our team will contact you shortly.',
        id: enrollment._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Enrollment API Error:', error);
    return Response.json(
      { success: false, error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ message: 'Murphism Enrollment API is live.' });
}
