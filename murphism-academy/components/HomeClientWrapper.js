'use client';
import { useState, useEffect, useCallback } from 'react';
import Preloader from './Preloader';

export default function HomeClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  // Fallback: 100ms + 8×50ms typing + 50ms hold + 150ms fade ≈ 700ms
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      {/* Page is always visible — preloader z-index covers it, no black flash */}
      <div>{children}</div>
    </>
  );
}
