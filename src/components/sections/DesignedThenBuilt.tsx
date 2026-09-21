import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Code2, ArrowRight, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export const DesignedThenBuilt: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'design' | 'code' | 'live'>('live');

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#F8F7F3] border-b border-avora-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted block mb-3">
            Bridging Art & Engineering
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-none">
            DESIGNED.<br />THEN BUILT.
          </h2>
          <div className="mt-6 space-y-2 text-sm sm:text-base font-sans text-avora-muted max-w-xl">
            <p className="text-avora-charcoal font-medium">
              AVORA doesn't just draw static mockups in Figma.
            </p>
            <p>
              Every visual system, interface layout, and typographic cadence is engineered to translate seamlessly into high-performance, accessible, and responsive code.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="bg-white rounded-3xl border border-avora-border shadow-lg p-6 sm:p-10">
          {/* Stage Tab Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-avora-border-light">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-avora-muted">Pipeline View:</span>
              <div className="flex gap-1 bg-avora-ivory p-1 rounded-full border border-avora-border">
                {[
                  { id: 'design', label: '01 Design Spec' },
                  { id: 'code', label: '02 Architecture' },
                  { id: 'live', label: '03 Living Experience' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStage(s.id as any)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                      activeStage === s.id
                        ? 'bg-avora-charcoal text-white shadow-xs'
                        : 'text-avora-muted hover:text-black'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-emerald-600 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pixel-Accurate Code Translation</span>
            </div>
          </div>

          {/* Dynamic Interactive Stage Body */}
          <div className="my-8 min-h-[320px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Context */}
            <div className="lg:col-span-5 space-y-4">
              {activeStage === 'design' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <span className="text-xs font-mono text-avora-lavender font-semibold">STAGE 01 // FIGMA ARTIFACT</span>
                  <h3 className="font-serif text-3xl font-bold text-avora-charcoal">Mathematical Vectors & Layout Grids</h3>
                  <p className="text-sm font-sans text-avora-muted leading-relaxed">
                    Auto-layout hierarchies, fluid rem/ch typography scales, design token variables, and multi-state component variants.
                  </p>
                  <div className="text-xs font-mono text-avora-charcoal space-y-1 pt-2">
                    <p>• 8pt Geometric Baseline Grid</p>
                    <p>• Optical Letter-Spacing Calibrations</p>
                    <p>• Accessible Contrast Ratio AA+ Certified</p>
                  </div>
                </motion.div>
              )}

              {activeStage === 'code' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <span className="text-xs font-mono text-avora-blue font-semibold">STAGE 02 // CODE ARCHITECTURE</span>
                  <h3 className="font-serif text-3xl font-bold text-avora-charcoal">Clean, Modular TypeScript & WebGL</h3>
                  <p className="text-sm font-sans text-avora-muted leading-relaxed">
                    Zero bloat, pure type safety, customized Tailwind CSS utility layers, and GPU-accelerated Framer Motion physics.
                  </p>
                  <div className="text-xs font-mono text-avora-charcoal space-y-1 pt-2">
                    <p>• React 18 / 19 Server & Client Components</p>
                    <p>• Sub-second WebGL Frame Budgets (60 FPS)</p>
                    <p>• Lenis Smooth Inertia Momentum Scroll</p>
                  </div>
                </motion.div>
              )}

              {activeStage === 'live' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <span className="text-xs font-mono text-emerald-600 font-semibold">STAGE 03 // LIVE EXPERIENCE</span>
                  <h3 className="font-serif text-3xl font-bold text-avora-charcoal">Living, Breathing Digital Universe</h3>
                  <p className="text-sm font-sans text-avora-muted leading-relaxed">
                    The final production website responds fluidly to mouse movement, scroll depth, and touch interaction with silky tactile feedback.
                  </p>
                  <div className="text-xs font-mono text-avora-charcoal space-y-1 pt-2">
                    <p>• Cross-browser & Mobile Resilient</p>
                    <p>• 99+ Lighthouse Core Web Vitals</p>
                    <p>• Production-Ready Deployment</p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Interactive Mockup Window */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-avora-border rounded-2xl p-6 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-avora-border text-xs font-mono text-avora-muted">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                </div>
                <span>avora.design/experience-runtime</span>
              </div>

              <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-avora-border shadow-md flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-avora-lavender animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-avora-charcoal">
                    {activeStage === 'design' && 'Figma Vector Canvas'}
                    {activeStage === 'code' && 'TypeScript + Three.js Engine'}
                    {activeStage === 'live' && 'Awwwards-Caliber Production UI'}
                  </h4>
                  <p className="text-xs font-mono text-avora-muted mt-1">
                    Seamless Handshake Between Aesthetics & Performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner Sequence */}
          <div className="pt-6 border-t border-avora-border-light flex flex-wrap items-center justify-between text-xs font-mono text-avora-muted">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-avora-charcoal">DISCIPLINE FLOW:</span>
              <span>DESIGN FILE → COMPONENTS → CODE → INTERACTION → LIVE EXPERIENCE</span>
            </div>
            <span className="hidden sm:inline">Built for Modern Browsers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
