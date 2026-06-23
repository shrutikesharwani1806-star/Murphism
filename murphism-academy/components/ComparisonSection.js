'use client';
import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Check, X, Layers, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function ComparisonSection() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1); // -1 = initial, 0..4 = rows active
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position of comparison section container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 35%"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Constrain scroll progress between 0 and 1
    const clamped = Math.min(Math.max(latest, 0), 1);
    setScrollProgress(clamped);

    // Sequence of reveals based on scroll depth
    if (clamped < 0.15) {
      setActiveStep(-1);
    } else if (clamped < 0.35) {
      setActiveStep(0);
    } else if (clamped < 0.55) {
      setActiveStep(1);
    } else if (clamped < 0.75) {
      setActiveStep(2);
    } else if (clamped < 0.90) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
  });

  const rows = [
    {
      left: 'Highly Affordable, Premium Training',
      right: 'High Fees With Compromised Quality',
    },
    {
      left: 'Project-Based, Portfolio-First Learning',
      right: 'Theory-Centric Learning without Portfolios',
    },
    {
      left: 'Advanced Curriculum with AI Integration',
      right: 'Outdated, Static Curriculum',
    },
    {
      left: 'Live Studio Briefs & Hands-On Projects',
      right: 'No Practical Studio Exposure',
    },
    {
      left: '100% Placement & Global Work Opportunities',
      right: 'Limited Career Support & Local Placements',
    },
  ];

  // Calculate clean percentage height matching the scroll depth
  const getProgressPercent = () => {
    if (scrollProgress < 0.1) return 0;
    // Map 0.1 - 0.9 range to 0% - 92% track height
    const mapped = ((scrollProgress - 0.1) / 0.8) * 92;
    return Math.min(Math.max(mapped, 0), 92);
  };

  const progressPercent = getProgressPercent();

  return (
    <section id="comparison" ref={containerRef} className="section-pad relative overflow-hidden" style={{ background: '#050508' }}>
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'rgba(201,162,39,0.03)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.03)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Comparison</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto max-w-3xl" style={{ lineHeight: '1.25' }}>
            What Sets Murphism Apart From Others
          </h2>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
        </motion.div>

        {/* Outer comparison box */}
        <div 
          className="rounded-3xl p-6 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #0a0907 0%, #050505 100%)',
            border: '1px solid rgba(201,162,39,0.12)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Main comparison grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
            
            {/* LEFT SIDE: Murphism Academy */}
            <div 
              className="rounded-2xl p-6 md:p-8 flex flex-col gap-6 md:gap-8"
              style={{
                background: 'rgba(34, 197, 94, 0.02)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                boxShadow: 'inset 0 0 30px rgba(34, 197, 94, 0.02)',
              }}
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="relative w-10 h-10">
                  <Image src="/murphism-logo.jpeg" alt="Murphism" fill sizes="40px" className="object-contain rounded-md" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Murphism Academy
                  </h4>
                  <p className="text-[10px] tracking-widest text-[#22c55e] uppercase font-bold">The Creators Blueprint</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 md:gap-8">
                {rows.map((row, index) => (
                  <motion.div
                    key={`left-${index}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={activeStep >= index ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex items-center gap-4 min-h-[50px]"
                  >
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(34,197,94,0.1)',
                        border: '1px solid rgba(34,197,94,0.3)',
                        boxShadow: activeStep >= index ? '0 0 10px rgba(34,197,94,0.2)' : 'none',
                      }}
                    >
                      <Check size={14} className="text-[#22c55e]" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-[#f0ece0] leading-relaxed">
                      {row.left}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Others */}
            <div 
              className="rounded-2xl p-6 md:p-8 flex flex-col gap-6 md:gap-8"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Layers size={18} className="text-[#6b6459]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#b8b099] tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Others
                  </h4>
                  <p className="text-[10px] tracking-widest text-[#6b6459] uppercase font-bold">Traditional Methods</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 md:gap-8">
                {rows.map((row, index) => (
                  <motion.div
                    key={`right-${index}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={activeStep >= index ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex items-center gap-4 min-h-[50px]"
                  >
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(239,68,68,0.05)',
                        border: '1px solid rgba(239,68,68,0.2)',
                      }}
                    >
                      <X size={14} className="text-[#ef4444]/70" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-[#8c8476] leading-relaxed">
                      {row.right}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CENTRAL DIVIDER TRACK & ANIMATED ARROW */}
            <div className="hidden md:block absolute top-[110px] bottom-[30px] left-1/2 -translate-x-1/2 w-0.5 pointer-events-none">
              {/* Background track line */}
              <div className="absolute inset-0 bg-white/5 rounded-full" />
              
              {/* Glowing active path line */}
              <div 
                className="absolute top-0 w-full bg-gradient-to-b from-[#22c55e]/60 to-[#c9a227] rounded-full transition-all duration-300 ease-out"
                style={{ height: `${progressPercent}%` }}
              />

              {/* Arrow Down Indicator */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out flex items-center justify-center"
                style={{
                  top: `${progressPercent}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg relative"
                  style={{
                    background: '#c9a227',
                    border: '2px solid #e8bf5a',
                    boxShadow: '0 0 15px rgba(201,162,39,0.5)',
                  }}
                >
                  <ArrowDown size={14} className="text-[#050508] animate-bounce" />
                  <span className="absolute w-12 h-12 rounded-full border border-[#c9a227]/40 animate-ping opacity-70 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
