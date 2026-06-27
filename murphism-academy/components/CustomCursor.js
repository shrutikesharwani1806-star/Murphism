'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 1024;
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const hasFine = window.matchMedia('(pointer: fine)').matches;
      
      // Only hide custom cursor on actual touch devices (phones/tablets) that lack a mouse/trackpad (fine pointer)
      if (isMobile && isCoarse && !hasFine) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Immediately hide default cursor if not touch device
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Hover detection
    const handleMouseOver = (e) => {
      const t = e.target;
      const isInteractive =
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.tagName === 'INPUT' ||
        t.tagName === 'SELECT' ||
        t.tagName === 'TEXTAREA' ||
        t.tagName === 'LABEL' ||
        t.closest('a') ||
        t.closest('button') ||
        t.closest('[role="button"]') ||
        t.closest('.btn-gold') ||
        t.closest('.btn-ghost') ||
        t.closest('.cursor-pointer') ||
        t.closest('.interactive-hover');
      
      // Also check computed cursor style
      let computedPointer = false;
      try {
        computedPointer = window.getComputedStyle(t).cursor === 'pointer';
      } catch (err) {}

      setIsHovering(isInteractive || computedPointer);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    // Animation loop for smooth following
    const animate = () => {
      // Lerp the ring position for smooth trailing
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animRef.current);
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Global cursor:none style injected directly */}
      <style jsx global>{`
        *, *::before, *::after,
        html, body, a, button, input, select, textarea, label,
        [role="button"], [role="dialog"], [data-overlay],
        .cursor-pointer {
          cursor: none !important;
        }
      `}</style>

      {/* Inner star cursor - follows mouse directly */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 2147483647,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.15s ease',
          willChange: 'transform',
        }}
      >
        {/* 4-pointed star SVG */}
        <svg
          width={isHovering ? 28 : 18}
          height={isHovering ? 28 : 18}
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transition: 'width 0.2s ease, height 0.2s ease, filter 0.2s ease',
            filter: isHovering
              ? 'drop-shadow(0 0 8px rgba(232,191,90,0.8))'
              : 'drop-shadow(0 0 3px rgba(201,162,39,0.5))',
          }}
        >
          <path
            d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
            fill={isHovering ? '#f5d97a' : '#e8bf5a'}
          />
          {/* Inner smaller star for depth */}
          <path
            d="M12 5 L13.2 10.8 L19 12 L13.2 13.2 L12 19 L10.8 13.2 L5 12 L10.8 10.8 Z"
            fill={isHovering ? '#fff' : '#f5d97a'}
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Outer ring - trails behind with smooth inertia */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'rgba(245,217,122,0.6)' : 'rgba(201,162,39,0.35)'}`,
          background: isHovering ? 'rgba(201,162,39,0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 2147483646,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease, opacity 0.15s ease, box-shadow 0.25s ease',
          boxShadow: isHovering
            ? '0 0 20px rgba(201,162,39,0.25), inset 0 0 8px rgba(201,162,39,0.08)'
            : 'none',
          willChange: 'transform',
        }}
      />
    </>
  );
}
