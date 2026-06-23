import nodemailer from 'nodemailer';

export async function sendEnrollmentEmail({ name, email, mobile, course, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    console.warn('SMTP settings are missing in environment variables. Enrollment email notification skipped.');
    return { success: false, reason: 'SMTP configurations missing' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for port 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"MURPHISM Academy" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Course Enrollment: ${course} - ${name}`,
      text: `
Hello Admin,

A new student has enrolled for a course at MURPHISM Academy.

Details:
- Name: ${name}
- Email: ${email}
- Mobile: ${mobile || 'Not provided'}
- Course: ${course}
- Message/Comments: ${message || 'None'}

Submitted At: ${new Date().toLocaleString()}

Best regards,
MURPHISM Academy System
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e8bf5a; border-radius: 12px; background-color: #050508; color: #f0ece0;">
          <h2 style="color: #c9a227; border-bottom: 1px solid rgba(201,162,39,0.2); padding-bottom: 10px;">New Student Enrollment</h2>
          <p>A new student has submitted an enrollment request:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #c9a227; width: 120px;">Name:</td>
              <td style="padding: 8px; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #c9a227;">Email:</td>
              <td style="padding: 8px; color: #ffffff;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #c9a227;">Mobile:</td>
              <td style="padding: 8px; color: #ffffff;">${mobile || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #c9a227;">Course:</td>
              <td style="padding: 8px; color: #ffffff;"><span style="background: rgba(201,162,39,0.1); border: 1px solid rgba(201,162,39,0.3); padding: 2px 8px; border-radius: 4px; color: #c9a227; font-size: 13px; font-weight: bold;">${course}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #c9a227; vertical-align: top;">Message:</td>
              <td style="padding: 8px; color: #d0c8b0; font-style: italic;">${message || 'None'}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.08); margin: 20px 0;" />
          <p style="font-size: 11px; color: #6b6459;">This is an automated notification from Murphism Academy platform.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Enrollment email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending enrollment email to admin:', error);
    return { success: false, error: error.message };
  }
}
