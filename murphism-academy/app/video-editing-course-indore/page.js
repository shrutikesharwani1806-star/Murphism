import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Clock, BarChart, CheckCircle, Star, Award, Users, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "Best Video Editing & VFX Course in Indore | Murphism Academy",
  description: "Join the best video editing course in Indore at Murphism. Learn Premiere Pro, After Effects, DaVinci Resolve, motion graphics, and VFX with 100% placement assistance.",
  keywords: [
    "video editing course indore",
    "video editing institute in indore",
    "vfx course indore",
    "premiere pro course indore",
    "after effects training indore",
    "video editing academy indore",
    "murphism academy"
  ]
};

export default function VideoEditingCoursePage() {
  const accentColor = '#b89020'; // Warm Bronze/Gold for Video Editing & VFX

  const highlights = [
    "Adobe Premiere Pro & After Effects",
    "Cinematic Storytelling & Pacing",
    "DaVinci Resolve Color Grading",
    "Green Screen & Chroma Keying",
    "Motion Graphics & Titles",
    "Sound Design & Audio Mixing",
    "Commercial & Ad Editing",
    "100% Studio-Based Practice"
  ];

  const curriculum = [
    {
      title: "Module 1: Filmmaking & Storytelling Basics",
      description: "Understanding aspect ratios, frame rates, video formats, and visual pacing. Creating storyboards and learning the principles of cinematic continuity."
    },
    {
      title: "Module 2: Timeline Editing & Assembly (Premiere Pro)",
      description: "Advanced timeline management, rough cuts, multi-cam editing, transitions, speed ramping, keyframing, and motion presets."
    },
    {
      title: "Module 3: Color Grading & Corrections (DaVinci Resolve)",
      description: "Mastering color space, reading video scopes, primary and secondary corrections, using LUTs, and color matching shots."
    },
    {
      title: "Module 4: Motion Graphics & Text Animation (After Effects)",
      description: "Creating keyframed text animations, kinetic typography, shape layers, masking, track mattes, and expression controls."
    },
    {
      title: "Module 5: VFX & Advanced Compositing",
      description: "Green screen chroma keying, rotoscoping, camera tracking, particle systems, CGI integration, and cleanup workflows."
    },
    {
      title: "Module 6: Reel Building & Industry Prep",
      description: "Assembling a high-end showreel from your projects. Working on live studio briefs, client communication, and mock interviews."
    }
  ];

  const faqs = [
    {
      question: "Which video editing software is covered in this course?",
      answer: "We cover the three industry-leading platforms: Adobe Premiere Pro for editing, Adobe After Effects for motion graphics & VFX, and DaVinci Resolve for professional color grading."
    },
    {
      question: "What is the duration and schedule of the course in Indore?",
      answer: "The course runs for 6 months. We offer flexible batches (morning/afternoon/evening) to accommodate college students and working professionals. Classes are conducted both offline at our Indore studio and online."
    },
    {
      question: "Do you offer placement assistance after course completion?",
      answer: "Yes. Murphism Academy provides 100% placement support. We help you build an outstanding showreel, create your professional resume, and schedule interviews with top production houses, design agencies, and studios."
    },
    {
      question: "Do I need a high-end computer to join this course?",
      answer: "No. Our studio in Indore is equipped with state-of-the-art high-end workstations with professional GPUs for student use during class and lab practice hours."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-[#d4cebe] font-sans selection:bg-[#b89020]/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accentColor}06 0%, #050505 60%)` }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none" style={{ background: `${accentColor}10` }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] pointer-events-none" style={{ background: `${accentColor}05` }} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Details & Content */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Badges & Heading */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase bg-white/5 border border-white/10 text-white">
                    6 Months
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase border border-[#b89020]/30 bg-[#b89020]/10 text-[#e8bf5a]">
                    Best Seller
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase bg-purple-950/40 text-purple-400 border border-purple-900/30">
                    Indore Batch
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Video Editing & VFX <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b89020] to-[#e8bf5a]">
                    Course in Indore
                  </span>
                </h1>
                
                <p className="text-[#b8b099] text-base sm:text-lg leading-relaxed max-w-xl">
                  Go from raw footage to cinematic masterworks. Master editing, motion graphics, color grading, and visual effects under the guidance of working industry professionals.
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <Clock className="w-5 h-5 text-[#e8bf5a]" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#6b6459]">Duration</div>
                    <div className="text-white text-sm font-bold">6 Months</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <BarChart className="w-5 h-5 text-[#e8bf5a]" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#6b6459]">Batch Level</div>
                    <div className="text-white text-sm font-bold">Beginner to Pro</div>
                  </div>
                </div>
              </div>

              {/* What You'll Learn Grid */}
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#e8bf5a] fill-[#e8bf5a]/20" />
                  What You&apos;ll Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {highlights.map((h, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm text-[#b8b099]">
                      <CheckCircle className="w-4 h-4 text-[#e8bf5a] mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Section */}
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#e8bf5a]" />
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {curriculum.map((item, index) => (
                    <div key={index} className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#b89020]/20 transition-all duration-300">
                      <h3 className="font-bold text-white text-base mb-1.5 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-[#e8bf5a]" />
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#6b6459] leading-relaxed pl-6">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion Section */}
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#e8bf5a]" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3.5">
                  {faqs.map((faq, index) => (
                    <details 
                      key={index} 
                      className="group border border-white/5 rounded-xl bg-white/[0.005] overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer select-none font-bold text-white hover:bg-white/[0.02]">
                        <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                        <span className="text-[#e8bf5a] text-xs transition-transform duration-300 group-open:rotate-180">▼</span>
                      </summary>
                      <div className="p-5 pt-0 border-t border-white/5 text-[#6b6459] text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-between items-center gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-[#b8b099]">
                  <Award className="w-5 h-5 text-[#e8bf5a]" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#b8b099]">
                  <Users className="w-5 h-5 text-[#e8bf5a]" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <CourseEnrollmentForm defaultCourseName="Video Editing & VFX" accentColor={accentColor} />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
