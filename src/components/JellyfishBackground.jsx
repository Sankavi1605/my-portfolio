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

        let isInitialized = false;

        const init = async () => {
            if (isInitialized) return;
            isInitialized = true;

            if (!navigator.gpu) {
                console.error("Your device does not support WebGPU.");
                return;
            }

            renderer = new THREE.WebGPURenderer({
                antialias: true
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

            // Define camera and target paths for scrollytelling
            const cameraPoints = [
                new THREE.Vector3(0, 0, 18),      // Hero: Zoomed out, overview
                new THREE.Vector3(0, 2, 4),       // About: Extreme Zoom In, look down
                new THREE.Vector3(20, -5, 25),    // Projects 1: Extreme Zoom Out & Pan right
                new THREE.Vector3(-6, -8, 6),     // Projects 2: Zoom In close & Pan left
                new THREE.Vector3(0, -12, 28),    // FAQ: Extreme Zoom Out straight back
                new THREE.Vector3(0, -16, 7)      // Contact: Zoom In for the finale
            ];
            const targetPoints = [
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, -4, 0),
                new THREE.Vector3(0, -4, 0),
                new THREE.Vector3(0, -8, 0),
                new THREE.Vector3(0, -12, 0),
                new THREE.Vector3(0, -14, 0)
            ];
            
            const cameraPath = new THREE.CatmullRomCurve3(cameraPoints);
            const targetPath = new THREE.CatmullRomCurve3(targetPoints);

            const handleScroll = () => {
                const scrollY = window.scrollY;
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                let scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
                scrollProgress = Math.max(0, Math.min(1, scrollProgress));
                
                if (appInstance && appInstance.camera) {
                    const currentPos = cameraPath.getPoint(scrollProgress);
                    const currentTarget = targetPath.getPoint(scrollProgress);
                    
                    appInstance.camera.position.copy(currentPos);
                    appInstance.camera.lookAt(currentTarget);
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
                if (containerRef.current && renderer && renderer.domElement) {
                    containerRef.current.removeChild(renderer.domElement);
                }
                
                // Cleanup Tweakpane and info elements from document body if they exist
                const infoElem = document.getElementById("info");
                if (infoElem) infoElem.remove();
                const tpElems = document.querySelectorAll(".tp-dfwv");
                tpElems.forEach(el => el.remove());
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

    return <div ref={containerRef} className="fixed top-0 left-0 right-0 bottom-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
};

export default JellyfishBackground;
