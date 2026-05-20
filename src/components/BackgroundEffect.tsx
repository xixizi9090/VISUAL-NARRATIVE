import { useEffect, useRef } from 'react';

interface BackgroundEffectProps {
  className?: string;
  color?: string;
}

class Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number = 0;
  vy: number = 0;
  ease: number;
  
  // Cache variables to prevent heavy math during RAF
  distCenter: number = 0;
  dirCenterX: number = 0;
  dirCenterY: number = 0;

  constructor(x: number, y: number, width: number, height: number) {
    this.originX = x;
    this.originY = y;
    this.x = x;
    this.y = y;
    this.ease = 0.04 + Math.random() * 0.04;
    this.recalculateCenter(width, height);
  }

  recalculateCenter(width: number, height: number) {
    const dxCenter = this.originX - width / 2;
    const dyCenter = this.originY - height / 2;
    const distCenterSq = dxCenter * dxCenter + dyCenter * dyCenter;
    this.distCenter = Math.sqrt(distCenterSq);
    
    // Cache the normalized direction vector to center
    this.dirCenterX = dxCenter / (this.distCenter || 1);
    this.dirCenterY = dyCenter / (this.distCenter || 1);
  }
}

export default function BackgroundEffect({ 
  className = "fixed inset-0",
  color = "#0066FF" 
}: BackgroundEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 1.25); // Cap DPR to guarantee high performance on high-res displays
    const SPACING = 64; // Increased spacing for perfect balance between density and peak performance
    const MOUSE_RADIUS = 160;
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

    const initParticles = () => {
      particlesRef.current = [];
      for (let x = 0; x < width + SPACING; x += SPACING) {
        for (let y = 0; y < height + SPACING; y += SPACING) {
          particlesRef.current.push(new Particle(x, y, width, height));
        }
      }
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(DPR, DPR);
      
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const animate = () => {
      // Clear with faster operations
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      
      const time = performance.now() * 0.001;
      const particles = particlesRef.current;
      const len = particles.length;
      const mX = mouseRef.current.x;
      const mY = mouseRef.current.y;

      // Group rendering under a single context path wherever possible for massive performance gains
      ctx.beginPath();
      
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        
        // Autonomous wave effect using fully cached vectors (Zero square root operations here!)
        const wave = Math.sin(p.distCenter * 0.02 - time * 1.5) * 6;
        const waveTargetX = p.originX + p.dirCenterX * wave;
        const waveTargetY = p.originY + p.dirCenterY * wave;

        // Mouse reaction with squared distance check first
        const mdx = mX - p.x;
        const mdy = mY - p.y;
        const mdistSq = mdx * mdx + mdy * mdy;
        
        if (mdistSq < MOUSE_RADIUS_SQ) {
          const mdist = Math.sqrt(mdistSq);
          if (mdist > 0) {
            const force = (MOUSE_RADIUS - mdist) / MOUSE_RADIUS;
            p.vx -= (mdx / mdist) * force * 5;
            p.vy -= (mdy / mdist) * force * 5;
          }
        }

        // Return force
        p.vx += (waveTargetX - p.x) * p.ease;
        p.vy += (waveTargetY - p.y) * p.ease;

        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        // Quick bounding box check: Only draw if visible in viewport
        if (p.x >= -10 && p.x <= width + 10 && p.y >= -10 && p.y <= height + 10) {
          const dx = p.x - p.originX;
          const dy = p.y - p.originY;
          const distSq = dx * dx + dy * dy;
          const size = 0.6 + Math.min(distSq * 0.006, 1.4);
          
          // Render sleek, ultra-crisp square micro-rectangles (10x faster than canvas path circles)
          ctx.rect(p.x - size / 2, p.y - size / 2, size, size);
        }
      }
      
      ctx.globalAlpha = 0.22;
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`${className} pointer-events-none`}
    />
  );
}
