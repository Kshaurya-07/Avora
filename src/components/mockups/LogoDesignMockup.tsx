import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Sun, Moon, Sliders, Layers, Sparkles } from 'lucide-react';

export const LogoDesignMockup: React.FC = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [activeMode, setActiveMode] = useState<'symbol' | 'monogram' | 'wordmark' | 'responsive'>('symbol');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gridOpacity, setGridOpacity] = useState(0.4);

  return (
    <div
      className={`w-full h-full p-6 sm:p-8 flex flex-col justify-between rounded-2xl border transition-colors duration-500 overflow-hidden shadow-sm ${
        isDarkMode
          ? 'bg-[#121214] border-zinc-800 text-white'
          : 'bg-[#FDFCFB] border-avora-border text-avora-charcoal'
      }`}
    >
      {/* Top Controls Bar */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 pb-4 border-b transition-colors ${
          isDarkMode ? 'border-zinc-800' : 'border-avora-border-light'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span
            className={`text-xs font-mono uppercase tracking-widest ${
              isDarkMode ? 'text-zinc-400' : 'text-avora-muted'
            }`}
          >
            Mathematical Logo Construction
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Grid Toggle */}
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-colors ${
              showGrid
                ? isDarkMode
                  ? 'bg-white text-black'
                  : 'bg-avora-charcoal text-white'
                : isDarkMode
                ? 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                : 'bg-white text-avora-muted border border-avora-border'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{showGrid ? 'Grid: Active' : 'Grid: Off'}</span>
          </button>

          {/* B&W Contrast Inversion Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-1.5 rounded-full border transition-colors ${
              isDarkMode
                ? 'bg-zinc-800 border-zinc-700 text-amber-300'
                : 'bg-white border-avora-border text-avora-charcoal hover:bg-avora-ivory'
            }`}
            title="Toggle Black / White Contrast Mode"
            aria-label="Toggle Black and White Contrast"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Interactive Vector Construction Canvas */}
      <div
        className={`relative flex-1 my-5 min-h-[290px] flex items-center justify-center rounded-xl border p-6 overflow-hidden transition-colors duration-500 ${
          isDarkMode
            ? 'bg-[#0D0D0E] border-zinc-800'
            : 'bg-white border-avora-border/60 shadow-inner'
        }`}
      >
        {/* Subtle Mathematical Construction Grid Overlay */}
        {showGrid && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{ opacity: gridOpacity }}
          >
            {/* Fine Dot/Line Matrix */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: isDarkMode
                  ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)'
                  : 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* Precision Calipers & Angle Lines */}
            <div
              className={`absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 ${
                isDarkMode ? 'bg-purple-500/40' : 'bg-avora-lavender/50'
              }`}
            />
            <div
              className={`absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 ${
                isDarkMode ? 'bg-purple-500/40' : 'bg-avora-lavender/50'
              }`}
            />

            {/* Golden Ratio Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-purple-500/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed border-blue-400/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-400/20" />

            {/* 45-degree Guide Rays */}
            <div className="absolute top-1/2 left-1/2 w-[340px] h-[1px] bg-purple-400/25 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-[340px] h-[1px] bg-purple-400/25 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </div>
        )}

        {/* Dynamic Mode Presentations */}
        <AnimatePresence mode="wait">
          {/* 01: SYMBOL / ICON */}
          {activeMode === 'symbol' && (
            <motion.div
              key="symbol"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center justify-center select-none"
            >
              {/* Geometric Faceted Prism Delta Vector */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className={`w-full h-full transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-avora-charcoal'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="50,15 85,80 15,80" />
                  <line x1="50" y1="15" x2="50" y2="80" strokeDasharray="3 3" />
                  <polygon points="50,38 72,76 28,76" fill={isDarkMode ? 'rgba(192, 132, 252, 0.15)' : 'rgba(168, 85, 247, 0.1)'} />
                  <circle cx="50" cy="54" r="14" strokeDasharray="2 2" stroke="rgb(168, 85, 247)" />
                </svg>
              </div>
              <p
                className={`mt-4 text-[10px] font-mono tracking-[0.25em] uppercase ${
                  isDarkMode ? 'text-zinc-400' : 'text-avora-muted'
                }`}
              >
                GEOMETRIC PRISM ICONOGRAPHY
              </p>
            </motion.div>
          )}

          {/* 02: MONOGRAM */}
          {activeMode === 'monogram' && (
            <motion.div
              key="monogram"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center justify-center select-none"
            >
              <div
                className={`w-28 h-28 rounded-2xl border-2 flex items-center justify-center shadow-lg transition-colors ${
                  isDarkMode
                    ? 'border-zinc-700 bg-zinc-900/90 text-white'
                    : 'border-avora-charcoal bg-[#FAF9F6] text-avora-charcoal'
                }`}
              >
                <span className="font-serif text-6xl font-black tracking-tighter">A</span>
              </div>
              <p
                className={`mt-4 text-[10px] font-mono tracking-[0.25em] uppercase ${
                  isDarkMode ? 'text-zinc-400' : 'text-avora-muted'
                }`}
              >
                OPTICAL SERIF MONOGRAM
              </p>
            </motion.div>
          )}

          {/* 03: WORDMARK */}
          {activeMode === 'wordmark' && (
            <motion.div
              key="wordmark"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 text-center select-none"
            >
              <h3
                className={`font-serif text-5xl sm:text-6xl font-bold tracking-[0.18em] uppercase ${
                  isDarkMode ? 'text-white' : 'text-avora-charcoal'
                }`}
              >
                AVORA
              </h3>
              <div className="flex items-center justify-center gap-3 mt-3">
                <span className={`h-[1px] w-8 ${isDarkMode ? 'bg-zinc-700' : 'bg-avora-charcoal/20'}`} />
                <p
                  className={`text-[9px] font-mono tracking-[0.35em] uppercase ${
                    isDarkMode ? 'text-zinc-400' : 'text-avora-muted'
                  }`}
                >
                  STUDIO ATELIER
                </p>
                <span className={`h-[1px] w-8 ${isDarkMode ? 'bg-zinc-700' : 'bg-avora-charcoal/20'}`} />
              </div>
            </motion.div>
          )}

          {/* 04: RESPONSIVE SYSTEM */}
          {activeMode === 'responsive' && (
            <motion.div
              key="responsive"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-md space-y-4 select-none"
            >
              {/* Large Desktop Lockup */}
              <div
                className={`p-3 rounded-xl border flex items-center justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-[#FAF9F6] border-avora-border-light'
                }`}
              >
                <span className="font-serif text-xl font-bold tracking-wider">AVORA</span>
                <span className="text-[10px] font-mono text-purple-400">Desktop Flagship Lockup</span>
              </div>

              {/* Tablet Stacked Lockup */}
              <div
                className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-[#FAF9F6] border-avora-border-light'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 font-serif font-bold text-xs flex items-center justify-center">
                    A
                  </span>
                  <span className="font-serif text-sm font-semibold tracking-wide">AVORA</span>
                </div>
                <span className="text-[10px] font-mono text-blue-400">Tablet / Mobile Header</span>
              </div>

              {/* Favicon & Minimal App Icon */}
              <div
                className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-[#FAF9F6] border-avora-border-light'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-black text-white border border-zinc-700 flex items-center justify-center text-[11px] font-serif font-black">
                    A
                  </div>
                  <div className="w-4 h-4 rounded-sm bg-purple-600 text-white flex items-center justify-center text-[8px] font-serif font-black">
                    A
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">32px & 16px Favicon / PWA</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Mode Selectors & Specifications */}
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { id: 'symbol', label: 'Symbol' },
            { id: 'monogram', label: 'Monogram' },
            { id: 'wordmark', label: 'Wordmark' },
            { id: 'responsive', label: 'Responsive' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id as any)}
              className={`py-2 px-2 rounded-xl text-xs font-mono font-medium transition-all text-center ${
                activeMode === mode.id
                  ? isDarkMode
                    ? 'bg-white text-black font-semibold shadow-xs'
                    : 'bg-avora-charcoal text-white shadow-xs'
                  : isDarkMode
                  ? 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  : 'bg-white text-avora-muted hover:text-avora-charcoal border border-avora-border'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Specifications strip */}
        <div
          className={`pt-3 border-t flex flex-wrap items-center justify-between text-[11px] font-mono ${
            isDarkMode ? 'border-zinc-800 text-zinc-400' : 'border-avora-border-light text-avora-muted'
          }`}
        >
          <div className="flex items-center gap-2">
            <span>GRID: GOLDEN RATIO</span>
            <span>•</span>
            <span>KERNING: OPTICAL</span>
          </div>
          <span>VECTOR SVG / PDF READY</span>
        </div>
      </div>
    </div>
  );
};
