'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

export default function PortfolioVideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [videoReady, setVideoReady] = useState(false);
  const [showScanline, setShowScanline] = useState(false);

  /* ── Play video with a slight delay after reveal animation ── */
  useEffect(() => {
    if (isInView && videoRef.current) {
      setShowScanline(true);
      const timer = setTimeout(async () => {
        try {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();
          setVideoReady(true);
        } catch (_) {}
        setShowScanline(false);
      }, 900); // wait for the reveal animation
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <>
      <style>{`
        /* ─── Clip-path reveal ─── */
        @keyframes clipReveal {
          0%   { clip-path: inset(0 50% 0 50% round 12px); opacity: 0; }
          40%  { clip-path: inset(0 10% 0 10% round 12px); opacity: 1; }
          100% { clip-path: inset(0 0% 0 0% round 0px);    opacity: 1; }
        }
        .video-reveal {
          animation: clipReveal 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ─── Scanline boot effect ─── */
        @keyframes scanDown {
          0%   { top: -4px; opacity: 0.9; }
          100% { top: 100%; opacity: 0; }
        }
        .scanline {
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(180deg, transparent, rgba(201,162,39,0.6), transparent);
          pointer-events: none;
          z-index: 20;
          animation: scanDown 0.85s linear forwards;
        }

        /* ─── Glitch flash on entry ─── */
        @keyframes glitchFlash {
          0%   { opacity: 0; }
          10%  { opacity: 0.18; }
          20%  { opacity: 0; }
          30%  { opacity: 0.12; }
          100% { opacity: 0; }
        }
        .glitch-flash {
          position: absolute;
          inset: 0;
          background: rgba(201,162,39,0.22);
          pointer-events: none;
          z-index: 15;
          animation: glitchFlash 0.6s ease forwards;
          border-radius: 16px;
        }

        /* ─── Corner accent pulse ─── */
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        .corner-accent { animation: cornerPulse 2.4s ease-in-out infinite; }

        /* ─── Gradient shimmer on border ─── */
        @keyframes borderShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gold-border-animated {
          background: linear-gradient(135deg,
            rgba(201,162,39,0.6) 0%,
            rgba(201,162,39,0.08) 30%,
            rgba(255,215,80,0.5) 60%,
            rgba(201,162,39,0.08) 80%,
            rgba(201,162,39,0.6) 100%);
          background-size: 300% 300%;
          animation: borderShimmer 3.5s ease infinite;
        }

        /* ─── Floating particles ─── */
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1);   opacity: 0.7; }
          100% { transform: translateY(-80px) scale(0); opacity: 0; }
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(201,162,39,0.6);
          pointer-events: none;
          animation: floatUp 2.2s ease-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="portfolio-video"
        className="section-pad relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #050505 0%, #0a0907 40%, #0f0e0b 70%, #050505 100%)',
        }}
      >
        {/* Top gold line */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.35), transparent)' }}
        />

        {/* Radial background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(201,162,39,0.055) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center mb-12"
          >
            <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>
              Our Story
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto mb-5"
              style={{ lineHeight: '1.2', fontFamily: 'var(--font-clash-display), sans-serif' }}
            >
              The Murphism
              <br />
              <span className="text-gold">Experience</span>
            </h2>
            <p className="text-[#b8b099] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              See what life at Murphism truly looks like — real students, real growth, real results.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto"
            style={{ maxWidth: '860px' }}
          >
            {/* Animated gold border */}
            <div
              className="absolute -inset-px rounded-2xl pointer-events-none gold-border-animated"
              style={{ borderRadius: '18px', padding: '1px' }}
            />

            {/* Floating particles (decorative) */}
            {isInView && [
              { left: '12%', bottom: '-18px', delay: '0s' },
              { left: '30%', bottom: '-24px', delay: '0.6s' },
              { left: '55%', bottom: '-14px', delay: '1.1s' },
              { left: '75%', bottom: '-20px', delay: '0.3s' },
              { left: '88%', bottom: '-16px', delay: '0.9s' },
            ].map((p, i) => (
              <div
                key={i}
                className="particle"
                style={{ left: p.left, bottom: p.bottom, animationDelay: p.delay }}
              />
            ))}

            {/* Video container */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: '#050505',
                boxShadow: '0 40px 100px rgba(0,0,0,0.9), 0 0 80px rgba(201,162,39,0.1)',
                border: '1px solid rgba(201,162,39,0.18)',
              }}
            >
              {/* Scanline boot effect */}
              {showScanline && <div className="scanline" />}

              {/* Glitch flash on first appear */}
              {isInView && !videoReady && <div className="glitch-flash" />}

              {/* The actual video */}
              <div className={isInView ? 'video-reveal' : ''}>
                <video
                  ref={videoRef}
                  src="/courses/WhatsApp Video 2026-11-04 at 15.23.38.mp4"
                  className="w-full block"
                  style={{ aspectRatio: '16/9', objectFit: 'cover', maxHeight: '500px' }}
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="corner-accent absolute -top-3 -left-3 w-6 h-6 pointer-events-none" style={{ borderTop: '2px solid rgba(201,162,39,0.6)', borderLeft: '2px solid rgba(201,162,39,0.6)', borderRadius: '2px 0 0 0' }} />
            <div className="corner-accent absolute -top-3 -right-3 w-6 h-6 pointer-events-none" style={{ borderTop: '2px solid rgba(201,162,39,0.6)', borderRight: '2px solid rgba(201,162,39,0.6)', borderRadius: '0 2px 0 0' }} />
            <div className="corner-accent absolute -bottom-3 -left-3 w-6 h-6 pointer-events-none" style={{ borderBottom: '2px solid rgba(201,162,39,0.6)', borderLeft: '2px solid rgba(201,162,39,0.6)', borderRadius: '0 0 0 2px' }} />
            <div className="corner-accent absolute -bottom-3 -right-3 w-6 h-6 pointer-events-none" style={{ borderBottom: '2px solid rgba(201,162,39,0.6)', borderRight: '2px solid rgba(201,162,39,0.6)', borderRadius: '0 0 2px 0' }} />
          </motion.div>

          {/* Bottom label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-center mt-10 text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(201,162,39,0.5)' }}
          >
            Official Representative Video — Murphism Academy
          </motion.p>
        </div>

        {/* Bottom gold line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)' }}
        />
      </section>
    </>
  );
}
