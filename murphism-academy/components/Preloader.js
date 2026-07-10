'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const fullText = 'MURPHISM';
  const [isFadingOut, setIsFadingOut] = useState(false);
  const textRef = useRef(null);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Type-in animation: empty → M → MU → MUR → ... → MURPHISM → hold → fade out
  useEffect(() => {
    let currentIndex = 0;
    let typeTimer;
    let fadeTimer;

    const typeNext = () => {
      currentIndex += 1;
      if (textRef.current) {
        textRef.current.textContent = fullText.slice(0, currentIndex);
      }

      if (currentIndex < fullText.length) {
        // Type next letter — 50ms per letter (fast and snappy)
        typeTimer = setTimeout(typeNext, 50);
      } else {
        // Full word revealed — fade out quickly
        fadeTimer = setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 200);
        }, 50);
      }
    };

    // Start typing after a very brief initial pause
    typeTimer = setTimeout(typeNext, 100);

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
          <style>{`
            @keyframes blink {
              50% { opacity: 0; }
            }
            .caret-blink {
              animation: blink 0.75s step-end infinite;
            }
          `}</style>

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
              <span ref={textRef}></span>
              <span className="caret-blink font-light" style={{ color: '#c9a227', marginLeft: '2px' }}>|</span>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
