'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComputerLoader() {
  const [loadingText, setLoadingText] = useState('');
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  const consoleLines = [
    '>> MURPHISM ACADEMY OS [v3.0.4]',
    '>> LOADING COGNITIVE ENGINES...',
    '>> SPINNING UP CREATIVE TECH CORES...',
    '>> INJECTING PREMIUM GOLD PALETTE...',
    '>> ESTABLISHING GLOBAL CAREER NETWORKS...',
    '>> ACCESS GRANTED. WE MORPH YOU.',
  ];

  useEffect(() => {
    // 1. Diagnostics Line-by-line simulation
    let currentLineIndex = 0;
    const textInterval = setInterval(() => {
      if (currentLineIndex < consoleLines.length) {
        setLoadingText((prev) => prev + (prev ? '\n' : '') + consoleLines[currentLineIndex]);
        currentLineIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 550);

    // 2. Progress Bar simulation (0 to 100%)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Auto hide after full load
          setTimeout(() => setShowLoader(false), 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 120);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.08,
            filter: 'blur(2vh)',
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050507] overflow-hidden"
        >
          {/* Subtle grid background */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(201, 162, 39, 0.5) 1px, transparent 1px)',
              backgroundSize: '2.5vw 2.5vw',
            }}
          />

          {/* CRT Screen Frame Scanline overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
              backgroundSize: '100% 0.4vh, 0.6vw 100%',
            }}
          />

          {/* Main loader panel */}
          <div 
            className="w-[85vw] md:w-[48vw] rounded-xl border border-[rgba(201,162,39,0.15)] p-[3vw] relative flex flex-col gap-[3.5vh]"
            style={{
              background: 'rgba(10, 8, 12, 0.85)',
              backdropFilter: 'blur(3vh)',
              WebkitBackdropFilter: 'blur(3vh)',
              boxShadow: '0 1vh 5vh rgba(0,0,0,0.8), 0 0 4vh rgba(124,58,237,0.06)'
            }}
          >
            {/* Corner Bracket decorations */}
            <div className="absolute top-[-0.1vh] left-[-0.1vh] w-[2vw] h-[2vw] border-t-[0.2vh] border-l-[0.2vh] border-[#c9a227]" />
            <div className="absolute top-[-0.1vh] right-[-0.1vh] w-[2vw] h-[2vw] border-t-[0.2vh] border-r-[0.2vh] border-[#c9a227]" />
            <div className="absolute bottom-[-0.1vh] left-[-0.1vh] w-[2vw] h-[2vw] border-b-[0.2vh] border-l-[0.2vh] border-[#c9a227]" />
            <div className="absolute bottom-[-0.1vh] right-[-0.1vh] w-[2vw] h-[2vw] border-b-[0.2vh] border-r-[0.2vh] border-[#c9a227]" />

            {/* Title / Logo */}
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-[1.8vh]">
              <div className="flex items-center gap-[1vw]">
                <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#c9a227] animate-pulse" />
                <span className="text-[1.3vh] tracking-[0.25em] text-[#b8b099] uppercase font-bold">MURPHISM COMP CORE</span>
              </div>
              <span className="text-[1.3vh] text-[#6b6459] font-mono">STATUS: BOOTING</span>
            </div>

            {/* Diagnostic Console Box */}
            <div 
              className="bg-black/60 rounded-md p-[2vw] h-[16vh] font-mono text-[1.4vh] md:text-[1.5vh] leading-[2.5vh] text-[#c9a227]/80 overflow-y-auto whitespace-pre-wrap select-none border border-white/5 shadow-inner"
              style={{ scrollbarWidth: 'none' }}
            >
              {loadingText}
              <span className="inline-block w-[1vw] h-[2vh] bg-[#c9a227] ml-[0.3vw] animate-pulse" />
            </div>

            {/* Progress Container */}
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex justify-between text-[1.3vh] font-mono tracking-wide">
                <span className="text-[#6b6459]">INITIALIZING CORE MODULES...</span>
                <span className="text-[#c9a227] font-bold">{Math.min(progress, 100)}%</span>
              </div>
              
              {/* Progress bar outer */}
              <div className="w-full h-[0.8vh] bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
                {/* Glowing progress inner */}
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#a855f7] to-[#c9a227]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  layoutId="progressBar"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
