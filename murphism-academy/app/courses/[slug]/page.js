'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BarChart, CheckCircle, Send, Loader, Star, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnrollmentSuccessPopup from '@/components/EnrollmentSuccessPopup';
import { courses } from '@/components/CoursesSection';

const allCoursesList = [
  'Graphic Design',
  'Website Development',
  'Video Editing & VFX',
  '3D Design & Animation',
  'AI Courses',
  'VFX',
  'B.Sc. in Animations & Multimedia',
  'Diploma in Animations & Multimedia',
];

export default function CoursePage() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  const [form, setForm] = useState({ name: '', email: '', mobile: '', course: course?.title || '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (window.location.hash === '#enroll') {
      const el = document.getElementById('enroll');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
  }, []);

  useEffect(() => {
    if (course) {
      setForm((prev) => ({ ...prev, course: course.title }));
    }
  }, [course]);

  if (!course) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505]">
          <div className="text-6xl mb-6">🔍</div>
          <p className="text-white text-2xl font-bold mb-3">Course Not Found</p>
          <p className="text-[#b8b099] text-sm mb-6">The course you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/#courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c9a227] text-black font-bold text-sm hover:bg-[#b08d20] transition-all">
            <ArrowLeft size={16} /> Back to Courses
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

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
        setForm({ name: '', email: '', mobile: '', course: course?.title || '', message: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const accentColor = course.accentColor || '#c9a227';

  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accentColor}08 0%, #050505 60%)` }}
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none" style={{ background: `${accentColor}12` }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] pointer-events-none" style={{ background: `${accentColor}08` }} />

        <div className="max-w-7xl mx-auto px-6">
          {/* Back link */}
          <Link href="/#courses" className="inline-flex items-center gap-2 text-[#b8b099] hover:text-[#c9a227] transition-colors mb-8 text-sm group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Course Details */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {course.isNew && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-950/40 text-red-400 border border-red-900/30 tracking-wider uppercase">New</span>
                )}
                {course.isCombo && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-950/40 text-blue-400 border border-blue-900/30 tracking-wider uppercase">Combo</span>
                )}
                {course.isDegree && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-950/40 text-purple-400 border border-purple-900/30 tracking-wider uppercase">Diploma</span>
                )}
                <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase"
                  style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}>
                  {course.duration}
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${accentColor}15`, border: `2px solid ${accentColor}30` }}
                >
                  {course.emoji}
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug">{course.title}</h1>
                  <p className="text-[#b8b099] mt-0.5 text-xs font-medium">{course.tagline}</p>
                </div>
              </div>

              <p className="text-[#b8b099] text-base md:text-lg leading-relaxed mb-6">{course.description}</p>



              {/* Duration & Level */}
              <div className="flex gap-4 flex-wrap mb-8">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/5"
                  style={{ background: 'rgba(15, 14, 11, 0.8)' }}>
                  <Clock size={16} style={{ color: accentColor }} />
                  <span className="text-white text-sm font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/5"
                  style={{ background: 'rgba(15, 14, 11, 0.8)' }}>
                  <BarChart size={16} style={{ color: accentColor }} />
                  <span className="text-white text-sm font-medium">{course.level}</span>
                </div>
              </div>

              {/* What You'll Learn */}
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Star size={18} style={{ color: accentColor }} />
                What You&apos;ll Learn
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {course.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-sm text-[#b8b099]">
                    <CheckCircle size={15} style={{ color: accentColor }} className="flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Course Image */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl w-full aspect-[16/9] group"
                style={{ boxShadow: '0 20px 45px -10px rgba(0,0,0,0.9)' }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm text-[#b8b099]">
                  <div className="p-2 rounded-lg" style={{ background: `${accentColor}15` }}>
                    <Award size={16} style={{ color: accentColor }} />
                  </div>
                  <span>Industry-Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#b8b099]">
                  <div className="p-2 rounded-lg" style={{ background: `${accentColor}15` }}>
                    <Users size={16} style={{ color: accentColor }} />
                  </div>
                  <span>100% Job Assistance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#b8b099]">
                  <div className="p-2 rounded-lg" style={{ background: `${accentColor}15` }}>
                    <Star size={16} style={{ color: accentColor }} />
                  </div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Enrollment Form */}
            <motion.div
              id="enroll"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:sticky lg:top-28"
            >
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

                {
                  <>
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
                          style={{ '--tw-ring-color': accentColor }}
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
                        onMouseEnter={(e) => { if (!loading) e.target.style.transform = 'translateY(-1px)'; }}
                        onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; }}
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
                        We&apos;ll contact you within 24 hours.
                      </p>
                    </form>
                  </>
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Enrollment Success Popup */}
      <EnrollmentSuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        studentName={submittedName}
        courseName={course?.title}
      />
    </main>
  );
}
