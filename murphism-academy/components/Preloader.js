'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const fullText = "MURPHISM";
  const [isFadingOut, setIsFadingOut] = useState(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Total animation time is 150ms delay + 8 letters * 80ms stagger + 400ms hold = ~1.2s
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const exitTimer = setTimeout(() => {
        if (onCompleteRef.current) onCompleteRef.current();
      }, 400); // match exit transition duration
      return () => clearTimeout(exitTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 }
    }
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
          style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
        >
          {/* Subtle gold radial background glow */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#c9a227]/5 blur-[80px] pointer-events-none" />

          {/* Staggered Container */}
          <div className="relative flex items-center justify-center">
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.25em] text-center select-none uppercase font-sans text-gold-shimmer flex"
              style={{
                letterSpacing: '0.25em',
                textShadow: '0 0 40px rgba(201, 162, 39, 0.25)'
              }}
            >
              {fullText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
