'use client';
import { useState, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import EnrollmentSuccessPopup from './EnrollmentSuccessPopup';

const allCoursesList = [
  'Graphic Design',
  'Website Development',
  'Video Editing & VFX',
  '3D Design & Animation',
  'AI Courses',
  'VFX',
  'B.Sc. in Animations & Multimedia',
  'Diploma in Animations & Multimedia',
  'Each Course on 6999',
];

export default function CourseEnrollmentForm({ defaultCourseName = '', accentColor = '#c9a227' }) {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', course: defaultCourseName, message: '' });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultCourseName) {
      setForm((prev) => ({ ...prev, course: defaultCourseName }));
    }
  }, [defaultCourseName]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedName(form.name);
        setShowPopup(true);
        setForm({ name: '', email: '', mobile: '', course: defaultCourseName, message: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="rounded-2xl p-8 border relative overflow-hidden"
        style={{
          borderColor: `${accentColor}22`,
          background: 'linear-gradient(135deg, rgba(15, 14, 11, 0.95) 0%, rgba(10, 9, 7, 0.98) 100%)',
          boxShadow: `0 25px 60px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.03)`,
        }}
      >
        {/* Glow accent */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none"
          style={{ background: accentColor }}
        />

        <h2 className="text-white font-bold text-2xl mb-2 relative z-10">Enroll Now</h2>
        <p className="text-[#b8b099] text-sm mb-6 relative z-10">Fill in your details and our admissions team will reach out to you.</p>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {/* Name */}
          <div>
            <label className="text-[#b8b099] text-xs font-semibold mb-1.5 block uppercase tracking-wider">Full Name <span className="text-red-400">*</span></label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none transition-colors text-sm"
              onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-[#b8b099] text-xs font-semibold mb-1.5 block uppercase tracking-wider">Email Address <span className="text-red-400">*</span></label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none transition-colors text-sm"
              onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Phone (Optional) */}
          <div>
            <label className="text-[#b8b099] text-xs font-semibold mb-1.5 block uppercase tracking-wider">
              Phone Number <span className="normal-case font-normal opacity-60">(Optional)</span>
            </label>
            <input
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none transition-colors text-sm"
              onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Course */}
          <div>
            <label className="text-[#b8b099] text-xs font-semibold mb-1.5 block uppercase tracking-wider">Course <span className="text-red-400">*</span></label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#0a0907] border border-white/10 text-white focus:outline-none transition-colors text-sm"
              onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              <option value="">Select a course</option>
              {allCoursesList.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Message (Optional) */}
          <div>
            <label className="text-[#b8b099] text-xs font-semibold mb-1.5 block uppercase tracking-wider">
              Message <span className="normal-case font-normal opacity-60">(Optional)</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Any questions or specific goals?"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none transition-colors text-sm resize-none"
              onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 rounded-lg px-4 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 disabled:opacity-60"
            style={{
              background: loading ? `${accentColor}80` : accentColor,
              color: '#050505',
              boxShadow: `0 8px 24px ${accentColor}30`,
            }}
          >
            {loading ? (
              <>
                <Loader size={18} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Enrollment</span>
              </>
            )}
          </button>

          <p className="text-[#6b6459] text-xs text-center">
            By submitting, you agree to our{' '}
            <span className="hover:underline" style={{ color: accentColor }}>Privacy Policy</span>.
            We'll contact you within 24 hours.
          </p>
        </form>
      </div>

      <EnrollmentSuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        studentName={submittedName}
        courseName={form.course}
      />
    </>
  );
}
