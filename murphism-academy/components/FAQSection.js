'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "Are Murphism courses suitable for beginners?",
    answer: "Yes, Murphism provides beginner-friendly courses along with advanced concepts. Our courses are designed in a way that suits beginners as well as professionals who want to learn advanced concepts."
  },
  {
    question: "Does Murphism Academy provide placement assistance?",
    answer: "Yes, Murphism Academy provides 100% placement and job assistance. We help you build a professional portfolio, guide you through mock interviews, and connect you with top studios and companies globally."
  },
  {
    question: "What creative tools and technologies are covered in the courses?",
    answer: "We cover industry-standard tools: Photoshop, Illustrator, Figma (for Graphic Design); HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express, MongoDB (for Web Development); 3ds Max, Maya, ZBrush, Substance Painter (for 3D Modelling & Animation); and cutting-edge GenAI tools (for AI Specializations)."
  },
  {
    question: "Are the classes live or pre-recorded, and can I access recordings later?",
    answer: "Our classes are conducted live (both offline at our studio and online) with interactive mentoring. Students also get access to recorded sessions, class assets, and resources for lifetime learning and review."
  },
  {
    question: "Do students get real-world project experience during the course?",
    answer: "Absolutely. Every course at Murphism Academy features real-world project deliverables, live studio briefs, and practical case studies to ensure students build professional-grade portfolios ready for industry hiring."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Warm Gold Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#b8b099] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Frequently Asked <span className="text-[#c9a227]">Questions</span>
          </h2>
          <p className="text-[#6b6459] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Find answers to common questions about our courses, curriculums, and placement support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border transition-all duration-300 overflow-hidden"
                style={{
                  background: isOpen ? 'rgba(201, 162, 39, 0.015)' : 'rgba(255, 255, 255, 0.005)',
                  borderColor: isOpen ? 'rgba(201, 162, 39, 0.2)' : 'rgba(201, 162, 39, 0.05)',
                }}
              >
                {/* Header/Question (Clickable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-white/[0.005]"
                >
                  <span 
                    className="font-bold text-base md:text-lg pr-4 tracking-normal transition-colors duration-300" 
                    style={{ 
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: isOpen ? '#e8bf5a' : '#b8b099' 
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="transition-transform duration-300 flex-shrink-0"
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      color: isOpen ? '#e8bf5a' : '#6b6459' 
                    }}
                  />
                </button>

                {/* Animated Dropdown Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-[#6b6459] text-sm md:text-base leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#554e42] mb-4">
            Still have questions? We are here to guide you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a227] hover:text-[#e8bf5a] transition-all tracking-wider uppercase"
          >
            Connect With Admissions <Sparkles size={12} />
          </a>
        </div>

      </div>
    </section>
  );
}
