import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Command } from 'lucide-react';
import { SoundToggle } from '../ui/SoundToggle';

interface NavbarProps {
  onOpenCommand: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand, activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Playground', id: 'playground' },
    { label: 'Packages', id: 'packages' },
    { label: 'Contact', id: 'planner' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center gap-2 text-left focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-avora-charcoal group-hover:opacity-80 transition-opacity">
              AVORA
            </span>
            <span className="hidden lg:inline-block w-1.5 h-1.5 rounded-full bg-avora-lavender animate-pulse" />
          </button>

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

          {/* Right Area: Freelance Badge & CTAs */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound */}
            <SoundToggle />

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
              <span>Available for freelance</span>
            </div>

            {/* Let's Work Magnetic CTA */}
            <button
              onClick={() => handleLinkClick('planner')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-avora-charcoal text-white text-xs font-sans font-semibold tracking-wide hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Work</span>
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

      {/* Fullscreen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF9F6] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="space-y-6">
              <p className="text-xs font-mono uppercase tracking-widest text-avora-muted">Navigation</p>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-left font-serif text-3xl font-bold tracking-tight text-avora-charcoal hover:text-avora-lavender transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-avora-muted">0{idx + 1}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-avora-border space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-avora-charcoal">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for freelance worldwide</span>
              </div>
              <button
                onClick={() => handleLinkClick('planner')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-avora-charcoal text-white font-sans text-sm font-semibold tracking-wide"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
