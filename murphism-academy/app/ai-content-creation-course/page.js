import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import { Clock, BarChart, CheckCircle, Star, Award, Users, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "AI Content Creation & Generative AI Course | Murphism Academy",
  description: "Master Generative AI & prompt engineering for creative work. Learn ChatGPT, Midjourney, Runway, and Stable Diffusion at Murphism Academy.",
  keywords: [
    "ai content creation course",
    "generative ai course",
    "prompt engineering course",
    "midjourney training course",
    "chatgpt for creators course",
    "ai course for graphic design",
    "murphism academy"
  ]
};

export default function AiContentCreationCoursePage() {
  const accentColor = '#a08030'; // Futuristic Metallic Gold for AI Courses

  const highlights = [
    "Generative AI Core Concepts",
    "Advanced Prompt Engineering Techniques",
    "AI Art Creation via Midjourney & DALL-E",
    "AI Video Generation & Editing (Runway)",
    "AI Copywriting, Scripts & Marketing Copy",
    "Integrating AI with Photoshop & Premiere",
    "Task & Design Workflow Automation",
    "Comprehensive Project-Based AI Portfolio"
  ];

  const curriculum = [
    {
      title: "Module 1: Introduction to Generative AI & LLMs",
      description: "Understanding how Large Language Models (LLMs) and diffusion models operate. Ethical guidelines, copyright considerations, and overview of prompt engineering."
    },
    {
      title: "Module 2: Prompt Engineering & Text Generation (ChatGPT/Claude)",
      description: "Writing advanced system prompts, roleplay techniques, few-shot prompting, and structured output formats for marketing, blogging, and video scripts."
    },
    {
      title: "Module 3: AI Art & Image Generation (Midjourney & Stable Diffusion)",
      description: "Mastering Midjourney parameters, aspect ratios, style references, image-to-image prompts, inpainting/outpainting, and high-quality commercial image generation."
    },
    {
      title: "Module 4: AI Video Generation & Animation (Runway & Pika)",
      description: "Creating text-to-video, image-to-video, and video-to-video renders. Working with Runway Gen-2, Pika Labs, and integrating voiceovers using ElevenLabs."
    },
    {
      title: "Module 5: Workflow Integration & Plugin Tools",
      description: "Accelerating your workflow by using built-in AI tools and plugins inside Photoshop, Illustrator, Premiere Pro, and Figma."
    },
    {
      title: "Module 6: Capstone Project - AI Campaign Creation",
      description: "Creating a complete marketing or narrative campaign using exclusively AI tools, culminating in a professional-grade AI-powered visual portfolio."
    }
  ];

  const faqs = [
    {
      question: "Is programming or coding knowledge required for this AI course?",
      answer: "No, this course does not require any programming or coding background. It is designed for creative designers, video editors, marketers, and business owners to master user-friendly Generative AI platforms."
    },
    {
      question: "Which AI tools are taught in this program?",
      answer: "We cover leading industry tools including ChatGPT, Claude, Midjourney, Stable Diffusion, Runway Gen-2, ElevenLabs, Adobe Firefly, and current AI plug-ins for traditional design programs."
    },
    {
      question: "How will this course help my design/video editing career?",
      answer: "By learning AI content creation, you can multiply your production speed. Designers and video editors who leverage AI can build drafts, concepts, and animations in minutes instead of hours, giving you a competitive edge."
    },
    {
      question: "What is the duration of the AI content creation course?",
      answer: "It is an intensive 2-month program. We offer classroom instruction at our studio, hands-on lab projects, and flexible weekend/weekday batches."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-[#d4cebe] font-sans selection:bg-[#a08030]/30 selection:text-white">
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
                    2 Months
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase border border-[#a08030]/30 bg-[#a08030]/10 text-[#e8bf5a]">
                    New Launch
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase bg-purple-950/40 text-purple-400 border border-purple-900/30">
                    AI Specialization
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  AI Content Creation & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a08030] to-[#e8bf5a]">
                    Generative AI Course
                  </span>
                </h1>
                
                <p className="text-[#b8b099] text-base sm:text-lg leading-relaxed max-w-xl">
                  Unlock the power of artificial intelligence. Master prompt engineering, image generation, video synthesizers, and AI tools to multiply your productivity and future-proof your career.
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <Clock className="w-5 h-5 text-[#e8bf5a]" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#6b6459]">Duration</div>
                    <div className="text-white text-sm font-bold">2 Months</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <BarChart className="w-5 h-5 text-[#e8bf5a]" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#6b6459]">Batch Level</div>
                    <div className="text-white text-sm font-bold">All Skill Levels</div>
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
                    <div key={index} className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#a08030]/20 transition-all duration-300">
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
                  <span>Future-Ready Syllabus</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#b8b099]">
                  <Users className="w-5 h-5 text-[#e8bf5a]" />
                  <span>Hands-on Lab Practice</span>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <CourseEnrollmentForm defaultCourseName="AI Courses" accentColor={accentColor} />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
