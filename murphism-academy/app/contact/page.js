'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader, MessageSquare, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    { icon: <Mail className="w-[2.2vh] h-[2.2vh]" />, label: 'Email Us', value: 'info@murphism.com', href: 'mailto:info@murphism.com', color: '#ff0000' },
    { icon: <MapPin className="w-[2.2vh] h-[2.2vh]" />, label: 'Visit Us', value: 'India — Murphism Academy', href: '#', color: '#06b6d4' },
    { icon: <Clock className="w-[2.2vh] h-[2.2vh]" />, label: 'Response Time', value: 'Within 24 hours', href: null, color: '#10b981' },
  ];

  return (
    <main className="bg-[#050508] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[18vh] pb-[10vh] px-[4vw] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[24vw] h-[24vw] rounded-full bg-[#7c3aed]/8 blur-[12vh] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[22vw] h-[22vw] rounded-full bg-[#c9a227]/5 blur-[10vh] pointer-events-none" />

        <div className="relative max-w-[85vw] mx-auto px-[3vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-[6vh]"
          >
            <span className="text-[1.3vh] font-semibold tracking-widest text-[#c9a227] uppercase mb-[1.8vh] block">Get in Touch</span>
            <h1 className="text-[5vw] md:text-[5.5vh] font-extrabold uppercase leading-none text-white mb-[1.8vh]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Let&apos;s Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">Journey</span>
            </h1>
            <p className="text-[#9999bb] text-[2.2vw] md:text-[1.8vh] max-w-[50vw] mx-auto">
              Have a question, want to enroll, or just want to say hello? Our team is here for you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-[4vh]">
            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col gap-[2.2vh] mb-[4vh]">
                {contactDetails.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center gap-[2vw] md:gap-[1vw] rounded-[2vh] p-[2.2vh] border border-white/5 hover:border-[rgba(201,162,39,0.15)] bg-white/[0.02] transition-colors"
                  >
                    <div className="w-[5.5vh] h-[5.5vh] rounded-[1.2vh] flex items-center justify-center flex-shrink-0" style={{ background: `${d.color}15`, color: d.color }}>
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-[#9999bb] text-[1.2vh] uppercase tracking-wider mb-[0.25vh]">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="text-white font-bold text-[2.2vw] md:text-[1.6vh] hover:text-[#c9a227] transition-colors">{d.value}</a>
                      ) : (
                        <p className="text-white font-bold text-[2.2vw] md:text-[1.6vh]">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="rounded-[2.5vh] p-[3.5vh] border border-[rgba(201,162,39,0.12)]" style={{ background: 'rgba(15, 14, 18, 0.65)' }}>
                <MessageSquare className="w-[3.5vh] h-[3.5vh] text-[#c9a227] mb-[2vh]" />
                <p className="text-white text-[2.2vw] md:text-[2vh] font-semibold leading-relaxed mb-[1.5vh] font-serif italic">
                  &ldquo;We Morph You to Become Industry Ready Creators/Innovators&rdquo;
                </p>
                <p className="text-[#9999bb] text-[1.3vh] font-mono tracking-widest uppercase">— The Murphism Promise</p>
                <div className="mt-[2vh] pt-[2vh] border-t border-white/5 flex flex-wrap gap-[1vw] md:gap-[0.5vh]">
                  {['100% Job Assistance', 'Foreign Exposure', 'AI Courses', 'Diploma Program'].map((b) => (
                    <span key={b} className="text-[1.2vh] px-[1.2vw] py-[0.5vh] rounded-full bg-[rgba(201,162,39,0.08)] text-[#c9a227] border border-[rgba(201,162,39,0.12)] font-mono">
                      ✦ {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[2.5vh] p-[3.5vh] border border-white/5"
              style={{ background: 'rgba(15, 14, 18, 0.65)' }}
            >
              {success ? (
                <div className="text-center py-[5vh]">
                  <div className="text-[6vh] mb-[2vh]">✉️</div>
                  <h3 className="text-white font-bold text-[2.4vh] mb-[1.5vh]">Message Received!</h3>
                  <p className="text-[#9999bb] text-[1.6vh] mb-[3vh]">We&apos;ll get back to you within 24 hours. Thank you for reaching out to Murphism!</p>
                  <button onClick={() => setSuccess(false)} className="px-[3vw] py-[1.2vh] rounded-[1vh] border border-[#c9a227] text-[#c9a227] text-[1.5vh] uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#c9a227]/10">Send Another Message</button>
                </div>
              ) : (
                <>
                  <h2 className="text-white font-bold text-[2.4vh] mb-[1vh]">Send a Message</h2>
                  <p className="text-[#9999bb] text-[1.5vh] mb-[3vh]">We respond within 24 hours, Monday–Saturday.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-[2.2vh]">
                    <div className="grid sm:grid-cols-2 gap-[2vh]">
                      <div>
                        <label className="text-[#9999bb] text-[1.3vh] font-semibold mb-[0.6vh] block uppercase tracking-wider">Your Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="w-full px-[1.5vw] py-[1.2vh] rounded-[1.2vh] bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgba(201,162,39,0.4)] transition-colors text-[1.5vh]"
                        />
                      </div>
                      <div>
                        <label className="text-[#9999bb] text-[1.3vh] font-semibold mb-[0.6vh] block uppercase tracking-wider">Mobile</label>
                        <input
                          name="mobile"
                          type="tel"
                          value={form.mobile}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-[1.5vw] py-[1.2vh] rounded-[1.2vh] bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgba(201,162,39,0.4)] transition-colors text-[1.5vh]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[#9999bb] text-[1.3vh] font-semibold mb-[0.6vh] block uppercase tracking-wider">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-[1.5vw] py-[1.2vh] rounded-[1.2vh] bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgba(201,162,39,0.4)] transition-colors text-[1.5vh]"
                      />
                    </div>

                    <div>
                      <label className="text-[#9999bb] text-[1.3vh] font-semibold mb-[0.6vh] block uppercase tracking-wider">Subject</label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Course enquiry, admission, etc."
                        className="w-full px-[1.5vw] py-[1.2vh] rounded-[1.2vh] bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgba(201,162,39,0.4)] transition-colors text-[1.5vh]"
                      />
                    </div>

                    <div>
                      <label className="text-[#9999bb] text-[1.3vh] font-semibold mb-[0.6vh] block uppercase tracking-wider">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-[1.5vw] py-[1.2vh] rounded-[1.2vh] bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgba(201,162,39,0.4)] transition-colors text-[1.5vh] resize-none"
                      />
                    </div>

                    {error && <p className="text-red-400 text-[1.4vh] bg-red-400/10 rounded-[1vh] px-[1.5vw] py-[1.2vh]">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-[1.5vh] rounded-[1.2vh] text-[1.6vh] font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-[1vh] disabled:opacity-60 bg-gradient-to-r from-[#c9a227] to-[#e8bf5a] text-[#050508] hover:opacity-90"
                    >
                      {loading ? (
                        <><Loader className="w-[1.8vh] h-[1.8vh] animate-spin" /><span>Sending...</span></>
                      ) : (
                        <><Send className="w-[1.8vh] h-[1.8vh]" /><span>Send Message</span></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
