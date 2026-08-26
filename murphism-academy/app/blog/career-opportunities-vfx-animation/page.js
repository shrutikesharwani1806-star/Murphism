import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Calendar, Clock, ChevronLeft, ArrowRight, Film, HelpCircle, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Career Opportunities in VFX & Animation in India (2026)',
  description: 'Explore the booming VFX and animation industry in India. Learn about top career opportunities, salaries, and technical skills required to work in global studios.',
  keywords: [
    'career opportunities in vfx and animation',
    'vfx industry scope in india',
    'animation job market india',
    'top vfx studios in india',
    'learn compositing nuke'
  ],
  openGraph: {
    title: 'Career Opportunities in VFX & Animation in India (2026)',
    description: 'Explore the booming VFX and animation industry in India. Learn about top career opportunities, salaries, and technical skills required to work in global studios.',
    type: 'article',
    url: 'https://murphism.com/blog/career-opportunities-vfx-animation',
  }
};

export default function CareerOpportunitiesVfxAnimation() {
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
              Industry Report
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mt-3 mb-6">
              Career Opportunities in VFX and Animation:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">
                The Booming Indian Market
              </span>
            </h1>

            <div className="flex items-center gap-6 text-xs text-[#6b6459] font-medium border-y border-white/5 py-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#c9a227]" />
                August 05, 2026
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
                From the visual wonders of blockbusters like <em>RRR</em>, <em>Avatar</em>, and <em>Dune</em> to high-end video games and advertising commercials, 
                Visual Effects (VFX) and Animation have evolved from support tools to primary drivers of modern entertainment. 
                What makes this particularly exciting is that India has established itself as the global hub for AVGC outsourcing.
              </p>
              
              <p>
                With national policies actively supporting the animation, VFX, and gaming sectors, and international studios opening large facilities in major Indian cities, 
                a career in VFX and Animation is no longer an unconventional path—it is a highly stable, high-paying career track.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4 flex items-center gap-2">
                <Film className="w-5 h-5 text-[#c9a227]" />
                Why the Indian VFX Industry is Booming
              </h2>
              <p>
                Historically, Hollywood studios handled all post-production locally. Today, because of high technical capability and cost efficiencies, 
                a significant portion of global VFX production—including keying, rotoscoping, cleanups, tracking, and character assets—is sent to Indian studios. 
                Studios like **DNEG**, **Technicolor**, **MPC**, and **Framestore** operate massive production floors in India employing thousands of creative artists.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Core Specialization Streams in VFX
              </h2>
              <p>
                VFX is not a single job; it is a pipeline. Depending on your interest (technical vs artistic), you can specialize in:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">Rotoscoping & Prep Artist</h4>
                  <p className="text-[#6b6459] text-xs">The foundation of VFX. Trace frame-by-frame outlines of actors and remove unwanted rigs, wires, and cameras from raw footage.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">Matchmoving & Camera Tracking</h4>
                  <p className="text-[#6b6459] text-xs">Replicate the real-world physical camera path and lens distortion inside 3D software so virtual elements align perfectly in the video.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">FX & Dynamics Artist</h4>
                  <p className="text-[#6b6459] text-xs">Simulate dynamic elements like fires, massive explosions, fluid water simulations, crumbling debris, and smoke using tools like Houdini.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <h4 className="font-bold text-white text-sm mb-1">Compositing (Foundry Nuke)</h4>
                  <p className="text-[#6b6459] text-xs">The final, most critical stage. Layer and blend color passes, live shots, matte paintings, and lighting setups to construct a cohesive visual scene.</p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                Where Do VFX and Animation Graduates Work?
              </h2>
              <p>
                Job placements span across various sectors, demonstrating the flexibility of this creative skill set:
              </p>
              <ul className="space-y-3 pl-4 list-disc marker:text-[#c9a227]">
                <li><strong>Film Production Houses:</strong> Creating CGI environments, digital doubles, and magical creature setups.</li>
                <li><strong>Game Design Studios:</strong> Designing character meshes, environment levels, and lighting environments for consoles and mobile platforms.</li>
                <li><strong>Advertising Agencies:</strong> Producing animated product mockups, 3D commercial mockups, and corporate explainers.</li>
                <li><strong>E-Learning & Virtual Reality:</strong> Developing interactive 3D instructional guides, educational simulators, and VR architecture mockups.</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                How to Secure Placements at Top Studios
              </h2>
              <p>
                Global studios look for three things when recruiting fresh graduates:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-white/5 bg-[#0f0e0b]">
                  <h4 className="text-white font-bold text-xs mb-2">Technical Tool Mastery</h4>
                  <p className="text-[10px] text-[#6b6459] leading-relaxed">Understanding node structures inside Nuke, rigging parameters in Maya, and texture layers in Substance Painter.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-[#0f0e0b]">
                  <h4 className="text-white font-bold text-xs mb-2">Artistic Eye for Light</h4>
                  <p className="text-[10px] text-[#6b6459] leading-relaxed">Matching lighting angles, highlights, drop shadows, and visual depth of virtual elements with live camera settings.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-[#0f0e0b]">
                  <h4 className="text-white font-bold text-xs mb-2">Clean Workflows</h4>
                  <p className="text-[10px] text-[#6b6459] leading-relaxed">Organized node layouts, proper layer naming schemes, and maintaining clean rotoscope outlines.</p>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                The Murphism Advantage
              </h2>
              <p>
                At Murphism Academy, we provide standard UGC approved undergraduate degree structures alongside industrial VFX specializations. 
                Our lab setups replicate production room guidelines, ensuring students learn correct file naming structures, client feedback cycles, 
                and node management. Combined with our deep placement network across Indian media companies, we shape students to launch successful visual careers.
              </p>
            </article>

            {/* Right Column: Sticky Form */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <CourseEnrollmentForm defaultCourseName="B.Sc. in Animations & Multimedia" accentColor={accentColor} />
              
              <div className="p-6 rounded-2xl border border-white/5 bg-[#0f0e0b]">
                <h3 className="font-bold text-white text-base mb-3 flex items-center gap-1.5">
                  <HelpCircle className="w-5 h-5 text-[#c9a227]" /> Interested in VFX?
                </h3>
                <p className="text-xs text-[#6b6459] leading-relaxed mb-4">
                  Learn about our 3-year B.Sc. degree program in Animation and Multimedia, affiliated with Renaissance University.
                </p>
                <Link href="/bsc-animation-multimedia" className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a227] hover:text-white transition-colors">
                  View Degree Syllabus <ArrowRight className="w-4 h-4" />
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
