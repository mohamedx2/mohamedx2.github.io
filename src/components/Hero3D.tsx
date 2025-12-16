'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function FloatingText() {
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={textRef}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            DEV
            <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [particleCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial size={0.05} color="#9333EA" transparent opacity={0.6} />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9333EA" />
      <ParticleField />
      <FloatingText />
    </>
  );
}

export default function Hero3D({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
