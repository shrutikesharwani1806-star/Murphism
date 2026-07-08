'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Mail, Phone, Lock, ArrowRight, ArrowLeft, Loader } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('murphism_user', JSON.stringify(data.user));
        // Normal users → home page; admins → dashboard (middleware handles redirect)
        router.push(data.user.isAdmin ? '/admin' : '/');
      } else {
        setError(data.error);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: 'name',     label: 'Full Name',     type: 'text',     icon: User,  placeholder: 'Your full name' },
    { name: 'email',    label: 'Email Address',  type: 'email',    icon: Mail,  placeholder: 'your@email.com' },
    { name: 'phone',    label: 'Phone Number',   type: 'tel',      icon: Phone, placeholder: '+91 XXXXX XXXXX' },
  ];

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: '#050508' }}
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
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'rgba(201,162,39,0.05)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.04)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[370px] relative"
      >
        {/* Logo / Brand */}
        <div className="text-center mb-6">
          <Link href="/">
            <span className="text-xl font-extrabold tracking-[0.2em]" style={{ color: '#c9a227', fontFamily: 'Space Grotesk, sans-serif' }}>
              MURPHISM
            </span>
          </Link>
          <p className="text-[#6b6459] text-[9px] tracking-widest uppercase mt-0.5">Academy</p>
        </div>

        {/* Card */}
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(145deg, #0f0e0b 0%, #0a0908 100%)',
            border: '1px solid rgba(201,162,39,0.15)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
          }}
        >
          <h1 className="text-white text-lg font-bold mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Create Account
          </h1>
          <p className="text-[#6b6459] text-xs mb-5">Join Murphism — start your creative journey.</p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {fields.map(({ name, label, type, icon: Icon, placeholder }) => (
              <div key={name}>
                <label className="block text-[9px] font-bold tracking-widest uppercase text-[#6b6459] mb-1">{label}</label>
                <div className="relative">
                  <Icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a4540]" />
                  <input
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg text-xs text-white placeholder:text-[#2e2c28] transition-colors focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,162,39,0.1)' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                  />
                </div>
              </div>
            ))}

            {/* Password */}
            <div>
              <label className="block text-[9px] font-bold tracking-widest uppercase text-[#6b6459] mb-1">Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a4540]" />
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Min 6 characters"
                  className="w-full pl-9 pr-9 py-2.5 rounded-lg text-xs text-white placeholder:text-[#2e2c28] transition-colors focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,162,39,0.1)' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a4540] hover:text-[#c9a227] transition-colors"
                >
                  {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-[11px] bg-red-400/10 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)', color: '#050508' }}
            >
              {loading ? <><Loader size={14} className="animate-spin" /><span>Creating Account...</span></> : <><span>Create Account</span><ArrowRight size={14} /></>}
            </button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-[#6b6459] text-[11px]">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-[#c9a227] hover:underline font-semibold">Sign In</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
