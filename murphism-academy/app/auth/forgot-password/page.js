'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Shield, Lock, Eye, EyeOff, ArrowRight, ArrowLeft, Loader, CheckCircle } from 'lucide-react';

const STEPS = ['phone', 'otp', 'password', 'done'];

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0=phone, 1=otp, 2=newpass, 3=done
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Step 1 — send OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (data.success) {
        setStep(1);
      } else {
        setError(data.error);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2+3 — verify OTP and reset password (single call)
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp, newPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setStep(3);
        // Auto-redirect after 2s based on role
        setTimeout(() => {
          router.push(data.user.isAdmin ? '/admin' : '/');
          router.refresh();
        }, 2000);
      } else {
        setError(data.error);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(201,162,39,0.1)',
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: '#050508' }}
    >
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'rgba(201,162,39,0.05)' }} />

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

        <div
          className="rounded-2xl p-8"
          style={{
            background: 'linear-gradient(145deg, #0f0e0b 0%, #0a0908 100%)',
            border: '1px solid rgba(201,162,39,0.15)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
          }}
        >
          {/* Progress dots */}
          <div className="flex gap-2 mb-7">
            {['Phone', 'OTP', 'New Password'].map((label, i) => (
              <div key={label} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full h-1 rounded-full transition-all duration-500"
                  style={{ background: step > i ? '#c9a227' : step === i ? 'rgba(201,162,39,0.5)' : 'rgba(255,255,255,0.05)' }}
                />
                <span className="text-[9px] tracking-widest uppercase"
                  style={{ color: step >= i ? '#c9a227' : '#3a3530' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* ── STEP 0: Enter phone ── */}
            {step === 0 && (
              <motion.div key="phone" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="text-white text-xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Forgot Password?
                </h1>
                <p className="text-[#6b6459] text-sm mb-6">
                  Enter your registered phone number and we&apos;ll send an OTP.
                </p>
                <form onSubmit={handleSendOTP} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459] mb-1.5">Phone Number</label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a4540]" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-[#2e2c28] focus:outline-none"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                      />
                    </div>
                  </div>
                  {error && <p className="text-red-400 text-xs bg-red-400/10 rounded-lg px-3 py-2">{error}</p>}
                  <button type="submit" disabled={loading}
                    className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60 transition-all"
                    style={{ background: 'linear-gradient(135deg, #c9a227, #e8bf5a)', color: '#050508' }}>
                    {loading ? <><Loader size={15} className="animate-spin" /><span>Sending OTP...</span></> : <><span>Send OTP</span><ArrowRight size={15} /></>}
                  </button>
                </form>
              </motion.div>
            )}

            {/* ── STEP 1+2: OTP + New Password ── */}
            {(step === 1 || step === 2) && (
              <motion.div key="otp-pass" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="text-white text-xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Reset Password
                </h1>
                <p className="text-[#6b6459] text-sm mb-6">
                  OTP sent to <span className="text-[#c9a227]">{phone}</span>. Enter it below with your new password.
                </p>
                <form onSubmit={handleReset} className="space-y-4">
                  {/* OTP */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459] mb-1.5">OTP Code</label>
                    <div className="relative">
                      <Shield size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a4540]" />
                      <input
                        type="text"
                        value={otp}
                        onChange={e => { setOtp(e.target.value); if (e.target.value.length === 6) setStep(2); }}
                        required
                        maxLength={6}
                        placeholder="6-digit OTP"
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-[#2e2c28] focus:outline-none tracking-widest"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-[#6b6459] mb-1.5">New Password</label>
                    <div className="relative">
                      <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a4540]" />
                      <input
                        type={showPass ? 'text' : 'password'}
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                        placeholder="Min 6 characters"
                        className="w-full pl-10 pr-10 py-3 rounded-xl text-sm text-white placeholder:text-[#2e2c28] focus:outline-none"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'rgba(201,162,39,0.4)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(201,162,39,0.1)')}
                      />
                      <button type="button" onClick={() => setShowPass(!showPass)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a4540] hover:text-[#c9a227] transition-colors">
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>

                  {error && <p className="text-red-400 text-xs bg-red-400/10 rounded-lg px-3 py-2">{error}</p>}

                  <div className="flex gap-3">
                    <button type="button" onClick={() => { setStep(0); setError(''); }}
                      className="flex-shrink-0 p-3 rounded-xl border transition-all"
                      style={{ border: '1px solid rgba(201,162,39,0.15)', color: '#6b6459' }}>
                      <ArrowLeft size={16} />
                    </button>
                    <button type="submit" disabled={loading || otp.length < 6}
                      className="flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                      style={{ background: 'linear-gradient(135deg, #c9a227, #e8bf5a)', color: '#050508' }}>
                      {loading ? <><Loader size={15} className="animate-spin" /><span>Resetting...</span></> : <><span>Reset Password</span><ArrowRight size={15} /></>}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ── STEP 3: Done ── */}
            {step === 3 && (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <CheckCircle size={56} className="mx-auto mb-4" style={{ color: '#c9a227' }} />
                <h2 className="text-white text-xl font-bold mb-2">Password Reset!</h2>
                <p className="text-[#6b6459] text-sm">Redirecting you now...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {step === 0 && (
            <div className="mt-5 text-center">
              <Link href="/auth/login" className="text-[#6b6459] text-xs hover:text-[#c9a227] transition-colors flex items-center justify-center gap-1">
                <ArrowLeft size={12} /> Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </main>
  );
}
