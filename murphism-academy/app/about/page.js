'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CircularReasons from '@/components/CircularReasons';

export default function AboutPage() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Background glow layers */}
      <div 
        className="absolute top-[20vh] left-[-10vw] w-[45vw] h-[45vw] rounded-full blur-[18vh] opacity-30 pointer-events-none"
        style={{ background: 'rgba(124, 58, 237, 0.08)' }}
      />
      <div 
        className="absolute bottom-[20vh] right-[-10vw] w-[45vw] h-[45vw] rounded-full blur-[18vh] opacity-35 pointer-events-none"
        style={{ background: 'rgba(201, 162, 39, 0.06)' }}
      />

      {/* ── ABOUT HERO SECTION ── */}
      <section className="pt-[18vh] pb-[8vh] px-[4vw] relative z-10">
        <div className="max-w-[85vw] mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center mb-8"
          >
            {/* Tagline */}
            <span className="text-[#c9a227] text-[1.4vh] font-bold tracking-[0.25em] uppercase mb-[2.5vh] block">
              About Murphism Academy
            </span>
            
            {/* Main Headline */}
            <h1 className="text-white text-[5.5vw] md:text-[5.5vh] font-extrabold uppercase tracking-tight leading-none mb-[3.5vh] font-sans">
              We Do Not Just Teach<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a] drop-shadow-[0_0_1.5vh_rgba(201,162,39,0.15)]">
                We Morph You
              </span>
            </h1>

            {/* Separator */}
            <div className="w-[12vw] md:w-[6vh] h-[0.25vh] bg-[#c9a227] mb-[4vh]" />

            {/* Subtext */}
            <p className="text-[#b8b099] text-[2.8vw] md:text-[1.8vh] max-w-[60vw] leading-relaxed mb-[6vh] font-sans">
              Murphism Academy is a premier editorial creative and tech institution. We bridge the gap between academic theory and high-end industry placements by sculpting students into production-ready innovators.
            </p>
          </motion.div>

          {/* Interactive Circular Reasons Section */}
          <div className="w-full mb-12 relative z-10">
            <CircularReasons />
          </div>

          {/* ── QUOTE BLOCK ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full text-center py-[2vh] mt-12"
          >
            <p className="text-[4.5vw] md:text-[3.6vh] text-[#f0ece0] font-bold leading-tight mb-[2vh] font-serif italic">
              &ldquo;They came, we shaped,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a] font-black">
                they got placed.&rdquo;
              </span>
            </p>
            <p className="text-[#6b6459] text-[2vw] md:text-[1.3vh] tracking-[0.2em] uppercase font-mono">
              — The Murphism Promise
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
