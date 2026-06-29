'use client';
import Link from 'next/link';

const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Discord: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M20.317 4.372a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

const socials = [
  { Icon: SocialIcons.Instagram, href: '#', label: 'Instagram' },
  { Icon: SocialIcons.LinkedIn,  href: '#', label: 'LinkedIn' },
  { Icon: SocialIcons.Discord,   href: '#', label: 'Discord' },
  { Icon: SocialIcons.YouTube,   href: '#', label: 'YouTube' },
  { Icon: SocialIcons.Twitter,   href: '#', label: 'X / Twitter' },
];

export default function Footer() {
  return (
    <>
      {/* Large outline watermark word "Murphism" - desktop only, full screen width, before main footer */}
      <div className="hidden md:block w-full overflow-hidden select-none bg-[#050505] pt-20 pb-4 border-t border-white/[0.02]">
        <div className="w-full overflow-hidden flex items-center justify-center">
          <span 
            className="text-[17vw] font-bold tracking-tighter text-center leading-[0.8] select-none text-transparent block cursor-default whitespace-nowrap gold-outlined-text"
            style={{
              fontFamily: "'Clash Display', var(--font-space-grotesk), sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            Murphism
          </span>
        </div>
        <style jsx>{`
          .gold-outlined-text {
            color: transparent;
            -webkit-text-stroke: 1.5px rgba(201, 162, 39, 0.65);
            transition: -webkit-text-stroke 0.4s ease, color 0.4s ease, filter 0.4s ease;
          }
          .gold-outlined-text:hover {
            -webkit-text-stroke: 1.5px rgba(232, 191, 90, 0.95);
            color: rgba(232, 191, 90, 0.05);
            filter: drop-shadow(0 0 20px rgba(232, 191, 90, 0.45));
          }
        `}</style>
      </div>

      <footer className="bg-black/90 pt-24 pb-12 relative overflow-hidden" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
      
      {/* Subtle outline watermark letter 'M' at top center, mirroring reference image detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.03] flex justify-center">
        <svg viewBox="0 0 100 100" className="w-[160px] h-[160px] text-white" stroke="currentColor" strokeWidth="0.8" fill="none">
          <path d="M10 90 V10 L50 60 L90 10 V90" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">

          {/* Left Column: Logo & Socials - Exactly matching user screenshot alignment */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <Link href="/" className="block mb-10 w-fit">
              <img
                src="/logo.png"
                alt="MURPHISM Logo"
                className="h-[140px] w-auto object-contain"
              />
            </Link>
            
            {/* Social Icons aligned horizontally - exact size and spacing from screenshot */}
            <div className="flex gap-6 items-center pl-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white opacity-85 hover:opacity-100 transition-opacity duration-300"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: ABOUT */}
          <div className="md:col-span-2">
            <div className="text-white font-bold text-[12px] uppercase tracking-[0.12em] mb-6">
              ABOUT
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Pricing and Refund
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Terms and Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="md:col-span-2">
            <div className="text-white font-bold text-[12px] uppercase tracking-[0.12em] mb-6">
              COMPANY
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Resume Checker
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Hire From Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Submit Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors duration-300 text-[13px] font-normal">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div className="md:col-span-3">
            <div className="text-white font-bold text-[12px] uppercase tracking-[0.12em] mb-6">
              CONTACT
            </div>
            <ul className="space-y-3">
              <li className="text-[#8c8c8c] text-[13px] leading-relaxed font-normal">
                Online / Offline Classes
              </li>
              <li className="text-[#8c8c8c] text-[13px] leading-relaxed font-normal">
                Contact: <a href="tel:+911234567890" className="hover:text-white transition-colors text-[#8c8c8c] ml-0.5">+91 1234567890</a>
              </li>
              <li>
                <a href="mailto:hello@murphism.com" className="text-[#58a6ff] hover:text-blue-400 transition-colors duration-300 text-[13px] font-normal">
                  hello@murphism.com
                </a>
              </li>
              <li className="text-[#8c8c8c] text-[13px] leading-relaxed font-normal">
                Location: Indore
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#8c8c8c] text-[12px]">
            © 2026 MURPHISM Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'No Refund Policy'].map((l) => (
              <a key={l} href="#" className="text-[#8c8c8c] text-[12px] hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
