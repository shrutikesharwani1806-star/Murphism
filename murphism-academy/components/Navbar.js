'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';

const navLinks = [
  { label: 'Home',             href: '/' },
  { label: 'Courses',          href: '/#courses' },
  { label: 'About',            href: '/about' },
  { label: 'Request Callback', href: '/contact' },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [user, setUser]         = useState(null); // null = not loaded, false = guest

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
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
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ── Flex container for responsive spacing ── */}
        <div className="flex items-center justify-between w-full">

          {/* ── LEFT: Logo ── */}
          <div className="flex-1 flex justify-start min-w-max">
            <Link href="/" className="flex items-center gap-1.5 md:gap-2.5 group w-fit relative py-1 px-1">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full opacity-60 blur-xl pointer-events-none transition-all duration-500 group-hover:opacity-90 group-hover:scale-110"
                style={{
                  background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(201,162,39,0.15) 50%, transparent 100%)'
                }}
              />
              <Image
                src="/logo.png"
                alt="MURPHISM Logo"
                width={48}
                height={48}
                priority
                className="h-8 md:h-11 w-auto object-contain transition-all duration-300 relative z-10"
                style={{ filter: 'brightness(1.6) contrast(1.2) drop-shadow(0 0 10px rgba(201, 162, 39, 0.5))' }}
              />
              <div className="h-6 md:h-8 w-px bg-gradient-to-b from-[#c9a227]/30 via-[#c9a227]/60 to-[#c9a227]/30 self-center relative z-10 mx-1 md:mx-2" />
              <Image
                src="/name.png"
                alt="MURPHISM"
                width={140}
                height={36}
                priority
                className="h-6 md:h-8 w-auto object-contain transition-all duration-300 relative z-10"
                style={{ filter: 'brightness(1.6) contrast(1.2) drop-shadow(0 0 10px rgba(201, 162, 39, 0.5))' }}
              />
            </Link>
          </div>

          {/* ── CENTER: Nav links ── */}
          <div className="hidden md:flex flex-1 justify-center">
            <div
              className="flex items-center gap-2 px-2 py-1 rounded-md"
              style={{
                background: 'rgba(10, 8, 12, 0.45)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap text-[#b8b099] hover:text-white"
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  {link.label}
                </Link>
              ))}
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
                  className="text-sm font-semibold tracking-widest uppercase transition-all duration-300 relative group"
                  style={{ color: '#b8b099' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e8bf5a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#b8b099')}
                >
                  Sign In
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xs font-semibold tracking-widest uppercase transition-colors duration-300 text-[#b8b099] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
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
