'use client';
import { useState, useEffect, useRef } from 'react';

// Pure CSS preloader — zero framer-motion dependency on critical path
// Total visible time: ~550ms (fast enough to feel instant, branded enough to feel premium)
export default function Preloader({ onComplete }) {
  const fullText = 'MURPHISM';
  const [displayedText, setDisplayedText] = useState('');
  const [fading, setFading]               = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    let idx = 0;
    let timer;

    const typeNext = () => {
      idx++;
      setDisplayedText(fullText.slice(0, idx));
      if (idx < fullText.length) {
        // 45ms per letter × 8 letters = 360ms typing
        timer = setTimeout(typeNext, 45);
      } else {
        // Hold 60ms, then fade out in 120ms CSS transition
        timer = setTimeout(() => {
          setFading(true);
          timer = setTimeout(() => onCompleteRef.current?.(), 130);
        }, 60);
      }
    };

    // Start immediately — no extra delay
    timer = setTimeout(typeNext, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="global-preloader-overlay"
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          99999,
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        background:      '#050505',
        // CSS transition — no framer-motion bundle cost
        opacity:         fading ? 0 : 1,
        transition:      'opacity 0.13s ease-out',
        pointerEvents:   fading ? 'none' : 'all',
      }}
    >
      {/* Subtle glow */}
      <div style={{
        position:   'absolute',
        width:      '240px',
        height:     '240px',
        borderRadius: '50%',
        background: 'rgba(201,162,39,0.07)',
        filter:     'blur(70px)',
        pointerEvents: 'none',
      }} />

      {/* Text */}
      <h2 style={{
        color:          '#c9a227',
        fontSize:       'clamp(2rem, 8vw, 4.5rem)',
        fontWeight:     800,
        letterSpacing:  '0.25em',
        fontFamily:     'inherit',
        userSelect:     'none',
        position:       'relative',
        display:        'flex',
        alignItems:     'center',
      }}>
        <span>{displayedText}</span>
        <span style={{
          marginLeft:   '3px',
          color:        '#c9a227',
          fontWeight:   300,
          animation:    'preloaderBlink 0.9s step-end infinite',
        }}>|</span>
      </h2>

      <style>{`
        @keyframes preloaderBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
