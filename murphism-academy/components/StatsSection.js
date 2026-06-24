'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const studentAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop'
];

function TypewriterText({ text, speed = 35, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;
    let timeout;
    let currentIndex = 0;
    
    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [isInView, text, speed, delay]);

  return <span ref={ref}>{displayedText}</span>;
}

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 border-y overflow-hidden"
      style={{
        background: '#050508',
        borderColor: 'rgba(201,162,39,0.08)',
      }}
    >
      {/* Background glow overlay */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(201, 162, 39, 0.04) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Columns (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Top row: 2 Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: YouTube / Socials - Coming from Left */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? -30 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: isMobile ? "0px" : "-10% 0px" }}
                transition={{ type: "spring", stiffness: isMobile ? 120 : 60, damping: 15, duration: isMobile ? 0.45 : 0.8 }}
                className="rounded-3xl border border-[rgba(201,162,39,0.12)] p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[rgba(201,162,39,0.3)] group"
                style={{
                  background: 'rgba(15, 14, 18, 0.65)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex flex-col gap-3">
                  {/* YouTube Icon and Value */}
                  <div className="flex items-center gap-3">
                    <div className="bg-[#ff0000]/10 p-2.5 rounded-xl border border-[#ff0000]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#ff0000]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#e25c3d] tracking-tight">
                      <TypewriterText text="10k" speed={120} delay={isMobile ? 100 : 300} />
                    </span>
                  </div>
                  <h3 className="text-[#f5f5f7] text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono">
                    Murphism Followers
                  </h3>
                </div>
                <p className="text-[#8e8a7d] text-xs leading-relaxed">
                  Be part of a vibrant learning ecosystem.
                </p>
              </motion.div>

              {/* Card 2: Career Learners - Coming from Right */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 30 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: isMobile ? "0px" : "-10% 0px" }}
                transition={{ type: "spring", stiffness: isMobile ? 120 : 60, damping: 15, duration: isMobile ? 0.45 : 0.8, delay: isMobile ? 0 : 0.1 }}
                className="rounded-3xl border border-[rgba(201,162,39,0.12)] p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[rgba(201,162,39,0.3)] group"
                style={{
                  background: 'rgba(15, 14, 18, 0.65)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex flex-col gap-3">
                  {/* Star Icon and Value */}
                  <div className="flex items-center gap-3">
                    <div className="bg-[#c9a227]/10 p-2.5 rounded-xl border border-[#c9a227]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#c9a227] tracking-tight">
                      <TypewriterText text="20k" speed={100} delay={isMobile ? 150 : 500} />
                    </span>
                  </div>
                  <h3 className="text-[#f5f5f7] text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono">
                    Career-Driven Learners
                  </h3>
                </div>
                <p className="text-[#8e8a7d] text-xs leading-relaxed">
                  Join a large and growing community of coders.
                </p>
              </motion.div>
              
            </div>

            {/* Bottom Row: Wide Announcement Card - Coming from Bottom */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 30 : 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: isMobile ? "0px" : "-10% 0px" }}
              transition={{ type: "spring", stiffness: isMobile ? 120 : 50, damping: 15, duration: isMobile ? 0.45 : 0.8, delay: isMobile ? 0 : 0.2 }}
              className="rounded-3xl border border-[rgba(201,162,39,0.12)] p-6 md:p-8 flex flex-col justify-between gap-6 relative overflow-hidden transition-all duration-300 hover:border-[rgba(201,162,39,0.3)]"
              style={{
                background: 'rgba(15, 14, 18, 0.65)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Top Row: UNLOCK [avatars] YOUR */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[#f5f5f7] text-sm md:text-lg font-semibold tracking-wider font-sans">
                  UNLOCK
                </span>
                
                {/* Avatar Stack */}
                <div className="flex -space-x-2 items-center">
                  {studentAvatars.map((url, idx) => (
                    <img 
                      key={idx} 
                      src={url} 
                      alt="Student" 
                      className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] object-cover" 
                    />
                  ))}
                </div>

                <span className="text-[#f5f5f7] text-sm md:text-lg font-semibold tracking-wider font-sans">
                  YOUR
                </span>
              </div>

              {/* Styled Pill Button Container */}
              <div className="flex items-center gap-3">
                {/* Circular pill container with right-pointing arrow */}
                <div className="w-10 h-10 rounded-full border border-[rgba(201,162,39,0.4)] flex items-center justify-center hover:bg-[#c9a227]/10 transition-all duration-300">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>

                {/* Main Action Header with typing animation */}
                <div className="text-[#f5f5f7] text-base sm:text-lg md:text-2xl font-bold tracking-tight leading-tight uppercase font-sans">
                  {isInView ? (
                    <TypewriterText text="FIRST JOB AND INTERNSHIP WITH US!" speed={30} delay={isMobile ? 200 : 600} />
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Tall Card - Coming from Top */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 30 : -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: isMobile ? "0px" : "-10% 0px" }}
            transition={{ type: "spring", stiffness: isMobile ? 120 : 50, damping: 15, duration: isMobile ? 0.45 : 0.8, delay: isMobile ? 0 : 0.3 }}
            className="rounded-3xl border border-[rgba(201,162,39,0.12)] p-6 md:p-8 flex flex-col justify-between min-h-[300px] lg:min-h-full relative overflow-hidden transition-all duration-300 hover:border-[rgba(201,162,39,0.3)] group"
            style={{
              background: 'rgba(15, 14, 18, 0.65)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Blurry, moving background typewriter text */}
            <div className="absolute inset-0 flex flex-col justify-center gap-4 pointer-events-none select-none z-0 px-4 opacity-[0.25]">
              <div className="text-4xl md:text-5xl font-black uppercase text-[#e25c3d] blur-[1px] tracking-widest leading-none truncate whitespace-nowrap">
                {isInView && <TypewriterText text="make it happen" speed={40} delay={isMobile ? 50 : 200} />}
              </div>
              <div className="text-4xl md:text-5xl font-black uppercase text-[#e25c3d] blur-[1px] tracking-widest leading-none truncate whitespace-nowrap pl-4">
                {isInView && <TypewriterText text="make it happen" speed={40} delay={isMobile ? 150 : 500} />}
              </div>
              <div className="text-4xl md:text-5xl font-black uppercase text-[#e25c3d] blur-[1px] tracking-widest leading-none truncate whitespace-nowrap pl-8">
                {isInView && <TypewriterText text="make it happen" speed={40} delay={isMobile ? 250 : 800} />}
              </div>
            </div>

            {/* Card Content (z-10 to sit above background text) */}
            <div className="relative z-10 flex flex-col gap-3">
              <h2 className="text-[#f5f5f7] text-2xl md:text-3xl font-bold tracking-tight leading-none font-sans">
                Start<br />Learning
              </h2>
            </div>

            <div className="relative z-10 mt-auto">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#e25c3d]/40 text-[#e25c3d] text-xs md:text-sm font-bold tracking-wide uppercase bg-[#e25c3d]/5 hover:bg-[#e25c3d]/15 transition-all duration-300">
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
