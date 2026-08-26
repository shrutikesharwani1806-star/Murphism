import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Calendar, Clock, ChevronLeft, ArrowRight, Compare, HelpCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Premiere Pro vs After Effects: Which One Should You Learn First?',
  description: 'Confused between Adobe Premiere Pro and After Effects? Learn the key differences, timeline workflows, and which tool fits your video career path.',
  keywords: [
    'premiere pro vs after effects',
    'difference between premiere and after effects',
    'which video editing software to learn first',
    'adobe premiere pro indore',
    'learn motion graphics'
  ],
  openGraph: {
    title: 'Premiere Pro vs After Effects: Which One Should You Learn First?',
    description: 'Confused between Adobe Premiere Pro and After Effects? Learn the key differences, timeline workflows, and which tool fits your video career path.',
    type: 'article',
    url: 'https://murphism.com/blog/premiere-pro-vs-after-effects',
  }
};

export default function PremiereProVsAfterEffects() {
  const accentColor = '#c9a227'; // gold

  return (
    <main className="bg-[#050505] min-h-screen text-[#d4cebe] font-sans selection:bg-[#c9a227]/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#0f0e0b] to-[#050505]">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none bg-[#c9a227]/5" />
        
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-[#6b6459] hover:text-[#c9a227] mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Journal
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs font-bold px-3 py-1 rounded-full uppercase border border-[#c9a227]/30 bg-[#c9a227]/10 text-[#e8bf5a] tracking-wider mb-4 inline-block">
              Software Comparison
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mt-3 mb-6">
              Premiere Pro vs After Effects:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">
                Which Should You Learn First?
              </span>
            </h1>

            <div className="flex items-center gap-6 text-xs text-[#6b6459] font-medium border-y border-white/5 py-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#c9a227]" />
                August 15, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#c9a227]" />
                5 min read
              </span>
              <span>By Murphism Academy Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Article Body */}
            <article className="lg:col-span-7 text-[#b8b099] space-y-8 text-sm md:text-base leading-relaxed">
              <p>
                When stepping into the world of video post-production, Adobe is the industry-standard software ecosystem. 
                Two of its crown jewels, **Premiere Pro** and **After Effects**, are used by almost every professional studio, agency, and creator. 
                However, beginners often get confused: <em>Why are there two different programs? Aren&apos;t they both for video? Which one should I open first?</em>
              </p>
              
              <p>
                While they both deal with video files, their purposes, design philosophy, and workflow structures are entirely different. 
                Let&apos;s dissect these differences so you can select the correct starting point for your creative career.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Core Design Philosophies
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl border border-white/5 bg-[#0f0e0b]">
                  <h3 className="text-[#e8bf5a] font-bold text-base mb-2">Adobe Premiere Pro</h3>
                  <p className="text-xs text-[#6b6459] leading-relaxed">
                    A **Non-Linear Editor (NLE)** designed to assemble, sequence, and trim multiple video clips chronologically. 
                    It is built to handle long hours of raw footage, audio tracks, cuts, narrative pacing, and basic color correction.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-white/5 bg-[#0f0e0b]">
                  <h3 className="text-[#e8bf5a] font-bold text-base mb-2">Adobe After Effects</h3>
                  <p className="text-xs text-[#6b6459] leading-relaxed">
                    A **compositing and motion graphics program** designed to build visual effects, animations, title cards, and advanced particle designs. 
                    It works on a composition-by-composition layer hierarchy rather than a continuous timeline.
                  </p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                The Technical Showdown: How They Compare
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-left border-collapse border border-white/5">
                  <thead>
                    <tr className="bg-white/5 text-white">
                      <th className="p-3 border border-white/5">Feature</th>
                      <th className="p-3 border border-white/5">Adobe Premiere Pro</th>
                      <th className="p-3 border border-white/5">Adobe After Effects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-white/5 font-bold">Primary Purpose</td>
                      <td className="p-3 border border-white/5">Assembling, narrative editing, sequencing</td>
                      <td className="p-3 border border-white/5">Motion design, tracking, rotoscoping, VFX</td>
                    </tr>
                    <tr className="bg-white/[0.01]">
                      <td className="p-3 border border-white/5 font-bold">Timeline Layout</td>
                      <td className="p-3 border border-white/5">Horizontal track-based (lots of cuts sequentially)</td>
                      <td className="p-3 border border-white/5">Vertical layer-based (effects stacked on one clip)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-white/5 font-bold">Audio Handling</td>
                      <td className="p-3 border border-white/5">Excellent (multi-track mixer, track effects)</td>
                      <td className="p-3 border border-white/5">Minimal (no real-time multi-track mixer)</td>
                    </tr>
                    <tr className="bg-white/[0.01]">
                      <td className="p-3 border border-white/5 font-bold">Playback Speed</td>
                      <td className="p-3 border border-white/5">Real-time (optimized for quick playback reviews)</td>
                      <td className="p-3 border border-white/5">RAM previews (needs to cache frame-by-frame)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Which One Should You Learn First?
              </h2>
              <p>
                The answer depends on what you want to create:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-2.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Learn Premiere Pro First If:</strong> You want to edit YouTube videos, documentaries, wedding reels, short films, corporate interviews, or become a story editor. It has a friendlier learning curve, and you will see completed projects faster.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-2.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Learn After Effects First If:</strong> You are fascinated by visual effects, 3D title transitions, logo reveals, animated character typography, rotoscoping green screens, or game trailer motion graphics.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-[#c9a227]/20 bg-[#c9a227]/5 flex gap-4 items-start">
                <AlertCircle className="w-6 h-6 text-[#e8bf5a] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">The Professional Secret: Adobe Dynamic Link</h4>
                  <p className="text-xs text-[#b8b099] leading-relaxed">
                    You do not have to choose one forever. In professional studios, editors use **Adobe Dynamic Link**. 
                    This allows you to select a clip in your Premiere Pro timeline, send it to After Effects to apply complex visual tracking/effects, 
                    and have it update instantly in Premiere Pro without rendering intermediate files. They are two halves of the same brain.
                  </p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Our Training Method at Murphism Academy
              </h2>
              <p>
                At Murphism Academy in Indore, we do not teach software in isolation. Our curriculum bridges the gap between both programs. 
                Students learn the fundamentals of cutting and narrative structure in Premiere Pro first, 
                and then seamlessly transition into After Effects to add premium transitions, titles, and cinematic VFX assets. 
                This dual mastery is what makes our graduates highly sought after by agencies and production firms.
              </p>
            </article>

            {/* Right Column: Sticky Form */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <CourseEnrollmentForm defaultCourseName="Video Editing Specialization" accentColor={accentColor} />
              
              <div className="p-6 rounded-2xl border border-white/5 bg-[#0f0e0b]">
                <h3 className="font-bold text-white text-base mb-3 flex items-center gap-1.5">
                  <HelpCircle className="w-5 h-5 text-[#c9a227]" /> Need Career Advice?
                </h3>
                <p className="text-xs text-[#6b6459] leading-relaxed mb-4">
                  Unsure whether your creative strengths lie in motion graphics design or video editing? Contact our counselors for a personal assessment.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a227] hover:text-white transition-colors">
                  Contact Counselor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
