'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, GraduationCap, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const smallScreen = window.innerWidth < 1024;
      setIsMobile(coarsePointer || smallScreen);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    try {
      // Check if already shown this session
      const alreadyShown = sessionStorage.getItem('murphism_welcome_shown');
      if (alreadyShown) return;
    } catch (e) {
      console.warn('SessionStorage access failed:', e);
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem('murphism_welcome_shown', 'true');
      } catch (e) {
        console.warn('SessionStorage write failed:', e);
      }
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleClose = () => setIsOpen(false);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="fixed bottom-6 left-6 z-[9998] w-[calc(100vw-3rem)] sm:w-[360px] rounded-2xl overflow-hidden p-5 text-left"
          style={{
            background: 'linear-gradient(135deg, #0f0e0b 0%, #050505 100%)',
            border: '1px solid rgba(201, 162, 39, 0.22)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.85), 0 0 40px rgba(201,162,39,0.05)',
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
            className="absolute top-3.5 right-3.5 z-20 p-1.5 rounded-full transition-all hover:bg-white/5"
            style={{ color: '#6b6459' }}
          >
            <X size={15} />
          </button>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Header row with Sparkles */}
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center relative"
                style={{
                  background: 'rgba(201,162,39,0.06)',
                  border: '1px solid rgba(201,162,39,0.18)',
                }}
              >
                <Sparkles size={16} style={{ color: '#e8bf5a' }} />
              </div>
              <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                style={{
                  background: 'rgba(201,162,39,0.08)',
                  border: '1px solid rgba(201,162,39,0.15)',
                  color: '#c9a227',
                }}
              >
                ✨ Secure Your Spot
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-extrabold text-[#f0ece0] mb-1.5 tracking-tight">
              Secure Your Seats Now
            </h3>

            {/* Message */}
            <p className="text-[#b8b099] text-[11px] leading-relaxed mb-4">
              Unlock your bright future with Murphism. Register today and take the first step towards a professional career! 🚀
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-2 w-full mt-0.5">
              <Link
                href="/auth/register"
                onClick={handleClose}
                className="flex-1 py-2 rounded-xl font-bold text-[10px] tracking-wider uppercase transition-all duration-300 text-center block"
                style={{
                  background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                  color: '#050505',
                  boxShadow: '0 4px 12px rgba(201,162,39,0.15)',
                }}
              >
                Enroll Now
              </Link>
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-xl font-bold text-[10px] tracking-wider uppercase transition-all duration-300"
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
      )}
    </AnimatePresence>
  );
}
