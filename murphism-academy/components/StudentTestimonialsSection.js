'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Plus, X, Trash2, ShieldCheck, Loader2 } from 'lucide-react';

// ── Static seed videos from /public/reasons (always shown as fallback) ──
const SEED_TESTIMONIALS = [
  {
    _id: 'seed-1',
    name: 'Jitendra',
    course: 'Video Editing',
    label: 'Video Editing',
    videoUrl: '/reasons/Testimonial 1- Jitendra.mp4',
  },
  {
    _id: 'seed-2',
    name: 'Karan',
    course: 'Video Editing',
    label: 'Video Editing',
    videoUrl: '/reasons/Testimonial 1- Karan.mp4',
  },
  {
    _id: 'seed-3',
    name: 'Lucky',
    course: 'Video Editing',
    label: 'Video Editing',
    videoUrl: '/reasons/Testimonial 1- Lucky (1).mp4',
  },
];

// ── Single Video Card ──
function TestimonialCard({ item, index, isAdmin, onDelete }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 80, scale: 0.84 },
        visible: {
          opacity: 1, y: 0, scale: 1,
          transition: { type: 'spring', stiffness: 260, damping: 22 },
        },
      }}
      className="relative flex flex-col rounded-2xl overflow-hidden group"
      style={{
        background: 'linear-gradient(145deg, #0f0e0b, #161410)',
        border: hovered ? '1px solid rgba(201,162,39,0.5)' : '1px solid rgba(201,162,39,0.18)',
        boxShadow: hovered
          ? '0 32px 80px rgba(0,0,0,0.8), 0 0 40px rgba(201,162,39,0.12)'
          : '0 20px 60px rgba(0,0,0,0.6)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'border 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Admin delete button */}
      {isAdmin && (
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(item); }}
          className="absolute top-3 right-3 z-30 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{
            width: '32px', height: '32px',
            background: 'rgba(220,38,38,0.85)',
            border: '1px solid rgba(220,38,38,0.5)',
          }}
          title="Delete testimonial"
        >
          <Trash2 size={13} style={{ color: '#fff' }} />
        </button>
      )}

      {/* Video */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <video
          ref={videoRef}
          src={item.videoUrl}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          playsInline
          preload="metadata"
          muted
          loop
        />

        {/* Dark gradient overlay — lighter on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.25) 55%, rgba(5,5,5,0.08) 100%)',
            opacity: hovered ? 0.6 : 1,
          }}
        />

        {/* Hover play hint */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-400"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: '50px', height: '50px',
              background: 'linear-gradient(135deg, #c9a227, #e8bf5a)',
              boxShadow: '0 6px 24px rgba(201,162,39,0.5)',
            }}
          >
            <Play size={18} style={{ color: '#050505', marginLeft: '3px' }} />
          </div>
        </div>

        {/* "Playing" label on hover */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-400 pointer-events-none"
          style={{
            background: 'rgba(201,162,39,0.18)',
            border: '1px solid rgba(201,162,39,0.35)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(-6px)',
          }}
        >
          {/* Pulsing dot */}
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#c9a227', boxShadow: '0 0 6px #c9a227', animation: 'pulse 1s infinite' }}
          />
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#c9a227]">Playing</span>
        </div>

        {/* Mute toggle — only visible on hover */}
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
          style={{
            width: '32px', height: '32px',
            background: 'rgba(10,9,7,0.8)',
            border: '1px solid rgba(201,162,39,0.3)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          }}
        >
          {isMuted
            ? <VolumeX size={13} style={{ color: '#c9a227' }} />
            : <Volume2 size={13} style={{ color: '#c9a227' }} />
          }
        </button>
      </div>

      {/* Info footer */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[#f0ece0] font-bold text-base leading-tight">{item.name}</p>
            <p className="text-[#b8b099] text-xs mt-0.5">{item.course}</p>
          </div>
          {item.label && (
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{
                background: 'rgba(201,162,39,0.12)',
                border: '1px solid rgba(201,162,39,0.25)',
                color: '#c9a227',
              }}
            >
              {item.label}
            </span>
          )}
        </div>
        {/* Gold bar animates on hover */}
        <div
          className="mt-3 h-px w-full transition-all duration-500"
          style={{
            background: hovered
              ? 'linear-gradient(90deg, #c9a227, rgba(201,162,39,0.2))'
              : 'linear-gradient(90deg, rgba(201,162,39,0.4), transparent)',
          }}
        />
      </div>
    </motion.div>
  );
}

// ── Add Testimonial Modal ──
function AddTestimonialModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ name: '', course: '', videoUrl: '', label: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.course.trim() || !form.videoUrl.trim()) {
      setError('Name, Course and Video URL are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        onAdd(data.testimonial);
        onClose();
      } else {
        setError(data.error || 'Failed to add testimonial.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl p-8"
        style={{
          background: 'linear-gradient(145deg, #0f0e0b, #161410)',
          border: '1px solid rgba(201,162,39,0.25)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.9), 0 0 50px rgba(201,162,39,0.06)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <X size={15} style={{ color: '#b8b099' }} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="flex items-center justify-center rounded-xl"
            style={{ width: '40px', height: '40px', background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.25)' }}
          >
            <ShieldCheck size={18} style={{ color: '#c9a227' }} />
          </div>
          <div>
            <p className="text-[#f0ece0] font-bold text-lg leading-none">Add Testimonial</p>
            <p className="text-[#6b6459] text-xs mt-0.5">Admin only</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-[#c9a227] mb-1.5 block">Student Name *</label>
            <input
              type="text"
              placeholder="e.g. Riya Sharma"
              value={form.name}
              onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl text-sm text-[#f0ece0] placeholder-[#6b6459] focus:outline-none transition-all"
              style={{ background: '#0a0907', border: '1px solid rgba(201,162,39,0.18)' }}
            />
          </div>

          {/* Course */}
          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-[#c9a227] mb-1.5 block">Course *</label>
            <input
              type="text"
              placeholder="e.g. Graphic Design"
              value={form.course}
              onChange={(e) => setForm(f => ({ ...f, course: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl text-sm text-[#f0ece0] placeholder-[#6b6459] focus:outline-none transition-all"
              style={{ background: '#0a0907', border: '1px solid rgba(201,162,39,0.18)' }}
            />
          </div>

          {/* Label */}
          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-[#c9a227] mb-1.5 block">Badge Label <span className="text-[#6b6459] normal-case tracking-normal">(optional)</span></label>
            <input
              type="text"
              placeholder="e.g. Video Editing"
              value={form.label}
              onChange={(e) => setForm(f => ({ ...f, label: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl text-sm text-[#f0ece0] placeholder-[#6b6459] focus:outline-none transition-all"
              style={{ background: '#0a0907', border: '1px solid rgba(201,162,39,0.18)' }}
            />
          </div>

          {/* Video URL */}
          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-[#c9a227] mb-1.5 block">Video Path *</label>
            <input
              type="text"
              placeholder="e.g. /reasons/Testimonial-Name.mp4"
              value={form.videoUrl}
              onChange={(e) => setForm(f => ({ ...f, videoUrl: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl text-sm text-[#f0ece0] placeholder-[#6b6459] focus:outline-none transition-all"
              style={{ background: '#0a0907', border: '1px solid rgba(201,162,39,0.18)' }}
            />
            <p className="text-[#6b6459] text-[11px] mt-1.5 leading-relaxed">
              Upload the video to <code className="text-[#c9a227]">public/reasons/</code> and paste the path here.
            </p>
          </div>

          {error && (
            <p className="text-red-400 text-xs px-3 py-2 rounded-lg" style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, #c9a227, #e8bf5a)',
              color: '#050505',
              boxShadow: '0 6px 24px rgba(201,162,39,0.3)',
            }}
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
            {saving ? 'Adding…' : 'Add Testimonial'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

// ── Delete Confirm Modal ──
function DeleteConfirmModal({ item, onClose, onConfirm }) {
  const [deleting, setDeleting] = useState(false);
  const handleConfirm = async () => {
    setDeleting(true);
    await onConfirm(item);
    setDeleting(false);
    onClose();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl p-8 text-center"
        style={{
          background: 'linear-gradient(145deg, #0f0e0b, #161410)',
          border: '1px solid rgba(201,162,39,0.2)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
        }}
      >
        <div
          className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.3)' }}
        >
          <Trash2 size={22} style={{ color: '#f87171' }} />
        </div>
        <h3 className="text-[#f0ece0] font-bold text-lg mb-2">Remove Testimonial?</h3>
        <p className="text-[#b8b099] text-sm mb-6 leading-relaxed">
          Delete <span className="text-[#e8bf5a] font-semibold">{item?.name}</span>&#39;s testimonial? This cannot be undone.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#b8b099' }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={deleting}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all disabled:opacity-60"
            style={{ background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.4)', color: '#f87171' }}
          >
            {deleting ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
            {deleting ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Marquee Row (used when > 3 testimonials) ──
function MarqueeRow({ items, isAdmin, onDelete, reverse = false }) {
  const [paused, setPaused] = useState(false);
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const duration = items.length * 7; // ~7s per card

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #050505, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #050505, transparent)' }} />

      <div
        className="flex gap-5"
        style={{
          width: 'max-content',
          animation: `testimonial-scroll${reverse ? '-rev' : ''} ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {doubled.map((item, i) => (
          <div key={`${item._id}-${i}`} style={{ width: '260px', flexShrink: 0 }}>
            <TestimonialCard
              item={item}
              index={0}
              isAdmin={isAdmin}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Section ──
export default function StudentTestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const [testimonials, setTestimonials] = useState(SEED_TESTIMONIALS);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Check admin status & fetch DB testimonials
  useEffect(() => {
    // Check if admin
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(data => {
        if (data.success && data.user?.isAdmin) setIsAdmin(true);
      })
      .catch(() => {});

    // Fetch DB testimonials and merge with seeds
    fetch('/api/testimonials')
      .then(r => r.json())
      .then(data => {
        if (data.success && data.testimonials?.length > 0) {
          setTestimonials([...SEED_TESTIMONIALS, ...data.testimonials]);
        }
      })
      .catch(() => {});
  }, []);

  const handleAdd = (newItem) => {
    setTestimonials(prev => [...prev, newItem]);
  };

  const handleDelete = async (item) => {
    // Can't delete seed videos from DB (they have no _id from db)
    if (item._id.startsWith('seed-')) {
      return;
    }
    await fetch(`/api/testimonials?id=${item._id}`, { method: 'DELETE' });
    setTestimonials(prev => prev.filter(t => t._id !== item._id));
  };

  return (
    <section
      ref={sectionRef}
      id="student-testimonials"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgba(5,5,5,0.55)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)' }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,162,39,0.045) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header — centered, admin button absolutely top-right */}
        <div className="relative mb-12">
          {/* Admin Add button — absolute top-right */}
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-0 right-0"
            >
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #c9a227, #e8bf5a)',
                  color: '#050505',
                  boxShadow: '0 4px 16px rgba(201,162,39,0.3)',
                }}
              >
                <ShieldCheck size={14} />
                <span className="hidden sm:inline">Admin</span>
                <Plus size={14} />
                Add Testimonial
              </button>
            </motion.div>
          )}

          {/* Centered heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Student Voices</div>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mb-4"
              style={{ lineHeight: '1.2', fontFamily: 'var(--font-clash-display), sans-serif' }}
            >
              Real Stories,
              <br />
              <span className="text-gold">Real Results</span>
            </h2>
            <p className="text-[#b8b099] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Hear directly from our students about how Murphism transformed their creative journey.
            </p>
          </motion.div>
        </div>

        {/* ── GRID layout (≤ 3 videos) ── */}
        {testimonials.length <= 3 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {testimonials.map((item, i) => (
              <TestimonialCard
                key={item._id}
                item={item}
                index={i}
                isAdmin={isAdmin}
                onDelete={(t) => setDeleteTarget(t)}
              />
            ))}
          </motion.div>
        ) : (
          /* ── MARQUEE layout (> 3 videos) ── */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Row 1 — left to right scroll */}
            <MarqueeRow
              items={testimonials}
              isAdmin={isAdmin}
              onDelete={(t) => setDeleteTarget(t)}
            />
            {/* Row 2 — reverse, only shown if 6+ videos */}
            {testimonials.length >= 6 && (
              <MarqueeRow
                items={[...testimonials].reverse()}
                isAdmin={isAdmin}
                onDelete={(t) => setDeleteTarget(t)}
                reverse
              />
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)' }}
      />

      {/* Modals */}
      <AnimatePresence>
        {showAddModal && (
          <AddTestimonialModal
            onClose={() => setShowAddModal(false)}
            onAdd={handleAdd}
          />
        )}
        {deleteTarget && (
          <DeleteConfirmModal
            item={deleteTarget}
            onClose={() => setDeleteTarget(null)}
            onConfirm={handleDelete}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
