'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Award, CheckCircle, ArrowLeft, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { courses } from '@/components/CoursesSection';

export default function CoursesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % courses.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  // Enable keyboard arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen relative overflow-hidden flex flex-col justify-between">
      <Navbar />

      {/* Ambient background glows */}
      <div 
        className="absolute top-[20vh] left-[-10vw] w-[45vw] h-[45vw] rounded-full blur-[18vh] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201, 162, 39, 0.08) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[20vh] right-[-10vw] w-[45vw] h-[45vw] rounded-full blur-[18vh] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)' }}
      />

      {/* Main Container */}
      <div className="flex-grow flex flex-col justify-center pt-[15vh] pb-[6vh] relative z-10 w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="label-tag">Interactive Catalog</div>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-3">
              Explore Our <span className="text-gold">Programs</span>
            </h1>
            <div className="divider-gold" style={{ margin: '0.75rem auto', width: '50px' }} />
            <p className="text-warm-muted text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
              Use the arrows or click on any card to rotate the 3D gallery. Select a course to view details or enroll.
            </p>
          </motion.div>
        </div>

        {/* 3D Arc Carousel Section */}
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center min-h-[480px] md:min-h-[580px]">
          {/* Left/Right Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-7xl mx-auto px-4 md:px-8 flex justify-between pointer-events-none z-40">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[rgba(201,162,39,0.3)] bg-black/60 text-[#c9a227] flex items-center justify-center pointer-events-auto transition-all duration-300 hover:bg-[#c9a227] hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(201,162,39,0.3)]"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[rgba(201,162,39,0.3)] bg-black/60 text-[#c9a227] flex items-center justify-center pointer-events-auto transition-all duration-300 hover:bg-[#c9a227] hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(201,162,39,0.3)]"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* 3D Scene Viewport */}
          <div 
            className="w-full max-w-5xl mx-auto flex items-center justify-center relative"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              height: isMobile ? '460px' : '520px',
            }}
          >
            {courses.map((course, idx) => {
              const N = courses.length;
              let diff = idx - activeIndex;

              // Wrapped diff calculation for infinite cyclic carousel
              if (diff < -N / 2) diff += N;
              if (diff > N / 2) diff -= N;

              const absDiff = Math.abs(diff);
              const isActive = idx === activeIndex;

              // Desktop positioning constants
              const rotateYVal = diff * -22;
              const translateXVal = diff * (isMobile ? 160 : 250);
              const translateYVal = absDiff * (isMobile ? 12 : 20);
              const translateZVal = absDiff * -150;
              const scaleVal = 1 - absDiff * 0.12;
              const opacityVal = absDiff > 2 ? 0 : 1 - absDiff * 0.35;

              return (
                <div
                  key={course.slug}
                  onClick={() => {
                    if (!isActive) setActiveIndex(idx);
                  }}
                  className={`absolute w-[280px] md:w-[325px] h-[390px] md:h-[470px] rounded-3xl overflow-hidden border flex flex-col justify-between transition-all duration-500 cursor-pointer select-none`}
                  style={{
                    transform: `translateX(${translateXVal}px) translateY(${translateYVal}px) translateZ(${translateZVal}px) rotateY(${rotateYVal}deg) scale(${scaleVal})`,
                    zIndex: 100 - absDiff,
                    opacity: opacityVal,
                    pointerEvents: absDiff > 2 ? 'none' : 'auto',
                    background: 'linear-gradient(135deg, rgba(15, 14, 11, 0.95) 0%, rgba(8, 7, 5, 0.98) 100%)',
                    borderColor: isActive ? 'rgba(201,162,39,0.45)' : 'rgba(201,162,39,0.12)',
                    boxShadow: isActive 
                      ? '0 30px 60px -15px rgba(0, 0, 0, 0.95), 0 0 30px rgba(201, 162, 39, 0.12)' 
                      : '0 15px 30px -10px rgba(0, 0, 0, 0.8)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Click Overlay for Side Cards */}
                  {!isActive && (
                    <div className="absolute inset-0 z-50 bg-transparent" />
                  )}

                  {/* Subtle Top Glow on Active Card */}
                  {isActive && (
                    <div 
                      className="absolute top-0 inset-x-0 h-1/2 pointer-events-none opacity-20 blur-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${course.accentColor || '#c9a227'} 0%, transparent 70%)`
                      }}
                    />
                  )}

                  {/* Course Image Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black/40 border-b border-white/5 flex-shrink-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1 items-center">
                      <span className="text-xl mr-1 select-none">{course.emoji}</span>
                      {course.isNew && (
                        <span className="text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded bg-red-950/70 text-red-400 border border-red-900/40">
                          New
                        </span>
                      )}
                      {course.isCombo && (
                        <span className="text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded bg-blue-950/70 text-blue-400 border border-blue-900/40">
                          Combo
                        </span>
                      )}
                      {course.isDegree && (
                        <span className="text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded bg-purple-950/70 text-purple-400 border border-purple-900/40">
                          Degree
                        </span>
                      )}
                      {course.isDiploma && (
                        <span className="text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded bg-amber-950/70 text-amber-400 border border-amber-900/40">
                          Diploma
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between overflow-hidden">
                    <div className="overflow-hidden">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#c9a227]">
                          {course.level || 'Professional'}
                        </span>
                        <span className="text-[9px] font-medium text-[#6b6459] flex items-center gap-0.5">
                          <Clock size={10} className="text-[#c9a227]" />
                          {course.duration}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-white mb-0.5 tracking-tight line-clamp-1">
                        {course.title}
                      </h3>

                      <p className="text-[9px] font-semibold uppercase tracking-wider text-[#c9a227]/80 mb-2">
                        {course.tagline}
                      </p>

                      <p className="text-warm-muted text-[11px] leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                        {course.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1">
                        {course.highlights.slice(0, 3).map((h) => (
                          <div key={h} className="text-[10px] text-[#9c9380] flex items-center gap-1.5">
                            <span className="text-[8px] text-[#c9a227]">✦</span>
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions Panel */}
                    <div className="border-t border-white/5 pt-3.5 mt-auto flex items-center justify-between gap-3">
                      <Link 
                        href={`/courses/${course.slug}`}
                        className={`text-[10px] font-bold tracking-wider text-[#b8b099] hover:text-[#c9a227] transition-colors flex items-center gap-1 ${!isActive ? 'pointer-events-none' : ''}`}
                      >
                        Details <BookOpen size={11} />
                      </Link>

                      <Link 
                        href={`/courses/${course.slug}#enroll`}
                        className={`px-3.5 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase flex items-center gap-1 transition-all duration-300 ${!isActive ? 'pointer-events-none opacity-60' : ''}`}
                        style={{
                          background: isActive ? '#c9a227' : 'rgba(201,162,39,0.15)',
                          color: isActive ? '#050505' : '#b8b099',
                          boxShadow: isActive ? '0 4px 12px rgba(201, 162, 39, 0.25)' : 'none',
                        }}
                      >
                        Enroll Now <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-4 z-40 relative">
            {courses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#c9a227]' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
