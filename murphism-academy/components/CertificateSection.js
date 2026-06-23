'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const certs = [
  {
    title: 'Graphic Design Professional',
    type: 'Certificate of Completion',
    duration: '4 Months',
    emoji: '🎨',
    field: 'Brand & Visual Identity',
    desc: 'Awarded to students who master Adobe Photoshop, Illustrator, and brand identity design with a production-grade portfolio.',
  },
  {
    title: 'Full Stack Developer',
    type: 'Certificate of Completion',
    duration: '6 Months',
    emoji: '💻',
    field: 'Web Development',
    desc: 'Awarded on completion of HTML, CSS, React, Node.js, and deployment — with a full-stack capstone project.',
  },
  {
    title: 'Video Production Specialist',
    type: 'Certificate of Completion',
    duration: '3 Months',
    emoji: '🎬',
    field: 'Cinematic Editing & Post Production',
    desc: 'Awarded for proficiency in Premiere Pro, DaVinci Resolve, color grading, and reel/YouTube content creation.',
  },
  {
    title: '3D Animation Artist',
    type: 'Certificate of Completion',
    duration: '5 Months',
    emoji: '🧊',
    field: '3D Modelling & VFX',
    desc: 'Awarded for completing Blender, Maya, character rigging, VFX, and lighting with a full 3D portfolio.',
  },
  {
    title: 'VFX Specialist',
    type: 'Certificate of Completion',
    duration: '4 Months',
    emoji: '🌀',
    field: 'Visual Effects & Compositing',
    desc: 'Awarded for mastery in After Effects, Nuke, compositing, motion tracking, and CGI integration for film and advertising.',
  },
  {
    title: 'AI Tools Practitioner',
    type: 'Certificate of Completion',
    duration: '2 Months',
    emoji: '🤖',
    field: 'Generative AI & Workflows',
    desc: 'Awarded for hands-on mastery of generative AI tools, prompt engineering, and AI-augmented creative workflows.',
  },
];

// Final spread positions mapped to indices 0..6
const SPREAD_X   = [-520, -340, -170, 0, 170, 340, 520];
const SPREAD_ROT = [-12,  -8,   -4,   0, 4,   8,   12 ];
const SPREAD_SCL = [0.72, 0.80, 0.90, 1, 0.90, 0.80, 0.72];
const SPREAD_OPC = [0.40, 0.60, 0.80, 1, 0.80, 0.60, 0.40];
const SPREAD_BLR = ['4px','2px','0px','0px','0px','2px','4px'];

function getWrappedOffset(i, active, total) {
  let diff = i - active;
  while (diff > total / 2) diff -= total;
  while (diff < -total / 2) diff += total;
  return diff;
}

export default function CertificateSection() {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-120px' });
  const [spread, setSpread] = useState(false);
  const [active, setActive] = useState(3); // center card index

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setSpread(true), 500);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  const prev = () => setActive((a) => (a - 1 + certs.length) % certs.length);
  const next = () => setActive((a) => (a + 1) % certs.length);

  const handleCardClick = (i, offset) => {
    if (spread && offset !== 0) {
      setActive(i);
    }
  };

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{ background: '#06080f' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.18), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,162,39,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>
            Every Candidate Certified
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto"
            style={{ lineHeight: '1.25' }}
          >
            You Graduate With
            <br />
            <span className="text-gold">A Certificate. Always.</span>
          </h2>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
          <p className="text-[#b8b099] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            No exams. No stress. Every student who completes a Murphism program receives an
            industry-valued certificate — proof you&apos;re built for the real world.
          </p>
        </motion.div>

        {/* ── DESKTOP: Center-stack → fan left & right ── */}
        <div
          className="hidden md:block relative"
          style={{ height: '380px', marginBottom: '3rem' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {certs.map((cert, i) => {
              const offset = getWrappedOffset(i, active, certs.length);
              const si = offset + 3; // Map to 0..6 for visual parameters
              const isCenter = offset === 0;

              // Stack cascade coordinates for initial stacked deck state
              const deckX = offset * 12;
              const deckRot = offset * 3;
              const deckY = Math.abs(offset) * 4;

              return (
                <motion.div
                  key={cert.title}
                  style={{
                    position: 'absolute',
                    width: '230px',
                    height: '310px',
                    transformOrigin: 'bottom center',
                    zIndex: spread ? (isCenter ? 10 : 6 - Math.abs(offset)) : 5,
                    cursor: spread && !isCenter ? 'pointer' : 'default',
                  }}
                  // Initial deck stack
                  initial={{ x: deckX, rotate: deckRot, scale: 0.9, opacity: 0, y: deckY + 30 }}
                  animate={
                    isInView
                      ? spread
                        ? {
                            x: SPREAD_X[si],
                            rotate: SPREAD_ROT[si],
                            scale: SPREAD_SCL[si],
                            opacity: SPREAD_OPC[si],
                            y: 0,
                            filter: `blur(${SPREAD_BLR[si]})`,
                          }
                        : {
                            x: deckX,
                            rotate: deckRot,
                            scale: 1 - Math.abs(offset) * 0.02,
                            opacity: 0.9,
                            y: deckY,
                            filter: 'blur(0px)',
                          }
                      : { x: deckX, rotate: deckRot, scale: 0.9, opacity: 0, y: deckY + 30 }
                  }
                  transition={{
                    duration: 0.75,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                  onClick={() => handleCardClick(i, offset)}
                  whileHover={spread && !isCenter ? { scale: SPREAD_SCL[si] * 1.06 } : {}}
                >
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col gap-3"
                    style={{
                      background: isCenter
                        ? 'linear-gradient(160deg, #141210 0%, #0f0e0b 100%)'
                        : 'linear-gradient(160deg, #0f0e0b 0%, #0a0908 100%)',
                      border: `1px solid ${isCenter ? 'rgba(201,162,39,0.3)' : 'rgba(201,162,39,0.15)'}`,
                      boxShadow: isCenter
                        ? '0 30px 70px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)'
                        : '0 15px 40px rgba(0,0,0,0.6)',
                    }}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[9px] font-black tracking-[0.2em] uppercase text-[#c9a227] mb-0.5">
                          {cert.type}
                        </p>
                        <p className="text-[9px] text-[#2e2c28] tracking-wider font-mono">
                          MURPHISM ACADEMY
                        </p>
                      </div>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.18)' }}
                      >
                        {cert.emoji}
                      </div>
                    </div>

                    <div className="w-full h-px" style={{ background: 'rgba(201,162,39,0.1)' }} />

                    <div className="flex-1">
                      <p className="text-[9px] font-bold tracking-widest uppercase mb-1.5"
                        style={{ color: 'rgba(201,162,39,0.5)' }}>
                        {cert.field}
                      </p>
                      <h3
                        className="text-[#f0ece0] font-bold leading-snug mb-2"
                        style={{ fontSize: '14px', fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {cert.title}
                      </h3>
                      <p className="text-[#4a4540] leading-relaxed" style={{ fontSize: '11px' }}>
                        {cert.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1">
                        <Award size={10} style={{ color: '#c9a227' }} />
                        <span className="text-[9px] font-bold tracking-widest uppercase text-[#c9a227]">
                          No Exam
                        </span>
                      </div>
                      <span
                        className="text-[9px] font-bold px-2 py-1 rounded-sm"
                        style={{
                          color: '#c9a227',
                          background: 'rgba(201,162,39,0.07)',
                          border: '1px solid rgba(201,162,39,0.13)',
                        }}
                      >
                        ⏱ {cert.duration}
                      </span>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, si2) => (
                        <span key={si2} style={{ color: '#c9a227', fontSize: '10px' }}>★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows — desktop */}
        <div className="hidden md:flex items-center justify-center gap-6 mb-14">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)', color: '#c9a227' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,162,39,0.18)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(201,162,39,0.08)')}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {certs.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? '22px' : '6px',
                  height: '6px',
                  background: i === active ? '#c9a227' : 'rgba(201,162,39,0.2)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)', color: '#c9a227' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,162,39,0.18)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(201,162,39,0.08)')}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ── MOBILE: vertical stagger ── */}
        <div className="flex flex-col gap-4 md:hidden mb-10">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-5"
              style={{
                background: 'linear-gradient(145deg, #0f0e0b 0%, #0a0908 100%)',
                border: '1px solid rgba(201,162,39,0.15)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[9px] font-black tracking-widest uppercase text-[#c9a227]">
                  {cert.field}
                </p>
                <span className="text-lg">{cert.emoji}</span>
              </div>
              <h3 className="text-[#f0ece0] font-bold text-sm mb-1.5">{cert.title}</h3>
              <p className="text-[#4a4540] text-xs leading-relaxed mb-3">{cert.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Award size={10} style={{ color: '#c9a227' }} />
                  <span className="text-[9px] font-bold tracking-widest uppercase text-[#c9a227]">No Exam</span>
                </div>
                <span className="text-[9px] text-[#6b6459]">⏱ {cert.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {['No Exam Needed', 'Issued on Completion', 'LinkedIn Ready'].map((b) => (
            <span
              key={b}
              className="text-xs font-medium tracking-widest uppercase px-5 py-2.5 rounded-sm"
              style={{
                color: '#b8b099',
                border: '1px solid rgba(201,162,39,0.12)',
                background: 'rgba(201,162,39,0.03)',
              }}
            >
              ✦ {b}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/#courses">
            <button className="btn-gold">
              <span>Enroll &amp; Get Certified</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
