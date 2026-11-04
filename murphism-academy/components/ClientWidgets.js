'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// ── Tier 1: load immediately (critical UX) ────────────────────────────────
const SmoothScroll = dynamic(() => import('./SmoothScroll'), { ssr: false });
const CustomCursor = dynamic(() => import('./CustomCursor'),  { ssr: false });

// ── Tier 2: load after first interaction / 1.5s delay (non-critical) ──────
const MotionBackground = dynamic(() => import('./MotionBackground'), { ssr: false });

// ── Tier 3: load after 4s — chatbot not needed on first view ──────────────
const AIChatbot = dynamic(() => import('./AIChatbot'), { ssr: false });

export default function ClientWidgets() {
  const [showBackground, setShowBackground]   = useState(false);
  const [showChatbot,    setShowChatbot]       = useState(false);
  const [isLargeScreen,  setIsLargeScreen]     = useState(false);

  useEffect(() => {
    // Unregister legacy service workers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        regs.forEach((r) => r.unregister());
      }).catch(() => {});
    }

    // Screen size check
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen, { passive: true });

    // Tier 2: MotionBackground after 1.5s — lets JS parse & hydrate first
    const bgTimer = setTimeout(() => setShowBackground(true), 1500);

    // Tier 3: AIChatbot after 4s — rarely needed on first visit
    const chatTimer = setTimeout(() => setShowChatbot(true), 4000);

    return () => {
      window.removeEventListener('resize', checkScreen);
      clearTimeout(bgTimer);
      clearTimeout(chatTimer);
    };
  }, []);

  return (
    <>
      {/* Always loaded — scroll & cursor are core UX */}
      <SmoothScroll />
      <CustomCursor />

      {/* Deferred — heavy canvas, not needed for first paint */}
      {showBackground && <MotionBackground />}

      {/* Very deferred — chatbot is below fold and rarely used immediately */}
      {showChatbot && <AIChatbot />}
    </>
  );
}
