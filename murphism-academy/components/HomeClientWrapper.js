'use client';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function HomeClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  // Fallback to ensure loader closes even if state is delayed
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Disable scrollbar / scrolling during preloading to prevent glitchy side borders
  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={loading ? "pointer-events-none select-none" : ""}>
        {children}
      </div>
    </>
  );
}
