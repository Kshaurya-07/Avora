import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sliders, Maximize2 } from 'lucide-react';

export const GraphicDesignMockup: React.FC = () => {
  const [activePoster, setActivePoster] = useState(0);

  const posters = [
    {
      title: 'KINETIC RESONANCE',
      sub: 'TOKYO VISUAL EXPERIMENT',
      date: 'OCT 24 / ISSUE 07',
      bg: 'bg-[#18181B] text-[#FAF9F6]',
      accent: '#F472B6',
      spec: '4-Color Offset + Spot Metallic Silver 877C',
      headline: 'THE SILENCE OF TYPOGRAPHY',
    },
    {
      title: 'ARCHITECTURAL VOID',
      sub: 'BERLIN DESIGN SYMPOSIUM',
      date: 'NOV 12 / GALLERY 4',
      bg: 'bg-[#FAF9F6] text-[#18181B]',
      accent: '#A855F7',
      spec: 'Screenprinted on 350gsm G.F Smith Colorplan',
      headline: 'FORM FOLLOWS CONTEMPLATION',
    },
    {
      title: 'NEO CHRONICLES',
      sub: 'DIGITAL ANTHOLOGY 2024',
      date: 'VOL 03 / PARIS',
      bg: 'bg-gradient-to-b from-[#FAF8F5] to-[#EFECE6] text-[#18181B]',
      accent: '#38BDF8',
      spec: 'Digital Risograph Duotone Layering',
      headline: 'LIGHT REFRACTION & BOUNDARIES',
    },
  ];

  const current = posters[activePoster];

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#FDFCFB] border border-avora-border rounded-2xl shadow-sm overflow-hidden">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-avora-border-light">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-avora-pink" />
          <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
            Experimental Print & Editorial Poster Studio
          </span>
        </div>
        <div className="text-[11px] font-mono text-avora-muted">
          Edition 0{activePoster + 1} / 03
        </div>
      </div>

      {/* Main Poster Preview Area with Dynamic Editorial Layout */}
      <div className="relative flex-1 my-5 flex items-center justify-center p-4 bg-[#F5F3ED] rounded-xl border border-avora-border/40 overflow-hidden">
        <motion.div
          key={activePoster}
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
          className={`relative w-full max-w-[340px] aspect-[1/1.414] rounded-lg shadow-xl p-6 flex flex-col justify-between overflow-hidden border border-black/10 ${current.bg}`}
        >
          {/* Top Poster Meta */}
          <div className="flex justify-between items-start text-[10px] font-mono tracking-widest border-b border-current/20 pb-2">
            <span>{current.title}</span>
            <span>{current.date}</span>
          </div>

          {/* Center High-Fashion Editorial Typography Composition */}
          <div className="my-auto space-y-3">
            <span
              className="text-[9px] font-mono uppercase px-2 py-0.5 rounded border border-current/30 inline-block"
              style={{ color: current.accent }}
            >
              Exhibition Catalog
            </span>
            <h3 className="font-serif text-3xl font-black leading-tight tracking-tight uppercase">
              {current.headline}
            </h3>
            <p className="text-[11px] font-sans opacity-70 tracking-wide leading-relaxed">
              Exploring the philosophical tension between strict Swiss modernism and algorithmic visual corruption.
            </p>
          </div>

          {/* Bottom Barcode & Fine Print */}
          <div className="pt-3 border-t border-current/20 flex items-end justify-between text-[9px] font-mono">
            <div>
              <p className="font-semibold">{current.sub}</p>
              <p className="opacity-60">{current.spec}</p>
            </div>
            {/* Minimalist Barcode representation */}
            <div className="flex gap-[2px] h-6 items-end opacity-70">
              <span className="w-[1px] h-full bg-current" />
              <span className="w-[2px] h-full bg-current" />
              <span className="w-[1px] h-4 bg-current" />
              <span className="w-[3px] h-full bg-current" />
              <span className="w-[1px] h-full bg-current" />
              <span className="w-[2px] h-5 bg-current" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Poster Switcher Selector */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted">
          Browse Experimental Artworks:
        </span>
        <div className="flex gap-2">
          {posters.map((p, idx) => (
            <button
              key={p.title}
              onClick={() => setActivePoster(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                activePoster === idx
                  ? 'bg-avora-charcoal text-white shadow-sm'
                  : 'bg-white text-avora-muted border border-avora-border hover:text-black'
              }`}
            >
              Post 0{idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
