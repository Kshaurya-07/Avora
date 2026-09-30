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
  AlertCircle,
  RefreshCw,
  Phone,
  Mail,
  User,
  Building,
  Check,
  Smartphone,
  Monitor,
  Terminal,
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

interface CountryCode {
  code: string;
  name: string;
  flag: string;
}

const COUNTRY_CODES: CountryCode[] = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'USA / Canada', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
];

const SERVICE_TITLES: Record<ServiceKey, { title: string; cta: string; accent: string; icon: React.ReactNode }> = {
  'logo-design': {
    title: "LET'S DESIGN YOUR LOGO.",
    cta: 'START LOGO CONSULTATION ↗',
    accent: '#C084FC',
    icon: <PenTool className="w-4 h-4" />,
  },
  branding: {
    title: 'BUILD YOUR BRAND.',
    cta: 'START BRAND CONSULTATION ↗',
    accent: '#A855F7',
    icon: <Palette className="w-4 h-4" />,
  },
  'graphic-design': {
    title: "LET'S CREATE THE VISUAL.",
    cta: 'START GRAPHIC CONSULTATION ↗',
    accent: '#F472B6',
    icon: <Layers className="w-4 h-4" />,
  },
  apparel: {
    title: "LET'S DESIGN WHAT PEOPLE WEAR.",
    cta: 'START APPAREL CONSULTATION ↗',
    accent: '#71717A',
    icon: <Shirt className="w-4 h-4" />,
  },
  'ui-ux': {
    title: "LET'S DESIGN THE EXPERIENCE.",
    cta: 'START UI/UX CONSULTATION ↗',
    accent: '#38BDF8',
    icon: <Layout className="w-4 h-4" />,
  },
  'web-design': {
    title: "LET'S DESIGN YOUR WEBSITE.",
    cta: 'START WEB CONSULTATION ↗',
    accent: '#60A5FA',
    icon: <Globe className="w-4 h-4" />,
  },
  'web-development': {
    title: "LET'S BUILD IT.",
    cta: 'START DEVELOPMENT CONSULTATION ↗',
    accent: '#10B981',
    icon: <Code2 className="w-4 h-4" />,
  },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Consultation: React.FC<ConsultationProps> = ({ initialServiceId }) => {
  const [selectedService, setSelectedService] = useState<ServiceKey>(
    (initialServiceId as ServiceKey) || 'logo-design'
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');
  const [stepError, setStepError] = useState('');

  // Honeypot spam protection
  const [honeypot, setHoneypot] = useState('');

  // Update selected service if prop changes
  useEffect(() => {
    if (initialServiceId && SERVICE_TITLES[initialServiceId as ServiceKey]) {
      setSelectedService(initialServiceId as ServiceKey);
      setCurrentStep(1);
      setIsSubmitted(false);
    }
  }, [initialServiceId]);

  // Session state preservation
  const [contact, setContact] = useState(() => {
    const saved = typeof window !== 'undefined' ? sessionStorage.getItem('avora_consultation_contact') : null;
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (_) {}
    }
    return {
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      brandOrCompany: '',
      meetingPreference: 'Video Call (30-min)',
      preferredDate: '',
      preferredTime: '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      referenceLinks: '',
      deadline: '4–6 Weeks',
      budget: '$3,000 – $6,000',
    };
  });

  // Save contact state to session storage
  useEffect(() => {
    try {
      sessionStorage.setItem('avora_consultation_contact', JSON.stringify(contact));
    } catch (_) {}
  }, [contact]);

  // 01 Logo Design Form State
  const [logoState, setLogoState] = useState({
    brandName: '',
    brandDescription: '',
    industry: '',
    targetAudience: '',
    logoTypes: ['Wordmark', 'Symbol / Icon'] as string[],
    brandPersonalities: ['Minimal', 'Luxury'] as string[],
    preferredColors: '',
    colorsToAvoid: '',
    typographyPreference: 'Clean Modern Serif',
    usageDestinations: ['Website', 'Social Media', 'Packaging'] as string[],
  });

  // 02 Branding Form State
  const [brandingState, setBrandingState] = useState({
    brandName: '',
    industry: '',
    brandStory: '',
    targetAudience: '',
    brandPersonality: ['Editorial Luxury', 'Modern'] as string[],
    currentIdentityStatus: 'Starting from scratch',
    whatNeedsToChange: '',
    logoStatus: 'Need new logo mark',
    typographyPreferences: '',
    colorPreferences: '',
    brandApplications: ['Full Style Manual', 'Packaging Mockups', 'Social Templates (Canva/Figma)'] as string[],
    packagingRequirements: '',
    socialMediaRequirements: '',
    websiteRequirements: '',
  });

  // 03 Graphic Design Form State
  const [graphicState, setGraphicState] = useState({
    designItemTypes: ['Poster', 'Campaign Key Visual', 'Social Media System'] as string[],
    purpose: '',
    targetAudience: '',
    dimensions: 'A1 Print & 9:16 Digital',
    contentCopy: '',
    visualStyle: 'High-fashion editorial, textured grain',
    hasBrandGuidelines: 'Yes, full guidelines exist',
    requiredFormats: ['Print PDF (CMYK)', 'Vector SVG', 'Web PNG / WebP'] as string[],
    numberOfDesigns: '3–5 pieces',
  });

  // 04 Apparel Design Form State
  const [apparelState, setApparelState] = useState({
    products: ['Heavyweight T-Shirt', 'Oversized Hoodie'] as string[],
    designPlacements: ['Front Chest', 'Oversized Back', 'Puff Ink / Texture'] as string[],
    brandName: '',
    targetAudience: '',
    apparelStyles: ['Streetwear', 'Minimal Luxury'] as string[],
    printMethod: 'Screen Print / Puff Ink',
    garmentColor: 'Faded Onyx & Bone White',
    garmentType: '300gsm Boxy Cotton Tee / 480gsm Terry Hoodie',
    quantity: '100–300 units',
  });

  // 05 UI/UX Design Form State
  const [uiuxState, setUiuxState] = useState({
    productTypes: ['Web App', 'Interactive Dashboard'] as string[],
    whatProductDoes: '',
    targetUsers: '',
    problemSolved: '',
    hasWireframes: 'Idea stage — need wireframes',
    hasDesignSystem: 'Need complete new Figma design system',
    mainFeatures: '',
    screenCount: '8–15 screens',
    needsAuthOrPayments: ['User Auth / Login', 'Stripe / Payments', 'Analytics Charts'] as string[],
    alsoNeedDevelopment: 'Yes, want full design + build',
  });

  // 06 Web Design Form State
  const [webDesignState, setWebDesignState] = useState({
    websiteTypes: ['Creative Studio / Portfolio', 'Business Flagship'] as string[],
    purposeGoal: '',
    targetAudience: '',
    pagesRequired: '4–6 pages',
    existingContentStatus: 'Have copy and rough images',
    visualDirections: ['Editorial Luxury', 'Futuristic 3D', 'Smooth Scroll Choreography'] as string[],
    functionalitiesNeeded: ['3D Canvas / WebGL', 'Custom Micro-Interactions', 'CMS Dynamic Blog/Work'] as string[],
    responsiveTargets: ['Desktop', 'Tablet', 'Mobile'],
  });

  // 07 Web Development Form State
  const [webDevState, setWebDevState] = useState({
    projectType: ['Custom Web Application', 'Interactive WebGL / 3D Experience'] as string[],
    currentStatus: 'Figma design ready to build',
    technologyPreferences: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion Physics'] as string[],
    backendDatabaseNeeds: 'Supabase / Headless CMS',
    requiredFeatures: '',
    needsUIUX: 'Already have completed UI/UX in Figma',
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
    setSubmissionError('');
    setStepError('');
  };

  const toggleArrayItem = (list: string[], item: string, setter: (val: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter((x) => x !== item));
    } else {
      setter([...list, item]);
    }
  };

  const totalSteps = 4;

  // Real-time client-side email validator
  const validateEmail = (val: string): boolean => {
    const trimmed = (val || '').trim();
    if (!trimmed) {
      setEmailError('Email address is required.');
      return false;
    }
    if (trimmed.includes(' ')) {
      setEmailError('Email cannot contain spaces.');
      return false;
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Real-time client-side phone validator
  const validatePhone = (val: string): boolean => {
    const digitsOnly = (val || '').replace(/\D/g, '');
    if (!digitsOnly) {
      setPhoneError('Phone number is required.');
      return false;
    }
    if (digitsOnly.length < 6 || digitsOnly.length > 15) {
      setPhoneError('Please enter a valid phone number (at least 6-10 digits).');
      return false;
    }
    setPhoneError('');
    return true;
  };

  // Real-time client-side name validator
  const validateName = (val: string): boolean => {
    const trimmed = (val || '').trim();
    if (!trimmed) {
      setNameError('Full name is required.');
      return false;
    }
    if (trimmed.length < 2) {
      setNameError('Please enter your full name (at least 2 characters).');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleNextStep = () => {
    setStepError('');
    if (currentStep === 1) {
      if (selectedService === 'logo-design' && logoState.logoTypes.length === 0) {
        setStepError('Please select at least one preferred logo type.');
        return;
      }
      if (selectedService === 'graphic-design' && graphicState.designItemTypes.length === 0) {
        setStepError('Please select at least one design item.');
        return;
      }
      if (selectedService === 'apparel' && apparelState.products.length === 0) {
        setStepError('Please select at least one garment product.');
        return;
      }
      if (selectedService === 'ui-ux' && uiuxState.productTypes.length === 0) {
        setStepError('Please select at least one product type.');
        return;
      }
      if (selectedService === 'web-design' && webDesignState.websiteTypes.length === 0) {
        setStepError('Please select at least one website type.');
        return;
      }
      if (selectedService === 'web-development' && webDevState.projectType.length === 0) {
        setStepError('Please select at least one development project type.');
        return;
      }
    }
    setCurrentStep((s) => Math.min(totalSteps, s + 1));
  };

  // Get service-specific question data bundle
  const getServiceDataBundle = () => {
    switch (selectedService) {
      case 'logo-design':
        return logoState;
      case 'branding':
        return brandingState;
      case 'graphic-design':
        return graphicState;
      case 'apparel':
        return apparelState;
      case 'ui-ux':
        return uiuxState;
      case 'web-design':
        return webDesignState;
      case 'web-development':
        return webDevState;
      default:
        return {};
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError('');

    const isNameValid = validateName(contact.name);
    const isEmailValid = validateEmail(contact.email);
    const isPhoneValid = validatePhone(contact.phone);

    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      setStepError('Please fill in all required contact fields accurately.');
      return;
    }

    setIsSubmitting(true);

    const fullPhone = `${contact.countryCode} ${contact.phone.trim()}`;
    const activeServiceInfo = SERVICE_TITLES[selectedService];

    const payload = {
      _hp: honeypot, // Honeypot field
      name: contact.name.trim(),
      email: contact.email.trim(),
      phone: fullPhone,
      company: contact.brandOrCompany.trim(),
      serviceName: activeServiceInfo.title.replace("LET'S ", '').replace('.', ''),
      serviceKey: selectedService,
      serviceData: getServiceDataBundle(),
      meetingPreference: contact.meetingPreference,
      preferredDate: contact.preferredDate,
      preferredTime: contact.preferredTime,
      timezone: contact.timezone,
      referenceLinks: contact.referenceLinks,
      budget: contact.budget,
      deadline: contact.deadline,
    };

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server rejected consultation request');
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#A855F7', '#60A5FA', '#38BDF8', '#F472B6', '#10B981'],
      });
    } catch (err) {
      console.error('[Consultation Submission Error]:', err);
      setSubmissionError('Something went wrong while sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentServiceMeta = SERVICE_TITLES[selectedService];

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
                type="button"
                onClick={() => handleSelectServiceTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-avora-charcoal text-white shadow-md scale-[1.02]'
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
          {/* Subtle Service-Specific Background Visual Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20 -mr-20 -mt-20"
               style={{ backgroundColor: currentServiceMeta.accent }} />

          {!isSubmitted ? (
            <div>
              {/* Form Title & Progress Indicator */}
              <div className="mb-8 pb-6 border-b border-avora-border-light relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-avora-muted mb-2">
                  <span className="uppercase tracking-wider font-semibold text-avora-charcoal flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentServiceMeta.accent }} />
                    STEP 0{currentStep} OF 0{totalSteps} — {
                      currentStep === 1 ? 'Scope & Discipline Direction' :
                      currentStep === 2 ? 'Specific Criteria & Specifications' :
                      currentStep === 3 ? 'Logistics & Meeting Preference' : 'Customer Coordinates'
                    }
                  </span>
                  <span>{Math.round((currentStep / totalSteps) * 100)}% COMPLETE</span>
                </div>
                <div className="w-full h-1 bg-avora-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: currentServiceMeta.accent }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot Spam Protection (Hidden from humans) */}
                <input
                  type="text"
                  name="_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none', position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                  aria-hidden="true"
                />

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
                            rows={3}
                            placeholder="What does your brand stand for? What feelings should the logo evoke in a viewer?"
                            value={logoState.brandDescription}
                            onChange={(e) => setLogoState({ ...logoState, brandDescription: e.target.value })}
                            className="w-full p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                          />
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
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Dimensions / Formats</label>
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
                              rows={3}
                              placeholder="Paste headline, body text, required dates or logos to include..."
                              value={graphicState.contentCopy}
                              onChange={(e) => setGraphicState({ ...graphicState, contentCopy: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
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
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Garment Silhouette / Specs</label>
                              <input
                                type="text"
                                placeholder="e.g. Faded black, 300gsm boxy fit"
                                value={apparelState.garmentColor}
                                onChange={(e) => setApparelState({ ...apparelState, garmentColor: e.target.value })}
                                className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Estimated Production Volume</label>
                              <input
                                type="text"
                                placeholder="e.g. 100 pcs, 300 pcs, or design-only"
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
                            placeholder="Link to your reference images, Dropbox or Pinterest..."
                            value={contact.referenceLinks}
                            onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                            className="w-full p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                          />
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
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">What problem does this product solve?</label>
                            <textarea
                              rows={3}
                              placeholder="Describe what the product does and who will use it..."
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
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Core Functionality Required</label>
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
                              placeholder="e.g. Elevate brand prestige, convert visitors, launch new venture"
                              value={webDesignState.purposeGoal}
                              onChange={(e) => setWebDesignState({ ...webDesignState, purposeGoal: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <label className="text-xs font-mono uppercase text-avora-muted block">Visual Direction & Tone</label>
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
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Inspiration / Benchmark Websites</label>
                            <input
                              type="text"
                              placeholder="URLs of websites you find inspiring..."
                              value={contact.referenceLinks}
                              onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
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
                              placeholder="Key APIs, third-party integrations, 120Hz performance targets..."
                              value={webDevState.requiredFeatures}
                              onChange={(e) => setWebDevState({ ...webDevState, requiredFeatures: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Figma / GitHub Repository Link</label>
                            <input
                              type="text"
                              placeholder="https://figma.com/... or https://github.com/..."
                              value={contact.referenceLinks}
                              onChange={(e) => setContact({ ...contact, referenceLinks: e.target.value })}
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* STEP 3: LOGISTICS & MEETING PREFERENCES */}
                  {/* ======================================================== */}
                  {currentStep === 3 && (
                    <div className="pt-6 border-t border-avora-border-light space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-avora-muted">Meeting Preference & Logistics</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {['Video Call (30-min)', 'Audio Call', 'Chat / Message', 'Email Roadmap', 'No Meeting Yet'].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setContact({ ...contact, meetingPreference: mode })}
                            className={`p-2.5 rounded-xl text-center text-xs font-mono border transition-all ${
                              contact.meetingPreference === mode
                                ? 'bg-avora-charcoal text-white font-semibold'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Target Deadline</label>
                          <input
                            type="text"
                            placeholder="e.g. 3–4 Weeks"
                            value={contact.deadline}
                            onChange={(e) => setContact({ ...contact, deadline: e.target.value })}
                            className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1">Preferred Date (Optional)</label>
                          <input
                            type="date"
                            value={contact.preferredDate}
                            onChange={(e) => setContact({ ...contact, preferredDate: e.target.value })}
                            className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono"
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
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* STEP 4: CUSTOMER COORDINATES (NAME, EMAIL, PHONE, COMPANY) */}
                  {/* ======================================================== */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step-contact"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <span className="text-xs font-mono text-purple-600 font-semibold tracking-wider uppercase">
                          FINAL STEP // CUSTOMER COORDINATES
                        </span>
                        <h3 className="font-serif text-3xl font-bold text-avora-charcoal mt-1">
                          WHERE SHOULD I RESPOND?
                        </h3>
                        <p className="text-xs font-mono text-avora-muted mt-1">
                          Your coordinates are kept strictly confidential and used solely to coordinate your consultation.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {/* 1. FULL NAME (Required) */}
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5" />
                              <span>Full Name *</span>
                            </span>
                            <span className="text-[10px] text-zinc-400">Required</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Julian Vance"
                            value={contact.name}
                            onChange={(e) => {
                              setContact({ ...contact, name: e.target.value });
                              validateName(e.target.value);
                            }}
                            className={`w-full p-3.5 rounded-xl border bg-[#FAF9F6] text-sm font-sans transition-all focus:outline-none focus:ring-2 ${
                              nameError
                                ? 'border-rose-300 focus:ring-rose-400'
                                : 'border-avora-border focus:ring-purple-500'
                            }`}
                          />
                          {nameError && (
                            <p className="text-[11px] font-mono text-rose-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{nameError}</span>
                            </p>
                          )}
                        </div>

                        {/* 2. EMAIL ADDRESS (Required, type="email", strict client validation) */}
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5" />
                              <span>Email Address *</span>
                            </span>
                            <span className="text-[10px] text-zinc-400">Required</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={contact.email}
                            onChange={(e) => {
                              setContact({ ...contact, email: e.target.value });
                              validateEmail(e.target.value);
                            }}
                            className={`w-full p-3.5 rounded-xl border bg-[#FAF9F6] text-sm font-sans transition-all focus:outline-none focus:ring-2 ${
                              emailError
                                ? 'border-rose-300 focus:ring-rose-400'
                                : 'border-avora-border focus:ring-purple-500'
                            }`}
                          />
                          {emailError && (
                            <p className="text-[11px] font-mono text-rose-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{emailError}</span>
                            </p>
                          )}
                        </div>

                        {/* 3. PHONE NUMBER (Required, country code selector + input) */}
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5" />
                              <span>Phone Number *</span>
                            </span>
                            <span className="text-[10px] text-zinc-400">Required</span>
                          </label>
                          <div className="flex gap-2">
                            {/* Country code selector */}
                            <select
                              value={contact.countryCode}
                              onChange={(e) => setContact({ ...contact, countryCode: e.target.value })}
                              className="w-32 p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-purple-500"
                              title="Select Country Calling Code"
                            >
                              {COUNTRY_CODES.map((c) => (
                                <option key={c.code + c.name} value={c.code}>
                                  {c.flag} {c.code}
                                </option>
                              ))}
                            </select>

                            {/* Phone number input */}
                            <input
                              type="tel"
                              required
                              placeholder="98765 43210"
                              value={contact.phone}
                              onChange={(e) => {
                                setContact({ ...contact, phone: e.target.value });
                                validatePhone(e.target.value);
                              }}
                              className={`flex-1 p-3.5 rounded-xl border bg-[#FAF9F6] text-sm font-mono transition-all focus:outline-none focus:ring-2 ${
                                phoneError
                                  ? 'border-rose-300 focus:ring-rose-400'
                                  : 'border-avora-border focus:ring-purple-500'
                              }`}
                            />
                          </div>
                          {phoneError && (
                            <p className="text-[11px] font-mono text-rose-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{phoneError}</span>
                            </p>
                          )}
                        </div>

                        {/* 4. COMPANY / BRAND (Optional) */}
                        <div>
                          <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <Building className="w-3.5 h-3.5" />
                              <span>Company / Brand</span>
                            </span>
                            <span className="text-[10px] text-zinc-400">Optional</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Vance Atelier Ltd."
                            value={contact.brandOrCompany}
                            onChange={(e) => setContact({ ...contact, brandOrCompany: e.target.value })}
                            className="w-full p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>

                      {/* Summary Review Notice (Requirement 08: No visible raw email text) */}
                      <div className="p-4 rounded-2xl bg-avora-ivory border border-avora-border text-xs font-mono text-avora-muted space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span>SELECTED DISCIPLINE:</span>
                          <span className="font-bold text-avora-charcoal uppercase">
                            {selectedService.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>ATELIER DISPATCH:</span>
                          <span className="text-purple-600 font-semibold">Direct Studio Transmission</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>ESTIMATED RESPONSE:</span>
                          <span className="text-emerald-600 font-semibold">Within 24–48 Hours</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Validation / Step Error Banner */}
                {stepError && (
                  <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{stepError}</span>
                  </div>
                )}

                {/* Submission Failure Error Banner (Requirement 12) */}
                {submissionError && (
                  <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                      <span>{submissionError}</span>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-3.5 py-1.5 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 transition-colors"
                      >
                        TRY AGAIN ↗
                      </button>
                      <a
                        href={`mailto:kshaurya0708@gmail.com?subject=New AVORA Consultation — ${encodeURIComponent(currentServiceMeta.title)}&body=Name: ${encodeURIComponent(contact.name)}%0AEmail: ${encodeURIComponent(contact.email)}%0APhone: ${encodeURIComponent(contact.countryCode + ' ' + contact.phone)}%0ACompany: ${encodeURIComponent(contact.brandOrCompany)}`}
                        className="text-rose-700 underline hover:text-rose-900"
                      >
                        Send via Email Client ↗
                      </a>
                    </div>
                  </div>
                )}

                {/* Form Navigation and Submission Buttons */}
                <div className="mt-8 pt-6 border-t border-avora-border-light flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setStepError('');
                        setCurrentStep((s) => s - 1);
                      }}
                      className="px-4 py-2.5 rounded-xl border border-avora-border bg-white text-xs font-sans font-medium text-avora-charcoal hover:bg-avora-ivory flex items-center gap-1.5 transition-colors"
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
                      className="px-6 py-3 rounded-xl bg-avora-charcoal text-white text-xs font-sans font-semibold tracking-wide hover:bg-black flex items-center gap-2 shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3.5 rounded-xl text-white text-xs font-sans font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all ${
                        isSubmitting
                          ? 'bg-zinc-500 cursor-not-allowed opacity-80'
                          : 'bg-avora-charcoal hover:bg-black hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Transmitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{currentServiceMeta.cta}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Success Confirmation (Requirement 11) */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-avora-charcoal">
                CONSULTATION REQUESTED.
              </h3>
              <p className="text-sm font-sans text-avora-charcoal/90 max-w-md mx-auto leading-relaxed">
                Thank you. Your consultation request has been received.
              </p>
              <p className="text-xs font-mono text-avora-muted max-w-md mx-auto leading-relaxed">
                We'll review your details and get back to you using the contact information you provided.
              </p>
              <div className="pt-6 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="px-5 py-2.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono text-avora-charcoal hover:bg-white transition-colors"
                >
                  Configure Another Consultation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
