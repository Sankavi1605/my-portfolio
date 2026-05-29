import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    ContactShadows,
    Environment,
    Float,
    MeshDistortMaterial,
    PerspectiveCamera,
    RoundedBox,
    Text,
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const fontUrl = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hJP-Ek-_EeA.woff';

function FloatingPanel({ position, title, content, active }) {
    return (
        <Float speed={2.1} rotationIntensity={0.45} floatIntensity={0.8}>
            <group position={position}>
                <RoundedBox args={[1.7, 1.05, 0.08]} radius={0.07}>
                    <meshStandardMaterial
                        color={active ? '#17395d' : '#10233d'}
                        metalness={0.72}
                        roughness={0.22}
                        emissive={active ? '#0d3d34' : '#0a1524'}
                        emissiveIntensity={active ? 0.55 : 0.22}
                    />
                </RoundedBox>
                <Text
                    position={[0, 0.22, 0.06]}
                    fontSize={0.11}
                    color="#77f0c2"
                    maxWidth={1.2}
                    textAlign="center"
                    font={fontUrl}
                >
                    {title}
                </Text>
                <Text
                    position={[0, -0.1, 0.06]}
                    fontSize={0.055}
                    color="#f5fbff"
                    maxWidth={1.24}
                    lineHeight={1.35}
                    textAlign="center"
                    font={fontUrl}
                >
                    {content}
                </Text>
            </group>
        </Float>
    );
}

function SceneBackdrop() {
    return (
        <>
            <mesh position={[0, 0, -2.7]}>
                <planeGeometry args={[13, 9]} />
                <meshBasicMaterial color="#0a1626" />
            </mesh>
            <mesh position={[-2.8, 2.15, -1.6]}>
                <planeGeometry args={[3.2, 3.2]} />
                <meshBasicMaterial color="#12364d" transparent opacity={0.16} />
            </mesh>
            <mesh position={[2.7, 1.7, -1.8]}>
                <planeGeometry args={[2.8, 2.8]} />
                <meshBasicMaterial color="#1d4d6b" transparent opacity={0.11} />
            </mesh>
        </>
    );
}

function PortfolioRig({ activeStep, progress }) {
    const laptopRef = useRef(null);
    const phoneRef = useRef(null);
    const orbRef = useRef(null);
    const cameraRef = useRef(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (cameraRef.current) {
            const cameraTargets = [
                { x: -0.45, y: 0.1, z: 5.0 },
                { x: 0.2, y: 0.18, z: 4.65 },
                { x: -0.2, y: -0.02, z: 4.35 },
            ];
            const target = cameraTargets[activeStep] ?? cameraTargets[0];
            cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, target.x, 0.06);
            cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, target.y, 0.06);
            cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, target.z - progress * 0.08, 0.06);
            cameraRef.current.lookAt(0, 0.05, 0);
        }

        if (laptopRef.current) {
            laptopRef.current.rotation.y = THREE.MathUtils.lerp(
                laptopRef.current.rotation.y,
                -0.3 + progress * 0.32 + activeStep * 0.14,
                0.06
            );
            laptopRef.current.rotation.x = THREE.MathUtils.lerp(
                laptopRef.current.rotation.x,
                0.06 + activeStep * 0.015,
                0.06
            );
            laptopRef.current.position.y = Math.sin(t * 0.75) * 0.08;
        }

        if (phoneRef.current) {
            phoneRef.current.rotation.y = THREE.MathUtils.lerp(
                phoneRef.current.rotation.y,
                -0.65 + activeStep * 0.24,
                0.06
            );
            phoneRef.current.position.y = -0.34 + Math.sin(t * 1.15) * 0.11;
            phoneRef.current.position.x = 2 + Math.cos(t * 0.7) * 0.04;
        }

        if (orbRef.current) {
            orbRef.current.position.x = -3.75 + Math.sin(t * 0.45) * 0.28;
            orbRef.current.position.y = -1.95 + Math.cos(t * 0.62) * 0.2;
        }
    });

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault position={[-0.45, 0.1, 5]} fov={42} />
            <color attach="background" args={['#09121d']} />
            <fog attach="fog" args={['#09121d', 6, 12]} />

            <ambientLight intensity={0.55} />
            <pointLight position={[10, 8, 8]} intensity={1.6} color="#f4fbff" />
            <spotLight position={[-4, 5, 4]} angle={0.24} penumbra={1} intensity={3.2} color="#41d8a1" />
            <directionalLight position={[3, 2, 4]} intensity={1.15} color="#d8f3ff" />
            <directionalLight position={[-3, 1, -2]} intensity={0.8} color="#7decc3" />

            <SceneBackdrop />

            <group ref={laptopRef}>
                <Float speed={1.6} rotationIntensity={0.16} floatIntensity={0.32}>
                    <group position={[-0.2, -0.1, 0]}>
                        <mesh>
                            <boxGeometry args={[2.8, 0.12, 1.95]} />
                            <meshStandardMaterial color="#1d2735" metalness={0.95} roughness={0.12} />
                        </mesh>
                        <mesh position={[0, 0.98, -0.88]} rotation={[Math.PI / 10, 0, 0]}>
                            <boxGeometry args={[2.6, 1.78, 0.08]} />
                            <meshStandardMaterial color="#0b1624" metalness={0.32} roughness={0.18} emissive="#0f2338" emissiveIntensity={0.58} />
                        </mesh>
                        <mesh position={[0, 0.98, -0.81]} rotation={[Math.PI / 10, 0, 0]}>
                            <planeGeometry args={[2.38, 1.54]} />
                            <meshStandardMaterial color="#1a425a" emissive="#2fd39b" emissiveIntensity={0.26 + activeStep * 0.08} />
                        </mesh>
                        <Text
                            position={[0, 1.1, -0.74]}
                            fontSize={0.12}
                            color="#ecfffb"
                            maxWidth={2.05}
                            lineHeight={1.25}
                            textAlign="center"
                            font={fontUrl}
                        >
                            {"const developer = {\n  status: 'Open to work'\n};"}
                        </Text>
                    </group>
                </Float>
            </group>

            <group ref={phoneRef}>
                <Float speed={1.9} rotationIntensity={0.14} floatIntensity={0.25}>
                    <group position={[2, -0.28, 0.45]} rotation={[0.08, -0.6, 0.06]}>
                        <mesh>
                            <boxGeometry args={[0.74, 1.42, 0.09]} />
                            <meshStandardMaterial color="#05070a" metalness={1} roughness={0.08} />
                        </mesh>
                        <mesh position={[0, 0, 0.055]}>
                            <planeGeometry args={[0.62, 1.22]} />
                            <meshStandardMaterial color="#1a536b" emissive="#26c38f" emissiveIntensity={0.95} />
                        </mesh>
                        <Text
                            position={[0, 0.34, 0.08]}
                            fontSize={0.055}
                            color="#f4fbff"
                            maxWidth={0.42}
                            textAlign="center"
                            font={fontUrl}
                        >
                            {"Mobile\nUX"}
                        </Text>
                    </group>
                </Float>
            </group>

            <FloatingPanel
                position={[-2.45, 1.35, -0.75]}
                title="Backend"
                content="Node.js - PostgreSQL - APIs"
                active={activeStep === 0}
            />
            <FloatingPanel
                position={[2.5, 1.55, -0.5]}
                title="Frontend"
                content="React - Next.js - Three.js"
                active={activeStep === 1}
            />
            <FloatingPanel
                position={[-2.2, -1.25, -0.2]}
                title="Workflow"
                content="Design - Build - Deploy"
                active={activeStep === 2}
            />

            <mesh ref={orbRef} position={[-3.75, -1.95, -1.5]}>
                <sphereGeometry args={[1.1, 48, 48]} />
                <MeshDistortMaterial color="#18d39a" speed={2.2} distort={0.36} roughness={0.12} metalness={0.55} emissive="#18d39a" emissiveIntensity={0.3} />
            </mesh>

            <ContactShadows opacity={0.5} scale={12} blur={2.8} far={5} position={[0, -1.45, 0]} />
            <Environment preset="city" />
        </>
    );
}

export default function PortfolioScrollScene({
    steps = [],
    eyebrow = '3D Story',
    title = 'A scroll-driven scene that brings the portfolio to life.',
    copy = 'This chapter uses a visible 3D workspace and scroll-activated story cards so the portfolio feels interactive without losing clarity.',
}) {
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-step-index'));
                        if (!Number.isNaN(index)) {
                            setActiveStep(index);
                        }
                    }
                });
            },
            {
                threshold: 0.58,
                rootMargin: '-10% 0px -10% 0px',
            }
        );

        itemRefs.current.forEach((item) => item && observer.observe(item));
        return () => observer.disconnect();
    }, [steps]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) {
                return;
            }

            const rect = sectionRef.current.getBoundingClientRect();
            const total = Math.max(rect.height - window.innerHeight, 1);
            const nextProgress = THREE.MathUtils.clamp((-rect.top) / total, 0, 1);
            setProgress(nextProgress);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} className="section-divider portfolio-scroll-story">
            <div className="page-shell portfolio-scroll-intro">
                <div className="max-w-3xl space-y-4">
                    <p className="section-label">{eyebrow}</p>
                    <h2 className="section-heading">{title}</h2>
                    <p className="section-copy">{copy}</p>
                </div>
            </div>

            <div className="page-shell portfolio-scroll-grid">
                <div className="portfolio-scroll-visual panel accent-ring">
                    <div className="portfolio-scroll-visual-inner">
                        <Canvas dpr={[1, 1.75]} gl={{ antialias: true }}>
                            <PortfolioRig activeStep={activeStep} progress={progress} />
                        </Canvas>
                        <div className="portfolio-scroll-badge">
                            Interactive 3D Scene
                        </div>
                        <div className="portfolio-scroll-caption">
                            <p className="portfolio-scroll-caption-kicker">{steps[activeStep]?.kicker ?? 'Story'}</p>
                            <h3 className="portfolio-scroll-caption-title">{steps[activeStep]?.title ?? title}</h3>
                        </div>
                        <div className="portfolio-scroll-steps">
                            {steps.map((step, index) => (
                                <button
                                    key={step.title}
                                    type="button"
                                    className={`portfolio-scroll-stepdot ${index === activeStep ? 'is-active' : ''}`}
                                    onClick={() => {
                                        itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                    aria-label={`Go to step ${index + 1}: ${step.title}`}
                                />
                            ))}
                        </div>
                        <div className="portfolio-scroll-progress">
                            <span
                                className="portfolio-scroll-progress-bar"
                                style={{ transform: `scaleX(${0.2 + progress * 0.8})` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="portfolio-scroll-copy">
                    {steps.map((step, index) => {
                        const isActive = index === activeStep;
                        return (
                            <motion.article
                                key={step.title}
                                ref={(node) => {
                                    itemRefs.current[index] = node;
                                }}
                                data-step-index={index}
                                className={`portfolio-scroll-card panel rounded-[1.9rem] p-8 md:p-10 ${
                                    isActive ? 'border-emerald-300/35 shadow-[0_24px_60px_rgba(4,15,24,0.35)]' : 'opacity-78'
                                }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.45 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-sm font-semibold text-emerald-200">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.28em] text-emerald-200">{step.kicker}</p>
                                        <h3 className="mt-1 text-2xl font-semibold text-white md:text-3xl">{step.title}</h3>
                                    </div>
                                </div>
                                <p className="mt-6 text-base leading-8 text-slate-300">{step.description}</p>
                                {step.points?.length ? (
                                    <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
                                        {step.points.map((point) => (
                                            <li key={point} className="flex gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
