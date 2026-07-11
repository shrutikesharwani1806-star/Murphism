'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const fullText = 'MURPHISM';
  const [displayedText, setDisplayedText] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Reveal letter by letter: M -> MU -> MUR ...
  useEffect(() => {
    let currentIndex = 0;
    let typeTimer;

    const typeNext = () => {
      currentIndex += 1;
      setDisplayedText(fullText.slice(0, currentIndex));

      if (currentIndex < fullText.length) {
        // Fast, premium typing cadence
        typeTimer = setTimeout(typeNext, 60);
      } else {
        // Revealed! Trigger fade out and page load immediately
        const fadeTimer = setTimeout(() => {
          setIsFadingOut(true);
          const completeTimer = setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 150);
          return () => clearTimeout(completeTimer);
        }, 80);
        return () => clearTimeout(fadeTimer);
      }
    };

    // Start typing after a tiny delay
    typeTimer = setTimeout(typeNext, 50);

    return () => {
      clearTimeout(typeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Subtle gold background glow */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{ background: 'rgba(201,162,39,0.06)', filter: 'blur(80px)' }}
          />

          {/* Typewriter text */}
          <div className="relative flex items-center justify-center">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-center select-none uppercase flex items-center"
              style={{ color: '#c9a227', letterSpacing: '0.25em', fontFamily: 'inherit' }}
            >
              <span>{displayedText}</span>
              <span className="animate-pulse font-light" style={{ color: '#c9a227', marginLeft: '2px' }}>|</span>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

