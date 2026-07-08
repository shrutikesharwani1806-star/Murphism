'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DegreeSection() {
  return (
    <section 
      id="degree" 
      className="section-pad relative" 
      style={{ background: 'rgba(10,9,7,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Degree Program</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mb-3 leading-tight">
            B.Sc. in Animations &amp; Multimedia
          </h2>
        </motion.div>

        {/* Centered main details card in Murphism Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="group max-w-2xl w-full p-8 md:p-12 relative overflow-hidden transition-all duration-500 rounded-sm flex flex-col items-center text-center hover:bg-[#0f0e0b]"
          style={{
            background: '#0a0907',
            border: '1px solid rgba(201,162,39,0.12)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.75)',
          }}
        >
          {/* Top Gold Accent Bar (Expands on Hover to match Why Choose Murphism cards) */}
          <div
            className="absolute top-0 left-0 h-0.5 transition-all duration-500 w-24 group-hover:w-full"
            style={{ background: '#c9a227' }}
          />

          {/* Logo / Badge */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="relative w-14 h-14 border border-white/5 rounded-sm p-1" style={{ background: '#050505' }}>
              <Image src="/murphism-logo.jpeg" alt="Murphism" fill sizes="56px" className="object-contain rounded-sm" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-[#c9a227] mb-1">MURPHISM ACADEMY</p>
              <p className="text-[#6b6459] text-xs font-bold tracking-widest uppercase font-mono">3-Year Full Degree Program</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#b8b099] text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            A full 3-year government-recognized degree program combining cutting-edge animation techniques,
            3D modelling, VFX, and AI-powered creative workflows.
          </p>

          {/* Key Facts Grid matching standard tags */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
            {['Govt. Recognized', 'Industry Mentors', '100% Job Assist', 'Foreign Exposure'].map((b) => (
              <div 
                key={b} 
                className="text-xs text-[#b8b099] flex items-center justify-center gap-2 p-3.5 rounded-sm transition-all duration-300 hover:text-[#f0ece0]"
                style={{ 
                  background: '#050505', 
                  border: '1px solid rgba(201,162,39,0.08)',
                }}
              >
                <span className="text-[8px]" style={{ color: '#c9a227' }}>▲</span> 
                <span className="font-bold tracking-wide uppercase">{b}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <Link href="/courses/bsc-animations-multimedia#enroll">
            <button className="btn-gold">
              <span>Apply for Degree Program</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
