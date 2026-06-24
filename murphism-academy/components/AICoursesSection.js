'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Terminal, Award, Shield, Users, ArrowUpRight } from 'lucide-react';

const aiModules = [
  {
    num: '01',
    title: 'Generative AI & Prompts',
    tagline: 'Master LLMs & Prompt Engineering',
    desc: 'Understand LLMs & Diffusion models. Master crafting complex prompts, chain-of-thought, and system instructions to control ChatGPT, Claude, and Llama with precision.',
    duration: '3 Weeks',
    badge: 'Core Foundation',
    icon: Terminal,
    accentColor: 'rgba(201, 162, 39, 0.15)',
  },
  {
    num: '02',
    title: 'AI for Designers & Creators',
    tagline: '10x Your Creative Output',
    desc: 'Integrate AI into Photoshop, Illustrator, Figma, and Midjourney. Learn to generate custom assets, upscale images, refine character details, and speed up client deliveries.',
    duration: '3 Weeks',
    badge: 'Creative Engine',
    icon: Award,
    accentColor: 'rgba(160, 128, 48, 0.12)',
  },
  {
    num: '03',
    title: 'AI for Developers & Engineers',
    tagline: 'Next-Gen Software Development',
    desc: 'Accelerate coding using GitHub Copilot, Cursor, and v0. Learn to generate boilerplate, debug complex logic, write tests, and build your own autonomous AI agents.',
    duration: '4 Weeks',
    badge: 'Development Pro',
    icon: Shield,
    accentColor: 'rgba(138, 105, 20, 0.1)',
  },
  {
    num: '04',
    title: 'AI Video & Animation Studio',
    tagline: 'Cinematic Creation from Text',
    desc: 'Generate, edit, and enhance cinematic videos using Runway Gen-2, Sora, Pika, and Stable Video Diffusion. Master AI lip-sync, video-to-video style transfers, and voicing.',
    duration: '4 Weeks',
    badge: 'VFX & Production',
    icon: Users,
    accentColor: 'rgba(201, 162, 39, 0.15)',
  },
];

export default function AICoursesSection() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 1024px is the laptop breakpoint
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  // Only animate on desktop/laptop
  const xDesktop = useTransform(scrollYProgress, [0, 1], ['280px', '0px']);

  return (
    <section
      ref={sectionRef}
      id="ai"
      className="relative w-full"
      style={{
        height: isMobile ? 'auto' : '120vh',
        background: '#050505',
        overflow: 'visible',
      }}
    >
      {isMobile ? (
        // Mobile & Tablet: Standard vertical layout with horizontal scrolling card row
        <div className="w-full flex flex-col py-16 px-6 gap-10 relative">
          {/* Glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#c9a227]/3 blur-[80px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'gradient(90deg, transparent, rgba(201,162,39,0.08), transparent)' }} />

          {/* Section Header */}
          <div className="w-full flex flex-col items-center text-center relative z-10">
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm"
                style={{ border: '1px solid rgba(201,162,39,0.2)', background: 'rgba(201,162,39,0.04)', color: '#c9a227' }}
              >
                🤖 Introducing New AI Courses
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#f0ece0] mb-2 font-sans">
              The Future is <span className="text-gold">AI-Powered</span>
            </h2>
            
            <p className="text-[#b8b099] text-xs max-w-xl mx-auto leading-relaxed font-sans">
              Every industry is being disrupted by AI. Learn to use the tools that are reshaping creative careers — before they reshape you.
            </p>
          </div>

          {/* Horizontal Scroll Track: Standard manual overflow scrolling */}
          <div className="w-full relative z-10 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 snap-x snap-mandatory">
            <div className="flex gap-6 w-max px-2">
              {aiModules.map((mod) => (
                <div
                  key={mod.title}
                  className="w-[280px] h-[390px] snap-center flex-shrink-0 rounded-2xl border border-white/5 bg-[#0b0a0c] p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group transition-all duration-500 hover:border-[#c9a227]/30"
                >
                  {/* Grid line bg overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1a1712_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                  {/* Glow layer */}
                  <div
                    className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-[60px] opacity-10 pointer-events-none transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle, ${mod.accentColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Top-right Circle Arrow Button */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#c9a227] group-hover:border-[#c9a227]">
                    <ArrowUpRight size={14} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>

                  {/* Card Header */}
                  <div className="flex justify-between items-center z-10 pr-10">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#c9a227]">
                      {"// MODULE "}{mod.num}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col justify-center my-4 z-10">
                    <span className="text-[8px] w-fit font-black tracking-widest uppercase px-2 py-0.5 rounded bg-[#c9a227]/5 text-[#c9a227] border border-[#c9a227]/10 mb-2">
                      {mod.badge}
                    </span>
                    <h3 className="text-white text-base font-extrabold tracking-tight mb-1 font-sans">
                      {mod.title}
                    </h3>
                    <p className="text-[#a89e84] text-[9px] font-semibold uppercase tracking-wider mb-3 font-mono">
                      {mod.tagline}
                    </p>
                    <p className="text-[#a1a1aa] text-xs leading-relaxed font-sans line-clamp-5">
                      {mod.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-center mt-auto z-10 pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-[#52525b] uppercase tracking-wider">Duration</span>
                      <span className="text-white text-xs font-bold font-mono">{mod.duration}</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center">
                      <mod.icon className="w-4 h-4 text-[#8a8a93]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Footer */}
          <div className="w-full flex justify-center relative z-10">
            <Link href="/courses/ai-courses">
              <button className="btn-gold">
                <span>Explore AI Courses</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // Desktop / Laptop: Horizontal scroll-linked tracking layout
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between py-10 md:py-16">
          {/* Glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a227]/3 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.08), transparent)' }} />

          {/* Section Header */}
          <div className="w-full flex flex-col items-center text-center px-6 relative z-10">
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm"
                style={{ border: '1px solid rgba(201,162,39,0.2)', background: 'rgba(201,162,39,0.04)', color: '#c9a227' }}
              >
                🤖 Introducing New AI Courses
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#f0ece0] mb-2 font-sans">
              The Future is <span className="text-gold">AI-Powered</span>
            </h2>
            
            <p className="text-[#b8b099] text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans">
              Every industry is being disrupted by AI. Learn to use the tools that are reshaping creative careers — before they reshape you.
            </p>
          </div>

          {/* Horizontal Scroll Track (Desktop only, scroll-linked) */}
          <div className="flex-grow w-full flex items-center relative z-10 overflow-hidden my-6">
            <motion.div 
              style={{ x: xDesktop }} 
              className="flex gap-6 px-6 md:px-24 w-full justify-center overflow-visible"
            >
              {aiModules.map((mod) => (
                <div
                  key={mod.title}
                  className="w-[280px] md:w-[310px] h-[390px] md:h-[430px] flex-shrink-0 rounded-2xl border border-white/5 bg-[#0b0a0c] p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group transition-all duration-500 hover:border-[#c9a227]/30"
                >
                  {/* Grid line bg overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1a1712_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                  {/* Glow layer */}
                  <div
                    className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-[60px] opacity-10 pointer-events-none transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle, ${mod.accentColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Top-right Circle Arrow Button */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#c9a227] group-hover:border-[#c9a227]">
                    <ArrowUpRight size={14} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>

                  {/* Card Header */}
                  <div className="flex justify-between items-center z-10 pr-10">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#c9a227]">
                      {"// MODULE "}{mod.num}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col justify-center my-4 z-10">
                    <span className="text-[8px] w-fit font-black tracking-widest uppercase px-2 py-0.5 rounded bg-[#c9a227]/5 text-[#c9a227] border border-[#c9a227]/10 mb-2">
                      {mod.badge}
                    </span>
                    <h3 className="text-white text-base md:text-lg font-extrabold tracking-tight mb-1 font-sans">
                      {mod.title}
                    </h3>
                    <p className="text-[#a89e84] text-[9px] font-semibold uppercase tracking-wider mb-3 font-mono">
                      {mod.tagline}
                    </p>
                    <p className="text-[#a1a1aa] text-xs leading-relaxed font-sans line-clamp-5">
                      {mod.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-center mt-auto z-10 pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-[#52525b] uppercase tracking-wider">Duration</span>
                      <span className="text-white text-xs font-bold font-mono">{mod.duration}</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center">
                      <mod.icon className="w-4 h-4 text-[#8a8a93]" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Section Footer */}
          <div className="w-full flex flex-col items-center px-6 gap-4 relative z-10">
            <div className="flex justify-center">
              <Link href="/courses/ai-courses">
                <button className="btn-gold">
                  <span>Explore AI Courses</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
