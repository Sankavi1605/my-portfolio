import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function ParticleAnimation() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let frame;
        const handleMouseMove = (e) => {
            const target = {
                x: (e.clientX / window.innerWidth - 0.5) * 36,
                y: (e.clientY / window.innerHeight - 0.5) * 36,
            };

            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => setMousePosition(target));
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const particles = useMemo(() => Array.from({ length: 32 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 2,
        initialX: Math.random() * 100,
        initialY: 108 + Math.random() * 22,
        floatDistance: -1240 - Math.random() * 460,
        duration: 24 + Math.random() * 14,
        delay: Math.random() * 12,
        sway: (Math.random() - 0.5) * 70,
    })), []);

    const orbs = useMemo(() => Array.from({ length: 7 }, (_, i) => ({
        id: i,
        baseX: 12 + i * 14,
        baseY: 18 + (i % 3) * 24,
        radius: 180 + Math.random() * 110,
        hue: 130 + Math.random() * 25,
        duration: 18 + i * 2.5,
    })), []);

    const stars = useMemo(() => Array.from({ length: 45 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: (i % 10) * 0.35,
        duration: 3.5 + (i % 7) * 0.8,
    })), []);

    const comets = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
        id: i,
        startX: -20 - Math.random() * 20,
        startY: Math.random() * 100,
        angle: Math.random() * 12 + 18,
        duration: 14 + Math.random() * 8,
        delay: i * 2.8,
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
            {/* Rising particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.initialX}%`,
                        top: `${particle.initialY}%`,
                        width: particle.size,
                        height: particle.size,
                        background: 'radial-gradient(circle, rgba(74, 222, 128, 0.8), rgba(74, 222, 128, 0.2))',
                        boxShadow: '0 0 20px rgba(74, 222, 128, 0.6)',
                        filter: 'blur(0.5px)',
                    }}
                    animate={{
                        y: particle.floatDistance,
                        x: [0, particle.sway, -particle.sway * 0.5, particle.sway, 0],
                        opacity: [0, 0.35, 0.8, 1, 0.85, 0.4, 0],
                        scale: [0.25, 0.75, 1, 1.25, 1, 0.75, 0.25],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
                    }}
                />
            ))}

            {/* Floating orbs with mouse parallax */}
            {orbs.map((orb) => (
                <motion.div
                    key={`orb-${orb.id}`}
                    className="absolute rounded-full"
                    style={{
                        left: `${orb.baseX}%`,
                        top: `${orb.baseY}%`,
                        width: orb.radius,
                        height: orb.radius,
                        background: `radial-gradient(circle, hsla(${orb.hue}, 80%, 65%, 0.16), transparent 65%)`,
                        filter: 'blur(48px)',
                    }}
                    animate={{
                        x: [
                            mousePosition.x * 0.18,
                            mousePosition.x * 0.18 + 32,
                            mousePosition.x * 0.18 - 28,
                            mousePosition.x * 0.18 + 18,
                            mousePosition.x * 0.18,
                        ],
                        y: [
                            mousePosition.y * 0.18,
                            mousePosition.y * 0.18 + 24,
                            mousePosition.y * 0.18 - 20,
                            mousePosition.y * 0.18 + 16,
                            mousePosition.y * 0.18,
                        ],
                        scale: [1, 1.18, 1.05, 1.12, 1],
                        opacity: [0.65, 0.9, 0.75, 0.85, 0.65],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Twinkling star-like particles */}
            {stars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    className="absolute rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        background: 'rgba(152, 251, 152, 0.75)',
                        boxShadow: '0 0 10px rgba(74, 222, 128, 0.9)',
                    }}
                    animate={{
                        opacity: [0.15, 1, 0.15],
                        scale: [0.55, 1.45, 0.55],
                        x: [
                            0,
                            mousePosition.x * (0.05 + (star.id % 5) * 0.022),
                            0,
                        ],
                        y: [
                            0,
                            mousePosition.y * (0.05 + (star.id % 5) * 0.022),
                            0,
                        ],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                />
            ))}

            {/* Soft comet streaks introduce dynamic depth */}
            {comets.map((comet) => (
                <motion.span
                    key={`comet-${comet.id}`}
                    className="absolute block"
                    style={{
                        left: `${comet.startX}%`,
                        top: `${comet.startY}%`,
                        width: 320,
                        height: 2,
                        background:
                            'linear-gradient(90deg, rgba(74, 222, 128, 0) 0%, rgba(74, 222, 128, 0.75) 45%, rgba(15, 195, 164, 0.95) 65%, rgba(74, 222, 128, 0) 100%)',
                        filter: 'blur(0.5px)',
                        transform: `rotate(${comet.angle}deg)`
                    }}
                    animate={{
                        x: ['0%', '160%'],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: comet.duration,
                        delay: comet.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
