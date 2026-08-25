import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Clock, BarChart, CheckCircle, Star, Award, Users, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "B.Sc. in Animation & Multimedia Degree Course | Murphism Academy",
  description: "Enroll in the 3-year B.Sc. Animation & Multimedia degree program at Murphism in Indore, affiliated with Renaissance University. UGC recognized course.",
  keywords: [
    "bsc animation and multimedia indore",
    "animation degree course indore",
    "bsc animation colleges in indore",
    "multimedia degree course indore",
    "renaissance university animation",
    "murphism academy"
  ]
};

export default function BscAnimationMultimediaPage() {
  const accentColor = '#c9a227'; // Premium Gold for Degree Course

  const highlights = [
    "3-Year UGC-Recognized Degree",
    "Affiliated with Renaissance University",
    "Classic 2D Drawing & Digital Animation",
    "3D Asset Design & ZBrush Sculpting",
    "Advanced Texturing in Substance Painter",
    "VFX, Keying & Nuke Compositing",
    "Mandatory Industry Internship",
    "100% Placement & Studio Placement Guidance"
  ];

  const curriculum = [
    {
      title: "Year 1: Foundation of Art, Sketching & 2D Animation",
      description: "Art anatomy, perspective sketching, storyboarding, principles of classic animation, scriptwriting, and digital 2D animation vectors."
    },
    {
      title: "Year 2: 3D modeling, Rigging & Digital Texturing",
      description: "Creating high-polygon 3D meshes in Maya/3ds Max, character styling with Character Creator, UV layouts, digital sculpting in ZBrush, and PBR texturing with Substance Painter."
    },
    {
      title: "Year 3 (Sem 5): VFX, Matchmoving & Compositing",
      description: "Green screen extraction, camera tracking, matchmoving CGI models with live footage, particle physics setups, and production compositing inside Nuke."
    },
    {
      title: "Year 3 (Sem 6): Unreal Engine, Portfolio & Internship",
      description: "Working inside Unreal Engine for virtual production, assembling an industry-standard B.Sc. showreel, and pursuing a credit-based corporate internship."
    }
  ];

  const faqs = [
    {
      question: "Is this B.Sc. Animation & Multimedia degree UGC-recognized?",
      answer: "Yes. The B.Sc. in Animations & Multimedia degree is offered in affiliation with Renaissance University, Indore, which is a UGC-recognized university."
    },
    {
      question: "What is the eligibility criteria for enrollment?",
      answer: "Candidates who have completed their 10+2 (Higher Secondary School Certificate) in any stream (Science, Commerce, or Arts) from a recognized board are eligible to apply."
    },
    {
      question: "Does the course cover both 2D and 3D animation?",
      answer: "Yes, the curriculum is highly comprehensive. The first year establishes solid fundamentals in 2D sketching and digital animation, and the subsequent years focus extensively on industry-standard 3D modeling, texturing, rigging, animation, and game design."
    },
    {
      question: "Do students get placement assistance after graduation?",
      answer: "Absolutely. Murphism Academy offers 100% placement and job assistance. We guide students in creating specialized graduation reels and arrange campus interviews at game studios, animation firms, and VFX production facilities."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-[#d4cebe] font-sans selection:bg-[#c9a227]/30 selection:text-white">
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
                    3 Years
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase border border-[#c9a227]/30 bg-[#c9a227]/10 text-[#e8bf5a]">
                    UGC Approved
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase bg-purple-950/40 text-purple-400 border border-purple-900/30">
                    Renaissance Affiliated
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  B.Sc. in Animation & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">
                    Multimedia Degree
                  </span>
                </h1>
                
                <p className="text-[#b8b099] text-base sm:text-lg leading-relaxed max-w-xl">
                  Build a globally recognized creative career. Get a solid undergraduate academic foundation combined with intensive studio-based hands-on production training.
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <Clock className="w-5 h-5 text-[#e8bf5a]" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#6b6459]">Duration</div>
                    <div className="text-white text-sm font-bold">3 Years (6 Semesters)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <BarChart className="w-5 h-5 text-[#e8bf5a]" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#6b6459]">Academic Level</div>
                    <div className="text-white text-sm font-bold">Undergraduate Degree</div>
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
                  Course Syllabus
                </h2>
                <div className="space-y-4">
                  {curriculum.map((item, index) => (
                    <div key={index} className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#c9a227]/20 transition-all duration-300">
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
                  <span>Affiliated with Renaissance University</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#b8b099]">
                  <Users className="w-5 h-5 text-[#e8bf5a]" />
                  <span>UGC Approved Syllabus</span>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <CourseEnrollmentForm defaultCourseName="B.Sc. in Animations & Multimedia" accentColor={accentColor} />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
