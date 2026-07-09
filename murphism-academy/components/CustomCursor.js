'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isLooping = useRef(false);
  const firstMove = useRef(true);

  // Sparkles particle system references
  const particles = useRef([]);
  const isCanvasAnimating = useRef(false);
  const lastSpawn = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only register listeners on devices with fine pointer (mouse/trackpad support)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, color, alpha) => {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.restore();
    };

    const animateParticles = () => {
      if (particles.current.length === 0) {
        isCanvasAnimating.current = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.alpha -= p.decay;
        p.size -= p.decay * 3;

        if (p.alpha <= 0 || p.size <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        drawStar(ctx, 0, 0, 4, p.size, p.size * 0.25, p.color, p.alpha);
        // Draw a tiny bright core star to simulate glow without using expensive drop-shadow filters
        drawStar(ctx, 0, 0, 4, p.size * 0.4, p.size * 0.1, '#ffffff', p.alpha);
        ctx.restore();
      }

      requestAnimationFrame(animateParticles);
    };

    const tick = () => {
      // Lerp calculations for smooth lag
      // Dot follows faster, ring trails smoothly
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.35;

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Check if positions are close enough to stop looping and conserve CPU
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      const distSq = dx * dx + dy * dy;

      if (distSq < 0.05) {
        isLooping.current = false;
        // Snap to exact target to avoid sub-pixel rendering gaps
        dotPos.current = { ...mousePos.current };
        ringPos.current = { ...mousePos.current };
      } else {
        requestAnimationFrame(tick);
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (firstMove.current) {
        firstMove.current = false;
        dotPos.current = { x: e.clientX, y: e.clientY };
        ringPos.current = { x: e.clientX, y: e.clientY };
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
      
      if (!isLooping.current) {
        isLooping.current = true;
        requestAnimationFrame(tick);
      }

      // Sparkle spawn logic on movement
      const dist = Math.hypot(e.clientX - lastSpawn.current.x, e.clientY - lastSpawn.current.y);
      if (dist > 25 && particles.current.length < 10) {
        lastSpawn.current = { x: e.clientX, y: e.clientY };
        
        // Premium golden shades only
        const colors = ['#e8bf5a', '#f5d97a', '#ffdd77', '#f3c64f'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.2) * 0.4, // subtle initial drift
          gravity: 0.04 + Math.random() * 0.04, // gentle downward drift
          size: 3 + Math.random() * 3, // small elegant sparkles
          color: randomColor,
          alpha: 1.0,
          decay: 0.025 + Math.random() * 0.015, // decay faster to keep it brief and minimal
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.05
        });

        if (!isCanvasAnimating.current) {
          isCanvasAnimating.current = true;
          requestAnimationFrame(animateParticles);
        }
      }

      // Add active class to body to hide native cursor once mouse is moving
      if (!document.body.classList.contains('custom-cursor-active')) {
        document.body.classList.add('custom-cursor-active');
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('custom-cursor-active');
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      document.body.classList.add('custom-cursor-active');
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

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      {/* Global CSS overrides targeting pointer types to eliminate touch device glitches */}
      <style jsx global>{`
        /* Hide native cursor ONLY when custom-cursor-active class is present on body */
        .custom-cursor-active,
        .custom-cursor-active * {
          cursor: none !important;
        }

        /* Hide custom cursors entirely on touch devices */
        @media (pointer: coarse) {
          .custom-cursor-dot,
          .custom-cursor-ring,
          .custom-cursor-canvas {
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

      {/* Canvas for rendering magical falling star sparkle trails */}
      <canvas
        ref={canvasRef}
        className="custom-cursor-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2147483645,
        }}
      />

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

      {/* Outer ring cursor with butter-smooth JS lerping and zero CSS transition lag */}
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
