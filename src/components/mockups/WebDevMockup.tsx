import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Play, CheckCircle2, Sparkles, Sliders } from 'lucide-react';

export const WebDevMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'react' | 'preview'>('preview');
  const [interactiveCounter, setInteractiveCounter] = useState(1);
  const [activeSheen, setActiveSheen] = useState(true);

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#FDFCFB] border border-avora-border rounded-2xl shadow-sm overflow-hidden">
      {/* Top Header: Pipeline Stage Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-avora-border-light">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
            Design → Code → Living Interactive Experience
          </span>
        </div>

        {/* Pipeline Tab Selectors */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-avora-border shadow-xs">
          {[
            { id: 'tokens', label: '01 Tokens' },
            { id: 'react', label: '02 React / TS' },
            { id: 'preview', label: '03 Live UI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                activeTab === tab.id
                  ? 'bg-avora-charcoal text-white shadow-xs'
                  : 'text-avora-muted hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Stage */}
      <div className="relative flex-1 my-5 min-h-[300px] flex items-center justify-center bg-[#F5F4EE] rounded-xl border border-avora-border/60 p-4 sm:p-6 overflow-hidden font-mono text-xs">
        <AnimatePresence mode="wait">
          {activeTab === 'tokens' && (
            /* Design Tokens JSON Viewer */
            <motion.div
              key="tokens"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-md bg-[#18181B] text-[#FAF9F6] p-5 rounded-xl shadow-xl overflow-x-auto text-[11px] leading-relaxed"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[10px] text-avora-muted">
                <span>design-tokens.json</span>
                <span className="text-emerald-400">Validated Schema</span>
              </div>
              <pre className="text-purple-300">
{`{
  "theme": {
    "palette": {
      "ivory": "#FAF9F6",
      "charcoal": "#18181B",
      "lavender": "#A855F7"
    },
    "refraction": {
      "transmission": 0.96,
      "roughness": 0.08,
      "dispersion": 0.08
    },
    "typography": {
      "display": "Syne, Playfair Display",
      "body": "Plus Jakarta Sans"
    }
  }
}`}
              </pre>
            </motion.div>
          )}

          {activeTab === 'react' && (
            /* React / TypeScript Code View */
            <motion.div
              key="react"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-lg bg-[#18181B] text-[#FAF9F6] p-5 rounded-xl shadow-xl overflow-x-auto text-[11px] leading-relaxed"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[10px] text-avora-muted">
                <span>InteractiveGlassWidget.tsx</span>
                <span className="text-blue-400">TypeScript 5.6</span>
              </div>
              <pre className="text-slate-300">
{`export const GlassCard: FC<Props> = ({ title, count }) => {
  const [active, setActive] = useState(true);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-panel p-6 rounded-2xl border"
    >
      <RefractiveSheen enabled={active} />
      <h3 className="font-serif text-2xl font-bold">{title}</h3>
      <CounterValue count={count} />
    </motion.div>
  );
};`}
              </pre>
            </motion.div>
          )}

          {activeTab === 'preview' && (
            /* Live Interactive Widget with Clickable Controls */
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm rounded-2xl bg-white/80 backdrop-blur-xl border border-avora-border shadow-2xl p-6 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Live Component Runtime
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-avora-charcoal mt-1">
                    Functional UI
                  </h4>
                </div>
                <button
                  onClick={() => setActiveSheen(!activeSheen)}
                  className={`p-2 rounded-full border transition-all ${
                    activeSheen
                      ? 'bg-avora-lavender text-white border-avora-lavender'
                      : 'bg-white text-avora-muted border-avora-border'
                  }`}
                  title="Toggle dynamic iridescent sheen"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Interactive Card */}
              <div className="my-5 p-4 rounded-xl bg-gradient-to-br from-white to-[#FAF9F6] border border-avora-border/80 shadow-sm relative overflow-hidden">
                {activeSheen && (
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent skew-x-12 pointer-events-none"
                  />
                )}
                <p className="text-[10px] font-mono text-avora-muted uppercase">Interaction Metric</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-3xl font-black text-avora-charcoal">
                    0{interactiveCounter}
                  </span>
                  <span className="text-[11px] text-avora-muted font-sans">Active Experiences</span>
                </div>
              </div>

              {/* Test User Action Controls */}
              <div className="flex gap-2">
                <button
                  onClick={() => setInteractiveCounter((prev) => (prev % 9) + 1)}
                  className="flex-1 py-2 px-3 bg-avora-charcoal text-white rounded-lg text-xs font-sans font-semibold hover:bg-black transition-colors flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>Increment State</span>
                </button>
                <button
                  onClick={() => setInteractiveCounter(1)}
                  className="py-2 px-3 bg-white border border-avora-border rounded-lg text-xs font-sans text-avora-muted hover:text-black transition-colors"
                >
                  Reset
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Visual Sequence Indicator */}
      <div className="flex items-center justify-between text-[10px] font-mono text-avora-muted pt-2 border-t border-avora-border-light">
        <span className="text-avora-charcoal font-semibold">PIPELINE:</span>
        <span>DESIGN FILE → COMPONENTS → CODE → INTERACTION → LIVE EXPERIENCE</span>
      </div>
    </div>
  );
};
