import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowUpRight, Laptop, Tablet, Smartphone } from 'lucide-react';

export const WebDesignMockup: React.FC = () => {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const viewportWidths = {
    desktop: 'w-full max-w-xl',
    tablet: 'w-full max-w-sm',
    mobile: 'w-64',
  };

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#FDFCFB] border border-avora-border rounded-2xl shadow-sm overflow-hidden">
      {/* Top Header: Browser Chrome & Viewport Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-avora-border-light">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-avora-blue" />
          <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
            Editorial Web Architecture & Responsive Breakpoints
          </span>
        </div>

        <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-avora-border shadow-xs">
          {[
            { id: 'desktop', icon: <Laptop className="w-3.5 h-3.5" />, label: '1440px' },
            { id: 'tablet', icon: <Tablet className="w-3.5 h-3.5" />, label: '768px' },
            { id: 'mobile', icon: <Smartphone className="w-3.5 h-3.5" />, label: '375px' },
          ].map((vp) => (
            <button
              key={vp.id}
              onClick={() => setViewport(vp.id as any)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
                viewport === vp.id
                  ? 'bg-avora-charcoal text-white shadow-xs'
                  : 'text-avora-muted hover:text-black'
              }`}
            >
              {vp.icon}
              <span className="hidden sm:inline">{vp.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Browser Mockup */}
      <div className="relative flex-1 my-5 min-h-[300px] flex items-center justify-center bg-[#F3F1EB] rounded-xl border border-avora-border/60 p-4 sm:p-6 overflow-hidden">
        <motion.div
          layout
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`${viewportWidths[viewport]} rounded-xl bg-white border border-avora-charcoal/20 shadow-xl overflow-hidden flex flex-col`}
        >
          {/* Browser Address Bar Chrome */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#FAF9F6] border-b border-avora-border text-[11px] font-mono">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 max-w-xs mx-auto bg-white px-3 py-0.5 rounded-md border border-avora-border/80 text-avora-muted text-[10px] flex items-center justify-between">
              <span className="truncate">https://vitbites-botanicals.com</span>
              <Globe className="w-3 h-3 text-avora-muted" />
            </div>
          </div>

          {/* Website Content Preview */}
          <div className="p-5 space-y-4 max-h-56 overflow-y-auto bg-[#FDFCFB]">
            {/* Editorial Mini Hero */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-avora-muted">
                <span>VITBITES // FLAGSHIP</span>
                <span>VOL. 24</span>
              </div>
              <h4 className="font-serif text-2xl font-bold tracking-tight text-avora-charcoal leading-tight">
                ORGANIC BIO-ACTIVE HARVEST.
              </h4>
              <p className="text-[11px] font-sans text-avora-muted leading-relaxed">
                Cold-pressed adaptogenic elixirs formulated for cognitive clarity and sustained cellular vitality.
              </p>
            </div>

            {/* Product Card Row */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2.5 rounded-lg bg-white border border-avora-border">
                <div className="w-full h-14 bg-gradient-to-br from-emerald-100 to-teal-50 rounded mb-2 flex items-center justify-center text-xs font-serif italic text-emerald-800">
                  Daily Balance
                </div>
                <p className="text-[10px] font-mono font-semibold">Adaptogen Elixir</p>
                <p className="text-[9px] font-mono text-avora-muted">$48.00</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-avora-border">
                <div className="w-full h-14 bg-gradient-to-br from-amber-100 to-orange-50 rounded mb-2 flex items-center justify-center text-xs font-serif italic text-amber-800">
                  Solar Radiance
                </div>
                <p className="text-[10px] font-mono font-semibold">Cellular Nectar</p>
                <p className="text-[9px] font-mono text-avora-muted">$54.00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Pipeline */}
      <div className="flex items-center justify-between text-[10px] font-mono text-avora-muted pt-2 border-t border-avora-border-light">
        <span className="text-avora-charcoal font-semibold">LIVESTREAM:</span>
        <span>DESIGN → INTERACTION → RESPONSIVE → FINAL WEBSITE</span>
      </div>
    </div>
  );
};
