'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function BookLoader({ text = 'Verifying Credentials...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 select-none">
      <div className="relative w-36 h-36 flex items-center justify-center">
        {/* Outer glowing orbit rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute w-24 h-24 rounded-full border border-dashed border-[#c9a227]/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute w-30 h-30 rounded-full border border-dashed border-[#e8bf5a]/15"
        />
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute w-36 h-36 rounded-full border border-dotted border-[#c9a227]/5"
        />

        {/* Central morphing shape */}
        <motion.div
          className="w-12 h-12 shadow-[0_0_40px_rgba(201,162,39,0.4)]"
          animate={{
            borderRadius: ["24%", "50%", "10%", "50%", "24%"],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.25, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'linear-gradient(135deg, #c9a227 0%, #e8bf5a 100%)'
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-[#c9a227] tracking-[0.25em] text-xs uppercase animate-pulse font-bold">
          {text}
        </p>
        <span className="text-[10px] text-[#6b6459] font-mono tracking-wider">MURPHISM SECURE PORTAL</span>
      </div>
    </div>
  );
}
