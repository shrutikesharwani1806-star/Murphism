'use client';
import { useEffect, useState, useRef } from 'react';

export default function MotionBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates normalized between -1 and 1
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Track mouse coordinates in pixels for the spotlight glow
    let targetMousePxX = window.innerWidth / 2;
    let targetMousePxY = window.innerHeight / 2;
    let mousePxX = window.innerWidth / 2;
    let mousePxY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetMousePxX = e.clientX;
      targetMousePxY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      targetMousePxX = window.innerWidth / 2;
      targetMousePxY = window.innerHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        // Scatter z initially to avoid all starting close
        this.z = Math.random() * 800 - 400;
      }

      reset() {
        this.x = (Math.random() - 0.5) * 1000;
        this.y = (Math.random() - 0.5) * 1000;
        this.z = 400; // start at back
        this.size = Math.random() * 1.5 + 1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.speedZ = -0.5 - Math.random() * 0.5; // moving forward
        this.color = Math.random() > 0.3 ? '#c9a227' : '#e8bf5a';
      }

      update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.speedZ;

        // Reset if it goes past front clipping plane
        if (this.z < -400) {
          this.reset();
        }
      }
    }

    const particleCount = 120;
    const particles = Array.from({ length: particleCount }, () => new Particle());

    // 3D rotation function
    const rotateX = (x, y, z, angle) => {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos,
      };
    };

    const rotateY = (x, y, z, angle) => {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: x * cos + z * sin,
        y,
        z: -x * sin + z * cos,
      };
    };

    // Auto rotation angles
    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Lerp mouse coordinates for inertia
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      mousePxX += (targetMousePxX - mousePxX) * 0.05;
      mousePxY += (targetMousePxY - mousePxY) * 0.05;

      // Slow idle rotation + mouse influence
      angleX += 0.02;
      angleY += 0.03;

      const currentAngleX = angleX + mouseY * 15;
      const currentAngleY = angleY + mouseX * 15;

      const focalLength = 400;
      const centerX = width / 2;
      const centerY = height / 2;

      // Update and project particles
      const projectedParticles = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();

        // 3D rotation
        let rot = rotateX(p.x, p.y, p.z, currentAngleX);
        rot = rotateY(rot.x, rot.y, rot.z, currentAngleY);

        // Z-clipping check
        if (rot.z + focalLength > 0) {
          const scale = focalLength / (focalLength + rot.z);
          const px = rot.x * scale + centerX;
          const py = rot.y * scale + centerY;

          projectedParticles.push({
            x: px,
            y: py,
            z: rot.z,
            size: p.size * scale,
            color: p.color,
            alpha: Math.min(1, scale),
          });
        }
      }

      // Sort by depth (back to front) for correct rendering
      projectedParticles.sort((a, b) => b.z - a.z);

      // Draw connections
      const maxDistance = 110;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Opacity is higher for closer connections, and lower for deep/faded particles
            const connectionAlpha = (1 - dist / maxDistance) * 0.12 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(201, 162, 39, ${connectionAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < projectedParticles.length; i++) {
        const p = projectedParticles[i];
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.8;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, p.size), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // Draw original floating ambient glows (but simplified & CSS based for performance/smoothness)
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mx', mouseX.toFixed(4));
        containerRef.current.style.setProperty('--my', mouseY.toFixed(4));
        containerRef.current.style.setProperty('--px-x', `${mousePxX.toFixed(1)}px`);
        containerRef.current.style.setProperty('--px-y', `${mousePxY.toFixed(1)}px`);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-1] bg-[#050505]"
      style={{
        '--mx': '0',
        '--my': '0',
        '--px-x': '50vw',
        '--px-y': '50vh',
      }}
    >


      {/* Cursor spotlight glow */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle 260px at var(--px-x) var(--px-y), rgba(201, 162, 39, 0.08) 0%, rgba(201, 162, 39, 0.02) 50%, transparent 100%)',
        }}
      />

      {/* Live 3D Particle Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle moving radial glow 1 (Gold) */}
      <div 
        className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.03] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)',
          top: '-10%',
          left: '10%',
          transform: 'translate(calc(var(--mx) * 50px), calc(var(--my) * 50px))',
          animation: 'float-slow 28s ease-in-out infinite alternate',
        }}
      />

      {/* Subtle moving radial glow 2 (Warm Amber Gold) */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.03] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #e8bf5a 0%, transparent 70%)',
          bottom: '5%',
          right: '5%',
          transform: 'translate(calc(var(--mx) * -40px), calc(var(--my) * -40px))',
          animation: 'float-slow-reverse 32s ease-in-out infinite alternate',
        }}
      />

      {/* Subtle moving radial glow 3 (Warm Bronze) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.02] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #8B6914 0%, transparent 70%)',
          top: '35%',
          right: '25%',
          transform: 'translate(calc(var(--mx) * 30px), calc(var(--my) * -30px))',
          animation: 'float-slow-diagonal 30s ease-in-out infinite alternate',
        }}
      />

      {/* CSS Styles for animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0% {
            transform: translate(calc(var(--mx) * 50px), calc(var(--my) * 50px)) scale(1);
          }
          50% {
            transform: translate(calc(var(--mx) * 50px + 80px), calc(var(--my) * 50px + 60px)) scale(1.08);
          }
          100% {
            transform: translate(calc(var(--mx) * 50px - 40px), calc(var(--my) * 50px + 120px)) scale(0.95);
          }
        }
        @keyframes float-slow-reverse {
          0% {
            transform: translate(calc(var(--mx) * -40px), calc(var(--my) * -40px)) scale(1.05);
          }
          50% {
            transform: translate(calc(var(--mx) * -40px - 100px), calc(var(--my) * -40px - 80px)) scale(0.9);
          }
          100% {
            transform: translate(calc(var(--mx) * -40px + 50px), calc(var(--my) * -40px - 110px)) scale(1.1);
          }
        }
        @keyframes float-slow-diagonal {
          0% {
            transform: translate(calc(var(--mx) * 30px), calc(var(--my) * -30px)) scale(0.95);
          }
          50% {
            transform: translate(calc(var(--mx) * 30px + 60px), calc(var(--my) * -30px - 90px)) scale(1.05);
          }
          100% {
            transform: translate(calc(var(--mx) * 30px - 70px), calc(var(--my) * -30px + 50px)) scale(1.0);
          }
        }
      `}</style>
    </div>
  );
}
