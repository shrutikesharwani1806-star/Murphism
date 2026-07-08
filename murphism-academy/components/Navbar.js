'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [user, setUser]         = useState(null); // null = not loaded, false = guest
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fetch current user session
  useEffect(() => {
    // Check local storage for quick initial load
    const cachedUser = localStorage.getItem('murphism_user');
    if (cachedUser) {
      try {
        const parsed = JSON.parse(cachedUser);
        setTimeout(() => setUser(parsed), 0);
      } catch (e) {}
    }

    fetch('/api/auth/me')
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          setUser(data.user);
          localStorage.setItem('murphism_user', JSON.stringify(data.user));
        } else {
          setUser(false);
          localStorage.removeItem('murphism_user');
        }
      })
      .catch(() => {
        setUser(false);
        localStorage.removeItem('murphism_user');
      });
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(false);
    router.push('/auth/register');
    router.refresh();
  };

  const displayLetter = user && (user.name ? user.name.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U'));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
      style={
        scrolled
          ? {
              background: 'rgba(5,5,5,0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(201,162,39,0.1)',
            }
          : { background: 'transparent' }
      }
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* ── Flex container for responsive spacing ── */}
        <div className="flex items-center justify-between w-full">

          {/* ── LEFT: Logo ── */}
          <div className="flex-1 flex justify-start min-w-max">
            <Link href="/" className="flex items-center gap-0.5 md:gap-1 group w-fit relative py-1 px-1">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-20 blur-xl pointer-events-none transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"
                style={{
                  background: 'radial-gradient(circle, rgba(190,82,50,0.2) 0%, rgba(255,210,160,0.08) 60%, transparent 100%)'
                }}
              />
              <Image
                src="/logo.png"
                alt="MURPHISM Logo"
                width={80}
                height={80}
                priority
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300 relative z-10 -ml-2.5 -mr-2.5 md:-ml-4 md:-mr-4"
                style={{ filter: 'brightness(1.9) contrast(1.15) drop-shadow(0 0 6px rgba(232, 191, 90, 0.25))' }}
              />
              <div className="h-9 md:h-11 w-px bg-gradient-to-b from-[#be5232]/20 via-[#be5232]/60 to-[#be5232]/20 self-center relative z-10 mx-0.5 md:mx-1" />
              <Image
                src="/name.png"
                alt="MURPHISM"
                width={220}
                height={60}
                priority
                className="h-9 md:h-11 w-auto object-contain transition-all duration-300 relative z-10 -ml-3 -mr-3 md:-ml-4 md:-mr-4"
                style={{ filter: 'brightness(1.9) contrast(1.15) drop-shadow(0 0 6px rgba(232, 191, 90, 0.25))' }}
              />
            </Link>
          </div>

          {/* ── CENTER: Nav links ── */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md">
              {/* Home Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setHomeDropdownOpen(true)}
                onMouseLeave={() => setHomeDropdownOpen(false)}
              >
                <button
                  className="px-4 py-1.5 rounded text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap text-[#b8b099] hover:text-white flex items-center gap-1 cursor-pointer nav-link-bounce"
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <span className="word-bounce">Home</span>
                  <ChevronDown size={12} className={`transition-transform duration-300 ${homeDropdownOpen ? 'rotate-180 text-white' : 'text-[#6b6459]'}`} />
                </button>

                {/* Dropdown Menu */}
                {homeDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl border p-2 shadow-2xl transition-all duration-300 z-50"
                    style={{
                      background: '#ffffff',
                      borderColor: 'rgba(201, 162, 39, 0.22)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15), 0 0 20px rgba(201,162,39,0.05)',
                    }}
                  >
                    <Link
                      href="/#courses"
                      className="flex flex-col gap-0.5 p-2.5 rounded-lg text-left transition-all hover:bg-black/[0.03] group"
                    >
                      <span className="text-xs font-bold text-[#1e1c18] group-hover:text-[#c9a227] transition-colors">Courses</span>
                      <span className="text-[10px] text-[#5c564c]">Explore our professional programs</span>
                    </Link>
                    <Link
                      href="/#combo-builder"
                      className="flex flex-col gap-0.5 p-2.5 rounded-lg text-left transition-all hover:bg-black/[0.03] group"
                    >
                      <span className="text-xs font-bold text-[#1e1c18] group-hover:text-[#c9a227] transition-colors">Custom Career Builder</span>
                      <span className="text-[10px] text-[#5c564c]">Design your own learning path</span>
                    </Link>
                    <Link
                      href="/#faq"
                      className="flex flex-col gap-0.5 p-2.5 rounded-lg text-left transition-all hover:bg-black/[0.03] group"
                    >
                      <span className="text-xs font-bold text-[#1e1c18] group-hover:text-[#c9a227] transition-colors">FAQ</span>
                      <span className="text-[10px] text-[#5c564c]">Got questions? We have answers</span>
                    </Link>
                    <Link
                      href="/#foreign-exposure"
                      className="flex flex-col gap-0.5 p-2.5 rounded-lg text-left transition-all hover:bg-black/[0.03] group"
                    >
                      <span className="text-xs font-bold text-[#1e1c18] group-hover:text-[#c9a227] transition-colors">Foreign Work Exposures</span>
                      <span className="text-[10px] text-[#5c564c]">Global placement & project opportunities</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="inline-block px-4 py-1.5 rounded text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap text-[#b8b099] hover:text-white nav-link-bounce"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                <span className="word-bounce">About</span>
              </Link>

              <Link
                href="/contact"
                className="inline-block px-4 py-1.5 rounded text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap text-[#b8b099] hover:text-white nav-link-bounce"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                <span className="word-bounce">Request</span>{' '}
                <span className="word-bounce">Callback</span>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Auth / Hamburger ── */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              {user === null ? null : user ? (
                // Logged in
                <div className="flex items-center gap-4">
                  {user.isAdmin ? (
                    <>
                      <Link
                        href="/admin"
                        className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 px-3 py-1.5 rounded-lg"
                        style={{ color: '#c9a227', border: '1px solid rgba(201,162,39,0.2)', background: 'rgba(201,162,39,0.06)' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,162,39,0.12)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(201,162,39,0.06)')}
                      >
                        <LayoutDashboard size={13} /> Admin Dashboard
                      </Link>
                      <Link
                        href="/admin"
                        title="Go to Admin Dashboard"
                        className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                          borderColor: '#c9a227',
                          color: '#050508',
                          boxShadow: '0 0 10px rgba(201,162,39,0.3)',
                        }}
                      >
                        {displayLetter}
                      </Link>
                    </>
                  ) : (
                    <div
                      title={user.name || user.email}
                      className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        borderColor: 'rgba(255,255,255,0.15)',
                        color: '#b8b099',
                      }}
                    >
                      {displayLetter}
                    </div>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 px-3 py-1.5 rounded-lg"
                    style={{ color: '#9a6060', border: '1px solid rgba(180,60,60,0.2)', background: 'rgba(180,60,60,0.05)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(180,60,60,0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(180,60,60,0.05)')}
                  >
                    <LogOut size={13} /> Logout
                  </button>
                </div>
              ) : (
                // Guest
                <Link
                  href="/auth/login"
                  className="inline-block text-sm font-semibold tracking-widest uppercase transition-all duration-300 relative group nav-link-bounce"
                  style={{ color: '#b8b099' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e8bf5a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#b8b099')}
                >
                  <span className="word-bounce">Sign</span>{' '}
                  <span className="word-bounce">In</span>
                  <span
                    className="absolute -bottom-0.5 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: 'linear-gradient(90deg, #c9a227, #a855f7)' }}
                  />
                </Link>
              )}
            </div>

            {/* Mobile: hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="transition-colors duration-300"
                style={{ color: '#b8b099' }}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className="rounded-xl px-5 py-5 flex flex-col gap-4"
            style={{
              background: 'rgba(10, 8, 12, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168,85,247,0.15)',
            }}
          >
            {/* Mobile links list */}
            <div className="flex flex-col gap-3">
              {/* Home collapsible menu */}
              <div>
                <button
                  onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                  className="w-full flex items-center justify-between py-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 text-[#b8b099] hover:text-white"
                >
                  <span>Home</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileHomeOpen ? 'rotate-180 text-white' : 'text-[#6b6459]'}`} />
                </button>
                
                {mobileHomeOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/5">
                    <Link
                      href="/#courses"
                      onClick={() => setOpen(false)}
                      className="py-1 text-[11px] font-semibold text-[#8c8476] hover:text-[#e8bf5a] uppercase tracking-wider"
                    >
                      Courses
                    </Link>
                    <Link
                      href="/#combo-builder"
                      onClick={() => setOpen(false)}
                      className="py-1 text-[11px] font-semibold text-[#8c8476] hover:text-[#e8bf5a] uppercase tracking-wider"
                    >
                      Custom Career Builder
                    </Link>
                    <Link
                      href="/#faq"
                      onClick={() => setOpen(false)}
                      className="py-1 text-[11px] font-semibold text-[#8c8476] hover:text-[#e8bf5a] uppercase tracking-wider"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/#foreign-exposure"
                      onClick={() => setOpen(false)}
                      className="py-1 text-[11px] font-semibold text-[#8c8476] hover:text-[#e8bf5a] uppercase tracking-wider"
                    >
                      Foreign Work Exposures
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="py-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 text-[#b8b099] hover:text-white"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 text-[#b8b099] hover:text-white"
              >
                Request Callback
              </Link>
            </div>
            <div className="h-px w-full mt-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
            {user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {user.isAdmin ? (
                    <Link
                      href="/admin"
                      onClick={() => setOpen(false)}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                      style={{
                        background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)',
                        color: '#050508',
                        border: '1px solid #c9a227',
                      }}
                    >
                      {displayLetter}
                    </Link>
                  ) : (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: '#b8b099',
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      {displayLetter}
                    </div>
                  )}
                  <span className="text-xs text-white font-medium">{user.name || user.email || 'User'}</span>
                </div>
                {user.isAdmin && (
                  <Link href="/admin" onClick={() => setOpen(false)}
                    className="text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5"
                    style={{ color: '#c9a227' }}>
                    <LayoutDashboard size={14} /> Admin Dashboard
                  </Link>
                )}
                <button onClick={() => { setOpen(false); handleLogout(); }}
                  className="text-xs font-semibold tracking-widest uppercase text-left"
                  style={{ color: '#9a6060' }}>
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/auth/login" onClick={() => setOpen(false)}
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#6b6459' }}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
