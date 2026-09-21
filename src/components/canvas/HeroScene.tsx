import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlassCrystal } from './GlassCrystal';

export const HeroScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (_) {
      setHasWebGL(false);
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      {/* Cinematic Environmental Gradient Layer (Mist, sunlight, warm airy atmosphere) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/30 via-transparent to-[#FAF9F6] z-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-200/30 via-blue-100/30 to-pink-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {hasWebGL ? (
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <GlassCrystal />
          </Suspense>
        </Canvas>
      ) : (
        /* Fallback for environments where WebGL is unavailable */
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-purple-300/40 via-blue-200/30 to-pink-200/40 backdrop-blur-2xl border border-white/60 shadow-glass animate-float flex items-center justify-center">
            <span className="font-serif text-3xl text-avora-charcoal/60 italic">AVORA 3D</span>
          </div>
        </div>
      )}
    </div>
  );
};
