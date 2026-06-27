'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, ArrowLeft, Loader } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('murphism_user', JSON.stringify(data.user));
        router.push(data.user.isAdmin ? '/admin' : '/');
        router.refresh();
      } else {
        setError(data.error);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Back to Home Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b8b099] hover:text-white transition-colors group z-50"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* Background glows */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'rgba(201,162,39,0.05)' }} />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.04)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md relative"
      >
        {/* Brand */}
        <div className="text-center mb-10">
          <Link href="/">
            <span className="text-3xl font-black tracking-wider" style={{ color: '#c9a227', fontFamily: 'Space Grotesk, sans-serif' }}>
              MURPHISM
            </span>
          </Link>
          <p className="text-[#6b6459] text-xs tracking-widest uppercase mt-1">Academy</p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'linear-gradient(145deg, #0f0e0b 0%, #0a0908 100%)',
            border: '1px solid rgba(201,162,39,0.15)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
          }}
        >
          <div className="text-white text-lg font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Welcome Back
          </div>
          <p className="text-[#6b6459] text-sm mb-7">Sign in to continue your journey.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459] mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a4540]" />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-[#2e2c28] focus:outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,162,39,0.1)' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459]">Password</label>
                <Link href="/auth/forgot-password" className="text-[10px] text-[#c9a227] hover:underline tracking-wider uppercase">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a4540]" />
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Your password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl text-sm text-white placeholder:text-[#2e2c28] focus:outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,162,39,0.1)' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a4540] hover:text-[#c9a227] transition-colors"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-xs bg-red-400/10 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)', color: '#050505' }}
            >
              {loading ? <><Loader size={16} className="animate-spin" /><span>Signing In...</span></> : <><span>Sign In</span><ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#6b6459] text-xs">
              Don&apos;t have an account?{' '}
              <Link href="/auth/register" className="text-[#c9a227] hover:underline font-semibold">Create Account</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
