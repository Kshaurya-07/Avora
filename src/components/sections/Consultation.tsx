import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Send,
  Clock,
  Layers,
  Palette,
  Layout,
  Shirt,
  Globe,
  Code2,
  PenTool,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationProps {
  initialServiceId?: string;
}

type ServiceKey =
  | 'logo-design'
  | 'branding'
  | 'graphic-design'
  | 'apparel'
  | 'ui-ux'
  | 'web-design'
  | 'web-development';

export const Consultation: React.FC<ConsultationProps> = ({ initialServiceId }) => {
  const [selectedService, setSelectedService] = useState<ServiceKey>(
    (initialServiceId as ServiceKey) || 'logo-design'
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update selected service if prop changes
  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId as ServiceKey);
      setCurrentStep(1);
      setIsSubmitted(false);
    }
  }, [initialServiceId]);

  // Common contact info
  const [contact, setContact] = useState({
    name: '',
    email: '',
    brandOrCompany: '',
    referenceLinks: '',
    deadline: '',
    budget: '$3k – $6k',
  });

  // 01 Logo Design Form State
  const [logoState, setLogoState] = useState({
    brandName: '',
    brandDescription: '',
    industry: '',
    targetAudience: '',
    logoTypes: [] as string[],
    brandPersonalities: [] as string[],
    preferredColors: '',
    colorsToAvoid: '',
    typographyPreference: '',
    usageDestinations: [] as string[],
  });

  // 02 Branding Form State
  const [brandingState, setBrandingState] = useState({
    brandName: '',
    industry: '',
    brandStory: '',
    targetAudience: '',
    brandPersonality: [] as string[],
    currentIdentityStatus: 'Starting from scratch',
    whatNeedsToChange: '',
    logoStatus: 'Need new logo mark',
    typographyPreferences: '',
    colorPreferences: '',
    brandApplications: [] as string[],
    packagingRequirements: '',
    socialMediaRequirements: '',
    websiteRequirements: '',
  });

  // 03 Graphic Design Form State
  const [graphicState, setGraphicState] = useState({
    designItemTypes: [] as string[],
    purpose: '',
    targetAudience: '',
    dimensions: '',
    contentCopy: '',
    visualStyle: '',
    hasBrandGuidelines: 'Yes, full guidelines exist',
    requiredFormats: [] as string[],
    numberOfDesigns: '1–3 pieces',
  });

  // 04 Apparel Design Form State
  const [apparelState, setApparelState] = useState({
    products: [] as string[],
    designPlacements: [] as string[],
    brandName: '',
    targetAudience: '',
    apparelStyles: [] as string[],
    printMethod: 'Screen Print / DTG',
    garmentColor: '',
    garmentType: 'Heavyweight Boxy Cotton',
    quantity: '50–200 units',
  });

  // 05 UI/UX Design Form State
  const [uiuxState, setUiuxState] = useState({
    productTypes: [] as string[],
    whatProductDoes: '',
    targetUsers: '',
    problemSolved: '',
    hasWireframes: 'Idea stage — need wireframes',
    hasDesignSystem: 'Need new design system',
    mainFeatures: '',
    screenCount: '5–12 screens',
    needsAuthOrPayments: [] as string[],
    alsoNeedDevelopment: 'Yes, want full design + build',
  });

  // 06 Web Design Form State
  const [webDesignState, setWebDesignState] = useState({
    websiteTypes: [] as string[],
    purposeGoal: '',
    targetAudience: '',
    pagesRequired: '3–6 pages',
    existingContentStatus: 'Have copy and rough images',
    visualDirections: [] as string[],
    functionalitiesNeeded: [] as string[],
    responsiveTargets: ['Desktop', 'Tablet', 'Mobile'],
  });

  // 07 Web Development Form State
  const [webDevState, setWebDevState] = useState({
    projectType: [] as string[],
    currentStatus: 'Design ready in Figma',
    technologyPreferences: [] as string[],
    backendDatabaseNeeds: '',
    requiredFeatures: '',
    needsUIUX: 'Already have completed UI/UX',
  });

  const serviceTabs: { id: ServiceKey; number: string; title: string; icon: React.ReactNode; color: string }[] = [
    { id: 'logo-design', number: '01', title: 'Logo Design', icon: <PenTool className="w-4 h-4" />, color: '#C084FC' },
    { id: 'branding', number: '02', title: 'Branding', icon: <Palette className="w-4 h-4" />, color: '#A855F7' },
    { id: 'graphic-design', number: '03', title: 'Graphic Design', icon: <Layers className="w-4 h-4" />, color: '#F472B6' },
    { id: 'apparel', number: '04', title: 'Apparel Design', icon: <Shirt className="w-4 h-4" />, color: '#71717A' },
    { id: 'ui-ux', number: '05', title: 'UI/UX Design', icon: <Layout className="w-4 h-4" />, color: '#38BDF8' },
    { id: 'web-design', number: '06', title: 'Web Design', icon: <Globe className="w-4 h-4" />, color: '#60A5FA' },
    { id: 'web-development', number: '07', title: 'Web Development', icon: <Code2 className="w-4 h-4" />, color: '#10B981' },
  ];

  const handleSelectServiceTab = (id: ServiceKey) => {
    setSelectedService(id);
    setCurrentStep(1);
    setIsSubmitted(false);
    setErrorMsg('');
  };

  const toggleArrayItem = (list: string[], item: string, setter: (val: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter((x) => x !== item));
    } else {
      setter([...list, item]);
    }
  };

  const totalSteps = 4;

  const handleNextStep = () => {
    setErrorMsg('');
    if (currentStep === 1) {
      // Basic check
      if (selectedService === 'logo-design' && logoState.logoTypes.length === 0) {
        setErrorMsg('Please select at least one preferred logo type.');
        return;
      }
    }
    if (currentStep === totalSteps - 1) {
      if (!contact.name || !contact.email) {
        setErrorMsg('Please provide your name and email address.');
        return;
      }
      if (!contact.email.includes('@')) {
        setErrorMsg('Please enter a valid email address.');
        return;
      }
    }
    setCurrentStep((s) => Math.min(totalSteps, s + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      setErrorMsg('Please enter your name and email address.');
      return;
    }
    setIsSubmitted(true);
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#A855F7', '#60A5FA', '#38BDF8', '#F472B6', '#10B981'],
    });
  };

  return (
    <section id="consultation" className="relative w-full py-24 sm:py-36 px-4 sm:px-8 bg-[#FAF9F6] border-b border-avora-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-avora-border text-[11px] font-mono uppercase tracking-widest text-avora-muted shadow-xs">
            <Compass className="w-3.5 h-3.5 text-avora-lavender animate-spin-slow" />
            <span>Tailored Advisory & Scoping</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-[0.95]">
            CHOOSE YOUR<br />
            <span className="iridescent-text">CONSULTATION.</span>
          </h2>

          <p className="text-base sm:text-lg font-sans text-avora-charcoal/80 leading-relaxed pt-2">
            Every creative discipline requires different thinking. Select your focus below to open a completely personalized consultation form calibrated to your exact project scope.
          </p>
        </div>

        {/* 7 Service Selection Tabs */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {serviceTabs.map((tab) => {
            const isActive = selectedService === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectServiceTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-avora-charcoal text-white shadow-md'
                    : 'bg-white text-avora-charcoal hover:bg-avora-ivory border border-avora-border'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-avora-muted'}>{tab.number}</span>
                <span>{tab.icon}</span>
                <span className="font-semibold">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Personalized Consultation Card */}
        <div className="max-w-4xl bg-white rounded-3xl border border-avora-border shadow-xl p-6 sm:p-12 relative overflow-hidden">
          {!isSubmitted ? (
            <div>
              {/* Form Title & Progress */}
              <div className="mb-8 pb-6 border-b border-avora-border-light">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-avora-muted mb-2">
                  <span className="uppercase tracking-wider font-semibold text-avora-charcoal">
                    STEP 0{currentStep} OF 0{totalSteps} — {
                      currentStep === 1 ? 'Scope & Direction' :
                      currentStep === 2 ? 'Specific Criteria' :
                      currentStep === 3 ? 'Project & Timeline' : 'Your Contact Details'
                    }
                  </span>
                  <span>{Math.round((currentStep / totalSteps) * 100)}% COMPLETE</span>
                </div>
                <div className="w-full h-1 bg-avora-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-avora-charcoal rounded-full"
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* ======================================================== */}
                  {/* FORM 01: LOGO DESIGN (LET'S DESIGN YOUR LOGO) */}
                  {/* ======================================================== */}
                  {selectedService === 'logo-design' && (
                    <motion.div
                      key={`logo-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="pb-2">
                        <span className="text-xs font-mono text-purple-600 font-semibold tracking-wider uppercase">01 // LOGO DESIGN ATELIER</span>
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal mt-1">LET'S DESIGN YOUR LOGO.</h3>
                      </div>

                      {currentStep === 1 && (
                        <div className="space-y-5">
                          <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-avora-muted block">Brand Name & Industry</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <input
                                type="text"
                                placeholder="Brand / Studio Name"
                                value={logoState.brandName}
                                onChange={(e) => setLogoState({ ...logoState, brandName: e.target.value })}
                                className="p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                              />
                              <input
                                type="text"
                                placeholder="Industry (e.g. Fashion, Tech, Architecture)"
                                value={logoState.industry}
                                onChange={(e) => setLogoState({ ...logoState, industry: e.target.value })}
                                className="p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-avora-muted block">Preferred Logo Type(s)</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                              {['Wordmark', 'Lettermark', 'Monogram', 'Symbol / Icon', 'Combination Mark', 'Emblem', 'Not sure yet'].map((type) => {
                                const sel = logoState.logoTypes.includes(type);
                                return (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() => toggleArrayItem(logoState.logoTypes, type, (v) => setLogoState({ ...logoState, logoTypes: v }))}
                                    className={`p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between ${
                                      sel ? 'bg-avora-charcoal text-white shadow-xs' : 'bg-[#FAF9F6] text-avora-charcoal border border-avora-border hover:bg-white'
                                    }`}
                                  >
                                    <span>{type}</span>
                                    {sel && <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-5">
                          <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-avora-muted block">Brand Personality</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                              {['Minimal', 'Luxury', 'Modern', 'Bold', 'Playful', 'Professional', 'Futuristic', 'Elegant', 'Experimental'].map((trait) => {
                                const sel = logoState.brandPersonalities.includes(trait);
                                return (
                                  <button
                                    key={trait}
                                    type="button"
                                    onClick={() => toggleArrayItem(logoState.brandPersonalities, trait, (v) => setLogoState({ ...logoState, brandPersonalities: v }))}
                                    className={`p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between ${
                                      sel ? 'bg-purple-600 text-white shadow-xs' : 'bg-[#FAF9F6] text-avora-charcoal border border-avora-border hover:bg-white'
                                    }`}
                                  >
                                    <span>{trait}</span>
                                    {sel && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Colors You Prefer</label>
                              <input
                                type="text"
                                placeholder="e.g. Black, bone white, lilac, silver"
                                value={logoState.preferredColors}
                                onChange={(e) => setLogoState({ ...logoState, preferredColors: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Colors to Avoid</label>
                              <input
                                type="text"
                                placeholder="e.g. Neon yellow, bright green"
                                value={logoState.colorsToAvoid}
                                onChange={(e) => setLogoState({ ...logoState, colorsToAvoid: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-mono uppercase text-avora-muted block">Planned Logo Usage</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {['Website', 'Social Media', 'Packaging', 'Apparel', 'Print', 'Signage', 'All of the above'].map((use) => {
                                const sel = logoState.usageDestinations.includes(use);
                                return (
                                  <button
                                    key={use}
                                    type="button"
                                    onClick={() => toggleArrayItem(logoState.usageDestinations, use, (v) => setLogoState({ ...logoState, usageDestinations: v }))}
                                    className={`p-2.5 rounded-xl text-center text-xs font-mono border transition-all ${
                                      sel ? 'bg-avora-charcoal text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                    }`}
                                  >
                                    {use}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Describe Your Vision / Brand Purpose</label>
                          <textarea
                            rows={4}
                            placeholder="What does your brand stand for? What feelings should the logo evoke in a viewer?"
                            value={logoState.brandDescription}
                            onChange={(e) => setLogoState({ ...logoState, brandDescription: e.target.value })}
                            className="w-full p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Target Timeline</label>
                              <input
                                type="text"
                                placeholder="e.g. 2–3 weeks"
                                value={contact.deadline}
                                onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Reference Moodboard / Links</label>
                              <input
                                type="text"
                                placeholder="Pinterest, Figma, or Dropbox link"
                                value={contact.referenceLinks}
                                onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* FORM 02: BRANDING (BUILD YOUR BRAND) */}
                  {/* ======================================================== */}
                  {selectedService === 'branding' && (
                    <motion.div
                      key={`branding-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="pb-2">
                        <span className="text-xs font-mono text-purple-600 font-semibold tracking-wider uppercase">02 // BRAND IDENTITY ARCHITECTURE</span>
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal mt-1">BUILD YOUR BRAND.</h3>
                      </div>

                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Brand Name</label>
                              <input
                                type="text"
                                placeholder="Company / Brand"
                                value={brandingState.brandName}
                                onChange={(e) => setBrandingState({ ...brandingState, brandName: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal font-sans"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Industry</label>
                              <input
                                type="text"
                                placeholder="e.g. Luxury Retail, SaaS, Hospitality"
                                value={brandingState.industry}
                                onChange={(e) => setBrandingState({ ...brandingState, industry: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal font-sans"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Brand Story & Target Audience</label>
                            <textarea
                              rows={3}
                              placeholder="Who is this brand for? What is the core narrative?"
                              value={brandingState.brandStory}
                              onChange={(e) => setBrandingState({ ...brandingState, brandStory: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal font-sans"
                            />
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Current Brand Identity Status</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {['Starting from zero', 'Have an existing brand needing redesign', 'Have logo only, need full system'].map((s) => (
                                <button
                                  key={s}
                                  type="button"
                                  onClick={() => setBrandingState({ ...brandingState, currentIdentityStatus: s })}
                                  className={`p-3 rounded-xl text-left text-xs font-mono border transition-all ${
                                    brandingState.currentIdentityStatus === s ? 'bg-avora-charcoal text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  {s}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Required Brand Touchpoints</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {['Full Style Manual', 'Packaging Mockups', 'Social Templates (Canva/Figma)', 'Stationery Suite', 'Signage & Environmental', 'Brand Pitch Deck'].map((item) => {
                                const sel = brandingState.brandApplications.includes(item);
                                return (
                                  <button
                                    key={item}
                                    type="button"
                                    onClick={() => toggleArrayItem(brandingState.brandApplications, item, (v) => setBrandingState({ ...brandingState, brandApplications: v }))}
                                    className={`p-3 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                      sel ? 'bg-purple-600 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                    }`}
                                  >
                                    <span>{item}</span>
                                    {sel && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">What Needs to Change or Be Achieved?</label>
                            <textarea
                              rows={3}
                              placeholder="Describe what is missing in your current perception or what the new identity must communicate..."
                              value={brandingState.whatNeedsToChange}
                              onChange={(e) => setBrandingState({ ...brandingState, whatNeedsToChange: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal font-sans"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Preferred timeline (e.g. 4–6 weeks)"
                              value={contact.deadline}
                              onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                            <input
                              type="text"
                              placeholder="Inspiration / Reference URLs"
                              value={contact.referenceLinks}
                              onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* FORM 03: GRAPHIC DESIGN (LET'S CREATE THE VISUAL) */}
                  {/* ======================================================== */}
                  {selectedService === 'graphic-design' && (
                    <motion.div
                      key={`graphic-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="pb-2">
                        <span className="text-xs font-mono text-pink-600 font-semibold tracking-wider uppercase">03 // EDITORIAL & DIGITAL VISUALS</span>
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal mt-1">LET'S CREATE THE VISUAL.</h3>
                      </div>

                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">What are you designing?</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {['Poster', 'Social Media System', 'Campaign Key Visual', 'Event Creative', 'Advertisement', 'Presentation Deck', 'Editorial / Book', 'Marketing Collateral', 'Other'].map((item) => {
                              const sel = graphicState.designItemTypes.includes(item);
                              return (
                                <button
                                  key={item}
                                  type="button"
                                  onClick={() => toggleArrayItem(graphicState.designItemTypes, item, (v) => setGraphicState({ ...graphicState, designItemTypes: v }))}
                                  className={`p-3 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                    sel ? 'bg-pink-600 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  <span>{item}</span>
                                  {sel && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Purpose & Target Audience</label>
                            <input
                              type="text"
                              placeholder="e.g., Exhibition announcement for design community"
                              value={graphicState.purpose}
                              onChange={(e) => setGraphicState({ ...graphicState, purpose: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Dimensions / Aspect Ratios</label>
                              <input
                                type="text"
                                placeholder="e.g. A1 print, 9:16 Instagram, 16:9 screen"
                                value={graphicState.dimensions}
                                onChange={(e) => setGraphicState({ ...graphicState, dimensions: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Visual Style Preference</label>
                              <input
                                type="text"
                                placeholder="e.g., Brutalist, high-fashion editorial, clean Swiss"
                                value={graphicState.visualStyle}
                                onChange={(e) => setGraphicState({ ...graphicState, visualStyle: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Content / Copy / Text Elements</label>
                            <textarea
                              rows={4}
                              placeholder="Paste headline, body text, required dates or logos to include..."
                              value={graphicState.contentCopy}
                              onChange={(e) => setGraphicState({ ...graphicState, contentCopy: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Deadline"
                              value={contact.deadline}
                              onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                            <input
                              type="text"
                              placeholder="References / Pinterest Link"
                              value={contact.referenceLinks}
                              onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* FORM 04: APPAREL DESIGN (LET'S DESIGN WHAT PEOPLE WEAR) */}
                  {/* ======================================================== */}
                  {selectedService === 'apparel' && (
                    <motion.div
                      key={`apparel-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="pb-2">
                        <span className="text-xs font-mono text-zinc-600 font-semibold tracking-wider uppercase">04 // STREETWEAR & FASHION CAPSULE</span>
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal mt-1">LET'S DESIGN WHAT PEOPLE WEAR.</h3>
                      </div>

                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Product Garment(s)</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {['T-Shirt', 'Hoodie', 'Jacket / Outerwear', 'Jersey', 'Cap / Headwear', 'Tote / Accessories', 'Other'].map((prod) => {
                              const sel = apparelState.products.includes(prod);
                              return (
                                <button
                                  key={prod}
                                  type="button"
                                  onClick={() => toggleArrayItem(apparelState.products, prod, (v) => setApparelState({ ...apparelState, products: v }))}
                                  className={`p-3 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                    sel ? 'bg-zinc-900 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  <span>{prod}</span>
                                  {sel && <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />}
                                </button>
                              );
                            })}
                          </div>

                          <label className="text-xs font-mono uppercase text-avora-muted block pt-2">Design Placements & Techniques</label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Front Chest', 'Oversized Back', 'Sleeve Print', 'Full Print / All-over', 'Embroidery', 'Typography Focus', 'Graphic Illustration', 'Puff Ink / Texture'].map((pl) => {
                              const sel = apparelState.designPlacements.includes(pl);
                              return (
                                <button
                                  key={pl}
                                  type="button"
                                  onClick={() => toggleArrayItem(apparelState.designPlacements, pl, (v) => setApparelState({ ...apparelState, designPlacements: v }))}
                                  className={`p-2.5 rounded-xl text-center text-xs font-mono border transition-all ${
                                    sel ? 'bg-zinc-800 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  {pl}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Brand Aesthetic & Style</label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Streetwear', 'Minimal Luxury', 'Athletic / Sports', 'Experimental', 'Casual Boutique', 'Cyber / Techwear', 'Vintage Wash'].map((st) => {
                              const sel = apparelState.apparelStyles.includes(st);
                              return (
                                <button
                                  key={st}
                                  type="button"
                                  onClick={() => toggleArrayItem(apparelState.apparelStyles, st, (v) => setApparelState({ ...apparelState, apparelStyles: v }))}
                                  className={`p-2.5 rounded-xl text-center text-xs font-mono border transition-all ${
                                    sel ? 'bg-zinc-900 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  {st}
                                </button>
                              );
                            })}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Garment Color / Silhouette</label>
                              <input
                                type="text"
                                placeholder="e.g. Faded black, vintage stone, 300gsm boxy fit"
                                value={apparelState.garmentColor}
                                onChange={(e) => setApparelState({ ...apparelState, garmentColor: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Estimated Production Volume</label>
                              <input
                                type="text"
                                placeholder="e.g. 50 pcs, 250 pcs, or design-only"
                                value={apparelState.quantity}
                                onChange={(e) => setApparelState({ ...apparelState, quantity: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Moodboard & Artwork References</label>
                          <input
                            type="text"
                            placeholder="Drop a link to your reference images, Dropbox or Pinterest..."
                            value={contact.referenceLinks}
                            onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                            className="w-full p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Target Drop Date / Deadline"
                              value={contact.deadline}
                              onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                            <input
                              type="text"
                              placeholder="Estimated Budget"
                              value={contact.budget}
                              onChange={(e) => setContact({ ...contact, budget: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* FORM 05: UI/UX DESIGN (LET'S DESIGN THE EXPERIENCE) */}
                  {/* ======================================================== */}
                  {selectedService === 'ui-ux' && (
                    <motion.div
                      key={`uiux-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="pb-2">
                        <span className="text-xs font-mono text-cyan-600 font-semibold tracking-wider uppercase">05 // DIGITAL PRODUCT & INTERACTION</span>
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal mt-1">LET'S DESIGN THE EXPERIENCE.</h3>
                      </div>

                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Product Type</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {['Mobile App (iOS/Android)', 'SaaS Platform', 'Web App', 'Interactive Dashboard', 'Consumer Digital Product', 'Other'].map((item) => {
                              const sel = uiuxState.productTypes.includes(item);
                              return (
                                <button
                                  key={item}
                                  type="button"
                                  onClick={() => toggleArrayItem(uiuxState.productTypes, item, (v) => setUiuxState({ ...uiuxState, productTypes: v }))}
                                  className={`p-3 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                    sel ? 'bg-cyan-600 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  <span>{item}</span>
                                  {sel && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                </button>
                              );
                            })}
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">What does the product do & who uses it?</label>
                            <textarea
                              rows={3}
                              placeholder="Describe the core problem this product solves for its users..."
                              value={uiuxState.whatProductDoes}
                              onChange={(e) => setUiuxState({ ...uiuxState, whatProductDoes: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Existing Wireframes or UI?</label>
                              <select
                                value={uiuxState.hasWireframes}
                                onChange={(e) => setUiuxState({ ...uiuxState, hasWireframes: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono"
                              >
                                <option>Idea stage — starting from scratch</option>
                                <option>Rough hand-drawn sketches exist</option>
                                <option>Lo-fi wireframes ready</option>
                                <option>Existing product needing redesign</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Design System Status</label>
                              <select
                                value={uiuxState.hasDesignSystem}
                                onChange={(e) => setUiuxState({ ...uiuxState, hasDesignSystem: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono"
                              >
                                <option>Need complete new Figma design system</option>
                                <option>Have basic brand kit to expand</option>
                                <option>Existing design tokens exist</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Main Functionalities</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {['User Auth / Login', 'Stripe / Payments', 'Analytics Charts', 'Admin CMS', 'Multi-tenant', 'Notifications', 'Search / Filtering', 'Mobile Gestures'].map((f) => {
                                const sel = uiuxState.needsAuthOrPayments.includes(f);
                                return (
                                  <button
                                    key={f}
                                    type="button"
                                    onClick={() => toggleArrayItem(uiuxState.needsAuthOrPayments, f, (v) => setUiuxState({ ...uiuxState, needsAuthOrPayments: v }))}
                                    className={`p-2 rounded-xl text-center text-xs font-mono border transition-all ${
                                      sel ? 'bg-cyan-700 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                    }`}
                                  >
                                    {f}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Do you also need frontend development?</label>
                            <div className="grid grid-cols-3 gap-2">
                              {['Yes, full design + code build', 'Design only in Figma', 'Not sure yet'].map((opt) => (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setUiuxState({ ...uiuxState, alsoNeedDevelopment: opt })}
                                  className={`p-3 rounded-xl text-xs font-mono border transition-all ${
                                    uiuxState.alsoNeedDevelopment === opt ? 'bg-avora-charcoal text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <input
                              type="text"
                              placeholder="Target Launch Date"
                              value={contact.deadline}
                              onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                            <input
                              type="text"
                              placeholder="Competitor / Benchmark Links"
                              value={contact.referenceLinks}
                              onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* FORM 06: WEB DESIGN (LET'S DESIGN YOUR WEBSITE) */}
                  {/* ======================================================== */}
                  {selectedService === 'web-design' && (
                    <motion.div
                      key={`webdesign-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="pb-2">
                        <span className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">06 // IMMERSIVE EDITORIAL WEB DESIGN</span>
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal mt-1">LET'S DESIGN YOUR WEBSITE.</h3>
                      </div>

                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Website Type</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {['Creative Studio / Portfolio', 'Business Flagship', 'High-Converting Landing Page', 'Editorial E-Commerce', 'Personal / Founder Site', 'Web App Showcase', 'Other'].map((w) => {
                              const sel = webDesignState.websiteTypes.includes(w);
                              return (
                                <button
                                  key={w}
                                  type="button"
                                  onClick={() => toggleArrayItem(webDesignState.websiteTypes, w, (v) => setWebDesignState({ ...webDesignState, websiteTypes: v }))}
                                  className={`p-3 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                    sel ? 'bg-blue-600 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  <span>{w}</span>
                                  {sel && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                </button>
                              );
                            })}
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">What should the website achieve?</label>
                            <input
                              type="text"
                              placeholder="e.g. Elevate brand prestige, convert visitors into high-ticket clients, launch new collection"
                              value={webDesignState.purposeGoal}
                              onChange={(e) => setWebDesignState({ ...webDesignState, purposeGoal: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Visual Direction & Vibe</label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Minimal & Clean', 'Editorial Luxury', 'Futuristic 3D', 'High-Contrast Bold', 'Organic / Earthy', 'Dark Mode Cinematic', 'Interactive Kinetic', 'Experimental'].map((v) => {
                              const sel = webDesignState.visualDirections.includes(v);
                              return (
                                <button
                                  key={v}
                                  type="button"
                                  onClick={() => toggleArrayItem(webDesignState.visualDirections, v, (val) => setWebDesignState({ ...webDesignState, visualDirections: val }))}
                                  className={`p-2.5 rounded-xl text-center text-xs font-mono border transition-all ${
                                    sel ? 'bg-blue-600 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  {v}
                                </button>
                              );
                            })}
                          </div>

                          <label className="text-xs font-mono uppercase text-avora-muted block pt-2">Special Features & Interactive Elements</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {['3D Canvas / WebGL', 'Smooth Scroll Choreography', 'CMS Dynamic Blog/Work', 'Custom Micro-Interactions', 'Booking / Calendar', 'Stripe E-Commerce'].map((item) => {
                              const sel = webDesignState.functionalitiesNeeded.includes(item);
                              return (
                                <button
                                  key={item}
                                  type="button"
                                  onClick={() => toggleArrayItem(webDesignState.functionalitiesNeeded, item, (val) => setWebDesignState({ ...webDesignState, functionalitiesNeeded: val }))}
                                  className={`p-2.5 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                    sel ? 'bg-avora-charcoal text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  <span>{item}</span>
                                  {sel && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Target Launch Date</label>
                              <input
                                type="text"
                                placeholder="e.g. End of next month"
                                value={contact.deadline}
                                onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Inspiration / Benchmark Websites</label>
                              <input
                                type="text"
                                placeholder="URLs of websites you love"
                                value={contact.referenceLinks}
                                onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* FORM 07: WEB DEVELOPMENT (LET'S BUILD IT) */}
                  {/* ======================================================== */}
                  {selectedService === 'web-development' && (
                    <motion.div
                      key={`webdev-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="pb-2">
                        <span className="text-xs font-mono text-emerald-600 font-semibold tracking-wider uppercase">07 // PRODUCTION ENGINEERING & WEBGL</span>
                        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal mt-1">LET'S BUILD IT.</h3>
                      </div>

                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Project Type</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {['Custom Web Application', 'Interactive WebGL / 3D Experience', 'Fullstack Next.js Flagship', 'Shopify / E-Commerce Custom Build', 'SaaS Dashboard / App', 'Redesign + Replatforming'].map((p) => {
                              const sel = webDevState.projectType.includes(p);
                              return (
                                <button
                                  key={p}
                                  type="button"
                                  onClick={() => toggleArrayItem(webDevState.projectType, p, (v) => setWebDevState({ ...webDevState, projectType: v }))}
                                  className={`p-3 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                    sel ? 'bg-emerald-600 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  <span>{p}</span>
                                  {sel && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                </button>
                              );
                            })}
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Current Design & Asset Status</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {['Figma design ready to build', 'Idea only — need design + dev', 'Existing codebase needing rewrite'].map((st) => (
                                <button
                                  key={st}
                                  type="button"
                                  onClick={() => setWebDevState({ ...webDevState, currentStatus: st })}
                                  className={`p-3 rounded-xl text-left text-xs font-mono border transition-all ${
                                    webDevState.currentStatus === st ? 'bg-avora-charcoal text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  {st}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Technologies / Requirements</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion Physics', 'Vercel / Cloudflare Deployment', 'Stripe Integration', 'Supabase / PostgreSQL'].map((tech) => {
                              const sel = webDevState.technologyPreferences.includes(tech);
                              return (
                                <button
                                  key={tech}
                                  type="button"
                                  onClick={() => toggleArrayItem(webDevState.technologyPreferences, tech, (v) => setWebDevState({ ...webDevState, technologyPreferences: v }))}
                                  className={`p-2.5 rounded-xl text-left text-xs font-mono border transition-all flex items-center justify-between ${
                                    sel ? 'bg-emerald-700 text-white' : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                                  }`}
                                >
                                  <span>{tech}</span>
                                  {sel && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                </button>
                              );
                            })}
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Describe Required Functionality</label>
                            <textarea
                              rows={3}
                              placeholder="Key APIs, third-party services, performance goals (e.g. 120Hz smoothness, 99 Lighthouse)..."
                              value={webDevState.requiredFeatures}
                              onChange={(e) => setWebDevState({ ...webDevState, requiredFeatures: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Target Deployment Date"
                              value={contact.deadline}
                              onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                            <input
                              type="text"
                              placeholder="Figma / GitHub repo link if ready"
                              value={contact.referenceLinks}
                              onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                              className="p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* STEP 4: CONTACT & REVIEW (SHARED STEP 4) */}
                  {/* ======================================================== */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step-contact"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <div>
                        <span className="text-xs font-mono text-purple-600 font-semibold tracking-wider uppercase">FINAL STEP // DIRECT COORDINATES</span>
                        <h3 className="font-serif text-3xl font-bold text-avora-charcoal mt-1">WHERE SHOULD I RESPOND?</h3>
                        <p className="text-xs font-mono text-avora-muted mt-1">
                          You will receive a tailored creative proposal and roadmap within 24–48 hours.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Julian Vance"
                            value={contact.name}
                            onChange={(e) => setContact({ ...contact, name: e.target.value })}
                            className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="julian@venture.com"
                            value={contact.email}
                            onChange={(e) => setContact({ ...contact, email: e.target.value })}
                            className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Brand / Studio Name</label>
                          <input
                            type="text"
                            placeholder="Vance Atelier"
                            value={contact.brandOrCompany}
                            onChange={(e) => setContact({ ...contact, brandOrCompany: e.target.value })}
                            className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Budget Allocation</label>
                          <select
                            value={contact.budget}
                            onChange={(e) => setContact({ ...contact, budget: e.target.value })}
                            className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono"
                          >
                            <option>&lt; $3,000</option>
                            <option>$3,000 – $6,000</option>
                            <option>$6,000 – $12,000</option>
                            <option>$12,000+</option>
                            <option>Flexible / To Be Scoped</option>
                          </select>
                        </div>
                      </div>

                      {/* Summary Banner */}
                      <div className="p-4 rounded-2xl bg-avora-ivory border border-avora-border text-xs font-mono text-avora-muted space-y-1">
                        <div className="flex justify-between">
                          <span>SELECTED DISCIPLINE:</span>
                          <span className="font-bold text-avora-charcoal uppercase">{selectedService.replace('-', ' ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>FOUNDER DIRECT CONTACT:</span>
                          <span className="text-avora-charcoal font-semibold">kshaurya0708@gmail.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span>RESPONSE TIME:</span>
                          <span className="text-emerald-600 font-semibold">Within 24–48 Hours</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Banner */}
                {errorMsg && (
                  <p className="mt-4 text-xs font-mono text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                    {errorMsg}
                  </p>
                )}

                {/* Navigation and CTA Buttons */}
                <div className="mt-8 pt-6 border-t border-avora-border-light flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((s) => s - 1)}
                      className="px-4 py-2.5 rounded-xl border border-avora-border bg-white text-xs font-sans font-medium text-avora-charcoal hover:bg-avora-ivory flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-3 rounded-xl bg-avora-charcoal text-white text-xs font-sans font-semibold tracking-wide hover:bg-black flex items-center gap-2 shadow"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-avora-charcoal text-white text-xs font-sans font-bold tracking-wider uppercase hover:bg-black flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {selectedService === 'logo-design' && 'START LOGO CONSULTATION ↗'}
                        {selectedService === 'branding' && 'START BRAND CONSULTATION ↗'}
                        {selectedService === 'graphic-design' && 'START GRAPHIC CONSULTATION ↗'}
                        {selectedService === 'apparel' && 'START APPAREL CONSULTATION ↗'}
                        {selectedService === 'ui-ux' && 'START UI/UX CONSULTATION ↗'}
                        {selectedService === 'web-design' && 'START WEB CONSULTATION ↗'}
                        {selectedService === 'web-development' && 'START DEVELOPMENT CONSULTATION ↗'}
                      </span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Success Confirmation */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-avora-charcoal">
                CONSULTATION INQUIRY RECEIVED.
              </h3>
              <p className="text-sm font-sans text-avora-muted max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-avora-charcoal">{contact.name}</strong>. Your customized{' '}
                <strong className="text-avora-charcoal">{selectedService.replace('-', ' ').toUpperCase()}</strong> consultation request has been delivered to AVORA founder Kumar Shaurya.
              </p>
              <p className="text-xs font-mono text-avora-muted">
                A structured proposal and discussion schedule will be sent to <strong>{contact.email}</strong> within 24–48 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="text-xs font-mono text-purple-600 underline hover:text-black"
                >
                  Configure another consultation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
