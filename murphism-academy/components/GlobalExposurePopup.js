'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Sparkles, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function GlobalExposurePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      setIsDesktop(window.innerWidth >= 1024 && !isCoarse);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    try {
      // Check if already shown this session
      const alreadyShown = sessionStorage.getItem('murphism_foreign_popup_shown');
      if (alreadyShown) return;
    } catch (e) {
      console.warn('SessionStorage access failed:', e);
    }

    // Show after 1 minute (60,000 milliseconds)
    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem('murphism_foreign_popup_shown', 'true');
      } catch (e) {
        console.warn('SessionStorage write failed:', e);
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, [isDesktop]);

  const handleClose = () => setIsOpen(false);

  if (!isDesktop) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay that closes on click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9997] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-40%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-40%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-1/2 left-1/2 z-[9998] w-[calc(100vw-2.5rem)] sm:w-[400px] rounded-2xl overflow-hidden py-10 px-8 text-center"
            style={{
              background: 'linear-gradient(135deg, #0d0c0a 0%, #050505 100%)',
              border: '1px solid rgba(201, 162, 39, 0.25)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.9), 0 0 60px rgba(201,162,39,0.08)',
            }}
          >
            {/* Top Gold Gradient Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 w-full"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a227, transparent)' }}
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-1.5 rounded-full transition-all hover:bg-white/5"
              style={{ color: '#6b6459' }}
            >
              <X size={16} />
            </button>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Header row with Globe orbit */}
              <div className="flex flex-col items-center mb-5">
                {/* Mini orbiting orbit */}
                <div className="relative w-12 h-12 flex items-center justify-center mb-3.5">
                  <div 
                    className="absolute w-10 h-10 rounded-full blur-md opacity-25 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)' }}
                  />
                  <svg className="absolute w-12 h-12 pointer-events-none animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(201, 162, 39, 0.25)" strokeWidth="2" strokeDasharray="5 5" />
                  </svg>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} className="absolute w-12 h-12 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[55deg] filter drop-shadow(0 0 4px #e8bf5a)">
                      <Navigation size={8} className="text-[#e8bf5a] fill-[#e8bf5a]" />
                    </div>
                  </motion.div>
                  <Globe size={20} className="text-[#c9a227] relative z-10" />
                </div>

                <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(201,162,39,0.08)',
                    border: '1px solid rgba(201,162,39,0.15)',
                    color: '#c9a227',
                  }}
                >
                  🌍 Global Work
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-[#f0ece0] mb-3 tracking-tight">
                Unlock Your First Foreign Work
              </h3>

              {/* Message */}
              <p className="text-[#b8b099] text-xs leading-relaxed mb-8 max-w-[320px]">
                At Murphism, we connect you directly with real international clients — work on live briefs from UK, UAE, and beyond. Build a global portfolio! ✈️
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full">
                <Link
                  href="/#foreign-exposure"
                  onClick={handleClose}
                  className="flex-1 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 text-center block"
                  style={{
                    background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                    color: '#050505',
                    boxShadow: '0 4px 12px rgba(201,162,39,0.15)',
                  }}
                >
                  Explore ✦
                </Link>
                <button
                  onClick={handleClose}
                  className="px-5 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: 'transparent',
                    color: '#8c8476',
                    border: '1px solid rgba(201,162,39,0.15)',
                  }}
                >
                  Later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
