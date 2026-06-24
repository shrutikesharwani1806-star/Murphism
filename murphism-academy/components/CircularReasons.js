'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, Compass, Globe, Shield, Terminal, Users } from 'lucide-react';

const reasons = [
  {
    num: '01',
    title: '100% Job Assistance',
    desc: "We don't just teach — we place. Our dedicated career cell connects you with top companies, designs your portfolio, and assists in landing your placement.",
    stat: '500+ Placed',
    icon: Award,
    image: '/reasons/job-assistance.png',
  },
  {
    num: '02',
    title: 'New AI-Powered Curriculum',
    desc: 'Cutting-edge artificial intelligence tools integrated across all creative and technical programs to multiply your design and coding output by 10x.',
    stat: 'AI-First Approach',
    icon: Terminal,
    image: '/reasons/ai-curriculum.png',
  },
  {
    num: '03',
    title: 'Foreign Work Exposures Provided',
    desc: 'Gain real international client project experience. Master global creative standards and build a resume that commands premium global value.',
    stat: 'Global Network',
    icon: Globe,
    image: '/reasons/foreign-exposure.png',
  },
  {
    num: '04',
    title: 'Accredited Degrees',
    desc: 'Earn certificates, professional diplomas, and degrees recognized by top global employers. Our Diploma program sets the academic standard.',
    stat: 'Govt. Recognized',
    icon: Shield,
    image: '/reasons/certifications.png',
  },
  {
    num: '05',
    title: 'Real-World Deliverables',
    desc: 'Every single course module is built around live projects, actual client briefs, and production-grade portfolios to ensure real-world readiness.',
    stat: '50+ Projects',
    icon: Compass,
    image: '/reasons/project-training.png',
  },
  {
    num: '06',
    title: 'Industry Expert Mentors',
    desc: 'Learn directly from active working professionals, senior developers, creators, and animators who live and breathe their craft every day.',
    stat: '20+ Mentors',
    icon: Users,
    image: '/reasons/expert-mentorship.png',
  },
];

export default function CircularReasons() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reasons.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const activeReason = reasons[activeIndex];
  const radius = isMobile ? 100 : 155; // Circular path radius

  return (
    <div className="w-full py-16 px-4 relative overflow-hidden rounded-3xl border border-[rgba(201,162,39,0.1)] bg-[#0b0a08]/80 backdrop-blur-xl">
      {/* Decorative background radial glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Lg: Span 5): Circular Navigation Dial */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center min-h-[380px] relative">
          
          {/* Circular path border */}
          <div 
            className="absolute rounded-full border border-[rgba(201,162,39,0.1)] pointer-events-none flex items-center justify-center"
            style={{ 
              width: `${radius * 2}px`, 
              height: `${radius * 2}px`,
              borderStyle: 'dashed'
            }}
          />

          {/* Central Active Marker */}
          <div className="w-24 h-24 rounded-full border border-[rgba(201,162,39,0.2)] bg-[#12100d] shadow-2xl flex flex-col items-center justify-center z-10 relative">
            <div className="absolute inset-0.5 rounded-full border border-[#c9a227]/10 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#6b6459] font-bold">Pillar</span>
            <span className="text-3xl font-black text-gold mt-0.5 font-mono leading-none">
              {activeReason.num}
            </span>
          </div>

          {/* Orbiting Images */}
          {reasons.map((r, i) => {
            // Calculate orbital position based on activeIndex offset
            // We subtract Math.PI / 2 to position the active index at the absolute top (90 deg)
            const angleRad = ((i - activeIndex) * (360 / reasons.length) * Math.PI) / 180 - Math.PI / 2;
            const isActive = i === activeIndex;

            const iconSize = isActive ? 84 : 56;
            const halfSize = iconSize / 2;

            return (
              <motion.div
                key={r.num}
                onClick={() => setActiveIndex(i)}
                className={`absolute cursor-pointer rounded-full overflow-hidden border transition-all duration-500 flex items-center justify-center bg-[#12100d] ${
                  isActive 
                    ? 'border-[#c9a227] shadow-xl shadow-[#c9a227]/10 z-20' 
                    : 'border-white/5 opacity-50 hover:opacity-90 z-10'
                }`}
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  // We position dynamically relative to parent center (50%)
                  left: `calc(50% + ${Math.cos(angleRad) * radius}px - ${halfSize}px)`,
                  top: `calc(50% + ${Math.sin(angleRad) * radius}px - ${halfSize}px)`,
                }}
                animate={{
                  scale: isActive ? 1.15 : 0.9,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ type: 'spring', stiffness: 70, damping: 15 }}
              >
                {/* Orbital content */}
                <div className="w-full h-full relative group">
                  <img 
                    src={r.image} 
                    alt={r.title} 
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-95 transition-all duration-300" 
                  />
                  {/* Subtle tint border overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-[#c9a227]/5' : 'bg-transparent'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column (Lg: Span 7): Details Panel */}
        <div className="lg:col-span-7 flex flex-col justify-between min-h-[380px] z-10">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Text details (Md: Span 7) */}
                <div className="md:col-span-7 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#6b6459] uppercase">
                      Pillar {activeReason.num} / {reasons.length}
                    </span>
                    <span className="h-px w-8 bg-[rgba(201,162,39,0.3)]" />
                    <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-[#c9a227]/10 text-[#c9a227] border border-[#c9a227]/20">
                      {activeReason.stat}
                    </span>
                  </div>

                  <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                    {activeReason.title}
                  </h3>

                  <p className="text-[#b8b099] text-sm md:text-base leading-relaxed mb-6">
                    {activeReason.desc}
                  </p>

                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-2.5 rounded-lg border border-[rgba(201,162,39,0.15)] bg-[#12100d]">
                      {/* Active Reason Icon */}
                      <activeReason.icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div className="text-left">
                      <h5 className="text-white text-xs font-black uppercase tracking-wider">Scaffold Quality</h5>
                      <p className="text-[#6b6459] text-[10px] font-mono">{activeReason.stat} guarantee</p>
                    </div>
                  </div>
                </div>

                {/* Active Image (Md: Span 5) */}
                <div className="md:col-span-5 flex justify-center">
                  <div 
                    className="relative w-full aspect-[4/5] max-w-[220px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                    style={{
                      boxShadow: '0 20px 45px -10px rgba(0,0,0,0.9)',
                    }}
                  >
                    <img 
                      src={activeReason.image} 
                      alt={activeReason.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[rgba(201,162,39,0.2)] bg-[#12100d] hover:bg-[#c9a227]/10 flex items-center justify-center transition-all duration-300 text-[#c9a227]"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[rgba(201,162,39,0.2)] bg-[#12100d] hover:bg-[#c9a227]/10 flex items-center justify-center transition-all duration-300 text-[#c9a227]"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
