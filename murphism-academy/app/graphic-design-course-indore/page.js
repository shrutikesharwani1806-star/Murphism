import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Clock, BarChart, CheckCircle, Star, Award, Users, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "Professional Graphic Design Course in Indore | Murphism Academy",
  description: "Learn Graphic Design in Indore from industry experts at Murphism. Master Adobe Photoshop, Illustrator, Figma, and typography with 100% job placement.",
  keywords: [
    "graphic design course indore",
    "graphic design institute in indore",
    "ui ux design course indore",
    "photoshop institute in indore",
    "illustrator training indore",
    "graphic design classes indore",
    "murphism academy"
  ]
};

export default function GraphicDesignCoursePage() {
  const accentColor = '#c9a227'; // Classic Luxury Gold for Graphic Design

  const highlights = [
    "Adobe Photoshop & Illustrator Mastery",
    "Figma UI/UX & Layout Design",
    "Typography & Color Theory Rules",
    "Logo & Brand Identity Creation",
    "Print Media & Packaging Design",
    "Social Media Graphic Projects",
    "Portfolio on Behance & Dribbble",
    "100% Studio-Based Practice"
  ];

  const curriculum = [
    {
      title: "Module 1: Graphic Design Principles & Typography",
      description: "Learning the core visual design rules: contrast, alignment, balance, white space, and hierarchy. In-depth understanding of typography pairings and color psychology."
    },
    {
      title: "Module 2: Raster Graphics & Imaging (Adobe Photoshop)",
      description: "Photo retouching, image compositing, advanced masking, blending modes, color correction, and digital painting basics."
    },
    {
      title: "Module 3: Vector Graphics & Branding (Adobe Illustrator)",
      description: "Creating digital assets using the pen tool, vector path tracing, logo design processes, icon design, and preparing files for print."
    },
    {
      title: "Module 4: Brand Identity & Packaging Layouts",
      description: "Designing comprehensive brand identity kits including corporate stationary, style guides, and layout grids for physically printed packaging designs."
    },
    {
      title: "Module 5: UI/UX Design Fundamentals (Figma)",
      description: "Introduction to user interface and user experience design. Prototyping screens, wireframing, component libraries, and designing responsive website layouts."
    },
    {
      title: "Module 6: Capstone Project & Portfolio Assembly",
      description: "Combining your design pieces into a cohesive, professional online portfolio hosted on Behance and Dribbble. Preparation for job interviews."
    }
  ];

  const faqs = [
    {
      question: "Do I need to be good at drawing to become a graphic designer?",
      answer: "No, drawing is not a prerequisite. Modern graphic design is centered around visual hierarchy, layout rules, typography, and tools like Photoshop and Illustrator, which we teach you from scratch."
    },
    {
      question: "Which tools are covered in this Indore graphic design course?",
      answer: "We cover three primary tools used by design professionals worldwide: Adobe Photoshop for raster editing, Adobe Illustrator for vector illustration, and Figma for digital UI/UX design."
    },
    {
      question: "What job profiles can I apply for after completing the course?",
      answer: "You can apply for high-growth roles such as Graphic Designer, Brand Identity Designer, UI Designer, Illustrator, Web Layout Designer, or Creative Visualizer."
    },
    {
      question: "Does the academy provide a certificate?",
      answer: "Yes, you will receive an industry-recognized certification in Graphic Design from Murphism Academy upon successfully completing all portfolio projects."
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
                    6 Months
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase border border-[#c9a227]/30 bg-[#c9a227]/10 text-[#e8bf5a]">
                    Creative
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase bg-purple-950/40 text-purple-400 border border-purple-900/30">
                    Indore Batch
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Professional Graphic Design <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8bf5a]">
                    Course in Indore
                  </span>
                </h1>
                
                <p className="text-[#b8b099] text-base sm:text-lg leading-relaxed max-w-xl">
                  Transform visual concepts into powerful brand messaging. Master digital design tools, typography, layouts, and branding to land your dream creative career.
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
              <CourseEnrollmentForm defaultCourseName="Graphic Design" accentColor={accentColor} />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
