'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import EnrollmentSuccessPopup from './EnrollmentSuccessPopup';

const COMBO_COURSES = [
  { id: 'gd', name: 'Graphic Design', emoji: '🎨', duration: '6 Months' },
  { id: 'wd', name: 'Website Development', emoji: '💻', duration: '6 Months' },
  { id: 've', name: 'Video Editing & VFX', emoji: '🎬', duration: '6 Months' },
  { id: 'td', name: '3D Design & Animation', emoji: '🧊', duration: '6 Months' },
  { id: 'vfx', name: 'VFX', emoji: '🌀', duration: '1 Month' },
  { id: 'ai', name: 'AI Courses', emoji: '🤖', duration: '2 Months' },
  { id: 'sp', name: 'Specialization', emoji: '🌟', duration: '6 Months' },
];

export default function ComboBuilderSection({ hideHeader = false }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const toggleCourse = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(x => x !== id));
    } else {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const selectedCourses = COMBO_COURSES.filter(c => selectedIds.includes(c.id));

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedIds.length === 0) {
      setError('Please select at least one course.');
      return;
    }
    setLoading(true);
    setError('');

    const comboCourseName = selectedCourses.map(c => c.name).join(' + ');

    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          course: `Combo Path: ${comboCourseName}`,
          message: `Selected Path Options: ${comboCourseName}.`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setShowPopup(true);
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const mainContent = (
    <>
      {!hideHeader && (
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Combo Builder</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto max-w-3xl" style={{ lineHeight: '1.25' }}>
            Build Your Custom Career Bundle
          </h2>
          <p className="text-[#b8b099] text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Select two or more courses to unlock special bundle discounts and accelerate your creative trajectory.
          </p>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
        </div>
      )}

      {/* Builder Layout */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Course Selection Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {COMBO_COURSES.map((course) => {
              const isSelected = selectedIds.includes(course.id);
              return (
                <div
                  key={course.id}
                  onClick={() => toggleCourse(course.id)}
                  className="rounded-2xl p-5 cursor-pointer transition-all duration-300 relative overflow-hidden select-none"
                  style={{
                    background: isSelected ? 'rgba(201,162,39,0.05)' : 'rgba(255,255,255,0.02)',
                    border: isSelected ? '1px solid #c9a227' : '1px solid rgba(255,255,255,0.06)',
                    boxShadow: isSelected ? '0 10px 25px rgba(201,162,39,0.1)' : 'none',
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-3xl">{course.emoji}</span>
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isSelected ? '#c9a227' : 'transparent',
                        border: isSelected ? '1px solid #c9a227' : '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {isSelected && <Check size={12} className="text-black stroke-[3]" />}
                    </div>
                  </div>

                  <h4 className="text-white text-base font-bold mb-1 tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {course.name}
                  </h4>
                  <p className="text-[#6b6459] text-xs font-semibold uppercase tracking-wider mb-4">
                    Duration: {course.duration}
                  </p>


                </div>
              );
            })}
          </div>

          {/* Right: Checkout Summary Form */}
          <div className="lg:col-span-5">
            <div
              className="rounded-3xl p-6 md:p-8 sticky top-28"
              style={{
                background: 'linear-gradient(145deg, #0a0908 0%, #050505 100%)',
                border: '1px solid rgba(201,162,39,0.12)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <ShoppingBag size={18} className="text-[#c9a227]" />
                <h3 className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Bundle Summary
                </h3>
              </div>

              {selectedCourses.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-white/5 rounded-2xl mb-6">
                  <p className="text-[#6b6459] text-sm mb-2">No courses selected yet</p>
                  <p className="text-[10px] text-[#6b6459]/70 uppercase tracking-widest">Select courses from the left to build your path</p>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {/* Selected items list */}
                  <div className="max-h-[160px] overflow-y-auto pr-1 space-y-2.5 custom-scrollbar">
                    {selectedCourses.map((c) => (
                      <div key={c.id} className="flex justify-between items-center text-xs text-[#f0ece0] bg-white/3 py-2 px-3 rounded-lg">
                        <span>{c.emoji} {c.name}</span>
                        <span className="text-[#c9a227] font-semibold">{c.duration}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-xs text-[#b8b099] leading-relaxed">
                      You have selected <span className="text-white font-bold">{selectedCourses.length} programs</span>. Submit your contact details below to design your custom multidisciplinary creative career path.
                    </p>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459] mb-1.5">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-xl text-xs text-white placeholder:text-[#2e2c28] focus:outline-none transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,162,39,0.1)' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459] mb-1.5">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl text-xs text-white placeholder:text-[#2e2c28] focus:outline-none transition-colors"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,162,39,0.1)' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459] mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      name="mobile"
                      type="tel"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                      placeholder="XXXXX XXXXX"
                      className="w-full px-4 py-2.5 rounded-xl text-xs text-white placeholder:text-[#2e2c28] focus:outline-none transition-colors"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,162,39,0.1)' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                    />
                  </div>
                </div>

                {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

                <button
                  type="submit"
                  disabled={loading || selectedIds.length === 0}
                  className="w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                    color: '#050508',
                    boxShadow: selectedIds.length > 0 ? '0 10px 25px rgba(201,162,39,0.2)' : 'none',
                  }}
                >
                  {loading ? (
                    <>
                      <Loader size={14} className="animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Secure Bundle Seats</span>
                      <ChevronRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
    </>
  );

  if (hideHeader) {
    return (
      <div className="w-full relative">
        {mainContent}
        <EnrollmentSuccessPopup
          isOpen={showPopup}
          onClose={() => {
            setShowPopup(false);
            setForm({ name: '', email: '', mobile: '' });
            setSelectedIds([]);
          }}
          studentName={form.name}
          courseName={selectedCourses.map(c => c.name).join(', ')}
        />
      </div>
    );
  }

  return (
    <section id="combo-builder" className="section-pad relative overflow-hidden" style={{ background: '#050505' }}>
      {/* Glow Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[220px] pointer-events-none"
        style={{ background: 'rgba(201,162,39,0.02)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {mainContent}
      </div>

      {/* Success Popup */}
      <EnrollmentSuccessPopup
        isOpen={showPopup}
        onClose={() => {
          setShowPopup(false);
          setForm({ name: '', email: '', mobile: '' });
          setSelectedIds([]);
        }}
        studentName={form.name}
        courseName={selectedCourses.map(c => c.name).join(', ')}
      />
    </section>
  );
}
