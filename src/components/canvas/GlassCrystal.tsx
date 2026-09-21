import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export const GlassCrystal: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth inertia rotation & mouse parallax tilt
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        Math.cos(t / 3) * 0.2 + pointer.y * 0.4,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        Math.sin(t / 2.5) * 0.3 + pointer.x * 0.6,
        0.05
      );
      meshRef.current.rotation.z = Math.sin(t / 4) * 0.1;
    }

    // Inner core counter-rotation
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.4;
      innerRef.current.rotation.y = t * 0.5;
    }

    // Follow pointer with subtle iridescent light
    if (lightRef.current) {
      lightRef.current.position.x = pointer.x * 4;
      lightRef.current.position.y = pointer.y * 4;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Dynamic interactive cursor-following light */}
      <pointLight ref={lightRef} position={[0, 0, 4]} intensity={2.2} color="#C084FC" distance={10} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} color="#FAF9F6" />
      <directionalLight position={[-5, -4, -3]} intensity={1.0} color="#93C5FD" />

      {/* Floating Wrapper */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Outer Iridescent Faceted Glass Sculpture */}
        <mesh ref={meshRef} scale={1.8}>
          <octahedronGeometry args={[1.4, 1]} />
          <MeshTransmissionMaterial
            backside={true}
            samples={12}
            resolution={512}
            transmission={0.96}
            roughness={0.08}
            thickness={1.4}
            ior={1.52}
            chromaticAberration={0.08}
            anisotropy={0.3}
            distortion={0.3}
            distortionScale={0.4}
            temporalDistortion={0.1}
            attenuationDistance={1.2}
            attenuationColor="#E9D5FF"
            color="#FFFFFF"
          />
        </mesh>

        {/* Inner Floating Refractive Polyhedron Core */}
        <mesh ref={innerRef} scale={0.75}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshPhysicalMaterial
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#C084FC"
            emissive="#38BDF8"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>
    </group>
  );
};
