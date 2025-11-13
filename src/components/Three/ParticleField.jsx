import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PointsCloud({ count = 800, radius = 2.2, speed = 0.06, pointSize = 0.02, pointColor = '#7CFFCB', opacity = 0.75 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // random point in sphere
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      arr[i * 3 + 0] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, [count, radius]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * speed;
    points.current.rotation.x = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <points ref={points} rotation={[0.2, 0, 0]}>
      <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
      <pointsMaterial
        color={new THREE.Color(pointColor)}
        size={pointSize}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={opacity}
      />
      </points>
  );
}

export default function ParticleField({ className, alwaysRender = false, background = 'black', count, size, radius, speed, color, opacity }) {
  // Respect user preference for reduced motion unless explicitly overridden
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!alwaysRender && prefersReduced) return null;

  return (
    <div className={className} style={{ pointerEvents: 'none' }}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 4.5], fov: 60 }}
      >
        <color attach="background" args={[background]} />
        <ambientLight intensity={0.3} />
        <PointsCloud
          count={count ?? (typeof window !== 'undefined' && window.innerWidth > 1024 ? 1000 : 700)}
          radius={radius ?? 2.2}
          speed={speed ?? 0.06}
          pointSize={size ?? 0.015}
          pointColor={color ?? '#7CFFCB'}
          opacity={opacity ?? 0.65}
        />
      </Canvas>
    </div>
  );
}
