'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const courses = [
  { label: 'Graphic Design', href: '/courses/graphic-design' },
  { label: 'Website Development', href: '/courses/website-development' },
  { label: 'Video Editing', href: '/courses/video-editing-vfx' },
  { label: '3D Modelling', href: '/courses/3d-modelling' },
  { label: 'AI Courses', href: '/courses/ai-courses' },
  { label: 'Diploma in Animations & Modelling', href: '/courses/diploma-animations-modelling' },
];

// SVG social icons — avoids lucide-react version issues
const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

const socials = [
  { Icon: SocialIcons.Instagram, href: '#', label: 'Instagram' },
  { Icon: SocialIcons.YouTube,   href: '#', label: 'YouTube' },
  { Icon: SocialIcons.LinkedIn,  href: '#', label: 'LinkedIn' },
  { Icon: SocialIcons.Twitter,   href: '#', label: 'X / Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[rgba(245,197,24,0.08)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group relative w-fit">
              <img
                src="/logo.png"
                alt="MURPHISM Logo"
                className="h-12 w-auto object-contain transition-all duration-300 relative z-10"
                style={{ filter: 'brightness(1.25) contrast(1.15) drop-shadow(0 0 8px rgba(201, 162, 39, 0.3))' }}
              />
              <div className="h-8 w-px bg-white/20 self-center relative z-10" />
              <img
                src="/name.png"
                alt="MURPHISM"
                className="h-9 w-auto object-contain transition-all duration-300 relative z-10"
                style={{ filter: 'brightness(1.25) contrast(1.15) drop-shadow(0 0 8px rgba(201, 162, 39, 0.3))' }}
              />
            </Link>
            <p className="text-[#9999bb] text-sm leading-relaxed mb-4">
              We Morph You to Become Industry Ready Creators &amp; Innovators.
            </p>
            <p className="text-[#f5c518] text-sm font-semibold italic mb-6">
              &quot;They came, we shaped, they got placed.&quot;
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass-card border border-white/5 flex items-center justify-center text-[#9999bb] hover:text-[#f5c518] hover:border-[rgba(245,197,24,0.25)] transition-all duration-300"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Courses</h4>
            <ul className="space-y-2.5">
              {courses.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[#9999bb] text-sm hover:text-[#f5c518] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-transparent group-hover:text-[#f5c518] transition-colors">▸</span>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Murphism',   href: '/#why' },
                { label: 'Success Stories',  href: '/#stories' },
                { label: 'Certifications',   href: '/#certs' },
                { label: 'Diploma Program',       href: '/courses/diploma-animations-modelling' },
                { label: 'Contact Us',       href: '/contact' },
                { label: 'Enroll Now',       href: '/#courses' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#9999bb] text-sm hover:text-[#f5c518] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-transparent group-hover:text-[#f5c518] transition-colors">▸</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#f5c518] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@murphism.com" className="text-[#9999bb] text-sm hover:text-white transition-colors">
                  info@murphism.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#f5c518] mt-0.5 flex-shrink-0" />
                <span className="text-[#9999bb] text-sm">Murphism Academy</span>
              </li>
            </ul>
            <Link href="/contact" className="mt-6 block">
              <button className="btn-outline text-sm w-full">
                Get In Touch <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(245,197,24,0.08)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#9999bb] text-sm">
            © 2026 MURPHISM Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Refund Policy'].map((l) => (
              <a key={l} href="#" className="text-[#9999bb] text-xs hover:text-[#f5c518] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
