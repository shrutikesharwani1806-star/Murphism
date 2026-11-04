'use client';
import { useState, useEffect, useCallback } from 'react';
import Preloader from './Preloader';

export default function HomeClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sync with new preloader: 10ms start + 45ms×8 letters + 60ms hold + 130ms fade ≈ 560ms
    // Add a small safety buffer → 600ms hard cutoff
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      {/* Children always rendered — preloader z-index covers, no layout flash */}
      <div>{children}</div>
    </>
  );
}
