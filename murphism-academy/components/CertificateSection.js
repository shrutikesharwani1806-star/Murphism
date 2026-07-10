'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, Palette, Code, Video, Boxes, Tv, Cpu, ShieldCheck } from 'lucide-react';

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

const getCertIcon = (slug) => {
  switch (slug) {
    case 'graphic-design': return Palette;
    case 'website-development': return Code;
    case 'video-editing-vfx': return Video;
    case '3d-modelling': return Boxes;
    case 'vfx': return Tv;
    case 'ai-courses': return Cpu;
    default: return Award;
  }
};

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
      style={{ background: 'rgba(5,5,8,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,162,39,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-6">
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
            className="text-2xl md:text-4xl font-bold tracking-normal text-[#f0ece0] mx-auto"
            style={{ lineHeight: '1.25' }}
          >
            You Graduate With
            <br />
            <span className="text-gold">A Certificate. Always.</span>
          </h2>
          <p className="text-[#b8b099] text-xs md:text-sm max-w-xl mx-auto leading-relaxed mt-6">
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
          className="w-full overflow-x-auto flex px-6 py-16 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ gap: '24px' }}
        >
          {containerCerts.map((cert, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            // Tilted scattered deck values
            const rot = [-3.5, 2, -2.5, 3, -1.5, 2.5][index % 6];
            const transY = [12, -8, 8, -12, 10, -6][index % 6];
            const baseZIndex = 10 + (index % 5);

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
                className="w-[290px] md:w-[320px] h-[350px] md:h-[380px] flex-shrink-0 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-out cursor-pointer block"
                style={{
                  background: 'linear-gradient(165deg, #0d0c0a 0%, #050505 100%)',
                  border: isHovered 
                    ? '1px solid rgba(201,162,39,0.45)' 
                    : '1px solid rgba(201,162,39,0.14)',
                  boxShadow: isHovered
                    ? '0 25px 50px rgba(201,162,39,0.08), 0 20px 40px rgba(0,0,0,0.9)'
                    : '0 15px 35px rgba(0,0,0,0.6)',
                  opacity: isAnyHovered && !isHovered ? 0.3 : 1,
                  filter: isAnyHovered && !isHovered ? 'blur(4px)' : 'blur(0px)',
                  transform: isHovered 
                    ? 'translateY(-24px) rotate(0deg) scale(1.06)' 
                    : `translateY(${transY}px) rotate(${rot}deg) scale(1)`,
                  zIndex: isHovered ? 30 : baseZIndex,
                }}
              >
                {/* Ambient Radial glow behind icon area */}
                <div 
                  className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-[40px] pointer-events-none transition-opacity duration-500" 
                  style={{
                    background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)',
                    opacity: isHovered ? 1 : 0.5
                  }}
                />

                {/* Top Row */}
                <div className="flex items-start justify-between z-10">
                  <div>
                    <span className="text-[9px] font-black tracking-[0.18em] uppercase text-[#c9a227] block mb-0.5 font-mono">
                      {cert.type}
                    </span>
                    <span className="text-[8px] text-[#8c8476] tracking-widest font-mono uppercase">
                      MURPHISM ACADEMY
                    </span>
                  </div>
                  
                  {/* Icon Container */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                    style={{ 
                      background: 'rgba(201,162,39,0.05)', 
                      border: '1px solid rgba(201,162,39,0.15)',
                      boxShadow: isHovered ? '0 0 15px rgba(201,162,39,0.2)' : 'none'
                    }}
                  >
                    {(() => {
                      const IconComponent = getCertIcon(cert.slug);
                      return <IconComponent size={18} className="text-[#c9a227]" />;
                    })()}
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex-1 flex flex-col justify-center z-10 my-2">
                  <span 
                    className="text-[9px] font-bold tracking-widest uppercase mb-1.5 block font-mono"
                    style={{ color: 'rgba(201,162,39,0.6)' }}
                  >
                    {cert.field}
                  </span>
                  
                  <p
                    className="text-[#f0ece0] font-semibold leading-snug mb-2 font-sans tracking-tight"
                    style={{ fontSize: '15px', fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {cert.title}
                  </p>
                  
                  <p className="text-[#b8b099] leading-relaxed text-xs font-sans line-clamp-3">
                    {cert.desc}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col gap-2.5 pt-3 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={11} className="text-[#c9a227]" />
                      <span className="text-[8px] font-bold tracking-widest uppercase text-[#c9a227] font-mono">
                        Verified Credential
                      </span>
                    </div>
                    
                    <span
                      className="text-[8px] font-bold px-2.5 py-1 rounded-sm font-mono"
                      style={{
                        color: '#c9a227',
                        background: 'rgba(201,162,39,0.06)',
                        border: '1px solid rgba(201,162,39,0.12)',
                      }}
                    >
                      ⏱ {cert.duration}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, starIdx) => (
                        <span key={starIdx} className="text-[#c9a227]" style={{ fontSize: '9px' }}>★</span>
                      ))}
                    </div>
                    <span className="text-[7.5px] font-mono text-[#6b6459] tracking-widest uppercase">
                      ID: MRPH-{1000 + (index % certs.length)}
                    </span>
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
          <Link href="/#courses" className="btn-gold">
            <span>Enroll &amp; Get Certified</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
