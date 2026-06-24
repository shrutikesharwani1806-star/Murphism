'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, GraduationCap, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem('murphism_welcome_shown');
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('murphism_welcome_shown', 'true');
    }, 5000); // 5 seconds delay

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
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f0e0b 0%, #0a0907 100%)',
              border: '1px solid rgba(201, 162, 39, 0.2)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 80px rgba(201,162,39,0.06)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gold Gradient Accent */}
            <div
              className="h-1.5 w-full"
              style={{ background: 'linear-gradient(90deg, #8B6914, #c9a227, #e8bf5a, #c9a227, #8B6914)' }}
            />

            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-[120px] pointer-events-none"
              style={{ background: 'rgba(201, 162, 39, 0.1)' }}
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
            <div className="relative z-10 px-8 md:px-10 pt-10 pb-8 text-center">
              {/* Animated Logo/Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.15 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)',
                  border: '2px solid rgba(201,162,39,0.25)',
                  boxShadow: '0 0 50px rgba(201,162,39,0.1)',
                }}
              >
                {/* Inner sparkle ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full"
                  style={{ border: '1px dashed rgba(201,162,39,0.15)' }}
                />
                <Sparkles size={40} style={{ color: '#e8bf5a' }} />
              </motion.div>

              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: 'rgba(201,162,39,0.08)',
                  border: '1px solid rgba(201,162,39,0.2)',
                }}
              >
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c9a227' }}>
                  ✨ Secure Your Spot
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4"
                style={{ color: '#f0ece0' }}
              >
                Secure Your Seats Now
              </motion.h2>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#b8b099] text-sm md:text-base leading-relaxed mb-6 max-w-sm mx-auto"
              >
                Secure your seats now and unlock your brighten future with murphism. Register today and take the first step towards a professional career in design, tech, and animation! 🚀
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold"
                  style={{ background: 'rgba(201,162,39,0.06)', border: '1px solid rgba(201,162,39,0.12)', color: '#b8b099' }}>
                  <GraduationCap size={14} style={{ color: '#c9a227' }} />
                  8+ Premium Courses
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold"
                  style={{ background: 'rgba(201,162,39,0.06)', border: '1px solid rgba(201,162,39,0.12)', color: '#b8b099' }}>
                  <Rocket size={14} style={{ color: '#c9a227' }} />
                  100% Job Assistance
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold"
                  style={{ background: 'rgba(201,162,39,0.06)', border: '1px solid rgba(201,162,39,0.12)', color: '#b8b099' }}>
                  <Sparkles size={14} style={{ color: '#c9a227' }} />
                  Foreign Work Exposures Provided
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/#courses"
                  onClick={handleClose}
                  className="flex-1 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                    color: '#050505',
                    boxShadow: '0 8px 24px rgba(201,162,39,0.25)',
                  }}
                  onMouseEnter={(e) => { e.target.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; }}
                >
                  Enroll Now ✦
                </Link>
                <button
                  onClick={handleClose}
                  className="flex-1 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: 'transparent',
                    color: '#b8b099',
                    border: '1px solid rgba(201,162,39,0.2)',
                  }}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(201,162,39,0.06)'; e.target.style.color = '#e8bf5a'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#b8b099'; }}
                >
                  Maybe Later
                </button>
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div
              className="h-0.5 w-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
