import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Eye, Check, Layers } from 'lucide-react';

export const BrandingMockup: React.FC = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [activeVariant, setActiveVariant] = useState<'primary' | 'monogram' | 'linear'>('primary');

  const swatches = [
    { name: 'Onyx Mineral', hex: '#18181B', code: 'PANTONE 19-3911 TCX' },
    { name: 'Pure Bone', hex: '#FAF9F6', code: 'PANTONE 11-0601 TPG' },
    { name: 'Iridescent Haze', hex: '#E9D5FF', code: 'PANTONE 13-3805 TCX' },
    { name: 'Atmospheric Azure', hex: '#DBEAFE', code: 'PANTONE 14-4115 TCX' },
  ];

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#FDFCFB] border border-avora-border rounded-2xl shadow-sm overflow-hidden">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-avora-border-light">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-avora-lavender" />
          <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
            Brand Identity Architecture System
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-colors ${
              showGrid
                ? 'bg-avora-charcoal text-white'
                : 'bg-white text-avora-muted border border-avora-border'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{showGrid ? 'Grid Active' : 'Toggle Grid'}</span>
          </button>
        </div>
      </div>

      {/* Main Logo Construction Canvas */}
      <div className="relative flex-1 my-6 min-h-[260px] flex items-center justify-center bg-white rounded-xl border border-avora-border/60 p-8 overflow-hidden shadow-inner">
        {/* Subtle Mathematical Construction Grid Overlay */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Fine Grid lines */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #A855F7 1px, transparent 1px), linear-gradient(to bottom, #A855F7 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Center crosshairs and golden ratio guide circle */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-avora-lavender/40 -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-avora-lavender/40 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-avora-lavender/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-avora-blue/30" />
          </div>
        )}

        {/* Dynamic Logo Presentation */}
        <AnimatePresence mode="wait">
          {activeVariant === 'primary' && (
            <motion.div
              key="primary"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 text-center select-none"
            >
              <h2 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-avora-charcoal">
                AVORA
              </h2>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="h-[1px] w-6 bg-avora-charcoal/30" />
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-avora-muted">
                  STUDIO ATELIER
                </p>
                <span className="h-[1px] w-6 bg-avora-charcoal/30" />
              </div>
            </motion.div>
          )}

          {activeVariant === 'monogram' && (
            <motion.div
              key="monogram"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 select-none flex items-center justify-center"
            >
              <div className="w-28 h-28 rounded-2xl border-2 border-avora-charcoal flex items-center justify-center shadow-sm bg-[#FAF9F6]">
                <span className="font-serif text-6xl font-black text-avora-charcoal">A</span>
              </div>
            </motion.div>
          )}

          {activeVariant === 'linear' && (
            <motion.div
              key="linear"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 select-none text-left border-l-2 border-avora-charcoal pl-6"
            >
              <h3 className="font-serif text-3xl font-bold tracking-widest text-avora-charcoal">
                AVORA
              </h3>
              <p className="text-xs font-sans tracking-wide text-avora-muted mt-1">
                DESIGNING IDEAS INTO EXPERIENCES.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Construction Coordinates Badge */}
        {showGrid && (
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 backdrop-blur rounded border border-avora-border text-[9px] font-mono text-avora-muted">
            X: 144.00 / Y: 72.00 • Φ 1.618033
          </div>
        )}
      </div>

      {/* Bottom Row: Variant Switcher & Pantone Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Variant Tabs */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted block">
            Select Wordmark Lockup
          </span>
          <div className="flex gap-2">
            {[
              { id: 'primary', label: 'Primary' },
              { id: 'monogram', label: 'Icon Mark' },
              { id: 'linear', label: 'Editorial' },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVariant(v.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                  activeVariant === v.id
                    ? 'bg-avora-charcoal text-white shadow-sm'
                    : 'bg-white text-avora-muted border border-avora-border hover:text-black'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pantone Chips */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted block">
            Harmonic Swatch Specification
          </span>
          <div className="flex items-center gap-2">
            {swatches.map((swatch) => (
              <div
                key={swatch.name}
                className="group relative flex-1 h-8 rounded-md border border-avora-border shadow-xs cursor-pointer overflow-hidden transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: swatch.hex }}
              >
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/70 flex items-center justify-center text-[8px] font-mono text-white p-1 text-center transition-opacity">
                  {swatch.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
