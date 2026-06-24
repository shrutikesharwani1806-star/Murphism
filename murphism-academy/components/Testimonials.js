'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'UI/UX Designer',
    course: 'Graphic Design',
    rating: 5,
    color: '#f5c518',
    emoji: '🎨',
    text: 'Murphism completely changed the trajectory of my career. The mentors don\'t just teach — they guide you like industry veterans. The real-project approach meant I already had a client portfolio before I even graduated.',
  },
  {
    name: 'Priya Sharma',
    role: 'Full Stack Developer',
    course: 'Website Development',
    rating: 5,
    color: '#06b6d4',
    emoji: '💻',
    text: 'I came in as an arts student with no coding background. The structured curriculum and constant support helped me build 5 real projects during my 6-month program. Now I\'m earning more than I ever imagined.',
  },
  {
    name: 'Zaid Khan',
    role: '3D & VFX Artist',
    course: '3D Modelling',
    rating: 5,
    color: '#a855f7',
    emoji: '🧊',
    text: 'The foreign exposure program was genuinely career-defining. Working on a UK studio project while still a student — you won\'t find that anywhere else. Murphism is operating on a completely different level.',
  },
  {
    name: 'Neha Reddy',
    role: 'Video Production Lead',
    course: 'Video Editing & VFX',
    rating: 5,
    color: '#7c3aed',
    emoji: '📱',
    text: 'I had 3 job offers lined up before my course even ended. The way Murphism connects students with real brands and actual campaigns during training — it\'s unmatched. 100% job assistance isn\'t just a claim, it\'s real.',
  },
  {
    name: 'Simran Dhawan',
    role: 'AI Creative Director',
    course: 'AI Courses',
    rating: 5,
    color: '#10b981',
    emoji: '🤖',
    text: 'The AI course opened doors I didn\'t know existed. Learning to use Midjourney, RunwayML, and ChatGPT professionally gave me an edge over every other designer in my field. I landed a director role at 23.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-pad bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#f5c518] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="section-heading text-white mb-4">
            What Our{' '}
            <span className="text-gradient">Students Say</span>
          </h2>
        </motion.div>

        {/* Main testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl p-10 border text-center"
              style={{ borderColor: `${t.color}22` }}
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${t.color}18` }}>
                  <Quote size={22} style={{ color: t.color }} />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill={t.color} color={t.color} />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Person */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2"
                  style={{ borderColor: t.color, background: `${t.color}15` }}
                >
                  {t.emoji}
                </div>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-[#9999bb] text-sm">{t.role}</p>
                  <span className="inline-block mt-1 text-xs px-3 py-0.5 rounded-full" style={{ background: `${t.color}18`, color: t.color }}>
                    {t.course}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-white hover:border-[rgba(245,197,24,0.3)] hover:text-[#f5c518] transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? '#f5c518' : 'rgba(255,255,255,0.2)',
                    width: i === current ? '24px' : '8px',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-white hover:border-[rgba(245,197,24,0.3)] hover:text-[#f5c518] transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
