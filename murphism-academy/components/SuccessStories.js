'use client';
import { motion } from 'framer-motion';

const stories = [
  {
    name: 'Arjun Mehta',
    role: 'Senior UI/UX Designer',
    company: 'Creative Agency, Mumbai',
    course: 'Graphic Design',
    salary: '₹45,000/mo',
    emoji: '🎨',
    story: 'I had zero design experience. Murphism gave me the tools, the projects, and the confidence. Within 4 months I had my first client and 6 months later I was placed at an agency.',
    achievement: 'International client within 6 months',
  },
  {
    name: 'Priya Sharma',
    role: 'Full Stack Developer',
    company: 'Tech Startup, Bangalore',
    course: 'Website Development',
    salary: '₹65,000/mo',
    emoji: '💻',
    story: 'Arts student turned developer. Nobody believed it was possible. Murphism proved everyone wrong. The real project training is what separates this from any other academy.',
    achievement: 'Remote job offer before graduation',
  },
  {
    name: 'Zaid Khan',
    role: '3D Artist & VFX Specialist',
    company: 'VFX Studio, Hyderabad',
    course: '3D Modelling',
    salary: '₹55,000/mo',
    emoji: '🧊',
    story: 'Got a credit on an OTT film project in my very first year after Murphism. The foreign project exposure program was a game-changer — worked with a UK studio remotely.',
    achievement: 'OTT film credit + UK project',
  },
  {
    name: 'Neha Reddy',
    role: 'Video Production Lead',
    company: 'E-Commerce Brand, Chennai',
    course: 'Video Editing & VFX',
    salary: '₹40,000/mo',
    emoji: '🎬',
    story: 'Started with zero marketing knowledge. Built a portfolio of real campaigns during the course. Got 3 job offers and chose the best.',
    achievement: '3 job offers, zero prior experience',
  },
];

export default function SuccessStories() {
  return (
    <section className="section-pad relative" style={{ background: 'rgba(5,5,5,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.12), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="label-tag">Success Stories</div>
          <h2 className="heading-xl text-[#f0ece0]">
            They Came, We Shaped,
            <br />
            <span className="text-gold">They Got Placed</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-[#b8b099] text-base max-w-xl leading-relaxed">
            Real students. Real transformations. Real careers built at Murphism.
          </p>
        </motion.div>

        {/* Stories grid */}
        <div className="grid sm:grid-cols-2 gap-px"
          style={{ background: 'rgba(201,162,39,0.06)' }}
        >
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 relative overflow-hidden transition-all duration-500 hover:bg-[#0f0e0b]"
              style={{ background: '#050505' }}
            >
              {/* Top gold bar on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full"
                style={{ background: '#c9a227' }} />

              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: '#0f0e0b', border: '1px solid rgba(201,162,39,0.2)' }}
                  >
                    {s.emoji}
                  </div>
                  <div>
                    <p className="text-[#f0ece0] font-bold text-sm">{s.name}</p>
                    <p className="text-[#6b6459] text-xs">{s.role}</p>
                    <p className="text-[#8B6914] text-xs">{s.company}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[#6b6459] text-[10px] mb-0.5">Current Salary</p>
                  <p className="text-[#c9a227] font-bold text-sm">{s.salary}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote
                className="text-[#6b6459] text-sm leading-relaxed italic mb-5 pl-4 border-l"
                style={{ borderColor: 'rgba(201,162,39,0.25)' }}
              >
                &ldquo;{s.story}&rdquo;
              </blockquote>

              {/* Achievement */}
              <div className="flex items-center justify-between pt-4 border-t"
                style={{ borderColor: 'rgba(201,162,39,0.08)' }}
              >
                <span className="text-xs text-[#c9a227] flex items-center gap-1.5">
                  <span>★</span> {s.achievement}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-sm"
                  style={{ background: 'rgba(201,162,39,0.08)', color: '#8B6914' }}
                >
                  {s.course}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 grid grid-cols-3 gap-4 p-6 rounded-sm"
          style={{ background: '#0a0907', border: '1px solid rgba(201,162,39,0.1)', borderTop: '2px solid #c9a227' }}
        >
          {[
            { value: '500+',  label: 'Students Placed' },
            { value: '₹65K', label: 'Highest Package' },
            { value: '200+', label: 'Partner Companies' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[#c9a227] font-black text-2xl" style={{ fontFamily: 'Space Grotesk', letterSpacing: '-0.02em' }}>
                {item.value}
              </p>
              <p className="text-[#6b6459] text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
