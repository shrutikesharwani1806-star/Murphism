'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function AcademyNameSection() {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    textRef.current.style.setProperty('--mouse-x', `${x}px`);
    textRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!textRef.current) return;
    // Move glow off-screen when cursor leaves
    textRef.current.style.setProperty('--mouse-x', '-1000px');
    textRef.current.style.setProperty('--mouse-y', '-1000px');
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden py-14 md:py-24 select-none border-t border-[rgba(201,162,39,0.06)]"
      style={{ 
        background: '#050505'
      }}
    >
      <div className="w-full flex items-center justify-center overflow-hidden py-4">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] font-black tracking-tighter text-center leading-none select-none cursor-default outlined-text"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            '--mouse-x': '-1000px',
            '--mouse-y': '-1000px',
          }}
        >
          Murphism
        </motion.h1>
      </div>

      <style jsx>{`
        .outlined-text {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(201, 162, 39, 0.22);
          background: radial-gradient(
            circle 180px at var(--mouse-x) var(--mouse-y),
            rgba(232, 191, 90, 0.95) 0%,
            rgba(232, 191, 90, 0.4) 40%,
            rgba(201, 162, 39, 0.05) 75%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          transition: -webkit-text-stroke 0.4s ease;
        }
        
        .outlined-text:hover {
          -webkit-text-stroke: 1.5px rgba(232, 191, 90, 0.65);
        }
      `}</style>
    </section>
  );
}
