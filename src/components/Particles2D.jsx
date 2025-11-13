import React, { useEffect, useRef } from 'react';

export default function Particles2D({
  className,
  alwaysRender = true,
  background = '#000000',
  color = '#7CFFCB',
  particleSize = 1.2,
  density = 0.00008, // particles per pixel
  speed = 0.18 // base speed in px/frame
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!alwaysRender && prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const getSize = () => {
      const rect = canvas.getBoundingClientRect();
      return { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
    };
    let { width, height } = getSize();
    const resize = () => {
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      const size = getSize();
      width = size.width;
      height = size.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Recompute particle count
      const target = Math.max(60, Math.floor(width * height * density));
      if (particlesRef.current.length > target) {
        particlesRef.current.length = target;
      } else {
        while (particlesRef.current.length < target) {
          particlesRef.current.push(spawn(width, height, speed));
        }
      }
    };

    const spawn = (w, h, s) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * s * 2,
      vy: (Math.random() - 0.5) * s * 2,
      a: 0.4 + Math.random() * 0.4
    });

    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    const tick = () => {
      // background
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      // draw particles
      ctx.fillStyle = color;
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        // wrap around
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [alwaysRender, background, color, density, particleSize, speed]);

  return (
    <div className={className} style={{ backgroundColor: background }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
