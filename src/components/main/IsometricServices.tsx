"use client";

import React, { useRef, useState } from 'react';
import { BarChart3, Cloud, Zap, Database } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

// ============================================
// 📊 DATA ANALYTICS - Transforming Data Flow
// Visual metaphor: Raw blocks → Processing layers → Insights
// ============================================
const DataAnalyticsScene = ({ isHovered }: { isHovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<THREE.Group[]>([]);
  const particlesRef = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Gentle idle rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05 + (isHovered ? 0.2 : 0);
    }

    // Bars grow/pulse to show data transformation
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        const phase = time * 0.8 + i * 0.3;
        bar.scale.y = 1 + Math.sin(phase) * 0.15;
        bar.position.y = Math.sin(phase) * 0.05;
      }
    });

    // Data particles flow upward (raw → insight)
    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        particle.position.y = ((time * 0.5 + i * 0.5) % 3) - 0.5;
        const material = particle.material as THREE.MeshStandardMaterial;
        material.opacity = Math.sin((time + i) * 2) * 0.3 + 0.5;
      }
    });
  });

  const bars = [
    { x: -1.2, height: 0.8, color: "#7c3aed", label: "Raw" },
    { x: -0.6, height: 1.2, color: "#9333ea", label: "Process" },
    { x: 0, height: 1.8, color: "#a855f7", label: "Transform" },
    { x: 0.6, height: 1.4, color: "#c084fc", label: "Analyze" },
    { x: 1.2, height: 1.6, color: "#e9d5ff", label: "Insight" },
  ];

  return (
    <group ref={groupRef}>
      {/* Data transformation bars */}
      {bars.map((bar, i) => (
        <group 
          key={i} 
          position={[bar.x, 0, 0]}
          ref={(el) => {
            if (el) barsRef.current[i] = el;
          }}
        >
          {/* Main bar */}
          <mesh position={[0, bar.height / 2, 0]}>
            <boxGeometry args={[0.35, bar.height, 0.35]} />
            <meshStandardMaterial 
              color={bar.color}
              emissive={bar.color}
              emissiveIntensity={isHovered ? 0.5 : 0.2}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>
          
          {/* Glowing cap - represents insights */}
          <mesh position={[0, bar.height + 0.05, 0]}>
            <boxGeometry args={[0.4, 0.08, 0.4]} />
            <meshStandardMaterial 
              color="#fef3ff"
              emissive="#c084fc"
              emissiveIntensity={isHovered ? 1 : 0.6}
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>
      ))}

      {/* Flowing data particles */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i}
          position={[
            Math.sin(i * 0.8) * 1.5,
            0,
            Math.cos(i * 0.8) * 0.3
          ]}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial 
            color="#fef3ff"
            emissive="#c084fc"
            emissiveIntensity={1.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Base platform */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.5, 1.5]} />
        <meshStandardMaterial 
          color="#1e1b4b"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

// ============================================
// ☁️ CLOUD INFRASTRUCTURE - Modular Scalability
// Visual metaphor: Floating modular blocks forming elastic cloud
// ============================================
const CloudInfrastructureScene = ({ isHovered }: { isHovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const modulesRef = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.08 + (isHovered ? 0.15 : 0);
    }

    // Modules float independently - showing elasticity
    modulesRef.current.forEach((module, i) => {
      if (module) {
        const phase = time * 0.6 + i * 0.4;
        module.position.y += Math.sin(phase) * 0.002;
        module.rotation.y += 0.003;
      }
    });
  });

  // Cloud modules arranged in elastic formation
  const modules = [
    // Bottom layer - foundation
    { pos: [-0.8, 0, 0.5], size: [0.5, 0.5, 0.5], color: "#fbbf24" },
    { pos: [0, 0, 0.5], size: [0.5, 0.5, 0.5], color: "#f59e0b" },
    { pos: [0.8, 0, 0.5], size: [0.5, 0.5, 0.5], color: "#fbbf24" },
    
    // Middle layer - scaling
    { pos: [-0.4, 0.6, 0], size: [0.45, 0.45, 0.45], color: "#84cc16" },
    { pos: [0.4, 0.6, 0], size: [0.45, 0.45, 0.45], color: "#84cc16" },
    
    // Top layer - distributed
    { pos: [-0.6, 1.2, -0.3], size: [0.4, 0.4, 0.4], color: "#a3e635" },
    { pos: [0.2, 1.2, -0.3], size: [0.35, 0.35, 0.35], color: "#bef264" },
    { pos: [0.8, 1.3, -0.2], size: [0.3, 0.3, 0.3], color: "#d9f99d" },
  ];

  return (
    <group ref={groupRef}>
      {modules.map((module, i) => (
        <mesh
          key={i}
          position={module.pos as [number, number, number]}
          ref={(el) => {
            if (el) modulesRef.current[i] = el;
          }}
        >
          <boxGeometry args={module.size as [number, number, number]} />
          <meshStandardMaterial
            color={module.color}
            emissive={module.color}
            emissiveIntensity={isHovered ? 0.4 : 0.15}
            metalness={0.2}
            roughness={0.5}
          />
        </mesh>
      ))}

      {/* Connection lines - showing infrastructure links */}
      {modules.slice(0, -1).map((_, i) => (
        <mesh
          key={`line-${i}`}
          position={[
            (modules[i].pos[0] + modules[i + 1].pos[0]) / 2,
            (modules[i].pos[1] + modules[i + 1].pos[1]) / 2,
            (modules[i].pos[2] + modules[i + 1].pos[2]) / 2,
          ]}
        >
          <cylinderGeometry args={[0.02, 0.02, 0.6, 6]} />
          <meshStandardMaterial
            color="#facc15"
            transparent
            opacity={isHovered ? 0.6 : 0.3}
            emissive="#fde047"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

// ============================================
// ⚡ API SERVICES - Interconnected Network
// Visual metaphor: Central hub with data pulses traveling between nodes
// ============================================
const APIServicesScene = ({ isHovered }: { isHovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const pulsesRef = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }

    // Nodes pulse
    nodesRef.current.forEach((node, i) => {
      if (node) {
        const scale = 1 + Math.sin(time * 2 + i) * 0.1;
        node.scale.setScalar(scale);
      }
    });

    // Data pulses travel along connections
    pulsesRef.current.forEach((pulse, i) => {
      if (pulse) {
        const t = (time + i * 0.5) % 1;
        const angle = (i / pulsesRef.current.length) * Math.PI * 2;
        pulse.position.x = Math.cos(angle) * (1 - t) * 1.2;
        pulse.position.y = 0.5 + Math.sin(t * Math.PI) * 0.3;
        pulse.position.z = Math.sin(angle) * (1 - t) * 1.2;
        const material = pulse.material as THREE.MeshStandardMaterial;
        material.opacity = Math.sin(t * Math.PI);
      }
    });
  });

  // API node positions (hub and spoke pattern)
  const nodes = [
    { pos: [0, 0.5, 0], size: 0.35, color: "#dc2626", isHub: true }, // Central hub
    { pos: [1.2, 0.5, 0], size: 0.22, color: "#ef4444", isHub: false },
    { pos: [-1.2, 0.5, 0], size: 0.22, color: "#f87171", isHub: false },
    { pos: [0, 0.5, 1.2], size: 0.22, color: "#fb7185", isHub: false },
    { pos: [0, 0.5, -1.2], size: 0.22, color: "#fca5a5", isHub: false },
  ];

  return (
    <group ref={groupRef}>
      {/* Central hub */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial
          color="#7f1d1d"
          emissive="#dc2626"
          emissiveIntensity={isHovered ? 0.8 : 0.4}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* API nodes */}
      {nodes.slice(1).map((node, i) => (
        <mesh
          key={i}
          position={node.pos as [number, number, number]}
          ref={(el) => {
            if (el) nodesRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[node.size, 20, 20]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={isHovered ? 1 : 0.5}
            metalness={0.4}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Connection lines */}
      {nodes.slice(1).map((node, i) => (
        <mesh
          key={`conn-${i}`}
          position={[node.pos[0] / 2, 0.5, node.pos[2] / 2]}
          rotation={[
            0,
            Math.atan2(node.pos[2], node.pos[0]),
            Math.atan2(0, Math.sqrt(node.pos[0] ** 2 + node.pos[2] ** 2))
          ]}
        >
          <cylinderGeometry args={[0.02, 0.02, 1.2, 8]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive="#dc2626"
            emissiveIntensity={0.3}
            transparent
            opacity={isHovered ? 0.8 : 0.4}
          />
        </mesh>
      ))}

      {/* Data pulses */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={`pulse-${i}`}
          ref={(el) => {
            if (el) pulsesRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial
            color="#fef2f2"
            emissive="#fca5a5"
            emissiveIntensity={1.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
};

// ============================================
// 🗄️ DATABASE MANAGEMENT - Synchronized Pipelines
// Visual metaphor: Stacked cylinders with data flowing through pipelines
// ============================================
const DatabaseManagementScene = ({ isHovered }: { isHovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const layersRef = useRef<THREE.Mesh[]>([]);
  const dataFlowRef = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.06 + (isHovered ? 0.12 : 0);
    }

    // Layers pulse gently - showing sync
    layersRef.current.forEach((layer, i) => {
      if (layer) {
        const phase = time * 1.5 + i * 0.3;
        layer.scale.y = 1 + Math.sin(phase) * 0.05;
      }
    });

    // Data streams flow through pipelines
    dataFlowRef.current.forEach((data, i) => {
      if (data) {
        const angle = (i / dataFlowRef.current.length) * Math.PI * 2;
        const radius = 1.2;
        const height = ((time * 0.8 + i * 0.3) % 2.5);
        data.position.set(
          Math.cos(angle + time * 0.5) * radius,
          height,
          Math.sin(angle + time * 0.5) * radius
        );
        const material = data.material as THREE.MeshStandardMaterial;
        material.opacity = Math.sin(height * Math.PI / 2.5) * 0.7 + 0.3;
      }
    });
  });

  const layers = [
    { y: 0, radius: 1.0, height: 0.3, color: "#0369a1" },
    { y: 0.5, radius: 0.9, height: 0.3, color: "#0284c7" },
    { y: 1.0, radius: 0.8, height: 0.3, color: "#0ea5e9" },
    { y: 1.5, radius: 0.7, height: 0.3, color: "#38bdf8" },
    { y: 2.0, radius: 0.6, height: 0.3, color: "#7dd3fc" },
  ];

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Database layers (stacked cylinders) */}
      {layers.map((layer, i) => (
        <group key={i} position={[0, layer.y, 0]}>
          <mesh
            ref={(el) => {
              if (el) layersRef.current[i] = el;
            }}
          >
            <cylinderGeometry args={[layer.radius, layer.radius, layer.height, 32]} />
            <meshStandardMaterial
              color={layer.color}
              emissive={layer.color}
              emissiveIntensity={isHovered ? 0.5 : 0.2}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>

          {/* Glowing rim - showing active sync */}
          <mesh position={[0, layer.height / 2, 0]}>
            <torusGeometry args={[layer.radius, 0.03, 12, 32]} />
            <meshStandardMaterial
              color="#bfdbfe"
              emissive="#60a5fa"
              emissiveIntensity={isHovered ? 1.2 : 0.6}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      ))}

      {/* Data flow particles (streaming through pipelines) */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) dataFlowRef.current[i] = el;
          }}
        >
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshStandardMaterial
            color="#dbeafe"
            emissive="#93c5fd"
            emissiveIntensity={1.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Pipeline connectors */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={`pipe-${i}`}
            position={[
              Math.cos(angle) * 0.9,
              1.25,
              Math.sin(angle) * 0.9
            ]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
            <meshStandardMaterial
              color="#0284c7"
              transparent
              opacity={0.6}
              emissive="#38bdf8"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

// ============================================
// 🎬 3D Scene Container
// ============================================
const Scene3D = ({ type, isHovered }: { type: string; isHovered: boolean }) => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
      gl={{ 
        alpha: true, 
        antialias: true,
        powerPreference: 'high-performance'
      }}
    >
      <OrthographicCamera makeDefault position={[4, 4, 4]} zoom={60} />

      {/* Optimized lighting setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-3, 5, -3]} intensity={0.4} />
      <pointLight position={[0, 4, 2]} intensity={0.8} color="#ffffff" />

      {/* Render scene based on type */}
      {type === 'analytics' && <DataAnalyticsScene isHovered={isHovered} />}
      {type === 'cloud' && <CloudInfrastructureScene isHovered={isHovered} />}
      {type === 'api' && <APIServicesScene isHovered={isHovered} />}
      {type === 'database' && <DatabaseManagementScene isHovered={isHovered} />}
    </Canvas>
  );
};

// ============================================
// 🎴 Feature Card Component
// ============================================
interface FeatureCard3DProps {
  icon: React.ReactNode;
  badge: number;
  title: string;
  description: string;
  highlightText: string;
  sceneType: string;
  colorTheme: {
    primary: string;
    secondary: string;
  };
}

const FeatureCard3D: React.FC<FeatureCard3DProps> = ({
  icon,
  badge,
  title,
  description,
  highlightText,
  sceneType,
  colorTheme,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-[400px] rounded-3xl overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10" />

      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colorTheme.primary}20, transparent 70%)`
        }}
      />

      {/* Content container */}
      <div className="relative h-full flex flex-col p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div 
            className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
              transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
            }}
          >
            {icon}
          </div>

          {/* Badge */}
          <div className="relative">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
              style={{ backgroundColor: colorTheme.primary }}
            >
              {badge}
            </div>
            <div 
              className="absolute inset-0 rounded-full animate-ping opacity-75"
              style={{ backgroundColor: colorTheme.primary }}
            />
          </div>
        </div>

        {/* Text content */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
            <span 
              className="font-semibold ml-1"
              style={{ color: colorTheme.secondary }}
            >
              {highlightText}
            </span>
            .
          </p>
        </div>

        {/* 3D Scene */}
        <div className="flex-1 relative">
          <Scene3D type={sceneType} isHovered={isHovered} />
        </div>
      </div>
    </div>
  );
};

// ============================================
// 🏠 Main Component
// ============================================
const IsometricServices = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      badge: 3,
      title: "Data Analytics",
      description: "Transform raw data into",
      highlightText: "actionable insights",
      sceneType: 'analytics',
      colorTheme: {
        primary: "#a855f7",
        secondary: "#c084fc",
      },
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      badge: 5,
      title: "Cloud Infrastructure",
      description: "Scale seamlessly with",
      highlightText: "enterprise-grade cloud solutions",
      sceneType: 'cloud',
      colorTheme: {
        primary: "#f59e0b",
        secondary: "#84cc16",
      },
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      badge: 2,
      title: "API Services",
      description: "Connect and integrate",
      highlightText: "powerful APIs in real-time",
      sceneType: 'api',
      colorTheme: {
        primary: "#dc2626",
        secondary: "#f87171",
      },
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      badge: 4,
      title: "Database Management",
      description: "Sync data from your systems",
      highlightText: "instantly with automated pipelines",
      sceneType: 'database',
      colorTheme: {
        primary: "#0284c7",
        secondary: "#38bdf8",
      },
    },
  ];

  return (
    <section className="w-full py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">3D Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience interactive visualizations where every shape tells your story
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FeatureCard3D key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsometricServices;
