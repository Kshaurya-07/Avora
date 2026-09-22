import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowUpRight, Compass, Waves } from 'lucide-react';
import { PLAYGROUND_ITEMS } from '../../data/playground';
import { PlaygroundItem } from '../../types';

export const Playground: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PlaygroundItem | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hasItems = PLAYGROUND_ITEMS.length > 0;

  // Subtle interactive generative wave canvas for the intentional loading state
  useEffect(() => {
    if (hasItems) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;
    let mouse = { x: canvas.width / 2, y: canvas.height / 2, active: false };

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 600;
      canvas.height = 360;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    canvas.addEventListener('mousemove', onMouseMove);

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render layered ethereal sine wave contours
      const lines = 9;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1.2;
        const alpha = 0.15 + (i / lines) * 0.35;
        // Iridescent color shift
        ctx.strokeStyle = i % 2 === 0 
          ? `rgba(168, 85, 247, ${alpha})` 
          : `rgba(96, 165, 250, ${alpha})`;

        const amplitude = 24 + i * 4;
        const frequency = 0.006 + i * 0.001;

        for (let x = 0; x < canvas.width; x += 4) {
          const mouseDist = Math.hypot(x - mouse.x, canvas.height / 2 - mouse.y);
          const mouseDisplace = mouse.active && mouseDist < 120 ? (120 - mouseDist) * 0.25 : 0;
          const y =
            canvas.height / 2 +
            Math.sin(x * frequency + t + i * 0.5) * amplitude +
            Math.cos(x * 0.003 - t) * 12 -
            mouseDisplace;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasItems]);

  return (
    <section id="playground" className="relative w-full py-24 sm:py-36 px-4 sm:px-8 bg-[#FAF9F6] border-b border-avora-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-avora-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
              Experimental Space
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-none">
              PLAYGROUND.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base font-sans font-medium text-avora-charcoal">
              Not everything I create is client work.
            </p>
            <p className="text-sm font-sans text-avora-muted mt-1 leading-relaxed">
              An uninhibited space for typography research, custom shaders, 3D material tests, streetwear graphics, and visual art direction.
            </p>
          </div>
        </div>

        {/* Dynamic Display: Intentional Loading State vs Gallery Grid */}
        {!hasItems ? (
          /* Intentional Luxury Experimental Loading State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full rounded-3xl bg-[#F6F4EE]/60 border border-avora-border shadow-xs overflow-hidden p-8 sm:p-14 flex flex-col items-center justify-between text-center min-h-[460px]"
          >
            {/* Top Indicator */}
            <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-avora-border text-[11px] font-mono uppercase tracking-widest text-avora-muted shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-avora-blue animate-pulse" />
              <span>Generative Laboratory</span>
            </div>

            {/* Interactive Background Canvas */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 pointer-events-auto">
              <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
            </div>

            {/* Center Editorial Statement */}
            <div className="relative z-10 max-w-xl space-y-4 my-auto py-10 pointer-events-none">
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-avora-charcoal leading-tight">
                THE PLAYGROUND IS LOADING.
              </h3>
              <p className="text-sm sm:text-base font-sans text-avora-muted leading-relaxed">
                Experiments, visual studies, procedural shaders and interactive explorations will appear here. Move your cursor above to perturb the field.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 pt-6 border-t border-avora-border-light w-full flex flex-wrap items-center justify-between text-[11px] font-mono text-avora-muted">
              <span>EXPLORING: TYPOGRAPHY • GLSL • THREE.JS • GARMENT PATTERNS</span>
              <span className="hidden sm:inline">Living Interactive Canvas</span>
            </div>
          </motion.div>
        ) : (
          /* Real Playground Grid (When items are added) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PLAYGROUND_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer flex flex-col justify-between"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-avora-gray border border-avora-border shadow-xs group-hover:shadow-glass-hover transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-[10px] font-mono uppercase tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <p className="text-white text-xs font-sans leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono text-avora-charcoal border border-avora-border/60">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="pt-3 flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold tracking-tight text-avora-charcoal group-hover:text-avora-lavender transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-avora-muted">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal (For active items) */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#FAF9F6] border border-avora-border rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              <div className="flex justify-between items-center pb-4 border-b border-avora-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-avora-lavender" />
                  <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
                    {activeItem.category} Experiment
                  </span>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1.5 rounded-full bg-white border border-avora-border text-avora-charcoal hover:bg-black hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="my-6 rounded-2xl overflow-hidden aspect-[16/10] bg-avora-gray">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-bold text-avora-charcoal">
                  {activeItem.title}
                </h3>
                <p className="text-sm font-sans text-avora-charcoal/80 leading-relaxed">
                  {activeItem.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white border border-avora-border text-xs font-mono text-avora-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
