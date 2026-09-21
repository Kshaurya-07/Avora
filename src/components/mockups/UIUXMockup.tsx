import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Monitor, Play, Sliders, Layers, Activity } from 'lucide-react';

export const UIUXMockup: React.FC = () => {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(72);

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#FDFCFB] border border-avora-border rounded-2xl shadow-sm overflow-hidden">
      {/* Top Controls Bar: Device Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-avora-border-light">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-avora-cyan" />
          <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
            Digital Product Design System & Interactive Prototypes
          </span>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-avora-border shadow-xs">
          {[
            { id: 'mobile', icon: <Smartphone className="w-3.5 h-3.5" />, label: 'Mobile' },
            { id: 'tablet', icon: <Tablet className="w-3.5 h-3.5" />, label: 'Tablet' },
            { id: 'desktop', icon: <Monitor className="w-3.5 h-3.5" />, label: 'Desktop' },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setDevice(d.id as any)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
                device === d.id
                  ? 'bg-avora-charcoal text-white shadow-xs'
                  : 'text-avora-muted hover:text-black'
              }`}
            >
              {d.icon}
              <span className="hidden sm:inline">{d.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Device Frame */}
      <div className="relative flex-1 my-5 min-h-[300px] flex items-center justify-center bg-[#F4F2EB] rounded-xl border border-avora-border/60 p-4 sm:p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {device === 'mobile' && (
            /* Mobile Device Frame */
            <motion.div
              key="mobile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-64 rounded-[32px] bg-white border-4 border-avora-charcoal shadow-2xl p-4 flex flex-col justify-between"
            >
              {/* Dynamic Island / Notch */}
              <div className="w-24 h-4 bg-avora-charcoal rounded-full mx-auto mb-3" />

              {/* In-App Spatial Audio Player UI */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-avora-muted">
                  <span>MUSIVO // SPATIAL</span>
                  <Activity className="w-3 h-3 text-avora-lavender animate-pulse" />
                </div>

                {/* Album Artwork Simulation */}
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-400 p-4 flex flex-col justify-end text-white shadow-md">
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-80">Now Streaming</p>
                  <h4 className="font-serif text-lg font-bold">Resonance in F#</h4>
                </div>

                {/* Waveform Visualization */}
                <div className="flex items-end gap-1 h-8 px-1">
                  {[40, 65, 85, 30, 95, 70, 50, 80, 60, 90, 45, 75, 100, 55, 35].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: isPlaying ? [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] : '20%' }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.05 }}
                      className="flex-1 bg-avora-charcoal/80 rounded-full"
                    />
                  ))}
                </div>

                {/* Tactile Scrubber & Controls */}
                <div className="space-y-2">
                  <div className="w-full bg-avora-border h-1 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-avora-charcoal rounded-full" />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-avora-muted">
                    <span>02:14</span>
                    <span>-01:32</span>
                  </div>
                </div>

                {/* Play/Pause Button */}
                <div className="flex items-center justify-center pt-1">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full bg-avora-charcoal text-white flex items-center justify-center shadow hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <span className="text-xs font-mono font-bold">||</span> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                  </button>
                </div>
              </div>

              {/* Home indicator bar */}
              <div className="w-20 h-1 bg-avora-charcoal/30 rounded-full mx-auto mt-4" />
            </motion.div>
          )}

          {device === 'tablet' && (
            /* Tablet Dashboard View */
            <motion.div
              key="tablet"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md aspect-[4/3] rounded-2xl bg-white border-2 border-avora-charcoal/20 shadow-2xl p-5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center pb-3 border-b border-avora-border">
                <span className="font-serif font-bold text-sm">MUSIVO STUDIO DASHBOARD</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Live Engine 48kHz
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 py-3">
                <div className="p-3 bg-avora-ivory rounded-xl border border-avora-border">
                  <p className="text-[10px] font-mono text-avora-muted">DAILY ACTIVE LISTENERS</p>
                  <p className="text-xl font-serif font-bold mt-1">128,420</p>
                  <span className="text-[9px] text-emerald-600 font-mono">+18.4% this week</span>
                </div>
                <div className="p-3 bg-avora-ivory rounded-xl border border-avora-border">
                  <p className="text-[10px] font-mono text-avora-muted">SPATIAL SATURATION</p>
                  <p className="text-xl font-serif font-bold mt-1">94.8%</p>
                  <span className="text-[9px] text-avora-lavender font-mono">Lossless Master</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF9F6] border border-avora-border flex items-center justify-between text-xs font-mono">
                <span>Design System Token: --glass-blur-32</span>
                <span className="text-avora-lavender font-semibold">Synced</span>
              </div>
            </motion.div>
          )}

          {device === 'desktop' && (
            /* Desktop Monitor Suite */
            <motion.div
              key="desktop"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg aspect-[16/10] rounded-xl bg-white border border-avora-charcoal/20 shadow-2xl p-4 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-avora-border text-xs font-mono">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-avora-muted ml-2">app.musivo.design/system/components</span>
              </div>
              <div className="grid grid-cols-3 gap-2 my-auto">
                <div className="p-3 rounded-lg border border-avora-border bg-white text-center">
                  <div className="w-8 h-8 rounded-full bg-avora-lavender/20 mx-auto flex items-center justify-center mb-1">
                    <Layers className="w-4 h-4 text-avora-lavender" />
                  </div>
                  <span className="text-[10px] font-mono">140+ Tokens</span>
                </div>
                <div className="p-3 rounded-lg border border-avora-border bg-white text-center">
                  <div className="w-8 h-8 rounded-full bg-avora-blue/20 mx-auto flex items-center justify-center mb-1">
                    <Sliders className="w-4 h-4 text-avora-blue" />
                  </div>
                  <span className="text-[10px] font-mono">Haptic Physics</span>
                </div>
                <div className="p-3 rounded-lg border border-avora-border bg-white text-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 mx-auto flex items-center justify-center mb-1">
                    <Activity className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-mono">Sub-16ms Latency</span>
                </div>
              </div>
              <div className="text-[10px] font-mono text-avora-muted flex justify-between pt-2 border-t border-avora-border">
                <span>Viewport: 1440 × 900</span>
                <span>Figma Tokens ⇄ React Component Sync</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sequence Timeline Bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-avora-muted pt-2 border-t border-avora-border-light">
        <span className="text-avora-charcoal font-semibold">PROCESS:</span>
        <span>RESEARCH → WIREFRAME → SYSTEM → INTERFACE → PROTOTYPE</span>
      </div>
    </div>
  );
};
