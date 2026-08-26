import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Calendar, Clock, ChevronLeft, ArrowRight, Star, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Best Video Editing Course in Indore: The Ultimate 2026 Guide',
  description: 'Looking for the best video editing course in Indore? Discover what makes Murphism Academy the top institute for Premiere Pro, After Effects, and professional video editing training.',
  keywords: [
    'best video editing course in indore',
    'video editing institute in indore',
    'learn premiere pro indore',
    'after effects course indore',
    'video editing academy indore',
    'murphism academy indore'
  ],
  openGraph: {
    title: 'Best Video Editing Course in Indore: The Ultimate 2026 Guide',
    description: 'Looking for the best video editing course in Indore? Discover what makes Murphism Academy the top institute for Premiere Pro, After Effects, and professional video editing training.',
    type: 'article',
    url: 'https://murphism.com/blog/best-video-editing-course-indore',
  }
};

export default function BestVideoEditingCourseIndore() {
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
              Best Video Editing Course <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">
                in Indore
              </span>:<br />
              The Ultimate Guide
            </h1>

            <div className="flex items-center gap-6 text-xs text-[#6b6459] font-medium border-y border-white/5 py-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#c9a227]" />
                August 24, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#c9a227]" />
                6 min read
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
                In today&apos;s digital-first economy, video is king. From high-production commercials and cinema to TikToks, YouTube vlogs, and corporate advertisements, the demand for skilled post-production professionals has skyrocketed. 
                If you are living in Indore and looking to break into this creative and lucrative field, choosing the right training ground is your most critical first step.
              </p>
              
              <p>
                Indore, being a rapidly growing IT and educational hub in central India, has seen a surge in digital content production agencies, marketing firms, and training centers. 
                However, a generic animation crash course or a simple video stitching tutorial is no longer enough to land high-paying roles in 2026. 
                You need modern, studio-level software skills, storytelling instincts, and a professional portfolio.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#c9a227] fill-[#c9a227]/20" />
                What Makes a Video Editing Course the &quot;Best&quot;?
              </h2>
              <p>
                Before enrolling in any institute in Indore, ensure the program checks the following essential criteria:
              </p>
              <ul className="space-y-3.5 pl-4 border-l-2 border-[#c9a227]/30">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-[#c9a227] mt-1 flex-shrink-0" />
                  <span><strong>Comprehensive Tool Stack:</strong> The syllabus must include industry standards like Adobe Premiere Pro for editing, Adobe After Effects for motion design, and audio tools like Audition.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-[#c9a227] mt-1 flex-shrink-0" />
                  <span><strong>Practical Studio Workstations:</strong> Theoretical slides won&apos;t make you an editor. You need dedicated high-performance workstations with individual hands-on access.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-[#c9a227] mt-1 flex-shrink-0" />
                  <span><strong>Visual Storytelling Focus:</strong> Cutting video is easy; understanding pacing, flow, music beats, and narrative hook creation is the real craft.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-[#c9a227] mt-1 flex-shrink-0" />
                  <span><strong>Portfolio & Placement Support:</strong> Top studios hire based on your showreel, not your certificates. Choose an institute that mandates reel building and connects you with industry employers.</span>
                </li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Why Murphism Academy is Indore&apos;s Premium Choice
              </h2>
              <p>
                At Murphism Academy, we reject the old-school rote learning method. Our motto is <em>&quot;We do not just teach, we morph you.&quot;</em> 
                Our flagship Video Editing course is designed specifically to mirror studio workflows, transforming novices into job-ready professionals.
              </p>
              
              <div className="bg-[#0f0e0b] border border-white/5 rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#c9a227]" /> Key Course Highlights at Murphism:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <h4 className="font-bold text-white mb-1">Expert Mentorship</h4>
                    <p className="text-[#6b6459]">Learn from editors active in commercial production, visual design, and cinematic creation.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <h4 className="font-bold text-white mb-1">State-of-the-Art Labs</h4>
                    <p className="text-[#6b6459]">Work on powerful setups designed to render heavy composition projects smoothly.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <h4 className="font-bold text-white mb-1">Dynamic Link Workflow</h4>
                    <p className="text-[#6b6459]">Master the seamless synergy of Premiere Pro, After Effects, Photoshop, and AI tools.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <h4 className="font-bold text-white mb-1">100% Placement Guidance</h4>
                    <p className="text-[#6b6459]">Showcase your curated graduation reel directly to production houses and agencies.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                What You Will Master: The Curriculum Overview
              </h2>
              <p>
                Our video editing curriculum is divided into structural phases ensuring you cover the full creative pipeline:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">Phase 1: Adobe Premiere Pro Fundamentals</h4>
                  <p className="text-[#6b6459] text-xs">Importing assets, timeline settings, editing methods, keyboard shortcuts, transitions, audio mixing, and export codecs.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">Phase 2: After Effects & Motion Graphics</h4>
                  <p className="text-[#6b6459] text-xs">Compositing, keyframes, typography, speed ramps, rotoscoping, green screen extraction, trackers, and motion design assets.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">Phase 3: Color Grading & Sound Styling</h4>
                  <p className="text-[#6b6459] text-xs">Using Lumetri Color panels, scopes, color correction, creative LUT overlays, audio cleanup, dynamic sound effects, and Foley integration.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">Phase 4: Graduation Reel Assembly</h4>
                  <p className="text-[#6b6459] text-xs">Assembling your commercial editing reel, cinematic clips, social media ads, and portfolio reviews under direct industry guidance.</p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Career Scope After Completing the Course
              </h2>
              <p>
                Completing a professional course opens door to various roles in Indore, Mumbai, Bangalore, and globally:
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs md:text-sm text-center pt-2">
                <div className="p-4 rounded-xl border border-[#c9a227]/10 bg-[#c9a227]/5 text-[#e8bf5a] font-bold">
                  Corporate Video Editor
                </div>
                <div className="p-4 rounded-xl border border-[#c9a227]/10 bg-[#c9a227]/5 text-[#e8bf5a] font-bold">
                  Motion Graphics Artist
                </div>
                <div className="p-4 rounded-xl border border-[#c9a227]/10 bg-[#c9a227]/5 text-[#e8bf5a] font-bold">
                  Social Media Content Specialist
                </div>
                <div className="p-4 rounded-xl border border-[#c9a227]/10 bg-[#c9a227]/5 text-[#e8bf5a] font-bold">
                  Freelance Post-Producer
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Take Your Creative Leap Today
              </h2>
              <p>
                Video editing is not just about learning which buttons to press; it is about finding your storytelling voice. 
                At Murphism Academy, we provide you the tools, structural discipline, and professional network to help you launch a successful career.
              </p>
            </article>

            {/* Right Column: Sticky Form */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <CourseEnrollmentForm defaultCourseName="Video Editing Specialization" accentColor={accentColor} />
              
              <div className="p-6 rounded-2xl border border-white/5 bg-[#0f0e0b]">
                <h3 className="font-bold text-white text-base mb-3">Want a Free Demo?</h3>
                <p className="text-xs text-[#6b6459] leading-relaxed mb-4">
                  Schedule an offline session in Indore to tour our workstation facilities, interact with creative mentors, and look at live projects.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a227] hover:text-white transition-colors">
                  Request Info Form <ArrowRight className="w-4 h-4" />
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
