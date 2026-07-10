'use client';
import { useState, useEffect, useCallback } from 'react';
import Preloader from './Preloader';

export default function HomeClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  // Fallback to ensure loader closes even if state is delayed (reduced to 2000ms for fast unlocking)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Disable scrollbar / scrolling during preloading to prevent glitchy side borders (bypassed on mobile to prevent freezing)
  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    if (isMobile) return;

    if (loading) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, [loading]);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <div className={loading ? "pointer-events-none select-none" : ""}>
        {children}
      </div>
    </>
  );
}
