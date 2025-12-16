'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, geometry, color }: { position: [number, number, number]; geometry: 'box' | 'sphere' | 'torus' | 'octahedron'; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.4, 0.2, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.5, 0]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#9333EA" />
      
      {/* Create multiple floating geometries */}
      <FloatingGeometry position={[-5, 3, -5]} geometry="box" color="#4F46E5" />
      <FloatingGeometry position={[5, -3, -5]} geometry="sphere" color="#9333EA" />
      <FloatingGeometry position={[-3, -5, -8]} geometry="torus" color="#06B6D4" />
      <FloatingGeometry position={[3, 5, -8]} geometry="octahedron" color="#8B5CF6" />
      <FloatingGeometry position={[0, 0, -10]} geometry="box" color="#3B82F6" />
      <FloatingGeometry position={[-6, 0, -6]} geometry="sphere" color="#6366F1" />
      <FloatingGeometry position={[6, 2, -7]} geometry="torus" color="#A855F7" />
      <FloatingGeometry position={[0, -4, -6]} geometry="octahedron" color="#4F46E5" />
    </>
  );
}

export default function Background3D({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
