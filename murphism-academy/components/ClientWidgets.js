'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(() => import('./SmoothScroll'), { ssr: false });
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false });
const WelcomePopup = dynamic(() => import('./WelcomePopup'), { ssr: false });
const GlobalExposurePopup = dynamic(() => import('./GlobalExposurePopup'), { ssr: false });
const AIChatbot = dynamic(() => import('./AIChatbot'), { ssr: false });
const MotionBackground = dynamic(() => import('./MotionBackground'), { ssr: false });

export default function ClientWidgets() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      {isLargeScreen && <WelcomePopup />}
      {isLargeScreen && <GlobalExposurePopup />}
      <AIChatbot />
      <MotionBackground />
    </>
  );
}
