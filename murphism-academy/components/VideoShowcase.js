'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Brand Identity Project',  student: 'Arjun M.',  course: 'Graphic Design',     emoji: '🎨' },
  { title: 'E-Commerce Website',      student: 'Priya S.',  course: 'Web Dev',             emoji: '💻' },
  { title: 'Product Animation',       student: 'Zaid K.',   course: '3D Modelling',        emoji: '🧊' },
  { title: 'Motion Graphics Reel',     student: 'Neha R.',   course: 'Video Editing',       emoji: '✨' },
  { title: 'Cinematic Brand Reel',    student: 'Rahul T.',  course: 'Video Editing',       emoji: '🎬' },
  { title: 'AI Generated Portfolio',  student: 'Simran D.', course: 'AI Courses',          emoji: '🤖' },
  { title: 'Logo Animation',          student: 'Dev P.',    course: 'Motion Design',       emoji: '✨' },
  { title: 'VFX Breakdown',           student: 'Kabir M.',  course: '3D Modelling',        emoji: '🎞️' },
];

function WorkCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 overflow-hidden cursor-pointer transition-all duration-400"
      style={{
        width: '240px',
        height: '160px',
        background: '#0f0e0b',
        border: '1px solid rgba(201,162,39,0.1)',
        borderRadius: '4px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 flex items-center justify-center text-5xl transition-all duration-500"
        style={{ opacity: hovered ? 0.15 : 0.4, transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
      >
        {item.emoji}
      </div>

      {/* Hover state */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 transition-all duration-400"
        style={{ opacity: hovered ? 1 : 0, background: 'rgba(15,14,11,0.9)' }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
          style={{ background: '#c9a227', color: '#050505' }}
        >
          ▶
        </div>
        <p className="text-[#f0ece0] font-bold text-xs text-center">{item.title}</p>
        <p className="text-[#6b6459] text-[10px]">{item.student} · {item.course}</p>
      </div>

      {/* Default label */}
      <div
        className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-400"
        style={{
          background: 'linear-gradient(to top, rgba(10,9,7,0.95), transparent)',
          opacity: hovered ? 0 : 1,
        }}
      >
        <p className="text-[#f0ece0] font-semibold text-xs">{item.title}</p>
        <p className="text-[#8B6914] text-[10px]">{item.student}</p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  const doubled = [...items, ...items];

  return (
    <section
      id="video-showcase"
      className="section-pad overflow-hidden relative"
      style={{ background: 'rgba(10,9,7,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.12), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="label-tag">Student Work</div>
          <h2 className="heading-xl text-[#f0ece0]">
            Projects by Our
            <br />
            <span className="text-gold">Creators</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-[#b8b099] text-base">
            Hover any card to preview. Real projects. Real results.
          </p>
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a0907, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0a0907, transparent)' }} />
        <div className="flex gap-4 animate-scroll-left">
          {doubled.map((item, i) => <WorkCard key={`a-${i}`} item={item} />)}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a0907, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0a0907, transparent)' }} />
        <div className="flex gap-4 animate-scroll-left-slow">
          {[...doubled].reverse().map((item, i) => <WorkCard key={`b-${i}`} item={item} />)}
        </div>
      </div>
    </section>
  );
}
