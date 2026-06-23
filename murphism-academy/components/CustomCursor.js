'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the cursor outer ring
  const ringX = useSpring(mouseX, { stiffness: 450, damping: 30, mass: 0.2 });
  const ringY = useSpring(mouseY, { stiffness: 450, damping: 30, mass: 0.2 });

  useEffect(() => {
    // Only enable custom cursor on non-touch devices with fine pointers
    const checkDevice = () => {
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(touchDevice || !window.matchMedia('(pointer: fine)').matches);
    };
    checkDevice();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hover effect on clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.btn-gold') ||
        target.closest('.btn-ghost') ||
        target.closest('.interactive-hover') ||
        target.style.cursor === 'pointer'
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, hidden]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#c9a227] rounded-full pointer-events-none z-[999999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[999998] border border-[#c9a227]"
        animate={{
          width: hovered ? 46 : 22,
          height: hovered ? 46 : 22,
          backgroundColor: hovered ? 'rgba(201, 162, 39, 0.08)' : 'rgba(201, 162, 39, 0)',
          borderColor: hovered ? '#e8bf5a' : '#c9a227',
          boxShadow: hovered ? '0 0 16px rgba(201, 162, 39, 0.45)' : '0 0 0px rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
