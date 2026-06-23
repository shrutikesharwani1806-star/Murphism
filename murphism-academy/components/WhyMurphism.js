'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: '100% Job Assistance',
    desc: 'We don\'t just teach — we place. Our dedicated career cell connects you with real companies, prepares your portfolio, and fights for your first placement.',
    stat: '500+ Students Placed',
  },
  {
    num: '02',
    title: 'New AI-Powered Curriculum',
    desc: 'Introducing cutting-edge AI courses integrated across all programs. Learn how professionals are using AI to 10x their creative and technical output.',
    stat: 'AI-First Approach',
  },
  {
    num: '03',
    title: 'Foreign Work Exposure',
    desc: 'Get real international project experience. Work with overseas clients, understand global market standards, and build a resume that stands out globally.',
    stat: 'Global Network',
  },
  {
    num: '04',
    title: 'Industry-Recognized Certifications',
    desc: 'Earn certificates and diplomas recognized by top employers. Our Diploma in Animations & Modelling is an accredited program.',
    stat: 'Govt. Recognized',
  },
  {
    num: '05',
    title: 'Real-World Project Training',
    desc: 'Every course is built around live projects, client briefs, and production-grade deliverables. Graduate with a portfolio, not just a certificate.',
    stat: '50+ Live Projects',
  },
  {
    num: '06',
    title: 'Mentorship by Industry Experts',
    desc: 'Learn directly from working designers, developers, marketers, and animators. Get mentored by people who do this professionally every day.',
    stat: '20+ Expert Mentors',
  },
];

export default function WhyMurphism() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const lineH = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section
      id="why"
      ref={containerRef}
      className="section-pad relative overflow-hidden"
      style={{ background: '#0a0907' }}
    >
      {/* Warm ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,162,39,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="label-tag">Why Choose Murphism</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto" style={{ lineHeight: '1.25' }}>
            We&apos;re Doing It
            <br />
            <span className="text-gold">Better &amp; Faster</span>
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
              style={{ background: '#0a0907' }}
            >
              {/* Number */}
              <div
                className="text-5xl font-black mb-5 transition-all duration-500 group-hover:opacity-20"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'rgba(201,162,39,0.12)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {r.num}
              </div>

              {/* Gold accent bar — appears on hover */}
              <div
                className="absolute top-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full"
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

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-l-2 pl-8 py-4"
          style={{ borderColor: '#c9a227' }}
        >
          <p
            className="text-3xl md:text-4xl text-[#f0ece0] font-bold mb-3"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            &ldquo;They came, we shaped,
            <br />
            <span className="text-gold">they got placed.&rdquo;</span>
          </p>
          <p className="text-[#6b6459] text-sm tracking-widest uppercase">— The Murphism Promise</p>
        </motion.div>
      </div>
    </section>
  );
}
