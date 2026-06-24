'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-24 md:py-36 border-t border-[rgba(201,162,39,0.08)]">
      {/* ── BACKGROUND FLOATING CARDS ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30">
        
        {/* Left Side Cards */}
        <div className="absolute left-[4%] top-[10%] w-[110px] md:w-[170px] aspect-[4/3] rotate-[-8deg] filter blur-[1px]">
          <Image
            src="/courses/graphic-design.png"
            alt="Graphic Design Card"
            fill
            sizes="170px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>
        <div className="absolute left-[16%] bottom-[12%] w-[120px] md:w-[180px] aspect-[4/3] rotate-[6deg] filter blur-[2px]">
          <Image
            src="/courses/web-development.png"
            alt="Web Development Card"
            fill
            sizes="180px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>
        <div className="absolute left-[2%] bottom-[35%] w-[90px] md:w-[140px] aspect-[4/3] rotate-[-12deg] filter blur-[3px]">
          <Image
            src="/courses/video-editing.png"
            alt="Video Editing Card"
            fill
            sizes="140px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>
        <div className="absolute left-[30%] top-[15%] w-[80px] md:w-[130px] aspect-[4/3] rotate-[4deg] filter blur-[3px] opacity-60">
          <Image
            src="/courses/bsc-animation.png"
            alt="BSc Animation Card"
            fill
            sizes="130px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>

        {/* Right Side Cards */}
        <div className="absolute right-[4%] top-[12%] w-[110px] md:w-[170px] aspect-[4/3] rotate-[8deg] filter blur-[1px]">
          <Image
            src="/courses/3d-modelling.png"
            alt="3D Modelling Card"
            fill
            sizes="170px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>
        <div className="absolute right-[15%] bottom-[15%] w-[120px] md:w-[180px] aspect-[4/3] rotate-[-6deg] filter blur-[2px]">
          <Image
            src="/courses/ai-courses.png"
            alt="AI Courses Card"
            fill
            sizes="180px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>
        <div className="absolute right-[2%] bottom-[38%] w-[95px] md:w-[140px] aspect-[4/3] rotate-[10deg] filter blur-[3px]">
          <Image
            src="/courses/vfx.png"
            alt="VFX Card"
            fill
            sizes="140px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>
        <div className="absolute right-[28%] bottom-[8%] w-[80px] md:w-[130px] aspect-[4/3] rotate-[-10deg] filter blur-[3px] opacity-60">
          <Image
            src="/courses/specialization.png"
            alt="Specialization Card"
            fill
            sizes="130px"
            className="object-cover rounded-xl border border-white/10"
          />
        </div>
      </div>

      {/* Center Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.06)_0%,rgba(124,58,237,0.03)_50%,transparent_100%)] blur-[40px] pointer-events-none" />

      {/* ── CONTENT AREA ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        
        {/* Main Title */}
        <h2 className="text-white font-sans text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.3] max-w-3xl">
          Transform Your Learning Journey <br className="hidden sm:inline" />
          Into A Career Breakthrough With
        </h2>

        {/* Bracket Highlight Box around Murphism */}
        <div className="mt-6 sm:mt-8 relative inline-flex items-center justify-center px-4 py-2">
          {/* Decorative Corner Bracket Lines exactly matching reference */}
          <div className="absolute inset-0 border border-[rgba(201,162,39,0.2)] bg-[rgba(201,162,39,0.05)] rounded-md" />
          
          {/* White/Gold Highlight Corners */}
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#e8bf5a]" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#e8bf5a]" />
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#e8bf5a]" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#e8bf5a]" />
          
          <span 
            className="relative z-10 px-8 py-2 text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.08em] text-[#e8bf5a] font-sans"
            style={{ textShadow: '0 0 15px rgba(232,191,90,0.15)' }}
          >
            Murphism
          </span>
        </div>

        {/* Explore Button */}
        <div className="mt-10 sm:mt-12">
          <Link href="/#courses">
            <button className="relative group overflow-hidden px-8 py-3.5 rounded-lg font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 bg-[#c05621] hover:bg-[#dd6b20] text-white shadow-[0_4px_15px_rgba(192,86,33,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,32,0.45)] hover:scale-105">
              {/* Shimmer gradient overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Courses <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
