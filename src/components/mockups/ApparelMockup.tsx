import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Tag, ShieldCheck } from 'lucide-react';

export const ApparelMockup: React.FC = () => {
  const [garmentType, setGarmentType] = useState<'hoodie' | 'tee'>('hoodie');
  const [viewSide, setViewSide] = useState<'front' | 'back'>('back');
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const garmentDetails = {
    hoodie: {
      name: 'OVERSIZED FRENCH TERRY HOODIE',
      weight: '480 GSM Double-Faced Cotton',
      color: 'Onyx Mineral Acid Wash',
      fit: 'Drop-shoulder relaxed boxy fit, seamless hood',
    },
    tee: {
      name: 'HEAVYWEIGHT VINTAGE BOXY TEE',
      weight: '300 GSM Combed Ring-Spun Cotton',
      color: 'Washed Bone Ivory',
      fit: 'Wide ribbed collar, dropped elbow sleeves',
    },
  };

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#FDFCFB] border border-avora-border rounded-2xl shadow-sm overflow-hidden">
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-avora-border-light">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-avora-charcoal" />
          <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
            Streetwear Capsule & Garment Specification
          </span>
        </div>

        {/* Front / Back Switcher Button */}
        <button
          onClick={() => setViewSide(viewSide === 'front' ? 'back' : 'front')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-avora-border text-xs font-mono hover:bg-avora-charcoal hover:text-white transition-all shadow-xs"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Flip to {viewSide === 'front' ? 'Back' : 'Front'} View</span>
        </button>
      </div>

      {/* Interactive Garment Vector Canvas */}
      <div className="relative flex-1 my-5 min-h-[280px] flex items-center justify-center bg-[#F7F5EF] rounded-xl border border-avora-border/60 p-6 overflow-hidden">
        {/* Garment Visual Representation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${garmentType}-${viewSide}`}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4 }}
            className={`relative w-64 sm:w-72 aspect-[1/1.1] rounded-2xl shadow-lg border p-6 flex flex-col items-center justify-between ${
              garmentType === 'hoodie'
                ? 'bg-[#18181B] text-[#FAF9F6] border-white/10'
                : 'bg-[#FAF9F6] text-[#18181B] border-black/10'
            }`}
          >
            {/* Neck Label Area */}
            <div className="w-full flex justify-between items-center text-[8px] font-mono border-b border-current/20 pb-2">
              <span className="flex items-center gap-1 font-bold">
                <Tag className="w-2.5 h-2.5" /> AVORA HEAVY ATELIER
              </span>
              <span>SIZE: 02 (L)</span>
            </div>

            {/* Graphic Print Placement Zone */}
            <div className="my-auto w-full text-center">
              {viewSide === 'back' ? (
                /* Back Statement Graphic */
                <div
                  onMouseEnter={() => setActiveZone('Back Graphic')}
                  onMouseLeave={() => setActiveZone(null)}
                  className="p-4 rounded-xl border border-dashed border-current/30 hover:border-avora-lavender transition-colors cursor-pointer group"
                >
                  <p className="text-[8px] font-mono tracking-[0.3em] uppercase opacity-60">
                    AVORA // VOL 04
                  </p>
                  <h4 className="font-serif text-2xl sm:text-3xl font-black tracking-tight my-1 group-hover:text-avora-lavender transition-colors">
                    IDEA → FORM
                  </h4>
                  <p className="text-[9px] font-mono tracking-widest opacity-70">
                    48°51'24"N 2°21'07"E
                  </p>
                  <div className="mt-2 text-[7px] font-mono opacity-50 uppercase">
                    High-Density Silicone Puff Print (350 Micron)
                  </div>
                </div>
              ) : (
                /* Front Minimalist Chest Mark */
                <div
                  onMouseEnter={() => setActiveZone('Chest Placement')}
                  onMouseLeave={() => setActiveZone(null)}
                  className="w-28 mx-auto p-3 rounded-lg border border-dashed border-current/30 hover:border-avora-blue transition-colors cursor-pointer"
                >
                  <p className="font-serif text-sm font-bold tracking-widest">AVORA</p>
                  <p className="text-[7px] font-mono opacity-60">CHEST SCREEN PRINT</p>
                </div>
              )}
            </div>

            {/* Bottom Hem & Tyvek Label */}
            <div className="w-full flex justify-between items-center text-[7px] font-mono opacity-60 border-t border-current/10 pt-2">
              <span>WOVEN DAMASK HEM TAG</span>
              <span>100% ORGANIC COMBED</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Spec Callout when hovering zones */}
        {activeZone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg border border-avora-border shadow-md text-left"
          >
            <p className="text-[10px] font-mono font-bold text-avora-charcoal">{activeZone}</p>
            <p className="text-[9px] font-sans text-avora-muted">Spot discharge ink with zero hand-feel</p>
          </motion.div>
        )}
      </div>

      {/* Bottom Switcher: Silhouette & Specifications */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex gap-2">
          <button
            onClick={() => setGarmentType('hoodie')}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
              garmentType === 'hoodie'
                ? 'bg-avora-charcoal text-white shadow-sm'
                : 'bg-white text-avora-muted border border-avora-border hover:text-black'
            }`}
          >
            480 GSM Hoodie
          </button>
          <button
            onClick={() => setGarmentType('tee')}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
              garmentType === 'tee'
                ? 'bg-avora-charcoal text-white shadow-sm'
                : 'bg-white text-avora-muted border border-avora-border hover:text-black'
            }`}
          >
            300 GSM Boxy Tee
          </button>
        </div>

        <div className="text-right text-[10px] font-mono text-avora-muted">
          <span>{garmentDetails[garmentType].weight}</span>
        </div>
      </div>
    </div>
  );
};
