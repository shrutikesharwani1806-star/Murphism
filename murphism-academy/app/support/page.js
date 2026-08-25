import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, MessageSquare, ShieldQuestion, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Support Desk | Murphism Academy",
  description: "Get in touch with Murphism Academy support. Contact our Indore studio, admissions desk, or billing team.",
};

export default function SupportPage() {
  const supportChannels = [
    {
      icon: <Phone className="w-5 h-5 text-[#c9a227]" />,
      title: "Admissions Desk",
      description: "Need help choosing the right course or checking application status?",
      actionText: "Call Admissions",
      actionHref: "tel:+917000000000" // Placeholder phone, user can update
    },
    {
      icon: <Mail className="w-5 h-5 text-[#c9a227]" />,
      title: "General & Support Email",
      description: "Send us your questions, batch requests, or portfolio feedback.",
      actionText: "Email Support",
      actionHref: "mailto:info@murphism.com"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#c9a227]" />,
      title: "Student Portal Help",
      description: "Facing login issues, missing credentials, or LMS issues?",
      actionText: "Open Ticket",
      actionHref: "mailto:support@murphism.com"
    }
  ];

  const helpTopics = [
    {
      title: "LMS & Online Class Access",
      summary: "How do I access recordings and virtual meetings?",
      content: "All online classes are conducted via Google Meet / Zoom. Class links, session recordings, and source files are uploaded daily in the Student Discord server under your batch channel."
    },
    {
      title: "Software & Systems",
      summary: "What computer systems do I need to practice?",
      content: "For Graphic Design, a standard laptop with 8GB RAM is enough. For Video Editing, 3D, and VFX, we recommend at least 16GB RAM and a dedicated graphics card (NVIDIA GTX/RTX). Students can also access our high-end studio PCs in Indore."
    },
    {
      title: "Installment Schedules",
      summary: "How can I pay my pending course installments?",
      content: "Installments can be paid online via UPI, Net Banking, or card, or paid physically in cash at our Indore studio accounts desk. Contact accounts@murphism.com for receipts."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-[#d4cebe] font-sans selection:bg-[#c9a227]/30 selection:text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow layers */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(201, 162, 39, 0.05) 0%, transparent 70%)' }} 
        />
        <div 
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, transparent 70%)' }} 
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              Murphism Helpdesk
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              How Can We <span className="text-[#c9a227]">Help You?</span>
            </h1>
            <p className="text-[#6b6459] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Find answers to student issues, get technical assistance, or contact our Indore team directly.
            </p>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mt-6" />
          </div>

          {/* Channels Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {supportChannels.map((c, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-[#c9a227]/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#6b6459] leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <a 
                  href={c.actionHref} 
                  className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#c9a227] text-black hover:bg-[#b08d20] transition-colors"
                >
                  {c.actionText}
                </a>
              </div>
            ))}
          </div>

          {/* Two Column Layout (Help Topics vs General Inquiries Redirect) */}
          <div className="grid lg:grid-cols-12 gap-12 pt-6 border-t border-white/5">
            
            {/* Left: Help Topics */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <ShieldQuestion className="w-6 h-6 text-[#c9a227]" />
                Common Support Topics
              </h2>

              <div className="space-y-4">
                {helpTopics.map((topic, i) => (
                  <details 
                    key={i} 
                    className="group border border-white/5 rounded-xl bg-white/[0.005] overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none font-bold text-white hover:bg-white/[0.02]">
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#c9a227] uppercase tracking-wider block font-bold">{topic.title}</span>
                        <span className="text-sm sm:text-base pr-4 block">{topic.summary}</span>
                      </div>
                      <span className="text-[#c9a227] text-xs transition-transform duration-300 group-open:rotate-180">▼</span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-white/5 text-[#6b6459] text-sm leading-relaxed">
                      {topic.content}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Right: Contact Form Prompt */}
            <div className="lg:col-span-5 space-y-6">
              <div 
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(15, 14, 11, 0.95) 0%, rgba(10, 9, 7, 0.98) 100%)' }}
              >
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Still Need Help?
                </h3>
                <p className="text-[#6b6459] text-sm leading-relaxed mb-6">
                  If your issue isn't listed, please submit a message detailing your problem and our team will get back to you shortly.
                </p>
                <Link 
                  href="/contact"
                  className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wide bg-gradient-to-r from-[#c9a227] to-[#e8bf5a] text-black hover:opacity-90 transition-opacity"
                >
                  Go to Contact Form
                </Link>
              </div>

              {/* Policy Quick Links */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.005] space-y-4">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#c9a227]" />
                  Policy Quick Links
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/privacy-policy" className="text-[#6b6459] hover:text-[#c9a227] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" className="text-[#6b6459] hover:text-[#c9a227] transition-colors">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="text-[#6b6459] hover:text-[#c9a227] transition-colors">
                      Pricing and Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
