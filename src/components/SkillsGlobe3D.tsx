'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  position: [number, number, number];
  color: string;
}

function SkillNode({ skill, onClick }: { skill: Skill; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 0.15 : 0.1);
    }
  });

  return (
    <group position={skill.position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={hovered ? 0.5 : 0.2} />
      </mesh>
      {hovered && (
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      )}
    </group>
  );
}

function RotatingGlobe({ skills, onSkillClick }: { skills: Skill[]; onSkillClick: (skill: Skill) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main globe wireframe */}
      <Sphere args={[3, 32, 32]}>
        <meshBasicMaterial color="#4F46E5" wireframe opacity={0.1} transparent />
      </Sphere>

      {/* Skill nodes */}
      {skills.map((skill) => (
        <SkillNode key={skill.name} skill={skill} onClick={() => onSkillClick(skill)} />
      ))}
    </group>
  );
}

function Scene({ skills, onSkillClick }: { skills: Skill[]; onSkillClick: (skill: Skill) => void }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9333EA" />
      <RotatingGlobe skills={skills} onSkillClick={onSkillClick} />
      <OrbitControls enableZoom={true} minDistance={5} maxDistance={15} />
    </>
  );
}

export default function SkillsGlobe3D({ className = '' }: { className?: string }) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Generate skill positions on a sphere
  const skills = useMemo(() => {
    const skillNames = [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#000000' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Go', color: '#00ADD8' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Git', color: '#F05032' },
      { name: 'Tailwind', color: '#06B6D4' },
      { name: 'C', color: '#A8B9CC' },
    ];

    return skillNames.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / skillNames.length);
      const theta = Math.sqrt(skillNames.length * Math.PI) * phi;
      const radius = 3.5;

      return {
        ...skill,
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ] as [number, number, number],
      };
    });
  }, []);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className={`relative ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene skills={skills} onSkillClick={handleSkillClick} />
      </Canvas>
      {selectedSkill && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 px-6 py-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-center font-semibold text-gray-900 dark:text-white">
            {selectedSkill.name}
          </p>
          <button
            onClick={() => setSelectedSkill(null)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
