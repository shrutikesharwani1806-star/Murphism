'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Terminal, Compass, Award, Globe, Shield, Users } from 'lucide-react';

const aiModules = [
  {
    num: '01',
    title: 'Generative AI Fundamentals',
    tagline: 'Foundations of Large Language Models',
    desc: 'Understand how LLMs, diffusion models, and generative tools work at a practical level. Learn to command ChatGPT, Claude, and Llama for copywriting, brainstorming, and research.',
    duration: '2 Weeks',
    badge: 'Core Foundation',
    icon: Terminal,
    accentColor: '#c9a227',
  },
  {
    num: '02',
    title: 'Prompt Engineering Mastery',
    tagline: 'Control AI Output with Precision',
    desc: 'Master the art of crafting complex prompts for text, image, video, and code generation. Learn few-shot prompting, chain-of-thought, and system prompts to eliminate hallucination.',
    duration: '2 Weeks',
    badge: 'Advanced Logic',
    icon: Compass,
    accentColor: '#a08030',
  },
  {
    num: '03',
    title: 'AI for Designers & Creators',
    tagline: '10x Your Creative Output',
    desc: 'Integrate AI into Photoshop, Illustrator, Figma, and Stable Diffusion. Learn to generate custom assets, upscale images, refine character details, and speed up client deliveries.',
    duration: '3 Weeks',
    badge: 'Creative Engine',
    icon: Award,
    accentColor: '#8a6914',
  },
  {
    num: '04',
    title: 'AI for Marketers & Copywriters',
    tagline: 'Automate Content & Campaign Strategy',
    desc: 'Use AI to write high-converting copy, generate marketing campaign graphics, analyze customer sentiment, and automate weekly reports. Work with Jasper, Copy.ai, and custom GPTs.',
    duration: '3 Weeks',
    badge: 'Growth Hacking',
    icon: Globe,
    accentColor: '#c9a227',
  },
  {
    num: '05',
    title: 'AI for Developers & Engineers',
    tagline: 'Next-Gen Software Development',
    desc: 'Accelerate coding using GitHub Copilot, Cursor, and v0. Learn to generate boilerplate, debug complex logic, write tests, and build your own autonomous AI agents.',
    duration: '4 Weeks',
    badge: 'Development Pro',
    icon: Shield,
    accentColor: '#a08030',
  },
  {
    num: '06',
    title: 'AI Video & Animation Studio',
    tagline: 'Cinematic Creation from Text',
    desc: 'Generate, edit, and enhance cinematic videos using Runway Gen-2, Sora, Pika, and Stable Video Diffusion. Master AI lip-sync, video-to-video style transfers, and text-to-speech voicing.',
    duration: '4 Weeks',
    badge: 'VFX & Production',
    icon: Users,
    accentColor: '#8a6914',
  },
];

function AICourseCard({ mod, idx, scrollYProgress }) {
  // Configured rotations and offsets to create the fanned stack look
  const initialRotate = -10 - idx * 4;
  const initialX = -idx * 8;
  const initialY = idx * 8;
  const initialScale = 1 - idx * 0.025;

  const activeRotate = -4;
  const activeX = 0;
  const activeY = 0;
  const activeScale = 1.0;

  const flyStart = idx * 0.16;
  const flyEnd = flyStart + 0.12;

  const activeStart = (idx - 1) * 0.16;
  const activeEnd = activeStart + 0.12;

  let keys = [];
  let yVals = [];
  let xVals = [];
  let rVals = [];
  let sVals = [];
  let oVals = [];

  if (idx === 0) {
    keys = [0, 0.12, 1.0];
    yVals = [initialY, -800, -800];
    xVals = [initialX, -80, -80];
    rVals = [initialRotate, initialRotate - 12, initialRotate - 12];
    sVals = [1.0, 0.95, 0.95];
    oVals = [1.0, 0.0, 0.0];
  } else if (idx === 5) {
    keys = [0, activeStart, activeEnd, 1.0];
    yVals = [initialY, initialY, activeY, activeY];
    xVals = [initialX, initialX, activeX, activeX];
    rVals = [initialRotate, initialRotate, activeRotate, activeRotate];
    sVals = [initialScale, initialScale, activeScale, activeScale];
    oVals = [0.3, 0.3, 1.0, 1.0];
  } else {
    keys = [0, activeStart, activeEnd, flyStart, flyEnd, 1.0];
    yVals = [initialY, initialY, activeY, activeY, -800, -800];
    xVals = [initialX, initialX, activeX, activeX, -80, -80];
    rVals = [initialRotate, initialRotate, activeRotate, activeRotate, activeRotate - 12, activeRotate - 12];
    sVals = [initialScale, initialScale, activeScale, activeScale, 0.95, 0.95];
    oVals = [0.3, 0.3, 1.0, 1.0, 0.0, 0.0];
  }

  // Filter out duplicates for valid Framer Motion mapping
  const cleanKeys = [];
  const cleanY = [];
  const cleanX = [];
  const cleanR = [];
  const cleanS = [];
  const cleanO = [];

  for (let j = 0; j < keys.length; j++) {
    if (j > 0 && keys[j] === keys[j - 1]) {
      cleanKeys[cleanKeys.length - 1] = keys[j];
      cleanY[cleanY.length - 1] = yVals[j];
      cleanX[cleanX.length - 1] = xVals[j];
      cleanR[cleanR.length - 1] = rVals[j];
      cleanS[cleanS.length - 1] = sVals[j];
      cleanO[cleanO.length - 1] = oVals[j];
    } else {
      cleanKeys.push(keys[j]);
      cleanY.push(yVals[j]);
      cleanX.push(xVals[j]);
      cleanR.push(rVals[j]);
      cleanS.push(sVals[j]);
      cleanO.push(oVals[j]);
    }
  }

  const y = useTransform(scrollYProgress, cleanKeys, cleanY);
  const x = useTransform(scrollYProgress, cleanKeys, cleanX);
  const rotate = useTransform(scrollYProgress, cleanKeys, cleanR);
  const scale = useTransform(scrollYProgress, cleanKeys, cleanS);
  const opacity = useTransform(scrollYProgress, cleanKeys, cleanO);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: 50 - idx,
        position: 'absolute',
      }}
      className="w-[88vw] h-[88vw] max-w-[370px] max-h-[370px] aspect-square rounded-2xl border border-[rgba(201,162,39,0.15)] bg-gradient-to-br from-[#0c0b08] to-[#14120e] p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
    >
      {/* Cyberpunk details */}
      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#c9a227]/40" />
      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#c9a227]/40" />
      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#c9a227]/40" />
      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#c9a227]/40" />

      {/* Grid line bg overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1712_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      {/* Glow layer */}
      <div
        className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-[60px] opacity-20 pointer-events-none transition-all duration-500 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle, ${mod.accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Card Header */}
      <div className="flex justify-between items-center z-10">
        <span className="font-mono text-[9px] font-bold tracking-widest text-[#c9a227]">
          {"// MODULE "}{mod.num}
        </span>
        <span className="text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded bg-[#c9a227]/10 text-[#c9a227] border border-[#c9a227]/20">
          {mod.badge}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col justify-center my-3 z-10">
        <h3 className="text-white text-lg md:text-xl font-extrabold tracking-tight mb-1 font-sans">
          {mod.title}
        </h3>
        <p className="text-[#c9a227] text-[10px] font-bold uppercase tracking-wider mb-2 font-mono">
          {mod.tagline}
        </p>
        <p className="text-[#b8b099] text-xs md:text-sm leading-relaxed font-sans line-clamp-3 md:line-clamp-4">
          {mod.desc}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center mt-auto z-10 pt-3 border-t border-[rgba(201,162,39,0.08)]">
        <div className="flex flex-col">
          <span className="text-[8px] font-mono text-[#6b6459] uppercase tracking-wider">Duration</span>
          <span className="text-white text-xs font-bold font-mono">{mod.duration}</span>
        </div>
        <div className="w-8 h-8 rounded-lg border border-[rgba(201,162,39,0.2)] bg-[#0a0907] flex items-center justify-center">
          <mod.icon className="w-4 h-4 text-[#c9a227]" />
        </div>
      </div>
    </motion.div>
  );
}

export default function AICoursesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(Math.floor(latest / 0.16), 5);
    setActiveIndex(index);
  });

  return (
    <section
      ref={sectionRef}
      id="ai"
      className="relative w-full"
      style={{ height: '380vh', background: '#050505', overflow: 'visible' }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between py-10 md:py-16">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a227]/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.12), transparent)' }} />

        {/* Section Header */}
        <div className="w-full flex flex-col items-center text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center gap-2 text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm"
              style={{ border: '1px solid rgba(201,162,39,0.3)', background: 'rgba(201,162,39,0.05)', color: '#c9a227' }}
            >
              🤖 Introducing New AI Courses
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#f0ece0] mb-2 font-sans">
            The Future is <span className="text-gold">AI-Powered</span>
          </h2>
          
          <p className="text-[#b8b099] text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Every industry is being disrupted by AI. Learn to use the tools that are reshaping creative careers — before they reshape you.
          </p>
        </div>

        {/* Stack Container */}
        <div className="flex-1 w-full flex items-center justify-center relative py-4 z-10 overflow-visible">
          <div className="relative w-[88vw] h-[88vw] max-w-[370px] max-h-[370px] flex items-center justify-center overflow-visible">
            {aiModules.map((mod, idx) => (
              <AICourseCard key={mod.title} mod={mod} idx={idx} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="w-full flex flex-col items-center px-6 gap-4 relative z-10">
          {/* Pagination Indicators */}
          <div className="flex gap-2.5 justify-center mb-1">
            {aiModules.map((_, idx) => (
              <div
                key={idx}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: idx === activeIndex ? '20px' : '6px',
                  backgroundColor: idx === activeIndex ? '#c9a227' : 'rgba(201, 162, 39, 0.2)',
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link href="/courses/ai-courses">
              <button className="btn-gold">
                <span>Explore AI Courses</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
