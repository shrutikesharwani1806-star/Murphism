'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PartyPopper, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function EnrollmentSuccessPopup({ isOpen, onClose, studentName, courseName }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative w-full max-w-md rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f0e0b 0%, #0a0907 100%)',
              border: '1px solid rgba(201, 162, 39, 0.2)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(201,162,39,0.08)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold Glow Top */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-[100px] pointer-events-none"
              style={{ background: 'rgba(201, 162, 39, 0.15)' }}
            />

            {/* Confetti Particles (CSS animated) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20, x: Math.random() * 300, opacity: 1, rotate: 0 }}
                  animate={{
                    y: [null, 400 + Math.random() * 200],
                    x: [null, Math.random() * 400 - 50],
                    opacity: [1, 0],
                    rotate: [0, Math.random() * 720 - 360],
                  }}
                  transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 0.5, ease: 'easeOut' }}
                  className="absolute w-2 h-2 rounded-sm"
                  style={{
                    background: ['#c9a227', '#e8bf5a', '#f5d97a', '#a855f7', '#7c3aed', '#10b981'][i % 6],
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full transition-all hover:bg-white/5"
              style={{ color: '#6b6459' }}
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative z-10 px-8 pt-10 pb-8 text-center">
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10, stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,162,39,0.15) 0%, rgba(201,162,39,0.05) 100%)',
                  border: '2px solid rgba(201,162,39,0.3)',
                  boxShadow: '0 0 40px rgba(201,162,39,0.15)',
                }}
              >
                <motion.div
                  initial={{ rotate: -30 }}
                  animate={{ rotate: 0 }}
                  transition={{ type: 'spring', damping: 8, delay: 0.4 }}
                >
                  <PartyPopper size={36} style={{ color: '#e8bf5a' }} />
                </motion.div>
              </motion.div>

              {/* Success Checkmark */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
              >
                <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#10b981' }}>
                  Enrollment Successful
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight"
              >
                Congratulations{studentName ? `, ${studentName}` : ''}! 🎉
              </motion.h2>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#b8b099] text-sm leading-relaxed mb-2"
              >
                Your enrollment{courseName ? <> for <span className="font-bold text-[#e8bf5a]">{courseName}</span></> : ''} on{' '}
                <span className="font-bold text-[#e8bf5a]">Murphism Academy</span> is done successfully!
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="text-[#b8b099] text-sm leading-relaxed mb-6"
              >
                We will connect with you soon for further details. 🚀
              </motion.p>

              {/* Course Badge */}
              {courseName && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
                  style={{
                    background: 'rgba(201,162,39,0.08)',
                    border: '1px solid rgba(201,162,39,0.2)',
                  }}
                >
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#c9a227' }}>
                    📚 {courseName}
                  </span>
                </motion.div>
              )}

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-2 mb-7 text-xs text-[#6b6459]"
              >
                <div className="flex items-center gap-2">
                  <Phone size={12} style={{ color: '#c9a227' }} />
                  <span>Our team will call you within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} style={{ color: '#c9a227' }} />
                  <span>Check your email for confirmation details</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={onClose}
                className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                  color: '#050505',
                  boxShadow: '0 8px 24px rgba(201,162,39,0.25)',
                }}
                onMouseEnter={(e) => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 12px 32px rgba(201,162,39,0.35)'; }}
                onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 24px rgba(201,162,39,0.25)'; }}
              >
                Continue Exploring ✨
              </motion.button>
            </div>

            {/* Bottom Gold Line */}
            <div
              className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a227, transparent)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
