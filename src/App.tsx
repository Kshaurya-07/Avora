import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor, CursorContext } from './components/ui/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { CommandMenu } from './components/navigation/CommandMenu';
import { Hero } from './components/sections/Hero';
import { TickerIntro } from './components/sections/TickerIntro';
import { VisualServices } from './components/sections/VisualServices';
import { SelectedWork } from './components/sections/SelectedWork';
import { DesignedThenBuilt } from './components/sections/DesignedThenBuilt';
import { Playground } from './components/sections/Playground';
import { Toolkit } from './components/sections/Toolkit';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Packages } from './components/sections/Packages';
import { ProjectPlanner } from './components/sections/ProjectPlanner';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeWorkFilter, setActiveWorkFilter] = useState('ALL');
  const [plannerService, setPlannerService] = useState<string | undefined>(undefined);
  
  // Cursor context state
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'explore' | 'drag' | 'play' | 'pointer'>('default');

  const setCursor = (text: string, variant: 'default' | 'project' | 'explore' | 'drag' | 'play' | 'pointer' = 'default') => {
    setCursorText(text);
    setCursorVariant(variant);
  };

  const resetCursor = () => {
    setCursorText('');
    setCursorVariant('default');
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
    };
  }, []);

  // Intersection Observer for Active Section Highlight
  useEffect(() => {
    const sections = ['hero', 'services', 'work', 'about', 'playground', 'packages', 'planner'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterWorkFromService = (filter: 'BRANDING' | 'GRAPHICS' | 'APPAREL' | 'UI/UX' | 'WEB') => {
    setActiveWorkFilter(filter);
    handleNavigate('work');
  };

  const handleSelectPackage = (packageName: string) => {
    setPlannerService(packageName);
    handleNavigate('planner');
  };

  return (
    <CursorContext.Provider value={{ cursorText, cursorVariant, setCursor, resetCursor }}>
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col antialiased selection:bg-avora-lavender selection:text-white">
        {/* Custom Contextual Cursor */}
        <CustomCursor />

        {/* Global Floating Navbar */}
        <Navbar
          onOpenCommand={() => setIsCommandOpen(true)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* Accessible Command Palette (⌘K / Ctrl+K) */}
        <CommandMenu
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
          onNavigate={handleNavigate}
        />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          <Hero onNavigate={handleNavigate} />
          <TickerIntro />
          <VisualServices onFilterWork={handleFilterWorkFromService} />
          <SelectedWork
            activeFilter={activeWorkFilter}
            onFilterChange={setActiveWorkFilter}
          />
          <DesignedThenBuilt />
          <Playground />
          <Toolkit />
          <About onNavigate={handleNavigate} />
          <Testimonials />
          <Packages onSelectPackage={handleSelectPackage} />
          <ProjectPlanner initialService={plannerService} />
          <FinalCTA onNavigate={handleNavigate} />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </CursorContext.Provider>
  );
};
