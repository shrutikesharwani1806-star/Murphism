import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    await connectDB();

    await Contact.create({ name, email, mobile, subject, message });

    return Response.json(
      {
        success: true,
        message: "Message received! We'll get back to you within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json(
      { success: false, error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
