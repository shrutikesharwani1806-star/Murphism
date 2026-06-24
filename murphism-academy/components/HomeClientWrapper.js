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

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div 
        style={{ 
          visibility: loading ? 'hidden' : 'visible',
          height: loading ? '100vh' : 'auto',
          overflow: loading ? 'hidden' : 'visible'
        }}
      >
        {children}
      </div>
    </>
  );
}
