"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";

function MatrixCore() {
  const meshRef = useRef<any>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Follow mouse position slowly
      const targetX = (state.pointer.x * state.viewport.width) / 4;
      const targetY = (state.pointer.y * state.viewport.height) / 4;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
    
    if (materialRef.current) {
      // Increase distortion based on pointer distance from center
      const pointerDistance = Math.sqrt(state.pointer.x ** 2 + state.pointer.y ** 2);
      const targetDistort = 0.3 + pointerDistance * 0.5;
      materialRef.current.distort += (targetDistort - materialRef.current.distort) * 0.1;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <Icosahedron ref={meshRef} args={[1.5, 3]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#00ff41" // Neon green
          attach="material"
          distort={0.5}
          speed={3}
          wireframe={true}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  );
}

function DataNode({ radius = 3, speed = 0.5, size = 0.5, color = "#00ff00", offset = 0, yOffset = 0 }: { radius: number, speed: number, size: number, color: string, offset: number, yOffset: number }) {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const angle = time * speed + offset;
      
      // Calculate orbit position
      meshRef.current.position.x = Math.cos(angle) * radius;
      meshRef.current.position.z = Math.sin(angle) * radius;
      
      // Add a slight vertical hovering effect
      meshRef.current.position.y = Math.sin(time * speed * 2 + offset) * 0.5 + yOffset;
      
      // Rotate the node on its own axis
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[size, 1]} position={[radius, yOffset, 0]}>
      <meshBasicMaterial color={color} wireframe={true} />
    </Icosahedron>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] opacity-70 pointer-events-auto mix-blend-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00ff00" />
        
        {/* Animated matrix core */}
        <MatrixCore />
        
        {/* Orbiting Data Nodes */}
        <DataNode radius={4} speed={0.2} size={0.3} color="#00ff41" offset={0} yOffset={1.5} />
        <DataNode radius={6.5} speed={0.15} size={0.5} color="#0bd64f" offset={Math.PI / 2} yOffset={-1} />
        <DataNode radius={8} speed={0.1} size={0.8} color="#008f11" offset={Math.PI} yOffset={2} />
        <DataNode radius={10} speed={0.05} size={0.4} color="#00ff00" offset={Math.PI / 1.5} yOffset={-2.5} />

        {/* Matrix starfield/particles */}
        <Stars radius={100} depth={50} count={5000} factor={3} saturation={1} fade speed={2} />
      </Canvas>
    </div>
  );
}
