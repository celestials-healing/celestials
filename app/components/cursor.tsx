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

interface RippleEffect {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  startTime: number;
}

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rippleCanvasRef = useRef<HTMLCanvasElement>(null);
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
        size: Math.random() * 16 + 6, // Increased from 12 + 4
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

      if (particleArray.length > 50) { // Increased from 45
        particleArray = particleArray.slice(-50);
      }

      for (let i = 0; i < particleArray.length; i++) {
        const p = particleArray[i];

        for (let j = i + 1; j < particleArray.length; j++) {
          const p2 = particleArray[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) { // Increased from 70
            ctx.beginPath();
            ctx.strokeStyle = `rgba(50, 18, 11, ${0.3 * (1 - dist / 90) * p.opacity})`; // Increased opacity
            ctx.lineWidth = 2; // Increased from 1.5
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
        gradient.addColorStop(0, `rgba(50, 18, 11, ${0.6 * p.opacity})`); // Increased from 0.5
        gradient.addColorStop(0.4, `rgba(77, 85, 87, ${0.4 * p.opacity})`); // Increased from 0.3
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

  // Ripple/watery effect when hovering over text/images
  useEffect(() => {
    const canvas = rippleCanvasRef.current;
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

    let ripples: RippleEffect[] = [];
    let animationId: number;
    let lastRippleTime = 0;

    const createRipple = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastRippleTime < 120) return;
      
      lastRippleTime = now;
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 70 + Math.random() * 40, // Increased from 50 + 30
        opacity: 1,
        startTime: now
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovering) {
        createRipple(mousePosRef.current.x, mousePosRef.current.y);
      }

      ripples = ripples.filter(r => r.opacity > 0);

      ripples.forEach(ripple => {
        const elapsed = Date.now() - ripple.startTime;
        const progress = elapsed / 1200;

        ripple.radius = ripple.maxRadius * progress;
        ripple.opacity = 1 - progress;

        for (let i = 0; i < 3; i++) {
          const offsetRadius = ripple.radius - (i * 15); // Increased from 12
          if (offsetRadius > 0) {
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, offsetRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(50, 18, 11, ${ripple.opacity * 0.3 * (1 - i * 0.3)})`; // Increased opacity
            ctx.lineWidth = 3 - i * 0.5; // Increased from 2.5
            ctx.stroke();

            ctx.beginPath();
            for (let angle = 0; angle < Math.PI * 2; angle += 0.15) {
              const wave = Math.sin(angle * 3 + elapsed * 0.008) * 3; // Increased from 2.5
              const x = ripple.x + Math.cos(angle) * (offsetRadius + wave);
              const y = ripple.y + Math.sin(angle) * (offsetRadius + wave);
              if (angle === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(77, 85, 87, ${ripple.opacity * 0.2 * (1 - i * 0.3)})`; // Increased opacity
            ctx.lineWidth = 2; // Increased from 1.5
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isHovering]);

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
      
      {/* Main fluid particles canvas - highest z-index */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          mixBlendMode: 'multiply',
          zIndex: 100000
        }}
      />
      
      {/* Ripple effects canvas */}
      <canvas
        ref={rippleCanvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          mixBlendMode: 'multiply',
          zIndex: 99999
        }}
      />
      
      {/* Cursor dot - enlarged */}
      <div
        ref={cursorDotRef}
        className={`cursor-dot fixed top-0 left-0 rounded-full pointer-events-none ${
          isHovering ? 'w-9 h-9' : 'w-5 h-5'
        }`}
        style={{ 
          backgroundColor: '#32120b',
          boxShadow: isHovering 
            ? '0 0 35px rgba(50, 18, 11, 0.8), 0 0 60px rgba(77, 85, 87, 0.4)' 
            : '0 0 20px rgba(50, 18, 11, 0.6)',
          zIndex: 100001,
          transition: 'width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease'
        }}
      />
    </>
  );
}