'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const fullText = "MURPHISM";
  const [displayedText, setDisplayedText] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let intervalId;
    let index = 0;
    
    // Delay typing slightly to let the black screen settle
    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < fullText.length) {
          const char = fullText[index];
          setDisplayedText((prev) => prev + char);
          index++;
        }
        
        if (index >= fullText.length) {
          clearInterval(intervalId);
          
          // Hold briefly, then fade out
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 400); // exit animation
          }, 500); // hold time after typing
        }
      }, 90); // typing speed per letter
    }, 150);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
          style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
        >
          {/* Subtle gold radial background glow */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#c9a227]/5 blur-[80px] pointer-events-none" />

          {/* Typing Container */}
          <div className="relative flex items-center justify-center">
            <h1 
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.25em] text-center select-none uppercase font-sans text-gold-shimmer"
              style={{
                letterSpacing: '0.25em',
                textShadow: '0 0 40px rgba(201, 162, 39, 0.25)'
              }}
            >
              {displayedText}
            </h1>
            
            {/* Typing cursor */}
            <span className="inline-block w-1.5 h-8 sm:h-12 md:h-16 ml-1 bg-[#e8bf5a] shadow-[0_0_15px_rgba(232,191,90,0.8)] animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
