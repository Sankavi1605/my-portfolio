import React, { useEffect, useRef } from 'react';
import * as THREE from 'three/webgpu';
import App from '../jellyfish/app.js';

THREE.ColorManagement.enabled = true;

const JellyfishBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let animationFrameId;
        let renderer;
        let clock;
        let appInstance;

        const init = async () => {
            if (!navigator.gpu) {
                console.error("Your device does not support WebGPU.");
                return;
            }

            renderer = new THREE.WebGPURenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.outputColorSpace = THREE.SRGBColorSpace;

            if (!renderer.backend.isWebGPUBackend) {
                console.error("Couldn't initialize WebGPU. Make sure WebGPU is supported by your Browser!");
                return;
            }

            containerRef.current.appendChild(renderer.domElement);

            appInstance = new App(renderer);
            await appInstance.init(async (frac) => {
                // optional: handle loading progress
            });

            // Disable OrbitControls so scrolling doesn't conflict, and we can control it manually
            if (appInstance.controls) {
                appInstance.controls.enabled = false;
            }

            const handleResize = () => {
                if (renderer && appInstance) {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    appInstance.resize(window.innerWidth, window.innerHeight);
                }
            };
            window.addEventListener("resize", handleResize);

            const handleScroll = () => {
                const scrollY = window.scrollY;
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
                
                if (appInstance && appInstance.camera) {
                    // Start camera at (0, 0, 15), move it up and backwards slightly on scroll
                    const baseY = scrollProgress * -15; // Move camera down relative to world (so jellyfish go up)
                    appInstance.camera.position.y = baseY;
                    appInstance.camera.position.z = 15 + (scrollProgress * 5);
                    appInstance.camera.lookAt(0, baseY, 0);
                }
            };
            window.addEventListener("scroll", handleScroll);

            clock = new THREE.Clock();
            const animate = async () => {
                const delta = clock.getDelta();
                const elapsed = clock.getElapsedTime();
                if (appInstance) {
                    await appInstance.update(delta, elapsed);
                }
                animationFrameId = requestAnimationFrame(animate);
            };
            animationFrameId = requestAnimationFrame(animate);

            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleScroll);
                cancelAnimationFrame(animationFrameId);
                if (containerRef.current && renderer) {
                    containerRef.current.removeChild(renderer.domElement);
                }
            };
        };

        const cleanupPromise = init();

        return () => {
            cleanupPromise.then(cleanupFn => {
                if (typeof cleanupFn === 'function') {
                    cleanupFn();
                }
            });
        };
    }, []);

    return <div ref={containerRef} className="fixed top-0 left-0 right-0 bottom-0 z-[-10] w-full h-full bg-black pointer-events-none" />;
};

export default JellyfishBackground;
