'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      
      if (cursorDotRef.current) {
        // Use CSS custom properties instead of direct style manipulation
        cursorDotRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        cursorDotRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }

      // Check if hovering over text, images, or interactive elements
      const target = e.target as HTMLElement;
      const isOverContent = target.tagName === 'P' || 
                           target.tagName === 'H1' || 
                           target.tagName === 'H2' || 
                           target.tagName === 'H3' || 
                           target.tagName === 'H4' || 
                           target.tagName === 'H5' || 
                           target.tagName === 'H6' || 
                           target.tagName === 'SPAN' || 
                           target.tagName === 'A' || 
                           target.tagName === 'BUTTON' ||
                           target.tagName === 'IMG' ||
                           target.tagName === 'LI' ||
                           target.closest('p, h1, h2, h3, h4, h5, h6, span, a, button, img, li');
      
      setIsHovering(!!isOverContent);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Main fluid particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let particleArray: Particle[] = [];
    let animationId: number;

    const createParticle = (x: number, y: number) => {
      const speed = Math.sqrt(
        Math.pow(mousePosRef.current.x - prevMouseRef.current.x, 2) +
        Math.pow(mousePosRef.current.y - prevMouseRef.current.y, 2)
      );
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = (speed * 0.05 + Math.random() * 2);
      
      return {
        x,
        y,
        vx: Math.cos(angle) * velocity * 0.5,
        vy: Math.sin(angle) * velocity * 0.5,
        size: Math.random() * 16 + 6,
        opacity: 1
      };
    };

    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frameCount++;
      if (frameCount % 2 === 0) {
        particleArray.push(createParticle(mousePosRef.current.x, mousePosRef.current.y));
      }

      particleArray = particleArray.filter(p => p.opacity > 0);

      if (particleArray.length > 50) {
        particleArray = particleArray.slice(-50);
      }

      for (let i = 0; i < particleArray.length; i++) {
        const p = particleArray[i];

        for (let j = i + 1; j < particleArray.length; j++) {
          const p2 = particleArray[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(50, 18, 11, ${0.3 * (1 - dist / 90) * p.opacity})`;
            ctx.lineWidth = 2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        
        p.vx *= 0.96;
        p.vy *= 0.96;
        
        p.opacity -= 0.018;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(50, 18, 11, ${0.6 * p.opacity})`);
        gradient.addColorStop(0.4, `rgba(77, 85, 87, ${0.4 * p.opacity})`);
        gradient.addColorStop(1, `rgba(50, 18, 11, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      prevMouseRef.current = { ...mousePosRef.current };
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        .cursor-dot {
          --mouse-x: 0px;
          --mouse-y: 0px;
          transform: translate(var(--mouse-x), var(--mouse-y)) translate(-50%, -50%);
          will-change: transform;
        }
      `}</style>
      
      {/* Main fluid particles canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          mixBlendMode: 'multiply',
          zIndex: 100000
        }}
      />
      
      {/* Cursor dot - smaller */}
      <div
        ref={cursorDotRef}
        className={`cursor-dot fixed top-0 left-0 rounded-full pointer-events-none ${
          isHovering ? 'w-4 h-4' : 'w-2 h-2'
        }`}
        style={{ 
          backgroundColor: '#32120b',
          boxShadow: isHovering 
            ? '0 0 15px rgba(50, 18, 11, 0.6)' 
            : '0 0 10px rgba(50, 18, 11, 0.4)',
          zIndex: 100001,
          transition: 'width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease'
        }}
      />
    </>
  );
}