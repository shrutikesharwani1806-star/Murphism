'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: '100% Job Assistance',
    desc: 'We don\'t just teach — we place. Our dedicated career cell connects you with real companies, prepares your portfolio, and fights for your first placement.',
    stat: '500+ Students Placed',
    highlighted: true,
  },
  {
    num: '02',
    title: 'New AI-Powered Curriculum',
    desc: 'Introducing cutting-edge AI courses integrated across all programs. Learn how professionals are using AI to 10x their creative and technical output.',
    stat: 'AI-First Approach',
    highlighted: true,
  },
  {
    num: '03',
    title: 'Foreign Work Exposures Provided',
    desc: 'Get real international project experience. Work with overseas clients, understand global market standards, and build a resume that stands out globally.',
    stat: 'Global Network',
    highlighted: true,
  },
  {
    num: '04',
    title: 'Industry-Recognized Certifications',
    desc: 'Earn certificates and diplomas recognized by top employers. Our Diploma in Animations & Modelling is an accredited program.',
    stat: 'Govt. Recognized',
    highlighted: false,
  },
  {
    num: '05',
    title: 'Real-World Project Training',
    desc: 'Every course is built around live projects, client briefs, and production-grade deliverables. Graduate with a portfolio, not just a certificate.',
    stat: '50+ Live Projects',
    highlighted: false,
  },
  {
    num: '06',
    title: 'Mentorship by Industry Experts',
    desc: 'Learn directly from working designers, developers, marketers, and animators. Get mentored by people who do this professionally every day.',
    stat: '20+ Expert Mentors',
    highlighted: false,
  },
];

export default function WhyMurphism() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  return (
    <section
      id="why"
      ref={containerRef}
      className="section-pad relative overflow-hidden"
      style={{ background: '#0a0907' }}
    >
      {/* Top/Bottom Divider Rules to Highlight Section */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)' }}
      />

      {/* Warm ambient radial glow in center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="label-tag">Why Choose Murphism</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto" style={{ lineHeight: '1.25' }}>
            Why Students
            <br />
            <span className="text-gold">Choose Murphism</span>
          </h2>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
          <p className="text-[#b8b099] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Join the growing community of students building real-world creative and tech careers with Murphism.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(201,162,39,0.06)' }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-8 relative overflow-hidden transition-all duration-500 hover:bg-[#0f0e0b]"
              style={{ 
                background: r.highlighted 
                  ? 'linear-gradient(145deg, #110f0b 0%, #0a0907 100%)' 
                  : '#0a0907' 
              }}
            >
              {/* Corner Ambient Glow for highlighted cards */}
              {r.highlighted && (
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-[#c9a227]/10 blur-[28px] pointer-events-none" />
              )}

              {/* Header Badge for Highlighted Key USPs */}
              {r.highlighted && (
                <span className="absolute top-6 right-6 text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded bg-[#c9a227]/10 text-[#e8bf5a] border border-[#c9a227]/25 shadow-sm">
                  ★ Key USP
                </span>
              )}

              {/* Number */}
              <div
                className="text-5xl font-black mb-5 transition-all duration-500 group-hover:opacity-20"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: r.highlighted ? 'rgba(201,162,39,0.22)' : 'rgba(201,162,39,0.12)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {r.num}
              </div>

              {/* Gold accent bar — permanent for USP, expands on hover */}
              <div
                className={`absolute top-0 left-0 h-0.5 transition-all duration-500 ${r.highlighted ? 'w-16 group-hover:w-full' : 'w-0 group-hover:w-full'}`}
                style={{ background: '#c9a227' }}
              />

              <h3 className="text-[#f0ece0] font-bold text-lg mb-3 leading-snug">{r.title}</h3>
              <p className="text-[#6b6459] text-sm leading-relaxed mb-5">{r.desc}</p>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm"
                style={{
                  color: '#c9a227',
                  border: '1px solid rgba(201,162,39,0.2)',
                  background: 'rgba(201,162,39,0.05)',
                }}
              >
                {r.stat}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
