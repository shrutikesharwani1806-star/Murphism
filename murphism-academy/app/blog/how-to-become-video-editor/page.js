import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Calendar, Clock, ChevronLeft, ArrowRight, UserCheck, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'How to Become a Professional Video Editor: 2026 Step-by-Step Guide',
  description: 'Want to start a career in video editing? Read our comprehensive, step-by-step roadmap to mastering video editing tools, building a showreel, and landing jobs.',
  keywords: [
    'how to become a video editor',
    'career guide video editing',
    'video editing roadmap 2026',
    'learn video editing skills',
    'video editing portfolio tips'
  ],
  openGraph: {
    title: 'How to Become a Professional Video Editor: 2026 Step-by-Step Guide',
    description: 'Want to start a career in video editing? Read our comprehensive, step-by-step roadmap to mastering video editing tools, building a showreel, and landing jobs.',
    type: 'article',
    url: 'https://murphism.com/blog/how-to-become-video-editor',
  }
};

export default function HowToBecomeVideoEditor() {
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
              Career Guide
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mt-3 mb-6">
              How to Become a Video Editor:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">
                A Step-by-Step Guide
              </span>
            </h1>

            <div className="flex items-center gap-6 text-xs text-[#6b6459] font-medium border-y border-white/5 py-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#c9a227]" />
                August 10, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#c9a227]" />
                7 min read
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
                In the era of visual communication, a professional video editor does not just cut clips—they serve as the secondary screenwriter. 
                They hold the power to dictate emotional pacing, build narrative tension, select the perfect soundtrack beats, and keep the audience glued to the screen.
              </p>
              
              <p>
                Whether you want to work as a freelance editor for global creators, join an advertising agency, or work in cinematic film post-production, 
                here is the complete step-by-step roadmap to becoming a professional video editor in 2026.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#c9a227]" />
                Step 1: Master the Core Video Editing Software
              </h2>
              <p>
                You cannot paint without a brush. Your first step is to learn the industry-standard post-production platforms:
              </p>
              <ul className="space-y-2.5 pl-4 border-l-2 border-white/5">
                <li><strong>Adobe Premiere Pro:</strong> The absolute industry powerhouse for advertising, corporate campaigns, and social media.</li>
                <li><strong>DaVinci Resolve:</strong> The gold standard for Hollywood color grading and grading workflows, now featuring a highly competitive editing timeline.</li>
                <li><strong>After Effects:</strong> Essential for adding motion designs, trackers, kinetic titles, and digital styling to your timelines.</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Step 2: Understand the Theory of Editing (Storytelling & Rhythm)
              </h2>
              <p>
                Knowing which hotkey cuts a clip is simple. Knowing <em>why</em> you should cut at a specific frame is the art. 
                Focus on developing your creative sensibilities:
              </p>
              <ul className="space-y-3 pl-4 list-disc marker:text-[#c9a227]">
                <li><strong>Pacing & Rhythm:</strong> Match your cuts to the rhythm of the background music, voice cadence, or emotional beats.</li>
                <li><strong>Continuity:</strong> Ensure character movement, lighting, and sound flow logically from one scene to the next.</li>
                <li><strong>The Kuleshov Effect:</strong> Learn how placing two unrelated shots next to each other creates a entirely new cognitive meaning.</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Step 3: Build a High-Caliber Showreel (Your Digital Resume)
              </h2>
              <p>
                In post-production, your degree is important, but your **showreel (portfolio)** is everything. 
                A showreel is a 1-to-2 minute compilation of your absolute best edits.
              </p>
              <div className="bg-[#0f0e0b] border border-white/5 rounded-2xl p-5 space-y-3.5">
                <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#c9a227] fill-[#c9a227]/10" /> Portfolio Design Tips:
                </h4>
                <div className="grid gap-3.5 text-xs">
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <span><strong>Hook Immediately:</strong> Put your most visually striking edit in the first 10 seconds. Directors make up their minds quickly.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <span><strong>Keep It Diverse:</strong> Include a mix of commercial ads, YouTube cuts, dialogue scenes, and motion graphic transitions.</span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <span><strong>Perfect Sound Design:</strong> Sound is 50% of the viewing experience. Build custom audio soundscapes in your clips.</span>
                  </div>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Step 4: Gain Real-World Client Work & Network
              </h2>
              <p>
                To kickstart your career, you need experience. Start by:
              </p>
              <ul className="space-y-3 pl-4 list-decimal marker:text-[#c9a227] marker:font-bold">
                <li><strong>Spec Edits:</strong> Download free cinematic assets online, edit custom commercials for famous brands (Nike, Apple), and post them to show your capabilities.</li>
                <li><strong>Freelance Platforms:</strong> Register on Upwork, Fiverr, and Behance to secure basic starter projects.</li>
                <li><strong>Agency Internships:</strong> Work as an assistant editor at local media agencies to learn structural backup procedures, asset management, and client feedback cycles.</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                How Murphism Academy Accelerates This Roadmap
              </h2>
              <p>
                Self-learning can take years of trial and error. At Murphism Academy in Indore, we package this roadmap into an intensive, 6-month hands-on training program. 
                Our students receive individual production workstations, learn directly from expert mentors, and work on real agency briefs. 
                By the time you graduate, you have a professional showreel reviewed by creative directors, giving you an immediate competitive advantage.
              </p>
            </article>

            {/* Right Column: Sticky Form */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <CourseEnrollmentForm defaultCourseName="Video Editing Specialization" accentColor={accentColor} />
              
              <div className="p-6 rounded-2xl border border-white/5 bg-[#0f0e0b]">
                <h3 className="font-bold text-white text-base mb-3">Ready to Start Editing?</h3>
                <p className="text-xs text-[#6b6459] leading-relaxed mb-4">
                  Check out our 6-month Video Editing & Motion Graphics Course. Learn Premiere Pro, After Effects, DaVinci Resolve, and Audition in a professional lab setup.
                </p>
                <Link href="/courses" className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a227] hover:text-white transition-colors">
                  Explore Courses Catalog <ArrowRight className="w-4 h-4" />
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
