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
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: 'rgba(5,5,5,0.45)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Background glow overlay */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(190, 82, 50, 0.08) 0%, rgba(201, 162, 39, 0.03) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-[1300px] mx-auto px-6">
        {/* Bento Grid Wrapper */}
        <div className="border border-white/5 rounded-[2.5rem] p-6 md:p-8 bg-[#0a0a0c]/60 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Columns (Span 2) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Top row: 2 Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Card 1: YouTube */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl border border-white/5 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-white/10"
                  style={{
                    background: 'rgba(12, 12, 14, 0.85)',
                  }}
                >
                  <div className="flex flex-col gap-4">
                    {/* YouTube Icon and Value */}
                    <div className="flex items-center gap-4.5">
                      <div className="bg-[#ff0000]/10 p-3 rounded-xl border border-[#ff0000]/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#ff0000]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <span className="text-3xl md:text-4xl font-bold text-[#be5232] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        YouTube
                      </span>
                    </div>
                    <h3 className="text-[#8e8a7d] text-base md:text-lg font-medium">
                      Murphism Followers
                    </h3>
                  </div>
                  <p className="text-[#6b6459] text-sm leading-relaxed mt-4">
                    Be part of a vibrant learning ecosystem.
                  </p>
                </motion.div>

                {/* Card 2: Career Learners */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-3xl border border-white/5 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-white/10"
                  style={{
                    background: 'rgba(12, 12, 14, 0.85)',
                  }}
                >
                  <div className="flex flex-col gap-4">
                    {/* Star Icon and Value */}
                    <div className="flex items-center gap-4.5">
                      <div className="bg-[#be5232]/10 p-3 rounded-xl border border-[#be5232]/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#be5232]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      </div>
                      <span className="text-4xl md:text-5xl font-bold text-[#be5232] tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                        20k
                      </span>
                    </div>
                    <h3 className="text-[#8e8a7d] text-base md:text-lg font-medium">
                      Career-Driven Learners
                    </h3>
                  </div>
                  <p className="text-[#6b6459] text-sm leading-relaxed mt-4">
                    Join a large and growing community of coders.
                  </p>
                </motion.div>
                
              </div>

              {/* Bottom Row: Wide Announcement Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl border border-white/5 p-8 md:p-10 flex flex-col justify-between gap-6 relative overflow-hidden transition-all duration-300 hover:border-white/10"
                style={{
                  background: 'rgba(12, 12, 14, 0.85)',
                }}
              >
                {/* Top Row: UNLOCK [avatars] YOUR */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    UNLOCK
                  </span>
                  
                  {/* Avatar Stack */}
                  <div className="flex -space-x-3 items-center mx-2">
                    {studentAvatars.map((url, idx) => (
                      <img 
                        key={idx} 
                        src={url} 
                        alt="Student" 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0a0a0f] object-cover" 
                      />
                    ))}
                  </div>

                  <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    YOUR
                  </span>
                </div>

                {/* Styled Pill Button Container */}
                <div className="flex flex-col items-start">
                  {/* Circular pill container with right-pointing arrow */}
                  <div className="w-16 h-8 rounded-full border-2 border-[#be5232] flex items-center justify-center my-5 hover:bg-[#be5232]/10 transition-all duration-300">
                    <svg className="w-4.5 h-4.5 text-[#be5232]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </div>

                  {/* Main Action Header */}
                  <div className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight uppercase" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    FIRST JOB AND INTERNSHIP WITH US!
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl border border-white/5 p-8 md:p-10 flex flex-col justify-between min-h-[350px] lg:min-h-full relative overflow-hidden transition-all duration-300 hover:border-white/10"
              style={{
                background: 'rgba(12, 12, 14, 0.85)',
              }}
            >
              <div className="flex flex-col gap-3">
                <h2 className="text-white text-2.5xl md:text-3.5xl font-semibold tracking-tight leading-none" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  Start<br />Learning
                </h2>
              </div>

              <div className="mt-auto">
                <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#be5232]/45 text-[#be5232] text-sm font-bold tracking-wide uppercase bg-[#be5232]/5 hover:bg-[#be5232]/15 transition-all duration-300 cursor-pointer">
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
