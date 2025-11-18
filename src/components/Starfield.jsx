import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Starfield() {
    const mountRef = useRef(null);
    const scrollRef = useRef(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Create stars
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 2000; // Reduced from 3000 for better performance
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        // Green color palette for stars
        const greenShades = [
            new THREE.Color(0x4ade80), // green-400
            new THREE.Color(0x22c55e), // green-500
            new THREE.Color(0x86efac), // green-300
            new THREE.Color(0xdbeafe), // light blue-white
            new THREE.Color(0xffffff), // white for variation
        ];

        for (let i = 0; i < starCount; i++) {
            // Spread stars in a sphere around camera
            const i3 = i * 3;
            const radius = 50 + Math.random() * 450;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Random green shade
            const colorIndex = Math.floor(Math.random() * greenShades.length);
            const color = greenShades[colorIndex];
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            // Random sizes
            sizes[i] = Math.random() * 2 + 0.5;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Star material with custom shader for twinkling
        const starMaterial = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Add some larger glowing stars
        const glowStarGeometry = new THREE.BufferGeometry();
        const glowStarCount = 80; // Reduced from 100
        const glowPositions = new Float32Array(glowStarCount * 3);
        const glowColors = new Float32Array(glowStarCount * 3);

        for (let i = 0; i < glowStarCount; i++) {
            const i3 = i * 3;
            const radius = 100 + Math.random() * 400;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            glowPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            glowPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            glowPositions[i3 + 2] = radius * Math.cos(phi);

            // Brighter green
            const color = new THREE.Color(0x4ade80);
            glowColors[i3] = color.r;
            glowColors[i3 + 1] = color.g;
            glowColors[i3 + 2] = color.b;
        }

        glowStarGeometry.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
        glowStarGeometry.setAttribute('color', new THREE.BufferAttribute(glowColors, 3));

        const glowStarMaterial = new THREE.PointsMaterial({
            size: 4,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
        });

        const glowStars = new THREE.Points(glowStarGeometry, glowStarMaterial);
        scene.add(glowStars);

        // Handle scroll
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };

        // Handle mouse move
        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth - 0.5) * 0.5,
                y: (e.clientY / window.innerHeight - 0.5) * 0.5,
            };
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.0003; // Even slower time progression

            // Very slow rotation of star field
            stars.rotation.y = time * 0.015; // Slower rotation
            stars.rotation.x = time * 0.008;

            // Glow stars rotate slightly faster
            glowStars.rotation.y = time * 0.025;
            glowStars.rotation.x = time * 0.012;

            // Gentle camera movement based on scroll
            const targetZ = 5 - scrollRef.current * 0.0008;
            camera.position.z += (targetZ - camera.position.z) * 0.05; // Smooth interpolation

            // Mouse parallax effect - smooth and subtle
            const targetRotationY = mouseRef.current.x * 0.15;
            const targetRotationX = -mouseRef.current.y * 0.15;
            
            camera.rotation.y += (targetRotationY - camera.rotation.y) * 0.05;
            camera.rotation.x += (targetRotationX - camera.rotation.x) * 0.05;

            // Twinkling effect - slower and more subtle
            const sizes = starGeometry.attributes.size.array;
            for (let i = 0; i < starCount; i++) {
                sizes[i] = Math.abs(Math.sin(time * 1 + i * 0.05)) * 1.5 + 0.8; // Slower, subtler twinkle
            }
            starGeometry.attributes.size.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            starGeometry.dispose();
            starMaterial.dispose();
            glowStarGeometry.dispose();
            glowStarMaterial.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -10,
                pointerEvents: 'none',
            }}
        />
    );
}
