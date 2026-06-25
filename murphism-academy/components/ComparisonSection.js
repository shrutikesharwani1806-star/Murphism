'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Layers, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function ComparisonSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

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
      left: '100% placement assistance',
      right: 'Limited Career Support & Local Placements',
    },
  ];

  return (
    <section id="comparison" ref={containerRef} className="section-pad relative overflow-hidden" style={{ background: '#050505' }}>
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
          className="mb-8 flex flex-col items-center text-center"
        >
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Comparison</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto max-w-3xl mb-4" style={{ lineHeight: '1.25' }}>
            What Sets Murphism Apart From Others
          </h2>
          <p className="text-lg md:text-xl font-bold italic tracking-wide text-gold font-serif">
            “They came, we shaped, they got placed.”
          </p>
          <p className="text-[10px] md:text-xs tracking-widest text-[#8e8a7d] uppercase font-mono mt-2 mb-4">
            — The Murphism Promise
          </p>
          <div className="divider-gold" style={{ margin: '0.5rem auto 1.5rem auto', width: '48px' }} />
        </motion.div>

        {/* Outer comparison box */}
        <div 
          className="rounded-3xl p-6 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #0a0907 0%, #050505 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Main comparison grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
            
            {/* LEFT SIDE: Murphism Academy */}
            <motion.div 
              className="rounded-2xl p-6 md:p-8 flex flex-col gap-6 md:gap-8"
              initial={{
                borderColor: 'rgba(34, 197, 94, 0.03)',
                boxShadow: 'inset 0 0 30px rgba(34, 197, 94, 0.01), 0 0 0px rgba(34, 197, 94, 0)',
              }}
              animate={isInView ? {
                borderColor: 'rgba(34, 197, 94, 0.8)',
                boxShadow: 'inset 0 0 30px rgba(34, 197, 94, 0.05), 0 0 30px rgba(34, 197, 94, 0.25)',
              } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{
                background: 'rgba(34, 197, 94, 0.02)',
                border: '1.5px solid',
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
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex items-center gap-4 min-h-[50px]"
                  >
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(34,197,94,0.1)',
                        border: '1px solid rgba(34,197,94,0.3)',
                        boxShadow: '0 0 10px rgba(34,197,94,0.2)',
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
            </motion.div>

            {/* RIGHT SIDE: Others */}
            <div 
              className="p-6 md:p-8 flex flex-col gap-6 md:gap-8"
              style={{
                background: 'transparent',
                border: '1.5px solid transparent',
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
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
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

          </div>
        </div>



      </div>
    </section>
  );
}
