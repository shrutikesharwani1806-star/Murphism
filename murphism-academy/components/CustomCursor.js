'use client';
import { useEffect, useRef, useState } from 'react';

// Draw a small round glitter dot
function drawDot(ctx, x, y, size, alpha, color) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}


export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const dotPos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const isLooping = useRef(false);
  const firstMove = useRef(true);
  const isVisible = useRef(false);

  const particles = useRef([]);
  const animFrameId = useRef(null);
  const isAnimating = useRef(false);
  const lastSpawn = useRef({ x: -999, y: -999 });
  const tickId = useRef(null);

  const show = () => {
    if (isVisible.current) return;
    isVisible.current = true;
    if (dotRef.current) dotRef.current.style.opacity = '1';
    if (ringRef.current) ringRef.current.style.opacity = '1';
  };
  const hide = () => {
    if (!isVisible.current) return;
    isVisible.current = false;
    if (dotRef.current) dotRef.current.style.opacity = '0';
    if (ringRef.current) ringRef.current.style.opacity = '0';
  };

  // ── 1. Mount ────────────────────────────────────────────────────────────
  useEffect(() => { setMounted(true); }, []);

  // ── 2. Canvas sparkle system ── only runs after mounted=true ─────────────
  useEffect(() => {
    if (!mounted) return;

    // Check if desktop (pointer: fine) — disable sparkle canvas entirely on mobile to prevent Safari/iPhone lag
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const GOLD = ['#e8bf5a', '#f5d97a', '#ffd700', '#ffdd77', '#fff9c4', '#ffffff'];

    const spawnParticles = (x, y) => {
      const count = 1; // spawn exactly 1 dot at a time for minimalism
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 10;
        particles.current.push({
          x: x + Math.cos(angle) * radius,
          y: y + Math.sin(angle) * radius,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0 - 0.4,
          gravity: 0.02 + Math.random() * 0.02,
          size: 1.0 + Math.random() * 1.5,   // small dot size
          color: GOLD[Math.floor(Math.random() * GOLD.length)],
          alpha: 1,
          decay: 0.06 + Math.random() * 0.04, // fade out faster
          rot: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.1,
        });
      }
      // Hard cap the maximum active particles in the trail to 5-6 dots
      if (particles.current.length > 6) {
        particles.current.splice(0, particles.current.length - 6);
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= p.decay;
        p.rot += p.rotSpeed;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        drawDot(ctx, p.x, p.y, p.size, p.alpha, p.color);
      }

      if (particles.current.length > 0) {
        animFrameId.current = requestAnimationFrame(loop);
      } else {
        isAnimating.current = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const startLoop = () => {
      if (!isAnimating.current) {
        isAnimating.current = true;
        animFrameId.current = requestAnimationFrame(loop);
      }
    };

    const onMouseMove = (e) => {
      const d = Math.hypot(e.clientX - lastSpawn.current.x, e.clientY - lastSpawn.current.y);
      if (d > 12) {
        lastSpawn.current = { x: e.clientX, y: e.clientY };
        spawnParticles(e.clientX, e.clientY);
        startLoop();
      }
    };

    const onTouchMove = (e) => {
      if (!e.touches?.length) return;
      const t = e.touches[0];
      const d = Math.hypot(t.clientX - lastSpawn.current.x, t.clientY - lastSpawn.current.y);
      if (d > 12) {
        lastSpawn.current = { x: t.clientX, y: t.clientY };
        spawnParticles(t.clientX, t.clientY);
        startLoop();
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      isAnimating.current = false;
      particles.current = [];
    };
  }, [mounted]);

  // ── 3. Cursor position + CSS class ───────────────────────────────────────
  useEffect(() => {
    if (!mounted) return;

    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (isDesktop) {
      document.body.classList.add('custom-cursor-active');
      document.documentElement.classList.add('custom-cursor-active');
    }

    const tick = () => {
      dotPos.current.x = mousePos.current.x;
      dotPos.current.y = mousePos.current.y;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.28;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.28;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px,${dotPos.current.y}px,0) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px,${ringPos.current.y}px,0) translate(-50%,-50%)`;
      }

      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      if (dx * dx + dy * dy < 0.05) {
        isLooping.current = false;
      } else {
        tickId.current = requestAnimationFrame(tick);
      }
    };

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (firstMove.current) {
        firstMove.current = false;
        dotPos.current = { x: e.clientX, y: e.clientY };
        ringPos.current = { x: e.clientX, y: e.clientY };
      }
      show();
      if (!isLooping.current) {
        isLooping.current = true;
        tickId.current = requestAnimationFrame(tick);
      }
      if (!document.body.classList.contains('custom-cursor-active')) {
        document.body.classList.add('custom-cursor-active');
        document.documentElement.classList.add('custom-cursor-active');
      }
    };

    const onMouseLeave = () => {
      document.body.classList.remove('custom-cursor-active');
      document.documentElement.classList.remove('custom-cursor-active');
      hide();
    };
    const onMouseEnter = () => {
      document.body.classList.add('custom-cursor-active');
      document.documentElement.classList.add('custom-cursor-active');
      show();
    };
    const onMouseOver = (e) => {
      const interactive = !!e.target?.closest(
        'a,button,input,select,textarea,label,[role="button"],.cursor-pointer'
      );
      dotRef.current?.classList.toggle('cursor-hovering', interactive);
      ringRef.current?.classList.toggle('cursor-hovering', interactive);
    };
    const onTouchEnd = () => hide();

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
      if (tickId.current) cancelAnimationFrame(tickId.current);
      isLooping.current = false;
      document.body.classList.remove('custom-cursor-active');
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          .custom-cursor-active,
          .custom-cursor-active * {
            cursor: none !important;
          }
        }
        .cursor-svg {
          width: 18px; height: 18px;
          transition: width .2s, height .2s, filter .2s;
          filter: drop-shadow(0 0 4px rgba(201,162,39,0.6));
        }
        .custom-cursor-dot.cursor-hovering .cursor-svg {
          width: 26px; height: 26px;
          filter: drop-shadow(0 0 10px rgba(232,191,90,0.9));
        }
        .custom-cursor-ring.cursor-hovering {
          width: 44px !important; height: 44px !important;
          border-color: rgba(245,217,122,0.7) !important;
          box-shadow: 0 0 18px rgba(201,162,39,0.3) !important;
        }
      `}</style>

      {/* Sparkle canvas — always full-screen, always on top of content */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed', inset: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none',
          zIndex: 2147483645,
        }}
      />

      {/* Star cursor dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 2147483647,
          opacity: 0,
          transition: 'opacity .15s ease',
          willChange: 'transform',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="cursor-svg">
          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="#e8bf5a" />
          <path d="M12 5 L13.2 10.8 L19 12 L13.2 13.2 L12 19 L10.8 13.2 L5 12 L10.8 10.8 Z" fill="#f5d97a" opacity="0.7" />
        </svg>
      </div>

      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 30, height: 30,
          borderRadius: '50%',
          border: '1.5px solid rgba(201,162,39,0.4)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 2147483646,
          opacity: 0,
          transition: 'width .25s, height .25s, border-color .25s, opacity .15s, box-shadow .25s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
