import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor, CursorContext } from './components/ui/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { CommandMenu } from './components/navigation/CommandMenu';
import { Hero } from './components/sections/Hero';
import { TickerIntro } from './components/sections/TickerIntro';
import { VisualServices } from './components/sections/VisualServices';
import { DesignedThenBuilt } from './components/sections/DesignedThenBuilt';
import { Playground } from './components/sections/Playground';
import { Toolkit } from './components/sections/Toolkit';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Consultation } from './components/sections/Consultation';
import { Packages } from './components/sections/Packages';
import { ProjectPlanner } from './components/sections/ProjectPlanner';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { AboutPage } from './components/pages/AboutPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [plannerService, setPlannerService] = useState<string | undefined>(undefined);
  const [consultationService, setConsultationService] = useState<string>('logo-design');
  
  // Cursor context state
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<
    'default' | 'project' | 'explore' | 'drag' | 'play' | 'pointer' | 'discuss'
  >('default');

  const setCursor = (
    text: string,
    variant: 'default' | 'project' | 'explore' | 'drag' | 'play' | 'pointer' | 'discuss' = 'default'
  ) => {
    setCursorText(text);
    setCursorVariant(variant);
  };

  const resetCursor = () => {
    setCursorText('');
    setCursorVariant('default');
  };

  // Browser History and Route Navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToAbout = () => {
    window.history.pushState({}, '', '/about');
    setCurrentPath('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
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
  }, [currentPath]);

  // Intersection Observer for Active Section Highlight on homepage
  useEffect(() => {
    if (currentPath !== '/') return;

    const sections = [
      'hero',
      'services',
      'about',
      'playground',
      'consultation',
      'packages',
      'planner',
    ];
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
  }, [currentPath]);

  const handleNavigate = (sectionId: string) => {
    if (currentPath !== '/') {
      navigateToHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForConsultation = (serviceId: string) => {
    setConsultationService(serviceId);
    handleNavigate('consultation');
  };

  const handleSelectPackage = (packageName: string) => {
    setPlannerService(packageName);
    handleNavigate('planner');
  };

  return (
    <CursorContext.Provider value={{ cursorText, cursorVariant, setCursor, resetCursor }}>
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col antialiased selection:bg-purple-200 selection:text-black">
        {/* Custom Contextual Cursor */}
        <CustomCursor />

        {/* Global Floating Navbar */}
        <Navbar
          onOpenCommand={() => setIsCommandOpen(true)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onNavigateAbout={navigateToAbout}
          onSelectServiceConsultation={handleSelectServiceForConsultation}
        />

        {/* Accessible Command Palette (⌘K / Ctrl+K) */}
        <CommandMenu
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
          onNavigate={handleNavigate}
          onNavigateAbout={navigateToAbout}
        />

        {/* View Switcher: Dedicated About Page vs Main Studio Homepage */}
        {currentPath === '/about' ? (
          <AboutPage
            onBackToHome={navigateToHome}
            onNavigateHomeSection={handleNavigate}
          />
        ) : (
          /* Main Homepage Flow (Selected Work completely removed) */
          <main className="flex-1 w-full">
            <Hero onNavigate={handleNavigate} />
            <TickerIntro />
            <VisualServices onSelectConsultation={handleSelectServiceForConsultation} />
            <DesignedThenBuilt />
            <Playground />
            <Toolkit />
            <About onNavigate={handleNavigate} onNavigateAbout={navigateToAbout} />
            <Testimonials />
            <Consultation initialServiceId={consultationService} />
            <Packages onSelectPackage={handleSelectPackage} />
            <ProjectPlanner initialService={plannerService} />
            <FinalCTA onNavigate={handleNavigate} />
            <Footer onNavigate={handleNavigate} onNavigateAbout={navigateToAbout} />
          </main>
        )}
      </div>
    </CursorContext.Provider>
  );
};
