'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';

const certs = [
  {
    title: 'Graphic Design Professional',
    type: 'Certificate of Completion',
    duration: '4 Months',
    emoji: '🎨',
    field: 'Brand & Visual Identity',
    desc: 'Awarded to students who master Adobe Photoshop, Illustrator, and brand identity design with a production-grade portfolio.',
    slug: 'graphic-design',
  },
  {
    title: 'Full Stack Developer',
    type: 'Certificate of Completion',
    duration: '6 Months',
    emoji: '💻',
    field: 'Web Development',
    desc: 'Awarded on completion of HTML, CSS, React, Node.js, and deployment — with a full-stack capstone project.',
    slug: 'website-development',
  },
  {
    title: 'Video Production Specialist',
    type: 'Certificate of Completion',
    duration: '3 Months',
    emoji: '🎬',
    field: 'Cinematic Editing & Post Production',
    desc: 'Awarded for proficiency in Premiere Pro, DaVinci Resolve, color grading, and reel/YouTube content creation.',
    slug: 'video-editing-vfx',
  },
  {
    title: '3D Animation Artist',
    type: 'Certificate of Completion',
    duration: '5 Months',
    emoji: '🧊',
    field: '3D Modelling & VFX',
    desc: 'Awarded for completing Blender, Maya, character rigging, VFX, and lighting with a full 3D portfolio.',
    slug: '3d-modelling',
  },
  {
    title: 'VFX Specialist',
    type: 'Certificate of Completion',
    duration: '4 Months',
    emoji: '🌀',
    field: 'Visual Effects & Compositing',
    desc: 'Awarded for mastery in After Effects, Nuke, compositing, motion tracking, and CGI integration for film and advertising.',
    slug: 'vfx',
  },
  {
    title: 'AI Tools Practitioner',
    type: 'Certificate of Completion',
    duration: '2 Months',
    emoji: '🤖',
    field: 'Generative AI & Workflows',
    desc: 'Awarded for hands-on mastery of generative AI tools, prompt engineering, and AI-augmented creative workflows.',
    slug: 'ai-courses',
  },
];

export default function CertificateSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  
  // Drag states
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Repeat the list 3 times to ensure seamless infinite looping
  const containerCerts = [...certs, ...certs, ...certs];

  // Set initial scroll position to middle (1/3 of the scrollWidth) on mount
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const timer = setTimeout(() => {
        container.scrollLeft = container.scrollWidth / 3;
      }, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  // Smooth automatic scrolling loop
  useEffect(() => {
    let animationFrameId;
    const scrollSpeed = 0.8; // Smooth automatic scroll speed

    const scroll = () => {
      const container = containerRef.current;
      if (container && hoveredIndex === null && !isMouseDown) {
        container.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredIndex, isMouseDown]);

  // Wrap around scroll handler for infinite loop (covers both auto-scroll, mouse drag, touch/trackpad)
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const oneThird = container.scrollWidth / 3;
    if (container.scrollLeft >= oneThird * 2) {
      container.scrollLeft -= oneThird;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += oneThird;
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseLeaveContainer = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMoveContainer = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section
      id="certificates"
      className="section-pad relative overflow-hidden"
      style={{ background: '#050508' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.18), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,162,39,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
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
          <p className="text-[#b8b099] text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            No traditional exams. No pressure. Every student who completes a Murphism program receives an
            industry-recognized certificate of accomplishment — proof you&apos;re built for the creative industry.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Track (Left to Right / Interactive Drag & Scroll) */}
      <div className="w-full overflow-hidden relative py-6 select-none">
        {/* Style block for scrollbar hiding */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Fade overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#050508] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#050508] to-transparent z-20 pointer-events-none" />

        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeaveContainer}
          onMouseMove={handleMouseMoveContainer}
          className="w-full overflow-x-auto flex gap-6 px-3 py-4 no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {containerCerts.map((cert, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <Link
                href={`/courses/${cert.slug}`}
                key={`${cert.title}-${index}`}
                onClick={(e) => {
                  if (hasDragged) {
                    e.preventDefault();
                  }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-[280px] md:w-[310px] h-[340px] md:h-[370px] flex-shrink-0 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ease-out cursor-pointer block"
                style={{
                  background: 'linear-gradient(160deg, #0f0e0b 0%, #050505 100%)',
                  border: isHovered 
                    ? '1px solid rgba(201,162,39,0.5)' 
                    : '1px solid rgba(201,162,39,0.15)',
                  boxShadow: isHovered
                    ? '0 20px 45px rgba(201,162,39,0.15), 0 15px 35px rgba(0,0,0,0.8)'
                    : '0 15px 35px rgba(0,0,0,0.6)',
                  opacity: isAnyHovered && !isHovered ? 0.35 : 1,
                  filter: isAnyHovered && !isHovered ? 'blur(3px)' : 'blur(0px)',
                  transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  zIndex: isHovered ? 30 : 10,
                }}
              >
                {/* Cyberpunk accent corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#c9a227]/30" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#c9a227]/30" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#c9a227]/30" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#c9a227]/30" />

                {/* Top row */}
                <div className="flex items-start justify-between z-10">
                  <div>
                    <p className="text-[8px] font-black tracking-[0.2em] uppercase text-[#c9a227] mb-0.5">
                      {cert.type}
                    </p>
                    <p className="text-[8px] text-[#5c5446] tracking-wider font-mono">
                      MURPHISM ACADEMY
                    </p>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.15)' }}
                  >
                    {cert.emoji}
                  </div>
                </div>

                <div className="w-full h-px my-2" style={{ background: 'rgba(201,162,39,0.08)' }} />

                {/* Body */}
                <div className="flex-1 flex flex-col justify-center z-10">
                  <p className="text-[8px] font-bold tracking-widest uppercase mb-1"
                    style={{ color: 'rgba(201,162,39,0.5)' }}>
                    {cert.field}
                  </p>
                  <h3
                    className="text-[#f0ece0] font-bold leading-snug mb-2 text-sm md:text-base font-sans"
                  >
                    {cert.title}
                  </h3>
                  <p className="text-[#8c8476] leading-relaxed text-[11px] font-sans">
                    {cert.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-2 pt-3 border-t border-white/5 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Award size={10} style={{ color: '#c9a227' }} />
                      <span className="text-[8px] font-bold tracking-widest uppercase text-[#c9a227]">
                        Verified Credential
                      </span>
                    </div>
                    <span
                      className="text-[8px] font-bold px-2 py-0.5 rounded-sm"
                      style={{
                        color: '#c9a227',
                        background: 'rgba(201,162,39,0.05)',
                        border: '1px solid rgba(201,162,39,0.1)',
                      }}
                    >
                      ⏱ {cert.duration}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si2) => (
                        <span key={si2} style={{ color: '#c9a227', fontSize: '9px' }}>★</span>
                      ))}
                    </div>
                    <span className="text-[7px] font-mono text-[#5c5446] tracking-widest uppercase">ID: MRPH-{1000 + (index % certs.length)}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-12">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          {['No Exam Needed', 'Issued on Completion', 'LinkedIn Ready'].map((b) => (
            <span
              key={b}
              className="text-[9px] md:text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm"
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
