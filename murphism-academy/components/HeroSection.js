'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const studentAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=120&auto=format&fit=crop'
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    // Calculate normalized offset from center (-0.5 to 0.5)
    const x = (e.clientX / clientWidth) - 0.5;
    const y = (e.clientY / clientHeight) - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      style={{ background: '#050507' }}
    >
      {/* ── BACKGROUND ARTWORK ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Futuristic 3D Computer Workstation with parallax mouse interaction */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-0"
          animate={{
            x: `${mousePos.x * 2.5}vw`,
            y: `${mousePos.y * 2.5}vh`,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 60 }}
        >
          <img
            src="/3d-computer.png"
            alt="Futuristic Workstation"
            className="w-[80vw] h-auto max-w-[70vw] md:max-w-[50vw] object-contain opacity-[0.16]"
            style={{
              filter: 'blur(1.8vh)',
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>

        {/* Soft, non-neon radial glows in royal purple and warm gold */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[160px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.09) 0%, rgba(201, 162, 39, 0.03) 45%, transparent 70%)',
          }}
        />
        <div 
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-30"
          style={{ background: 'rgba(124, 58, 237, 0.04)' }}
        />
        <div 
          className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-30"
          style={{ background: 'rgba(201, 162, 39, 0.04)' }}
        />

        {/* Faint gold & purple diagonal intersecting lines + diamond frame */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-35" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="diagonal-gold" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="rgba(201, 162, 39, 0.0)" />
              <stop offset="50%" stopColor="rgba(201, 162, 39, 0.12)" />
              <stop offset="100%" stopColor="rgba(201, 162, 39, 0.0)" />
            </linearGradient>
            <linearGradient id="diagonal-purple" x1="100" y1="0" x2="0" y2="100">
              <stop offset="0%" stopColor="rgba(124, 58, 237, 0.0)" />
              <stop offset="50%" stopColor="rgba(124, 58, 237, 0.12)" />
              <stop offset="100%" stopColor="rgba(124, 58, 237, 0.0)" />
            </linearGradient>
          </defs>
          {/* Corner diagonals */}
          <line x1="0" y1="0" x2="100" y2="100" stroke="url(#diagonal-gold)" strokeWidth="0.15" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="url(#diagonal-purple)" strokeWidth="0.15" />
          
          {/* Centered Diamond Frames */}
          <path d="M 50 12 L 88 50 L 50 88 L 12 50 Z" stroke="rgba(201, 162, 39, 0.06)" fill="none" strokeWidth="0.15" />
          <path d="M 50 20 L 80 50 L 50 80 L 20 50 Z" stroke="rgba(124, 58, 237, 0.05)" fill="none" strokeWidth="0.15" />
        </svg>

        {/* Faint luxury dot grid flanking left & right */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(rgba(201, 162, 39, 0.7) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(circle at center, transparent 35%, black 75%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 75%)',
          }}
        />
      </div>

      {/* ── FLOATING STICKERS (LEFT & RIGHT) ── */}
      {/* 1. Left-Top: Edit Pen (Design) */}
      <motion.div
        animate={{ y: [0, -1.5, 0].map(val => `${val}vh`) }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[3vw] md:left-[5vw] top-[22vh] md:top-[26vh] z-20"
      >
        <div 
          className="w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] rounded-full flex items-center justify-center border border-[rgba(201,162,39,0.25)] relative transition-all duration-300 hover:border-[#c9a227] hover:scale-105"
          style={{
            background: 'rgba(10, 8, 12, 0.55)',
            backdropFilter: 'blur(1vh)',
            WebkitBackdropFilter: 'blur(1vh)',
            boxShadow: '0 0.6vh 2vh rgba(201,162,39,0.08), inset 0 0.15vh 0.3vh rgba(255,255,255,0.05)'
          }}
        >
          {/* Ambient Sticker Glow */}
          <div className="absolute inset-0 rounded-full bg-[rgba(201,162,39,0.03)] blur-[1vh]" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="w-[4vw] h-[4vw] md:w-[1.8vw] md:h-[1.8vw] text-[#c9a227]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </div>
      </motion.div>

      {/* 2. Left-Bottom: Camera (Creative/Media) */}
      <motion.div
        animate={{ y: [0, 1.3, 0].map(val => `${val}vh`) }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6vw] md:left-[8vw] top-[40vh] md:top-[44vh] z-20"
      >
        <div 
          className="w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] rounded-full flex items-center justify-center border border-[rgba(232,191,90,0.25)] relative transition-all duration-300 hover:border-[#e8bf5a] hover:scale-105"
          style={{
            background: 'rgba(10, 8, 12, 0.55)',
            backdropFilter: 'blur(1vh)',
            WebkitBackdropFilter: 'blur(1vh)',
            boxShadow: '0 0.6vh 2vh rgba(232,191,90,0.08), inset 0 0.15vh 0.3vh rgba(255,255,255,0.05)'
          }}
        >
          {/* Ambient Sticker Glow */}
          <div className="absolute inset-0 rounded-full bg-[rgba(232,191,90,0.03)] blur-[1vh]" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="w-[4vw] h-[4vw] md:w-[1.8vw] md:h-[1.8vw] text-[#e8bf5a]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
          </svg>
        </div>
      </motion.div>

      {/* 3. Right-Top: Angle Bracket (Web Dev/Code) */}
      <motion.div
        animate={{ y: [0, 1.5, 0].map(val => `${val}vh`) }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[3vw] md:right-[5vw] top-[24vh] md:top-[28vh] z-20"
      >
        <div 
          className="w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] rounded-full flex items-center justify-center border border-[rgba(168,85,247,0.25)] relative transition-all duration-300 hover:border-[#a855f7] hover:scale-105"
          style={{
            background: 'rgba(10, 8, 12, 0.55)',
            backdropFilter: 'blur(1vh)',
            WebkitBackdropFilter: 'blur(1vh)',
            boxShadow: '0 0.6vh 2vh rgba(168,85,247,0.08), inset 0 0.15vh 0.3vh rgba(255,255,255,0.05)'
          }}
        >
          {/* Ambient Sticker Glow */}
          <div className="absolute inset-0 rounded-full bg-[rgba(168,85,247,0.03)] blur-[1vh]" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="w-[4vw] h-[4vw] md:w-[1.8vw] md:h-[1.8vw] text-[#a855f7]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
      </motion.div>

      {/* 4. Right-Bottom: 3D Cube (3D Modeling/Animation) */}
      <motion.div
        animate={{ y: [0, -1.3, 0].map(val => `${val}vh`) }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[6vw] md:right-[8vw] top-[42vh] md:top-[46vh] z-20"
      >
        <div 
          className="w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw] rounded-full flex items-center justify-center border border-[rgba(192,132,252,0.25)] relative transition-all duration-300 hover:border-[#c084fc] hover:scale-105"
          style={{
            background: 'rgba(10, 8, 12, 0.55)',
            backdropFilter: 'blur(1vh)',
            WebkitBackdropFilter: 'blur(1vh)',
            boxShadow: '0 0.6vh 2vh rgba(192,132,252,0.08), inset 0 0.15vh 0.3vh rgba(255,255,255,0.05)'
          }}
        >
          {/* Ambient Sticker Glow */}
          <div className="absolute inset-0 rounded-full bg-[rgba(192,132,252,0.03)] blur-[1vh]" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="w-[4vw] h-[4vw] md:w-[1.8vw] md:h-[1.8vw] text-[#c084fc]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        </div>
      </motion.div>

      {/* ── HERO CONTENT CONTAINER ── */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-24 md:pt-36 pb-12">
        
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[#c9a227] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] opacity-65" />
          LEARN. BUILD. GET PLACED.
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] opacity-65" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-medium tracking-tight mb-6 leading-[1.25] text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl"
          style={{ 
            fontFamily: "var(--font-outfit), sans-serif"
          }}
        >
          Join The Growing Community Of Students <br className="hidden sm:inline" />
          Building Real-World Creative & Tech Careers With{' '}
          <span 
            className="px-3 py-1 mx-1 inline-block border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.05)] rounded-md text-white font-normal relative"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic'
            }}
          >
            {/* Extremely subtle interior glow for premium quality */}
            <span className="absolute inset-0 rounded-md bg-[rgba(124,58,237,0.03)] pointer-events-none" />
            Murphism
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#b8b099] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
        >
          We morph you into industry-ready creators and innovators. Get mentored by professionals, build production-grade portfolios, and secure placements at leading brands.
        </motion.p>

        {/* Student Avatar Stack & Placements Info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* Overlapping avatars */}
          <div className="flex -space-x-3 items-center">
            {studentAvatars.map((url, i) => (
              <div 
                key={i} 
                className="relative w-10 h-10 rounded-full overflow-hidden border border-[#050507]"
                style={{ zIndex: studentAvatars.length - i }}
              >
                <img
                  src={url}
                  alt={`Student ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Text */}
          <p className="text-sm md:text-base text-[#b8b099] tracking-wide">
            <span className="text-[#c9a227] font-semibold">500+ Students</span> learning in our industry-ready programs
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="/#courses">
            <button 
              className="relative group overflow-hidden px-8 py-4 rounded-full font-bold text-xs md:text-sm tracking-[0.12em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                color: '#050507',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 28px rgba(201,162,39,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
              }}
            >
              {/* Shimmer gradient overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Start Journey <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2 cursor-pointer"
        >
          <Link href="/#courses" className="flex flex-col items-center gap-2">
            <ArrowDown size={14} className="text-[#6b6459] animate-bounce" />
            <span
              className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6b6459] font-medium"
            >
              Scroll Down
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom thin line divider with golden-purple gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.1), rgba(124,58,237,0.1), transparent)' }}
      />
    </section>
  );
}
