import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Command, LayoutGrid } from 'lucide-react';
import { FeatureTray } from './FeatureTray';

interface NavbarProps {
  onOpenCommand: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onNavigateAbout: () => void;
  onSelectServiceConsultation?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommand,
  activeSection,
  onNavigate,
  onNavigateAbout,
  onSelectServiceConsultation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featureTrayOpen, setFeatureTrayOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Playground', id: 'playground' },
    { label: 'Consultation', id: 'consultation' },
    { label: 'Contact', id: 'planner' },
  ];

  const handleLinkClick = (id: string) => {
    if (id === 'about') {
      onNavigateAbout();
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-4 sm:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Top-Left: Brand Wordmark + Feature Tray Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('hero')}
              className="group flex items-center gap-2 text-left focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-avora-charcoal group-hover:opacity-80 transition-opacity">
                AVORA
              </span>
            </button>

            {/* Expandable Feature Tray Button */}
            <button
              onClick={() => setFeatureTrayOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 hover:bg-white border border-avora-border text-[11px] font-mono tracking-wider text-avora-charcoal shadow-xs hover:shadow-sm transition-all"
              title="Open AVORA Creative Control Panel"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="hidden sm:inline font-semibold">PANEL</span>
              <LayoutGrid className="w-3 h-3 text-avora-muted" />
            </button>
          </div>

          {/* Desktop Center Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-pill shadow-sm border border-avora-border">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3.5 py-1 text-xs font-sans font-medium tracking-wider transition-colors duration-200 rounded-full ${
                    isActive ? 'text-avora-charcoal font-semibold' : 'text-avora-muted hover:text-avora-charcoal'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm -z-10 border border-avora-border-light"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Area: Status Badge & CTAs (Silent: Sound Removed) */}
          <div className="flex items-center gap-3">
            {/* Quick ⌘K button */}
            <button
              onClick={onOpenCommand}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono text-avora-muted bg-white/70 hover:bg-white border border-avora-border transition-colors shadow-sm"
              title="Open Command Menu (⌘K)"
            >
              <Command className="w-3 h-3 text-avora-charcoal" />
              <span>K</span>
            </button>

            {/* Status Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider bg-white/60 border border-avora-border text-avora-charcoal shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for commissions</span>
            </div>

            {/* Book a Consultation Primary CTA */}
            <button
              onClick={() => handleLinkClick('consultation')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-avora-charcoal text-white text-xs font-sans font-semibold tracking-wide hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full glass-pill border border-avora-border text-avora-charcoal focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Feature Control Tray */}
      <FeatureTray
        isOpen={featureTrayOpen}
        onClose={() => setFeatureTrayOpen(false)}
        onNavigate={handleLinkClick}
        onNavigateAbout={onNavigateAbout}
        onSelectServiceConsultation={onSelectServiceConsultation}
      />

      {/* Fullscreen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#FAF9F6] flex flex-col justify-between p-8 pt-24 md:hidden"
          >
            <div className="flex items-center justify-between pb-6 border-b border-avora-border">
              <span className="font-serif text-2xl font-bold text-avora-charcoal">AVORA</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-avora-border"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 my-auto">
              <p className="text-xs font-mono uppercase tracking-widest text-avora-muted">Navigation</p>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-left font-serif text-3xl font-bold tracking-tight text-avora-charcoal hover:text-purple-600 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-avora-muted">0{idx + 1}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-avora-border space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-avora-charcoal">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for freelance worldwide</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleLinkClick('consultation')}
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white border border-avora-border text-avora-charcoal font-sans text-xs font-semibold"
                >
                  <span>Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleLinkClick('planner')}
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-avora-charcoal text-white font-sans text-xs font-semibold"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Email direct link */}
              <a
                href="mailto:kshaurya0708@gmail.com"
                className="block text-center text-xs font-mono text-avora-muted hover:text-black py-2"
              >
                kshaurya0708@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
