import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Mail, Sparkles, Compass, Layers, Send } from 'lucide-react';

interface FeatureTrayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onNavigateAbout: () => void;
  onSelectServiceConsultation?: (serviceId: string) => void;
}

export const FeatureTray: React.FC<FeatureTrayProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onNavigateAbout,
  onSelectServiceConsultation,
}) => {
  const trayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (trayRef.current && !trayRef.current.contains(e.target as Node) && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const exploreLinks = [
    { label: 'Home', action: () => { onNavigate('hero'); onClose(); } },
    { label: 'Services', action: () => { onNavigate('services'); onClose(); } },
    { label: 'About AVORA', action: () => { onNavigateAbout(); onClose(); } },
    { label: 'Playground', action: () => { onNavigate('playground'); onClose(); } },
    { label: 'Consultation', action: () => { onNavigate('consultation'); onClose(); } },
    { label: 'Contact', action: () => { onNavigate('planner'); onClose(); } },
  ];

  const serviceLinks = [
    { label: 'Logo Design', id: 'logo-design' },
    { label: 'Branding', id: 'branding' },
    { label: 'Graphic Design', id: 'graphic-design' },
    { label: 'Apparel', id: 'apparel' },
    { label: 'UI/UX', id: 'ui-ux' },
    { label: 'Web Design', id: 'web-design' },
    { label: 'Development', id: 'web-development' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Ambient Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          />

          {/* Luxury Creative Control Panel Tray */}
          <motion.div
            ref={trayRef}
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="fixed top-4 left-4 right-4 sm:left-8 sm:right-auto sm:w-[720px] lg:w-[840px] z-50 bg-white/95 backdrop-blur-2xl border border-avora-border rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Tray Header */}
            <div className="flex items-center justify-between pb-6 border-b border-avora-border-light">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl font-bold tracking-tight text-avora-charcoal">
                  AVORA
                </span>
                <span className="h-4 w-[1px] bg-avora-border" />
                <span className="text-xs font-mono uppercase tracking-widest text-avora-muted">
                  Creative Control Tray
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-avora-ivory border border-avora-border transition-colors text-avora-charcoal"
                aria-label="Close feature tray"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 3-Column Hierarchy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-6">
              {/* Column 1: EXPLORE */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-avora-muted">
                  <Compass className="w-3.5 h-3.5 text-avora-lavender" />
                  <span>EXPLORE</span>
                </div>
                <ul className="space-y-2.5">
                  {exploreLinks.map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={link.action}
                        className="text-left font-serif text-lg sm:text-xl font-bold text-avora-charcoal hover:text-avora-lavender transition-colors flex items-center justify-between w-full group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: SERVICES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-avora-muted">
                  <Layers className="w-3.5 h-3.5 text-avora-blue" />
                  <span>SERVICES</span>
                </div>
                <ul className="space-y-2">
                  {serviceLinks.map((service, idx) => (
                    <li key={service.id}>
                      <button
                        onClick={() => {
                          if (onSelectServiceConsultation) {
                            onSelectServiceConsultation(service.id);
                          } else {
                            onNavigate('consultation');
                          }
                          onClose();
                        }}
                        className="text-left text-xs sm:text-sm font-sans font-medium text-avora-charcoal/80 hover:text-black hover:font-semibold transition-all flex items-center justify-between w-full group py-1"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-avora-muted">0{idx + 1}</span>
                          <span>{service.label}</span>
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-avora-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: START */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-avora-muted">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  <span>START</span>
                </div>
                <div className="space-y-3">
                  {/* Start a Project */}
                  <button
                    onClick={() => {
                      onNavigate('planner');
                      onClose();
                    }}
                    className="w-full p-3.5 rounded-2xl bg-avora-charcoal text-white hover:bg-black transition-all text-left flex flex-col justify-between group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                        I know what I need
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <span className="font-serif text-base font-bold mt-1">Start a Project</span>
                  </button>

                  {/* Book a Consultation */}
                  <button
                    onClick={() => {
                      onNavigate('consultation');
                      onClose();
                    }}
                    className="w-full p-3.5 rounded-2xl bg-avora-ivory hover:bg-white border border-avora-border transition-all text-left flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-avora-muted">
                        Need direction
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-avora-muted group-hover:text-black transition-colors" />
                    </div>
                    <span className="font-serif text-base font-bold text-avora-charcoal mt-1">
                      Book a Consultation
                    </span>
                  </button>

                  {/* Email AVORA (Strictly mailto:kshaurya0708@gmail.com) */}
                  <a
                    href="mailto:kshaurya0708@gmail.com"
                    onClick={onClose}
                    className="w-full p-3.5 rounded-2xl bg-white hover:bg-avora-ivory border border-avora-border transition-all text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 text-xs font-sans font-semibold text-avora-charcoal">
                      <Mail className="w-3.5 h-3.5 text-avora-lavender" />
                      <span>Email AVORA</span>
                    </div>
                    <span className="text-[10px] font-mono text-avora-muted group-hover:text-black">
                      kshaurya0708@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tray Footer Status */}
            <div className="pt-4 border-t border-avora-border-light flex flex-wrap items-center justify-between text-[11px] font-mono text-avora-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-avora-charcoal">Direct Atelier Inquiries Active</span>
              </div>
              <span>Press ESC to dismiss</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
