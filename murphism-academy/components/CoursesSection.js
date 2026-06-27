'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import ComboBuilderSection from './ComboBuilderSection';

export const courses = [
  {
    slug: 'graphic-design',
    emoji: '🎨',
    title: 'Graphic Design',
    tagline: 'Visual Identity & Brand Mastery',
    accentColor: '#c9a227',
    duration: '6 Months',
    level: 'Beginner → Pro',
    highlights: ['Adobe Photoshop & Illustrator', 'Brand Identity Design', 'UI/UX Fundamentals', 'Social Media Graphics', 'Print & Digital Media', 'Portfolio Building'],
    description: 'Master visual communication from scratch. Learn industry tools, design theory, and build a portfolio that gets you hired.',
    image: '/courses/graphic-design.png',
  },
  {
    slug: 'website-development',
    emoji: '💻',
    title: 'Website Development',
    tagline: 'Build the Web of Tomorrow',
    accentColor: '#c9a227',
    duration: '6 Months',
    level: 'Beginner → Full Stack',
    highlights: ['HTML, CSS & JavaScript', 'React & Next.js', 'Node.js & Express', 'MongoDB & SQL', 'REST APIs', 'Deployment & DevOps'],
    description: 'Go from zero to full-stack developer. Build real projects, learn modern frameworks, and land your first dev job.',
    image: '/courses/web-development.png',
  },
  {
    slug: 'video-editing-vfx',
    emoji: '🎬',
    title: 'Video Editing & VFX',
    tagline: 'Cinematic Storytelling + Visual Effects',
    accentColor: '#b89020',
    duration: '6 Months',
    level: 'Beginner → Expert',
    isCombo: true,
    highlights: ['Adobe Premiere Pro', 'After Effects & Nuke', 'Motion Graphics & VFX', 'Color Grading', 'Compositing & Keying', 'Film & Ad Production'],
    description: 'The ultimate production bundle — master video editing, motion graphics, and visual effects. From raw footage to cinematic masterpieces with VFX integration.',
    image: '/courses/video-editing.png',
  },
  {
    slug: '3d-modelling',
    emoji: '🧊',
    title: '3D Design & Animation',
    tagline: 'Shape Worlds in 3 Dimensions',
    accentColor: '#c9a227',
    duration: '6 Months',
    level: 'Beginner → Advanced',
    highlights: ['3ds Max & Maya', 'ZBrush Sculpting', 'Substance Painter', 'CMD & Workflow', '3D Animation', 'Character Creator (CC)'],
    description: 'Master 3D design and animation from scratch. Learn 3ds Max, Maya, ZBrush, Substance Painter, CMD, animation, and Character Creator (CC) to build stunning 3D visual assets.',
    image: '/courses/3d-modelling.png',
  },
  {
    slug: 'specialization',
    emoji: '🌟',
    title: 'Specialization',
    tagline: 'Advanced Creative Specialization',
    accentColor: '#a08030',
    duration: '6 Months',
    level: 'Advanced',
    highlights: ['Portfolio Specialization', 'Advanced Production Tech', 'Industry Workflows', 'Mentorship Sessions', 'Studio Internship Prep', 'Final Demo Reel'],
    description: 'A dedicated 6-month specialization program designed to refine your skills, focus on a specific creative domain, and build a world-class professional portfolio.',
    image: '/courses/specialization.png',
  },
  {
    slug: 'ai-courses',
    emoji: '🤖',
    title: 'AI Courses',
    tagline: 'Master the Future of Technology',
    accentColor: '#a08030',
    duration: '2 Months',
    level: 'All Levels',
    highlights: ['Generative AI Tools', 'Prompt Engineering', 'AI for Design & Video', 'AI for Marketing', 'ChatGPT & Midjourney', 'Future-Ready Workflow'],
    description: 'Stay ahead of the curve. Learn how AI is transforming every creative industry and how to leverage it for your career.',
    isNew: true,
    image: '/courses/ai-courses.png',
  },
  {
    slug: 'vfx',
    emoji: '🌀',
    title: 'VFX',
    tagline: 'Visual Effects & Compositing',
    accentColor: '#c9a227',
    duration: '1 Month',
    level: 'Intermediate → Pro',
    highlights: ['After Effects & Nuke', 'Compositing & Keying', 'Motion Tracking', 'Particle Systems', 'CGI Integration', 'Film & Ad Production'],
    description: 'Intensive VFX crash course. Master compositing, motion tracking, and CGI integration — fast-track your way into the VFX industry.',
    image: '/courses/vfx.png',
  },
  {
    slug: 'bsc-animations-multimedia',
    emoji: '🎓',
    title: 'B.Sc. in Animations & Multimedia',
    tagline: 'Full Degree Program · 3 Years',
    accentColor: '#c9a227',
    duration: '3 Years',
    level: 'Degree Program',
    highlights: ['Animation Principles', '3D Modelling & Rigging', 'VFX & Compositing', 'Game Design', 'AI in Animation', 'Industry Internships'],
    description: 'Earn a recognized B.Sc. Degree in Animations & Multimedia. A comprehensive 3-year degree combining theory, practice, and real-world industry exposure.',
    isDegree: true,
    image: '/courses/bsc-animation.png',
  },
  {
    slug: 'diploma-animations-multimedia',
    emoji: '📜',
    title: 'Diploma in Animations & Multimedia',
    tagline: 'Full Diploma Program · 3 Years',
    accentColor: '#c9a227',
    duration: '3 Years',
    level: 'Diploma Program',
    highlights: ['Animation Principles', '3D Modelling & Rigging', 'VFX & Compositing', 'Game Design', 'AI in Animation', 'Industry Internships'],
    description: 'Earn a recognized Diploma in Animations & Multimedia. A comprehensive 3-year diploma combining theory, practice, and real-world industry exposure.',
    isDegree: false,
    isDiploma: true,
    image: '/courses/bsc-animation.png',
  },
];

// Helper to get distinct luxury styles for each card to prevent visual merging
const getCardStyles = (course, idx) => {
  const isAICard = course.slug === 'ai-courses';
  
  const backgrounds = [
    'linear-gradient(135deg, #0b0a08 0%, #15120e 100%)', // 0: Dark Charcoal
    'linear-gradient(135deg, #181410 0%, #221c15 100%)', // 1: Deep Bronze
    'linear-gradient(135deg, #0a0c0e 0%, #111518 100%)', // 2: Deep Navy/Slate
    'linear-gradient(135deg, #120916 0%, #1c1022 100%)', // 3: Deep Plum/Purple
    'linear-gradient(135deg, #091510 0%, #112219 100%)', // 4: Deep Forest
    'linear-gradient(135deg, #0d0c0a 0%, #171510 100%)', // 5: AI - Rich Obsidian Gold
    'linear-gradient(135deg, #1e1910 0%, #2a2215 100%)', // 6: Deep Amber
    'linear-gradient(135deg, #0d0d0f 0%, #16161a 100%)', // 7: Onyx Black
    'linear-gradient(135deg, #160f0f 0%, #241818 100%)', // 8: Crimson Black
  ];
  
  const bg = backgrounds[idx % backgrounds.length];
  
  if (isAICard) {
    return {
      bg,
      border: 'border-[rgba(201,162,39,0.25)]', // Brighter luxury gold border for AI card
      titleText: 'text-white',
      taglineText: 'text-[#c9a227]',
      descText: 'text-warm-muted',
      highlightBullet: 'text-[#c9a227]',
      highlightText: 'text-[#9c9380]',
      badgeText: 'text-[#9c9380]',
      badgeIcon: 'text-[#c9a227]',
      durationBadge: 'text-[#c9a227] bg-[#c9a227]/10 border-[#c9a227]/20',
      btnBg: 'bg-[#c9a227] hover:bg-[#b08d20] text-black shadow-[#c9a227]/20',
    };
  }
  
  return {
    bg,
    border: 'border-[rgba(201,162,39,0.12)]',
    titleText: 'text-white',
    taglineText: 'text-[#c9a227]',
    descText: 'text-warm-muted',
    highlightBullet: 'text-[#c9a227]',
    highlightText: 'text-[#9c9380]',
    badgeText: 'text-[#9c9380]',
    badgeIcon: 'text-[#c9a227]',
    durationBadge: 'text-[#c9a227] bg-[#c9a227]/10 border-[#c9a227]/20',
    btnBg: 'bg-[#c9a227] hover:bg-[#b08d20] text-black shadow-[#c9a227]/20',
  };
};

function CourseCard({ course, idx, total, isMobile, parentScrollYProgress }) {
  const router = useRouter();
  const containerRef = useRef(null);
  const styles = getCardStyles(course, idx);

  // Scale only — NO opacity animation to prevent transparent card text bleed-through
  const scale = parentScrollYProgress
    ? useTransform(
        parentScrollYProgress,
        [0, idx / total, (idx + 1) / total, 1],
        [1, 1, 0.97, 0.94]
      )
    : 1;

  // On Mobile/Tablet: Render as a sticky stacking list that works beautifully on small screens
  if (isMobile) {
    return (
      <motion.div
        onClick={() => router.push(`/courses/${course.slug}`)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full rounded-3xl ${styles.border} p-6 flex flex-col gap-6 items-center relative overflow-hidden cursor-pointer`}
        style={{
          position: 'sticky',
          top: `calc(8vh + ${idx * 32}px)`,
          willChange: 'transform',
          transformOrigin: 'top center',
          background: styles.bg,
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
          marginBottom: '3vh',
          isolation: 'isolate',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          backgroundClip: 'padding-box',
        }}
      >
        {/* Accent blur gradient glow */}
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[200px] rounded-full blur-[60px] opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${course.accentColor} 0%, transparent 80%)`,
          }}
        />

        {/* Left Column: Details */}
        <div className="flex-1 flex flex-col justify-between w-full relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-2xl">{course.emoji}</span>
              <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded border ${styles.durationBadge}`}>
                {course.duration}
              </span>
              {course.isNew && (
                <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-red-950/40 text-red-400 border border-red-900/30">
                  New
                </span>
              )}
              {course.isCombo && (
                <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-blue-950/40 text-blue-400 border border-blue-900/30">
                  Combo
                </span>
              )}
              {course.isDegree && (
                <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-purple-950/40 text-purple-400 border border-purple-900/30">
                  Degree
                </span>
              )}
              {course.isDiploma && (
                <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-amber-950/40 text-amber-400 border border-amber-900/30">
                  Diploma
                </span>
              )}
            </div>
            
            <h3 className={`text-2xl font-extrabold tracking-tight mb-2 ${styles.titleText}`}>
              {course.title}
            </h3>
            
            <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${styles.taglineText}`}>
              {course.tagline}
            </p>
            
            <p className={`text-sm leading-relaxed mb-6 ${styles.descText}`}>
              {course.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
              {course.highlights.slice(0, 4).map((h) => (
                <div key={h} className={`text-xs flex items-center gap-2 ${styles.highlightText}`}>
                  <span className={`text-[10px] ${styles.highlightBullet}`}>✦</span>
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row inside card */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 mt-auto">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className={`flex items-center gap-1.5 text-xs ${styles.badgeText}`}>
                <svg className={`w-3.5 h-3.5 ${styles.badgeIcon}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {course.duration}
              </div>
              <div className={`flex items-center gap-1.5 text-xs ${styles.badgeText}`}>
                <svg className={`w-3.5 h-3.5 ${styles.badgeIcon}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                Certified
              </div>
            </div>

            {/* View Course Button */}
            <Link href={`/courses/${course.slug}`}>
              <button
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all duration-300 ${styles.btnBg}`}
              >
                View Course <ArrowRight size={13} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full flex justify-center relative z-10">
          <div 
            className="relative rounded-xl overflow-hidden border border-white/5 shadow-2xl w-full aspect-[4/3] group"
            style={{
              background: 'rgba(0,0,0,0.4)',
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    );
  }

  // Desktop: simple sticky stacking — each card sticks and next one peeks from below
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'sticky',
        top: `calc(8vh + ${idx * 48}px)`,
        willChange: 'transform',
        transformOrigin: 'top center',
        background: styles.bg,
        boxShadow: '0 40px 100px -15px rgba(0, 0, 0, 0.95), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
        minHeight: '55vh',
        marginBottom: '2vh',
        isolation: 'isolate',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        backgroundClip: 'padding-box',
      }}
      className={`w-full rounded-3xl ${styles.border} p-10 flex flex-row gap-8 items-center relative overflow-hidden cursor-pointer`}
      onClick={() => router.push(`/courses/${course.slug}`)}
    >
      {/* Accent blur gradient glow */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${course.accentColor} 0%, transparent 80%)`,
        }}
      />

      {/* Left Column: Details */}
      <div className="flex-1 flex flex-col justify-between h-full z-10 w-full">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-2xl">{course.emoji}</span>
            <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded border ${styles.durationBadge}`}>
              {course.duration}
            </span>
            {course.isNew && (
              <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-red-950/40 text-red-400 border border-red-900/30">
                New
              </span>
            )}
            {course.isCombo && (
              <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-blue-950/40 text-blue-400 border border-blue-900/30">
                Combo
              </span>
            )}
            {course.isDegree && (
              <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-purple-950/40 text-purple-400 border border-purple-900/30">
                Degree
              </span>
            )}
            {course.isDiploma && (
              <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-amber-950/40 text-amber-400 border border-amber-900/30">
                Diploma
              </span>
            )}
          </div>
          
          <h3 className={`text-3xl font-extrabold tracking-tight mb-2 ${styles.titleText}`}>
            {course.title}
          </h3>
          
          <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${styles.taglineText}`}>
            {course.tagline}
          </p>
          
          <p className={`text-base leading-relaxed mb-6 ${styles.descText}`}>
            {course.description}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
            {course.highlights.slice(0, 4).map((h) => (
              <div key={h} className={`text-xs flex items-center gap-2 ${styles.highlightText}`}>
                <span className={`text-[10px] ${styles.highlightBullet}`}>✦</span>
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row inside card */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 mt-auto">
          {/* Badges */}
          <div className="flex gap-4">
            <div className={`flex items-center gap-1.5 text-xs ${styles.badgeText}`}>
              <svg className={`w-4 h-4 ${styles.badgeIcon}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {course.duration}
            </div>
            <div className={`flex items-center gap-1.5 text-xs ${styles.badgeText}`}>
              <svg className={`w-4 h-4 ${styles.badgeIcon}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              Certified
            </div>
            <div className={`flex items-center gap-1.5 text-xs ${styles.badgeText}`}>
              <svg className={`w-4 h-4 ${styles.badgeIcon}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              24/7 Support
            </div>
          </div>

          {/* View Course Button */}
          <Link href={`/courses/${course.slug}`}>
            <button
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all duration-300 ${styles.btnBg}`}
            >
              View Course <ArrowRight size={13} />
            </button>
          </Link>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-[42%] flex justify-center z-10">
        <div 
          className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl w-full aspect-[4/3] group"
          style={{
            background: 'rgba(0,0,0,0.4)',
            boxShadow: '0 20px 45px -10px rgba(0,0,0,0.9)',
          }}
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('individual');
  const parentRef = useRef(null);

  // Capture parent scroll progress
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="courses" className="section-pad relative" style={{ background: 'rgba(5,5,5,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', overflow: 'visible' }}>
      {/* Top rule separator */}
      <div className="w-full h-px mb-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.15), transparent)' }} />

      {/* Header */}
      <div className="max-w-[1360px] mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="label-tag">Our Programs</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#f0ece0] mx-auto">
            Courses That
            <br />
            <span className="text-gold">Transform Careers</span>
          </h2>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
          <p className="text-warm-muted text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Industry-aligned programs designed by working professionals. Experience our immersive learning.
          </p>
 
          {/* Tabs Toggler */}
          <div className="flex gap-2 mt-8 bg-white/5 p-1 rounded-full border border-white/5">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'individual'
                  ? 'bg-[#c9a227] text-black shadow-lg shadow-[#c9a227]/10'
                  : 'text-warm-muted hover:text-white'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setActiveTab('combo')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 ${
                activeTab === 'combo'
                  ? 'bg-[#c9a227] text-black shadow-lg shadow-[#c9a227]/10'
                  : 'text-[#e8bf5a] hover:text-white border border-[#c9a227]/40 shadow-[0_0_12px_rgba(201,162,39,0.15)]'
              }`}
            >
              <span className="text-[10px]">✦</span> Custom Career Builder
            </button>
          </div>
        </motion.div>
      </div>
 
      {activeTab === 'individual' ? (
        /* Cards Stacking Container */
        <div 
          ref={parentRef}
          className="max-w-[1360px] mx-auto px-6 flex flex-col relative" 
          style={{ overflow: 'visible' }}
        >
          {courses.map((course, idx) => (
            <CourseCard
              key={course.slug}
              course={course}
              idx={idx}
              total={courses.length}
              isMobile={isMobile}
              parentScrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-[1360px] mx-auto px-6 relative">
          <ComboBuilderSection hideHeader={true} />
        </div>
      )}
    </section>
  );
}
