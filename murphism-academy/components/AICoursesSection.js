'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop',
  },
];

export default function AICoursesSection() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
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

  const xDesktop = useTransform(scrollYProgress, [0, 1], ['400px', '0px']);

  return (
    <section
      ref={sectionRef}
      id="ai"
      className="relative w-full"
      style={{
        height: isMobile ? 'auto' : '120vh',
        background: 'rgba(5,5,5,0.45)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        overflow: 'visible',
      }}
    >
      {isMobile ? (
        // Mobile & Tablet: Standard vertical layout with horizontal scrolling card row
        <div className="w-full flex flex-col py-10 px-6 gap-6 relative">
          {/* Glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#c9a227]/3 blur-[80px] pointer-events-none" />

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

            <h2 
              className="font-bold tracking-tight text-[#f0ece0] mb-3 font-sans"
              style={{ fontSize: '28px' }}
            >
              The Future is <span className="text-gold">AI-Powered</span>
            </h2>
            
            <p 
              className="text-[#b8b099] max-w-xl mx-auto leading-relaxed font-sans px-4"
              style={{ fontSize: '13.5px' }}
            >
              Every industry is being disrupted by AI. Learn to use the tools that are reshaping creative careers — before they reshape you.
            </p>
          </div>

          {/* Horizontal Scroll Track */}
          <div 
            ref={scrollContainerRef}
            className="w-full relative z-10 overflow-x-auto py-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
          >
            <div className="flex gap-8 w-max px-2">
              {aiModules.map((mod, idx) => (
                <div
                  key={`${mod.title}-${idx}`}
                  className="w-[280px] h-[390px] flex-shrink-0 rounded-2xl border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-[#c9a227]/30"
                  style={{
                    transform: idx % 2 === 0 ? 'translateY(-6px)' : 'translateY(6px)',
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={mod.image} 
                      alt={mod.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {/* Dark gradient overlay to ensure text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/35 pointer-events-none" />
                  </div>

                  {/* Top-right Circle Arrow Button - black circle with white diagonal arrow */}
                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black flex items-center justify-center z-20 shadow-md border border-white/10 transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>

                  {/* Card Header */}
                  <div className="z-10 p-5 pb-0">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#c9a227]">
                      {"// MODULE "}{mod.num}
                    </span>
                  </div>

                  {/* Card Body & Footer */}
                  <div className="z-10 p-5 mt-auto flex flex-col gap-2">
                    {/* Badge */}
                    <span className="text-[8px] w-fit font-black tracking-widest uppercase px-2 py-0.5 rounded bg-[#c9a227]/10 text-[#e8bf5a] border border-[#c9a227]/25 mb-0.5">
                      {mod.badge}
                    </span>

                    {/* Title */}
                    <p 
                      className="text-[#f0ece0] font-bold leading-snug"
                      style={{ fontSize: '20.5px', fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {mod.title}
                    </p>

                    {/* Tagline */}
                    <p className="text-[#c9a227] text-[11px] font-semibold uppercase tracking-wider font-mono">
                      {mod.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-[#b8b099] text-[13.5px] leading-relaxed font-sans line-clamp-3">
                      {mod.desc}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px my-1.5 bg-white/5" />

                    {/* Footer Row */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-mono text-[#6b6459] uppercase tracking-wider">Duration</span>
                        <span className="text-[#f0ece0] text-[11px] font-bold font-mono">{mod.duration}</span>
                      </div>
                      <div className="w-7 h-7 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center">
                        <mod.icon className="w-3.5 h-3.5 text-[#b8b099]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Footer */}
          <div className="w-full flex justify-center relative z-10">
            <Link href="/courses/ai-courses" className="btn-gold">
              <span>Explore AI Courses</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ) : (
        // Desktop / Laptop: Horizontal scroll-linked tracking layout
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between py-6 md:py-10">
          {/* Glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a227]/3 blur-[120px] pointer-events-none" />

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

            <h2 
              className="font-bold tracking-tight text-[#f0ece0] mb-3 font-sans"
              style={{ fontSize: '40px' }}
            >
              The Future is <span className="text-gold">AI-Powered</span>
            </h2>
            
            <p 
              className="text-[#b8b099] max-w-2xl mx-auto leading-relaxed font-sans"
              style={{ fontSize: '15.5px' }}
            >
              Every industry is being disrupted by AI. Learn to use the tools that are reshaping creative careers — before they reshape you.
            </p>
          </div>

          {/* Horizontal Scroll Track */}
          <div className="flex-grow w-full flex items-center relative z-10 overflow-visible my-4 py-8">
            <motion.div 
              style={{ x: xDesktop }} 
              className="flex gap-10 px-6 md:px-24 w-full justify-center overflow-visible py-8"
            >
              {aiModules.map((mod, idx) => (
                <div
                  key={mod.title}
                  className="w-[280px] md:w-[310px] h-[390px] md:h-[430px] flex-shrink-0 rounded-2xl border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-[#c9a227]/30"
                  style={{
                    transform: idx % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)',
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={mod.image} 
                      alt={mod.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {/* Dark gradient overlay to ensure text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/35 pointer-events-none" />
                  </div>

                  {/* Top-right Circle Arrow Button - black circle with white diagonal arrow */}
                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black flex items-center justify-center z-20 shadow-md border border-white/10 transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>

                  {/* Card Header */}
                  <div className="z-10 p-5 pb-0">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#c9a227]">
                      {"// MODULE "}{mod.num}
                    </span>
                  </div>

                  {/* Card Body & Footer */}
                  <div className="z-10 p-5 md:p-6 mt-auto flex flex-col gap-2">
                    {/* Badge */}
                    <span className="text-[8px] w-fit font-black tracking-widest uppercase px-2 py-0.5 rounded bg-[#c9a227]/10 text-[#e8bf5a] border border-[#c9a227]/25 mb-0.5">
                      {mod.badge}
                    </span>

                    {/* Title */}
                    <p 
                      className="text-[#f0ece0] font-bold leading-snug"
                      style={{ fontSize: '20.5px', fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {mod.title}
                    </p>

                    {/* Tagline */}
                    <p className="text-[#c9a227] text-[11px] font-semibold uppercase tracking-wider font-mono">
                      {mod.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-[#b8b099] text-[13.5px] leading-relaxed font-sans line-clamp-3">
                      {mod.desc}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px my-1.5 bg-white/5" />

                    {/* Footer Row */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-mono text-[#6b6459] uppercase tracking-wider">Duration</span>
                        <span className="text-[#f0ece0] text-[11px] font-bold font-mono">{mod.duration}</span>
                      </div>
                      <div className="w-7 h-7 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center">
                        <mod.icon className="w-3.5 h-3.5 text-[#b8b099]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Section Footer */}
          <div className="w-full flex flex-col items-center px-6 gap-4 relative z-10">
            <div className="flex justify-center">
              <Link href="/courses/ai-courses" className="btn-gold">
                <span>Explore AI Courses</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
