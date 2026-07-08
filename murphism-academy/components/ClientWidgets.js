'use client';
import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(() => import('./SmoothScroll'), { ssr: false });
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false });
const WelcomePopup = dynamic(() => import('./WelcomePopup'), { ssr: false });
const GlobalExposurePopup = dynamic(() => import('./GlobalExposurePopup'), { ssr: false });
const AIChatbot = dynamic(() => import('./AIChatbot'), { ssr: false });
const MotionBackground = dynamic(() => import('./MotionBackground'), { ssr: false });

export default function ClientWidgets() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <WelcomePopup />
      <GlobalExposurePopup />
      <AIChatbot />
      <MotionBackground />
    </>
  );
}
