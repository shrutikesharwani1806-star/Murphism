import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Calendar, Clock, ChevronLeft, ArrowRight, BookOpen, CheckCircle, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Career Options & Salary After B.Sc. Animation & Multimedia',
  description: 'Explore high-paying career opportunities, creative job roles, and salary expectations in India after completing a B.Sc. in Animation and Multimedia degree.',
  keywords: [
    'career after bsc animation and multimedia',
    'bsc animation scope and salary',
    'jobs after animation degree',
    'bsc animation colleges indore',
    'multimedia degree career options'
  ],
  openGraph: {
    title: 'Career Options & Salary After B.Sc. Animation & Multimedia',
    description: 'Explore high-paying career opportunities, creative job roles, and salary expectations in India after completing a B.Sc. in Animation and Multimedia degree.',
    type: 'article',
    url: 'https://murphism.com/blog/career-after-bsc-animation-multimedia',
  }
};

export default function CareerAfterBscAnimationMultimedia() {
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

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs font-bold px-3 py-1 rounded-full uppercase border border-[#c9a227]/30 bg-[#c9a227]/10 text-[#e8bf5a] tracking-wider mb-4 inline-block">
              Degree & Career Guide
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mt-3 mb-6">
              Career After B.Sc. Animation & Multimedia:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">
                Jobs, Salaries, & Scope
              </span>
            </h1>

            <div className="flex items-center justify-center gap-6 text-xs text-[#6b6459] font-medium border-y border-white/5 py-4 w-full">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#c9a227]" />
                August 20, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#c9a227]" />
                8 min read
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
                Choosing an undergraduate path in the creative domain can raise many questions for students and parents alike. 
                Is a creative degree stable? What are the actual job profiles? What are starting salary trends? 
                If you are considering a B.Sc. in Animation and Multimedia, you are entering one of the fastest-growing professional industries in the world.
              </p>
              
              <p>
                According to recent industry reports, the Indian AVGC (Animation, Visual Effects, Gaming, and Comic) sector is witnessing exponential growth. 
                With global production houses outsourcing complex post-production work to Indian studios, and a booming local gaming and OTT streaming ecosystem, 
                the demand for certified degree graduates is at an all-time high.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#c9a227]" />
                Top Career Roles in the AVGC Industry
              </h2>
              <p>
                Graduating with a B.Sc. in Animation & Multimedia does not restrict you to just one role. The curriculum equips you with a vast digital asset skillset, 
                enabling you to specialize in various parts of the production pipeline:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">1. 3D Modeling & Sculpting Artist</h4>
                  <p className="text-[#6b6459] text-xs">Create digital 3D objects, human characters, environmental structures, and mechanical designs using tools like Autodesk Maya and ZBrush.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">2. Character Animator (2D & 3D)</h4>
                  <p className="text-[#6b6459] text-xs">Bring static digital characters to life by rendering realistic movement, key expressions, walking cycles, and physics setups.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">3. Rigging & Technical Artist</h4>
                  <p className="text-[#6b6459] text-xs">Build the digital bone skeleton structure inside 3D characters, defining control nodes so animators can easily control movements.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">4. VFX Compositor & Matchmover</h4>
                  <p className="text-[#6b6459] text-xs">Blend live action video footage seamlessly with virtual CGI elements, particles, and green screen extractions inside Foundry Nuke.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">5. UI/UX & Game Environment Designer</h4>
                  <p className="text-[#6b6459] text-xs">Draft level layouts, textures, assets, and menu designs for mobile and console video game engines like Unreal Engine and Unity.</p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Salary Expectations: Freshers vs Experienced Professionals
              </h2>
              <p>
                Salaries in the creative sector scale rapidly with your portfolio strength, technical mastery, and years of experience.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-left border-collapse border border-white/5">
                  <thead>
                    <tr className="bg-white/5 text-white">
                      <th className="p-3 border border-white/5">Job Profile</th>
                      <th className="p-3 border border-white/5">Fresher Salary (p.a.)</th>
                      <th className="p-3 border border-white/5">Mid-Level Salary (3-5 Years)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-white/5 font-bold">3D Modeling Artist</td>
                      <td className="p-3 border border-white/5">₹3.0L - ₹4.5L</td>
                      <td className="p-3 border border-white/5">₹6.0L - ₹9.0L</td>
                    </tr>
                    <tr className="bg-white/[0.01]">
                      <td className="p-3 border border-white/5 font-bold">VFX Compositor</td>
                      <td className="p-3 border border-white/5">₹3.5L - ₹5.0L</td>
                      <td className="p-3 border border-white/5">₹7.0L - ₹11.0L</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-white/5 font-bold">3D Animator</td>
                      <td className="p-3 border border-white/5">₹3.2L - ₹4.8L</td>
                      <td className="p-3 border border-white/5">₹6.5L - ₹10.0L</td>
                    </tr>
                    <tr className="bg-white/[0.01]">
                      <td className="p-3 border border-white/5 font-bold">Game Assets Designer</td>
                      <td className="p-3 border border-white/5">₹4.0L - ₹6.0L</td>
                      <td className="p-3 border border-white/5">₹8.0L - ₹14.0L</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Why a UGC-Recognized Degree Matters
              </h2>
              <p>
                While crash certificates teach you basic tools, a B.Sc. degree offers a comprehensive academic foundation. 
                Our degree program at Murphism Academy is offered in affiliation with **Renaissance University, Indore**, which is fully UGC-recognized. 
                This gives students two distinct advantages:
              </p>
              <ul className="space-y-3.5 pl-4 border-l-2 border-[#c9a227]/30">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-[#c9a227] mt-1 flex-shrink-0" />
                  <span><strong>Global Validity:</strong> Enables you to apply for government jobs, master&apos;s programs (M.Sc. or MBA), and pursue overseas education.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-[#c9a227] mt-1 flex-shrink-0" />
                  <span><strong>Structural Pipeline:</strong> Instead of rushing, students spend three dedicated years understanding classic art sketching, vector layouts, 3D texturing, visual dynamics, and virtual game design.</span>
                </li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                How Murphism Academy Secures Your Career
              </h2>
              <p>
                Many traditional colleges teach only old theories. At Murphism, our curriculum is engineered alongside active studio professionals. 
                We combine the academic rigor of Renaissance University with the hands-on environment of a commercial media agency.
              </p>
              <p>
                From mandatory corporate internships in the sixth semester to dedicated portfolio-building review sessions, 
                we ensure our graduates step out of the classroom directly into studio placement interviews.
              </p>
            </article>

            {/* Right Column: Sticky Form */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <CourseEnrollmentForm defaultCourseName="B.Sc. in Animations & Multimedia" accentColor={accentColor} />
              
              <div className="p-6 rounded-2xl border border-white/5 bg-[#0f0e0b]">
                <h3 className="font-bold text-white text-base mb-3 flex items-center gap-1.5">
                  <HelpCircle className="w-5 h-5 text-[#c9a227]" /> Have Eligibility Queries?
                </h3>
                <p className="text-xs text-[#6b6459] leading-relaxed mb-4">
                  Candidates who have cleared 10+2 from any stream (Science, Commerce, or Arts) are fully eligible to apply for this 3-year UGC approved degree program.
                </p>
                <Link href="/bsc-animation-multimedia" className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a227] hover:text-white transition-colors">
                  View Degree Details <ArrowRight className="w-4 h-4" />
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
