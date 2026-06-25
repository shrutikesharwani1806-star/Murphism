'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, Users, Briefcase, Award } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Live International Projects',
    desc: 'Work on real briefs from global clients during your course. Build a portfolio that speaks the international language of design and tech.',
    color: '#c9a227',
    num: '01',
  },
  {
    icon: Users,
    title: 'Global Mentor Network',
    desc: 'Get mentored by industry professionals working abroad. Learn workflows, communication, and standards used by top global studios.',
    color: '#e8bf5a',
    num: '02',
  },
  {
    icon: Briefcase,
    title: 'Overseas Placement Support',
    desc: 'Our dedicated career cell actively connects you with foreign job opportunities across the UK, UAE, Singapore, and more.',
    color: '#c9a227',
    num: '03',
  },
  {
    icon: Award,
    title: 'Portfolio with Global Credits',
    desc: 'Graduate with internationally credited projects on your CV. Stand out to employers worldwide with a portfolio that proves global exposure.',
    color: '#e8bf5a',
    num: '04',
  },
];

// Spread positions: start all at center (0), fan out left/right on scroll
// 4 cards: -3, -1, +1, +3 units from center
const SPREAD_X   = [-420, -140, 140, 420]; // px — final spread
const SPREAD_ROT = [-6,   -2,   2,   6  ]; // deg — gentle tilt

export default function ForeignExposure() {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-120px' });
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Small pause so the user sees the stacked state first, then fan out
      const t = setTimeout(() => setSpread(true), 600);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{ background: '#0a0907' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.12), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,162,39,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Global Reach</div>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto"
            style={{ lineHeight: '1.25' }}
          >
            Foreign Work
            <br />
            <span className="text-gold">Exposures Provided</span>
          </h2>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
          <p className="text-[#b8b099] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Don&apos;t just learn in a classroom. Get real international experience and build a
            career that goes beyond borders.
          </p>
        </motion.div>

        {/* ── DESKTOP: Bend from center → fan left & right ── */}
        <div className="hidden md:block relative" style={{ height: '320px', marginBottom: '2rem' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              // Deck stacked at center: subtle offsets so you can see it's a stack
              const deckX   = (i - 1.5) * 10;
              const deckRot = (i - 1.5) * 3;
              const deckY   = Math.abs(i - 1.5) * 3;

              return (
                <motion.div
                  key={benefit.num}
                  style={{
                    position: 'absolute',
                    width: '230px',
                    height: '280px',
                    transformOrigin: 'bottom center',
                    // stack z: middle cards on top when collapsed
                    zIndex: spread ? i + 1 : (i < 2 ? i + 1 : 5 - i),
                  }}
                  // All cards start stacked at center
                  initial={{ x: deckX, rotate: deckRot, y: deckY + 40, opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? spread
                        ? {
                            x: SPREAD_X[i],
                            rotate: SPREAD_ROT[i],
                            y: 0,
                            opacity: 1,
                            scale: 1,
                          }
                        : {
                            // Visible as a neat deck before fanning
                            x: deckX,
                            rotate: deckRot,
                            y: deckY,
                            opacity: 1,
                            scale: 1 - Math.abs(i - 1.5) * 0.015,
                          }
                      : { x: deckX, rotate: deckRot, y: deckY + 40, opacity: 0, scale: 0.9 }
                  }
                  transition={
                    spread
                      ? {
                          duration: 0.8,
                          delay: i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }
                      : { duration: 0.5, delay: i * 0.06, ease: 'easeOut' }
                  }
                >
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col gap-3 transition-transform duration-300 hover:scale-[1.04] cursor-default"
                    style={{
                      background: 'linear-gradient(145deg, #0f0e0b 0%, #181510 100%)',
                      border: '1px solid rgba(201,162,39,0.2)',
                      boxShadow:
                        '0 20px 50px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                  >
                    {/* Faint number watermark */}
                    <div
                      className="text-5xl font-black leading-none"
                      style={{
                        color: 'rgba(201,162,39,0.07)',
                        fontFamily: 'Space Grotesk, sans-serif',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {benefit.num}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(201,162,39,0.12)',
                        border: '1px solid rgba(201,162,39,0.22)',
                      }}
                    >
                      <Icon size={18} style={{ color: benefit.color }} />
                    </div>

                    {/* Gold bar */}
                    <div
                      className="w-8 h-0.5 rounded-full"
                      style={{ background: benefit.color }}
                    />

                    {/* Text */}
                    <div className="flex-1 flex flex-col gap-1.5">
                      <h3 className="text-[#f0ece0] font-bold text-sm leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="text-[#6b6459] text-xs leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE: vertical stagger ── */}
        <div className="flex flex-col gap-4 md:hidden mb-10">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(145deg, #0f0e0b 0%, #181510 100%)',
                  border: '1px solid rgba(201,162,39,0.15)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(201,162,39,0.12)',
                      border: '1px solid rgba(201,162,39,0.2)',
                    }}
                  >
                    <Icon size={16} style={{ color: benefit.color }} />
                  </div>
                  <span
                    className="text-xs font-black tracking-widest"
                    style={{ color: 'rgba(201,162,39,0.4)' }}
                  >
                    {benefit.num}
                  </span>
                </div>
                <h3 className="text-[#f0ece0] font-bold text-sm mb-1.5">{benefit.title}</h3>
                <p className="text-[#6b6459] text-xs leading-relaxed">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link href="/#courses">
            <button className="btn-gold">
              <span>Start Your Journey</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
