'use client';
import { motion } from 'framer-motion';

const transformations = [
  {
    name: 'Arjun Mehta',
    course: 'Graphic Design · 4 Months',
    before: ['No design skills', 'Unemployed 8 months', 'Zero client work'],
    after:  ['Senior UI Designer at Agency', '₹45,000/month salary', 'International project credits'],
  },
  {
    name: 'Priya Sharma',
    course: 'Website Development · 6 Months',
    before: ['Arts background, no coding', 'No portfolio or projects', 'Confused about tech'],
    after:  ['Full Stack Developer', '₹65,000/month CTC', 'Remote job at startup'],
  },
  {
    name: 'Zaid Khan',
    course: '3D Modelling · 5 Months',
    before: ['Passion but no direction', 'No software knowledge', 'No industry connections'],
    after:  ['3D Artist at VFX Studio', 'OTT film credit', 'UK project experience'],
  },
];

export default function TransformationSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgba(5,5,5,0.82)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.12), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="label-tag" style={{ margin: '0 auto 1.5rem auto' }}>Real Results</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#f0ece0] mx-auto" style={{ lineHeight: '1.25' }}>
            Student
            <br />
            <span className="text-gold">Transformations</span>
          </h2>
          <div className="divider-gold" style={{ margin: '1.5rem auto', width: '48px' }} />
        </motion.div>

        <div className="space-y-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch"
            >
              {/* Before */}
              <div
                className="p-6 rounded-sm"
                style={{ background: '#0a0907', border: '1px solid rgba(201,162,39,0.08)' }}
              >
                <p className="text-[10px] font-black tracking-widest uppercase text-[#6b6459] mb-4">Before Murphism</p>
                <ul className="space-y-2.5">
                  {t.before.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-[#6b6459]">
                      <span className="text-[#3d3830] mt-0.5 flex-shrink-0">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center */}
              <div className="flex flex-col items-center justify-center px-4 gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ border: '1px solid rgba(201,162,39,0.3)', background: '#0f0e0b' }}
                >
                  →
                </div>
                <div className="text-center">
                  <p className="text-[#f0ece0] font-bold text-xs">{t.name}</p>
                  <p className="text-[#6b6459] text-[10px]">{t.course}</p>
                </div>
              </div>

              {/* After */}
              <div
                className="p-6 rounded-sm"
                style={{ background: '#0f0e0b', border: '1px solid rgba(201,162,39,0.2)', borderTop: '2px solid #c9a227' }}
              >
                <p className="text-[10px] font-black tracking-widest uppercase text-[#c9a227] mb-4">After Murphism</p>
                <ul className="space-y-2.5">
                  {t.after.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-[#b8b099]">
                      <span className="text-[#c9a227] mt-0.5 flex-shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
