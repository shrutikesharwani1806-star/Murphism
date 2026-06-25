'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const syllabus = [
  { year: 'Year 1', modules: ['Fundamentals of Animation', '2D Digital Art', 'Drawing & Composition', 'Intro to 3D Modelling', 'History of Animation', 'Design Principles'] },
  { year: 'Year 2', modules: ['Advanced 3D Modelling', 'Character Rigging & Skinning', 'VFX & Compositing', 'Motion Graphics', 'Lighting & Rendering', 'AI in Animation'] },
  { year: 'Year 3', modules: ['Film-Quality VFX', 'Game Engine Integration', 'Final Year Project', 'Industry Internship', 'Portfolio Development', 'Career Placement'] },
];

export default function DegreeSection() {
  return (
    <section id="degree" className="section-pad relative" style={{ background: '#0a0907' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.12), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Degree Program</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto" style={{ lineHeight: '1.25' }}>
            B.Sc. in Animations &amp; Multimedia
          </h2>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-[#b8b099] leading-relaxed mb-8">
              A full 3-year government-recognized degree program combining cutting-edge animation techniques,
              3D modelling, VFX, and AI-powered creative workflows.
            </p>

            {/* Key facts */}
            <div
              className="p-6 rounded-sm mb-6"
              style={{ background: '#050505', border: '1px solid rgba(201,162,39,0.12)', borderTop: '2px solid #c9a227' }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image src="/murphism-logo.jpeg" alt="Murphism" fill sizes="56px" className="object-contain" />
                </div>
                <div>
                  <p className="text-[9px] font-black tracking-widest uppercase text-[#c9a227]">MURPHISM ACADEMY</p>
                  <p className="text-[#f0ece0] font-bold text-sm">B.Sc. in Animations &amp; Multimedia</p>
                  <p className="text-[#6b6459] text-xs">3-Year Full Degree Program</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Govt. Recognized', 'Industry Mentors', '100% Job Assist', 'Foreign Exposure'].map((b) => (
                  <span key={b} className="text-xs text-[#b8b099] flex items-center gap-1.5">
                    <span style={{ color: '#c9a227' }}>▲</span> {b}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/courses/bsc-animations-multimedia">
              <button className="btn-gold">
                <span>Apply for Degree Program</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>

          {/* Right — syllabus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {syllabus.map((yr, i) => (
              <div
                key={yr.year}
                className="p-6 rounded-sm"
                style={{ background: '#050505', border: '1px solid rgba(201,162,39,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: '#c9a227', color: '#050505' }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="text-[#f0ece0] font-bold text-sm tracking-wide">{yr.year}</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {yr.modules.map((m) => (
                    <span key={m} className="text-xs text-[#6b6459] flex items-center gap-1.5">
                      <span style={{ color: '#8B6914', fontSize: '8px' }}>▸</span> {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
