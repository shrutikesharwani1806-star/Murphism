'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PartyPopper, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function EnrollmentSuccessPopup({ isOpen, onClose, studentName, courseName }) {
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }, []);

  // No scroll locking to ensure the website/smooth-scroll never freezes


  if (!isOpen) return null;

  // On mobile — skip backdropFilter and heavy animations
  const overlayStyle = isMobile.current
    ? { background: 'rgba(0,0,0,0.92)' }
    : { background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={overlayStyle}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: isMobile.current ? 1 : 0.85, y: isMobile.current ? 20 : 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: isMobile.current ? 1 : 0.85, y: isMobile.current ? 20 : 40 }}
            transition={isMobile.current
              ? { duration: 0.25, ease: 'easeOut' }
              : { type: 'spring', damping: 22, stiffness: 280 }
            }
            className="relative w-full max-w-md rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f0e0b 0%, #0a0907 100%)',
              border: '1px solid rgba(201, 162, 39, 0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold Glow Top */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 rounded-full pointer-events-none"
              style={{ background: 'rgba(201,162,39,0.12)', filter: 'blur(60px)' }}
            />

            {/* Confetti — desktop only (12 pieces), mobile skipped */}
            {!isMobile.current && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -10, x: (i / 8) * 300, opacity: 1, rotate: 0 }}
                    animate={{
                      y: 420,
                      x: (i / 8) * 300 + (Math.random() * 80 - 40),
                      opacity: 0,
                      rotate: 360,
                    }}
                    transition={{ duration: 2.2, delay: i * 0.07, ease: 'easeOut' }}
                    className="absolute w-1.5 h-1.5 rounded-sm"
                    style={{
                      background: ['#c9a227', '#e8bf5a', '#f5d97a', '#10b981', '#a855f7', '#7c3aed', '#f5d97a', '#c9a227'][i],
                      left: `${(i / 8) * 100}%`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full transition-all"
              style={{ color: '#6b6459' }}
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative z-10 px-7 pt-10 pb-8 text-center">
              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(201,162,39,0.1)',
                  border: '2px solid rgba(201,162,39,0.25)',
                }}
              >
                <PartyPopper size={32} style={{ color: '#e8bf5a' }} />
              </div>

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <CheckCircle2 size={13} style={{ color: '#10b981' }} />
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#10b981' }}>
                  Enrollment Successful
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Congratulations{studentName ? `, ${studentName}` : ''}! 🎉
              </h2>

              {/* Messages */}
              <p className="text-[#b8b099] text-sm leading-relaxed mb-2">
                Your enrollment{courseName ? <> for <span className="font-bold text-[#e8bf5a]">{courseName}</span></> : ''} on{' '}
                <span className="font-bold text-[#e8bf5a]">Murphism Academy</span> is done successfully!
              </p>
              <p className="text-[#b8b099] text-sm leading-relaxed mb-5">
                We will connect with you soon for further details. 🚀
              </p>

              {/* Course Badge */}
              {courseName && (
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-5"
                  style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)' }}
                >
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#c9a227' }}>
                    📚 {courseName}
                  </span>
                </div>
              )}

              {/* Contact Info */}
              <div className="flex flex-col items-center gap-2 mb-6 text-xs text-[#6b6459]">
                <div className="flex items-center gap-2">
                  <Phone size={12} style={{ color: '#c9a227' }} />
                  <span>Our team will call you within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} style={{ color: '#c9a227' }} />
                  <span>Check your email for confirmation details</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                  color: '#050505',
                  boxShadow: '0 6px 20px rgba(201,162,39,0.25)',
                }}
              >
                Continue Exploring ✨
              </button>
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
