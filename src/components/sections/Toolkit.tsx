import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, Sparkles, Layout, Palette, Terminal } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const designTools = [
    { name: 'Figma', category: 'UI Systems & Vector Craft', detail: 'Components, Auto-layout, Tokens' },
    { name: 'Adobe Photoshop', category: 'Raster Art Direction', detail: 'Textures, Compositing, Retouching' },
    { name: 'Adobe Illustrator', category: 'Vector & Identity', detail: 'Precision Bezier Grids & Marks' },
    { name: 'Canva', category: 'Rapid Social Prototyping', detail: 'Agile Marketing Visuals' },
  ];

  const devTools = [
    { name: 'React 18 / 19', category: 'UI Component Engineering', detail: 'Modern Hooks, State, Suspense' },
    { name: 'Next.js', category: 'Fullstack Framework', detail: 'Server Components, SSR, Routing' },
    { name: 'Three.js / WebGL', category: '3D Spatial Interactive', detail: 'Shaders, Refraction, GLSL' },
    { name: 'Tailwind CSS', category: 'Utility Styling Engine', detail: 'Fluid Design Tokens & Types' },
    { name: 'TypeScript', category: 'Type-Safe Architecture', detail: 'Strict Structural Typing' },
    { name: 'Framer Motion', category: 'Cinematic Physics', detail: 'Gestures, Layout Transitions' },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#F8F7F3] border-b border-avora-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-avora-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
              Craft & Capabilities
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-none">
              MY TOOLKIT.
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base font-sans text-avora-muted">
            <p className="text-avora-charcoal font-medium">Selected instruments for visual and digital craft.</p>
            <p className="mt-1">Hand-picked software and technologies calibrated for bespoke design systems and silky web experiences.</p>
          </div>
        </div>

        {/* 2-Column Grid: Design Tools vs Development Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Design Atelier Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-avora-border text-xs font-mono tracking-widest text-avora-muted uppercase">
              <Palette className="w-3.5 h-3.5 text-avora-lavender" />
              <span>Design Discipline Instruments</span>
            </div>

            <div className="space-y-3">
              {designTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-avora-border shadow-xs hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-avora-charcoal group-hover:text-avora-lavender transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs font-mono text-avora-muted mt-0.5">{tool.category}</p>
                  </div>
                  <span className="text-[10px] font-mono text-avora-muted/70 bg-avora-ivory px-2.5 py-1 rounded-md border border-avora-border-light hidden sm:inline-block">
                    {tool.detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Engineering Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-avora-border text-xs font-mono tracking-widest text-avora-muted uppercase">
              <Code className="w-3.5 h-3.5 text-avora-blue" />
              <span>Engineering & WebGL Stack</span>
            </div>

            <div className="space-y-3">
              {devTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-avora-border shadow-xs hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-avora-charcoal group-hover:text-avora-blue transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs font-mono text-avora-muted mt-0.5">{tool.category}</p>
                  </div>
                  <span className="text-[10px] font-mono text-avora-muted/70 bg-avora-ivory px-2.5 py-1 rounded-md border border-avora-border-light hidden sm:inline-block">
                    {tool.detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
