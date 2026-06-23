import nodemailer from 'nodemailer';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

/**
 * Get all admin email addresses from the database.
 * Falls back to ADMIN_EMAIL env var if no admins found or DB query fails.
 */
async function getAdminEmails() {
  try {
    await connectDB();
    const admins = await User.find({ isAdmin: true }).select('email name').lean();
    if (admins && admins.length > 0) {
      return admins.map(admin => admin.email);
    }
  } catch (err) {
    console.warn('Could not fetch admin users from DB:', err.message);
  }

  // Fallback to env variable
  const fallback = process.env.ADMIN_EMAIL;
  return fallback ? fallback.split(',').map(e => e.trim()) : [];
}

/**
 * Create a reusable SMTP transporter.
 * Supports Gmail (smtp.gmail.com) out of the box.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/**
 * Send enrollment notification email to ALL admin users.
 */
export async function sendEnrollmentEmail({ name, email, mobile, course, message }) {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn('SMTP credentials (SMTP_USER / SMTP_PASS) missing. Enrollment email skipped.');
    return { success: false, reason: 'SMTP credentials missing' };
  }

  const adminEmails = await getAdminEmails();
  if (adminEmails.length === 0) {
    console.warn('No admin emails found. Enrollment email skipped.');
    return { success: false, reason: 'No admin recipients' };
  }

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const mailOptions = {
    from: `"MURPHISM Academy" <${process.env.SMTP_USER}>`,
    to: adminEmails.join(', '),
    subject: `🎓 New Enrollment: ${course} — ${name}`,
    text: `
Hello Admin,

A new student has enrolled for a course at MURPHISM Academy.

──────────────────────────────
ENROLLMENT DETAILS
──────────────────────────────
Name:     ${name}
Email:    ${email}
Mobile:   ${mobile || 'Not provided'}
Course:   ${course}
Message:  ${message || 'None'}
──────────────────────────────

Submitted At: ${submittedAt}

Login to the Admin Dashboard to manage this enrollment:
${process.env.NEXT_PUBLIC_SITE_URL || 'https://murphism.com'}/admin

— MURPHISM Academy System
    `,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background-color: #050508; color: #f0ece0; border-radius: 16px; overflow: hidden; border: 1px solid rgba(201,162,39,0.25);">
        
        <!-- Gold Header Bar -->
        <div style="height: 4px; background: linear-gradient(90deg, #8B6914, #c9a227, #e8bf5a, #c9a227, #8B6914);"></div>
        
        <!-- Header -->
        <div style="padding: 28px 32px 20px; text-align: center; border-bottom: 1px solid rgba(201,162,39,0.1);">
          <h1 style="margin: 0; color: #c9a227; font-size: 22px; font-weight: 800; letter-spacing: 0.05em;">🎓 New Student Enrollment</h1>
          <p style="margin: 8px 0 0; color: #6b6459; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Murphism Academy · Admin Notification</p>
        </div>

        <!-- Body -->
        <div style="padding: 24px 32px;">
          <p style="color: #b8b099; font-size: 14px; margin: 0 0 20px;">A new student has submitted an enrollment request. Here are the details:</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 12px 8px; font-weight: 700; color: #c9a227; width: 100px; font-size: 13px; vertical-align: top;">Name</td>
              <td style="padding: 12px 8px; color: #ffffff; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 12px 8px; font-weight: 700; color: #c9a227; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 12px 8px; color: #ffffff; font-size: 14px;"><a href="mailto:${email}" style="color: #e8bf5a; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 12px 8px; font-weight: 700; color: #c9a227; font-size: 13px; vertical-align: top;">Mobile</td>
              <td style="padding: 12px 8px; color: #ffffff; font-size: 14px;">${mobile ? `<a href="tel:${mobile}" style="color: #e8bf5a; text-decoration: none;">${mobile}</a>` : '<span style="color: #6b6459;">Not provided</span>'}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 12px 8px; font-weight: 700; color: #c9a227; font-size: 13px; vertical-align: top;">Course</td>
              <td style="padding: 12px 8px;">
                <span style="background: rgba(201,162,39,0.12); border: 1px solid rgba(201,162,39,0.35); padding: 4px 12px; border-radius: 6px; color: #e8bf5a; font-size: 13px; font-weight: 700;">${course}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; font-weight: 700; color: #c9a227; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 12px 8px; color: #b8b099; font-size: 14px; font-style: italic;">${message || '<span style="color: #6b6459;">None</span>'}</td>
            </tr>
          </table>

          <!-- Timestamp -->
          <div style="margin-top: 20px; padding: 12px 16px; background: rgba(201,162,39,0.05); border: 1px solid rgba(201,162,39,0.1); border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #6b6459;">
              📅 Submitted: <span style="color: #b8b099;">${submittedAt}</span>
            </p>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin-top: 24px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://murphism.com'}/admin" 
               style="display: inline-block; padding: 12px 32px; background: linear-gradient(135deg, #c9a227, #e8bf5a); color: #050508; font-weight: 700; font-size: 13px; text-decoration: none; border-radius: 8px; letter-spacing: 0.05em; text-transform: uppercase;">
              View in Dashboard →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
          <p style="margin: 0; font-size: 11px; color: #6b6459;">This is an automated notification from MURPHISM Academy.</p>
          <p style="margin: 4px 0 0; font-size: 11px; color: #6b6459;">Sent to all admin accounts.</p>
        </div>
        
        <!-- Bottom Gold Bar -->
        <div style="height: 3px; background: linear-gradient(90deg, transparent, #c9a227, transparent);"></div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Enrollment email sent to ${adminEmails.length} admin(s):`, info.messageId);
    return { success: true, messageId: info.messageId, recipients: adminEmails.length };
  } catch (error) {
    console.error('Error sending enrollment email:', error);
    return { success: false, error: error.message };
  }
}
