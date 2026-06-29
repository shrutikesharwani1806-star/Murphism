'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Sparkles, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function GlobalExposurePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem('murphism_foreign_popup_shown');
    if (alreadyShown) return;

    // Show after 1 minute (60,000 milliseconds)
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('murphism_foreign_popup_shown', 'true');
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.82)', backdropFilter: 'blur(12px)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="relative w-full max-w-md rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0d0c0a 0%, #050505 100%)',
              border: '1px solid rgba(201, 162, 39, 0.22)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.85), 0 0 80px rgba(201,162,39,0.08)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gold Gradient Accent */}
            <div
              className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a227, transparent)' }}
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 p-2 rounded-full transition-all hover:bg-white/5"
              style={{ color: '#6b6459' }}
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-8 pt-8 pb-7 text-center">
              
              {/* Globe & Aeroplane Orbiting Animation */}
              <div className="relative w-28 h-28 mx-auto mb-5 flex items-center justify-center">
                {/* Glow behind */}
                <div 
                  className="absolute w-24 h-24 rounded-full blur-xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)' }}
                />
                
                {/* Dashed flight path orbit circle */}
                <svg className="absolute w-28 h-28 pointer-events-none animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="43" 
                    fill="none" 
                    stroke="rgba(201, 162, 39, 0.2)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 5" 
                  />
                </svg>

                {/* Orbiting Airplane Container */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-28 h-28 pointer-events-none"
                >
                  {/* Plane Icon positioned on the orbital circle */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[55deg]"
                    style={{
                      filter: 'drop-shadow(0 0 6px #e8bf5a)',
                    }}
                  >
                    <Navigation size={14} className="text-[#e8bf5a] fill-[#e8bf5a]" />
                  </div>
                </motion.div>

                {/* Rotating globe outlines inside */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-20 h-20 rounded-full border border-dashed border-[#c9a227]/25 flex items-center justify-center"
                  style={{ background: 'rgba(201,162,39,0.02)' }}
                >
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#c9a227]/20 to-transparent" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />
                  <Globe size={32} className="text-[#c9a227]/60" />
                </motion.div>
              </div>

              {/* Title & Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4"
                style={{
                  background: 'rgba(201,162,39,0.06)',
                  border: '1px solid rgba(201,162,39,0.15)',
                }}
              >
                <Sparkles size={11} style={{ color: '#c9a227' }} />
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#c9a227' }}>
                  Foreign Clients
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-extrabold tracking-tight mb-3"
                style={{ color: '#f0ece0', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Unlock Your First <span className="text-gold">Foreign Work</span>
              </motion.h3>

              {/* Sweet Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#b8b099] text-xs md:text-sm leading-relaxed mb-6 max-w-sm mx-auto font-sans"
              >
                Your creative career has no boundaries. At Murphism, we connect you directly with real international clients — work on live briefs from the UK, UAE, Singapore, and beyond. Build a global portfolio and gain the experience that sets you apart. Let's take your career worldwide! ✈️
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-2.5"
              >
                <Link
                  href="/#foreign-exposure"
                  onClick={handleClose}
                  className="py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 text-center block"
                  style={{
                    background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                    color: '#050505',
                    boxShadow: '0 6px 18px rgba(201,162,39,0.2)',
                  }}
                  onMouseEnter={(e) => { e.target.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; }}
                >
                  Explore Opportunities ✦
                </Link>
                <button
                  onClick={handleClose}
                  className="py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: 'transparent',
                    color: '#8c8476',
                    border: '1px solid rgba(201,162,39,0.15)',
                  }}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(201,162,39,0.04)'; e.target.style.color = '#c9a227'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#8c8476'; }}
                >
                  Maybe Later
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
