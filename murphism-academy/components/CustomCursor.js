'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animRef = useRef(null);

  useEffect(() => {
    // Only register listeners on devices with fine pointer (mouse/trackpad support)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Instantly reveal cursors on first movement
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    // Fast, optimized hover detection directly altering class lists to prevent React state re-renders
    const handleMouseOver = (e) => {
      const t = e.target;
      if (!t) return;

      const isInteractive = !!t.closest(
        'a, button, input, select, textarea, label, [role="button"], .btn-gold, .btn-ghost, .cursor-pointer, .interactive-hover'
      );
      
      if (isInteractive) {
        if (dotRef.current) dotRef.current.classList.add('cursor-hovering');
        if (ringRef.current) ringRef.current.classList.add('cursor-hovering');
      } else {
        if (dotRef.current) dotRef.current.classList.remove('cursor-hovering');
        if (ringRef.current) ringRef.current.classList.remove('cursor-hovering');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Animation loop using translate3d for GPU acceleration
    const animate = () => {
      // Lerp position for smooth lagging trail
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* Global CSS overrides targeting pointer types to eliminate touch device glitches */}
      <style jsx global>{`
        /* Hide native cursor on mouse-enabled devices */
        @media (pointer: fine) {
          *, *::before, *::after,
          html, body, a, button, input, select, textarea, label,
          [role="button"], [role="dialog"], [data-overlay],
          .cursor-pointer {
            cursor: none !important;
          }
        }

        /* Hide custom cursors entirely on touch devices */
        @media (pointer: coarse) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none !important;
          }
        }

        /* Custom cursor inner SVG states */
        .custom-cursor-svg {
          width: 18px;
          height: 18px;
          transition: width 0.2s ease, height 0.2s ease, filter 0.2s ease;
          filter: drop-shadow(0 0 3px rgba(201, 162, 39, 0.5));
        }

        .custom-cursor-dot.cursor-hovering .custom-cursor-svg {
          width: 28px;
          height: 28px;
          filter: drop-shadow(0 0 8px rgba(232, 191, 90, 0.8));
        }

        .custom-cursor-dot.cursor-hovering .custom-cursor-svg path:nth-child(1) {
          fill: #f5d97a;
        }

        .custom-cursor-dot.cursor-hovering .custom-cursor-svg path:nth-child(2) {
          fill: #fff;
        }

        /* Custom cursor ring hover states */
        .custom-cursor-ring.cursor-hovering {
          width: 48px !important;
          height: 48px !important;
          border-color: rgba(245,217,122,0.6) !important;
          background: rgba(201,162,39,0.08) !important;
          box-shadow: 0 0 20px rgba(201,162,39,0.25), inset 0 0 8px rgba(201,162,39,0.08) !important;
        }
      `}</style>

      {/* Inner star cursor */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 2147483647,
          opacity: 0,
          transition: 'opacity 0.15s ease',
          willChange: 'transform',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="custom-cursor-svg"
        >
          <path
            d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
            fill="#e8bf5a"
          />
          <path
            d="M12 5 L13.2 10.8 L19 12 L13.2 13.2 L12 19 L10.8 13.2 L5 12 L10.8 10.8 Z"
            fill="#f5d97a"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Outer ring cursor */}
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1.5px solid rgba(201,162,39,0.35)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 2147483646,
          opacity: 0,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease, opacity 0.15s ease, box-shadow 0.25s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}
