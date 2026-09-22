import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Video,
  Phone,
  MessageSquare,
  Mail,
  Send,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Clock,
  Globe,
  Palette,
  Layout,
  Layers,
  Shirt,
  Lightbulb,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Consultation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string>('Creative Direction');
  const [thinkingAbout, setThinkingAbout] = useState<string[]>(['Creative Direction']);
  const [ideaDescription, setIdeaDescription] = useState('');
  const [needHelpWith, setNeedHelpWith] = useState<string[]>([]);
  const [visualDirection, setVisualDirection] = useState('I have an idea but need guidance');
  const [meetingType, setMeetingType] = useState('Video Call');
  const [meetingDetails, setMeetingDetails] = useState({
    preferredDate: '',
    preferredTime: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    altDateTime: '',
  });
  const [contact, setContact] = useState({
    name: '',
    email: '',
    brand: '',
    socialOrUrl: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const consultationTypes = [
    {
      id: 'creative-direction',
      name: 'Creative Direction',
      icon: <Compass className="w-5 h-5 text-avora-lavender" />,
      desc: 'Help deciding what should be created, visual pacing, and creative strategy.',
      tag: 'Strategic Vision',
    },
    {
      id: 'brand-consultation',
      name: 'Brand Consultation',
      icon: <Palette className="w-5 h-5 text-avora-pink" />,
      desc: 'Logo architecture, visual identity, typography systems, and brand direction.',
      tag: 'Identity & Voice',
    },
    {
      id: 'website-consultation',
      name: 'Website Consultation',
      icon: <Globe className="w-5 h-5 text-avora-blue" />,
      desc: 'Website structure, editorial pacing, UI/UX, tech stack, and interactive 3D.',
      tag: 'Digital Presence',
    },
    {
      id: 'uiux-consultation',
      name: 'UI/UX Consultation',
      icon: <Layout className="w-5 h-5 text-avora-cyan" />,
      desc: 'Apps, digital products, wireframes, user flows, and design systems.',
      tag: 'Product Design',
    },
    {
      id: 'apparel-consultation',
      name: 'Apparel / Graphic Consultation',
      icon: <Shirt className="w-5 h-5 text-zinc-700" />,
      desc: 'T-shirts, hoodies, print placements, streetwear capsules, and posters.',
      tag: 'Tactile & Merch',
    },
    {
      id: 'general-consultation',
      name: 'General Consultation',
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      desc: 'For unconventional ideas, exploratory collaborations, or hybrid initiatives.',
      tag: 'Exploratory',
    },
  ];

  const meetingModes = [
    {
      id: 'Video Call',
      title: 'Video Call',
      duration: '30-minute online session',
      icon: <Video className="w-4 h-4" />,
      detail: 'Face-to-face screen sharing and visual walkthrough.',
    },
    {
      id: 'Audio Call',
      title: 'Audio Call',
      duration: '30-minute audio consultation',
      icon: <Phone className="w-4 h-4" />,
      detail: 'Focused conversation on goals and requirements.',
    },
    {
      id: 'Chat / Message',
      title: 'Chat / Message',
      duration: 'Asynchronous discussion',
      icon: <MessageSquare className="w-4 h-4" />,
      detail: 'Flexible exchange via WhatsApp, Telegram, or email.',
    },
    {
      id: 'Email Consultation',
      title: 'Email Consultation',
      duration: 'Written brief & roadmap',
      icon: <Mail className="w-4 h-4" />,
      detail: 'Detailed written feedback and structured proposals.',
    },
    {
      id: 'No Meeting Yet',
      title: 'No Meeting Yet',
      duration: 'Submit idea first',
      icon: <Compass className="w-4 h-4" />,
      detail: 'Review the concept before scheduling a call.',
    },
  ];

  const thinkingOptions = [
    'Branding',
    'Graphic Design',
    'Apparel',
    'UI/UX',
    'Website',
    'Development',
    'Digital Product',
    'Not Sure Yet',
    'Other',
  ];

  const helpTopics = [
    'Understanding what to build',
    'Creative direction',
    'Visual style',
    'Branding',
    'UI/UX',
    'Website structure',
    'Development',
    'Technical feasibility',
    'Project planning',
    'Budget estimation',
    'Not sure yet',
  ];

  const visualDirectionOptions = [
    'Yes, I know exactly what I want',
    'I have some references & moodboards',
    'I have an idea but need guidance',
    'No idea yet — starting from zero',
  ];

  const toggleThinking = (item: string) => {
    setThinkingAbout((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleHelpTopic = (item: string) => {
    setNeedHelpWith((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSelectType = (typeName: string) => {
    setSelectedType(typeName);
    if (!thinkingAbout.includes(typeName)) {
      setThinkingAbout([typeName]);
    }
    const formElement = document.getElementById('consultation-form-card');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    setErrorMsg('');
    if (currentStep === 1 && thinkingAbout.length === 0) {
      setErrorMsg('Please select at least one area you are thinking about.');
      return;
    }
    if (currentStep === 2 && ideaDescription.trim().length < 8) {
      setErrorMsg('Please describe what you want to create (a few words or sentences).');
      return;
    }
    if (currentStep === 3 && needHelpWith.length === 0) {
      setErrorMsg('Please select what you need help with.');
      return;
    }
    if (currentStep === 6 && (meetingType === 'Video Call' || meetingType === 'Audio Call')) {
      if (!meetingDetails.preferredDate) {
        setErrorMsg('Please choose a preferred date for the call.');
        return;
      }
    }
    if (currentStep === 7) {
      if (!contact.name || !contact.email) {
        setErrorMsg('Please provide your name and a valid email address.');
        return;
      }
      if (!contact.email.includes('@')) {
        setErrorMsg('Please enter a valid email address.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      setErrorMsg('Please enter your name and email.');
      return;
    }
    setIsSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#A855F7', '#60A5FA', '#38BDF8', '#F472B6'],
    });
  };

  const isLiveMeeting = meetingType === 'Video Call' || meetingType === 'Audio Call';

  return (
    <section id="consultation" className="relative w-full py-24 sm:py-36 px-4 sm:px-8 bg-[#FAF9F6] border-b border-avora-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-avora-border text-[11px] font-mono uppercase tracking-widest text-avora-muted shadow-xs">
            <Compass className="w-3.5 h-3.5 text-avora-lavender animate-spin-slow" />
            <span>Exploratory & Advisory</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-avora-charcoal leading-[0.95]">
            HAVE AN IDEA?<br />
            <span className="iridescent-text">LET'S FIGURE IT OUT.</span>
          </h2>

          <p className="text-base sm:text-lg font-sans text-avora-charcoal/80 leading-relaxed pt-2">
            Not sure what you need yet? That's completely fine. Tell me about your idea and we'll figure out the right creative direction together.
          </p>

          <p className="text-xs font-mono text-avora-muted">
            Designed for founders, creators, and brands who need clarity before formal project scoping.
          </p>
        </div>

        {/* 6 Consultation Type Cards */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-avora-border text-xs font-mono text-avora-muted mb-6">
            <span className="uppercase tracking-wider">Choose a Consultation Focus:</span>
            <span>06 Advisory Disciplines</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {consultationTypes.map((type) => {
              const isSelected = selectedType === type.name;
              return (
                <div
                  key={type.id}
                  onClick={() => handleSelectType(type.name)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white border-avora-charcoal shadow-md translate-y-[-2px]'
                      : 'bg-white/60 border-avora-border hover:bg-white hover:border-avora-charcoal/40 hover:shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-avora-ivory border border-avora-border-light group-hover:scale-105 transition-transform">
                        {type.icon}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-avora-muted bg-avora-ivory px-2 py-0.5 rounded-md border border-avora-border-light">
                        {type.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-avora-charcoal group-hover:text-black">
                      {type.name}
                    </h3>

                    <p className="text-xs font-sans text-avora-muted leading-relaxed">
                      {type.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-avora-border-light flex items-center justify-between text-xs font-mono">
                    <span className="text-avora-muted group-hover:text-avora-charcoal transition-colors">
                      {isSelected ? '● Selected for Form' : 'Select Type'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-avora-subtle group-hover:text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8-Step Interactive Consultation Request Form */}
        <div id="consultation-form-card" className="max-w-4xl mx-auto bg-white rounded-3xl border border-avora-border shadow-xl p-6 sm:p-12 relative overflow-hidden">
          {/* Header & Progress Indicator */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-avora-muted mb-2">
                <span className="uppercase tracking-wider font-semibold text-avora-charcoal">
                  STEP 0{currentStep} OF 08 — {
                    currentStep === 1 ? 'Focus Area' :
                    currentStep === 2 ? 'Concept Vision' :
                    currentStep === 3 ? 'Specific Needs' :
                    currentStep === 4 ? 'Visual Direction' :
                    currentStep === 5 ? 'Connection Mode' :
                    currentStep === 6 ? 'Availability' :
                    currentStep === 7 ? 'Your Coordinates' : 'Review & Confirm'
                  }
                </span>
                <span>{Math.round((currentStep / 8) * 100)}% COMPLETE</span>
              </div>
              <div className="w-full h-1 bg-avora-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-avora-charcoal rounded-full"
                  animate={{ width: `${(currentStep / 8) * 100}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* STEP 1: WHAT ARE YOU THINKING ABOUT? */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      What are you thinking about?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">
                      Select one or multiple areas you would like to explore during consultation:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {thinkingOptions.map((opt) => {
                        const selected = thinkingAbout.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleThinking(opt)}
                            className={`p-3.5 rounded-xl text-left font-sans text-xs sm:text-sm font-medium border transition-all flex items-center justify-between ${
                              selected
                                ? 'bg-avora-charcoal text-white border-avora-charcoal shadow-sm'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            <span>{opt}</span>
                            {selected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: WHAT DO YOU WANT TO CREATE? */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      What do you want to create?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">
                      Share your preliminary idea, the problem you are solving, or what you envision:
                    </p>
                    <textarea
                      rows={5}
                      value={ideaDescription}
                      onChange={(e) => setIdeaDescription(e.target.value)}
                      placeholder="e.g., We are developing a digital luxury fragrance brand and need help deciding whether we need a 3D interactive web showcase, a custom typography system, or physical merchandise first..."
                      className="w-full p-4 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal font-sans"
                    />
                  </div>
                )}

                {/* STEP 3: WHAT DO YOU NEED HELP WITH? */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      What do you need help with?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">
                      Select all challenges and strategic questions you want to discuss:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {helpTopics.map((topic) => {
                        const selected = needHelpWith.includes(topic);
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleHelpTopic(topic)}
                            className={`p-3 rounded-xl text-left font-sans text-xs sm:text-sm font-medium border transition-all flex items-center justify-between ${
                              selected
                                ? 'bg-avora-charcoal text-white border-avora-charcoal shadow-sm'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            <span>{topic}</span>
                            {selected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: DO YOU ALREADY HAVE A VISUAL DIRECTION? */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      Do you already have a visual direction?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">
                      This helps calibrate how much foundational art direction is needed:
                    </p>
                    <div className="space-y-3 pt-2">
                      {visualDirectionOptions.map((opt) => {
                        const selected = visualDirection === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setVisualDirection(opt)}
                            className={`w-full p-4 rounded-xl text-left font-sans text-sm font-medium border transition-all flex items-center justify-between ${
                              selected
                                ? 'bg-avora-charcoal text-white border-avora-charcoal shadow-sm'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            <span>{opt}</span>
                            {selected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 5: HOW WOULD YOU LIKE TO CONNECT? */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      How would you like to connect?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">
                      Choose your preferred communication format:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {meetingModes.map((mode) => {
                        const selected = meetingType === mode.id;
                        return (
                          <button
                            key={mode.id}
                            type="button"
                            onClick={() => setMeetingType(mode.id)}
                            className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between space-y-2 ${
                              selected
                                ? 'bg-avora-charcoal text-white border-avora-charcoal shadow-sm'
                                : 'bg-[#FAF9F6] text-avora-charcoal border-avora-border hover:bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 font-bold text-sm">
                                {mode.icon}
                                <span>{mode.title}</span>
                              </div>
                              {selected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                            </div>
                            <p className="text-[11px] font-mono opacity-80">{mode.duration}</p>
                            <p className="text-xs font-sans opacity-70">{mode.detail}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 6: TIMING & SCHEDULING (Honest, no fake booking) */}
                {currentStep === 6 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      {isLiveMeeting ? 'Preferred Consultation Timing' : 'Consultation Timing Note'}
                    </h3>

                    {isLiveMeeting ? (
                      <>
                        <p className="text-xs font-mono text-avora-muted">
                          Provide your ideal date and time window. We will coordinate to confirm:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              required
                              value={meetingDetails.preferredDate}
                              onChange={(e) =>
                                setMeetingDetails({ ...meetingDetails, preferredDate: e.target.value })
                              }
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                              Preferred Time Window
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., 3:00 PM – 5:00 PM"
                              value={meetingDetails.preferredTime}
                              onChange={(e) =>
                                setMeetingDetails({ ...meetingDetails, preferredTime: e.target.value })
                              }
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                              Your Timezone
                            </label>
                            <input
                              type="text"
                              value={meetingDetails.timezone}
                              onChange={(e) =>
                                setMeetingDetails({ ...meetingDetails, timezone: e.target.value })
                              }
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                              Alternative Date / Time (Optional)
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., Friday morning"
                              value={meetingDetails.altDateTime}
                              onChange={(e) =>
                                setMeetingDetails({ ...meetingDetails, altDateTime: e.target.value })
                              }
                              className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                            />
                          </div>
                        </div>

                        {/* Explicit Honest Notice */}
                        <div className="p-3.5 rounded-xl bg-avora-ivory border border-avora-border text-xs font-mono text-avora-charcoal flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-avora-lavender shrink-0" />
                          <span>
                            <strong>Notice:</strong> Your preferred meeting time will be confirmed separately via calendar invitation and email.
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="py-6 space-y-3">
                        <div className="p-4 rounded-2xl bg-avora-ivory border border-avora-border space-y-2">
                          <p className="font-serif text-lg font-bold text-avora-charcoal">
                            Connection Mode: {meetingType}
                          </p>
                          <p className="text-xs font-sans text-avora-muted leading-relaxed">
                            Since you selected <strong>{meetingType}</strong>, no live call needs to be scheduled at this moment. You will receive a direct written response or message within 24–48 hours.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 7: YOUR COORDINATES */}
                {currentStep === 7 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      Where should I follow up?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">
                      Your direct contact information for consultation coordination:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Julian Thorne"
                          value={contact.name}
                          onChange={(e) => setContact({ ...contact, name: e.target.value })}
                          className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="julian@atelier.com"
                          value={contact.email}
                          onChange={(e) => setContact({ ...contact, email: e.target.value })}
                          className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                          Company / Brand Name (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Thorne Atelier Ltd."
                          value={contact.brand}
                          onChange={(e) => setContact({ ...contact, brand: e.target.value })}
                          className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1">
                          Website or Instagram Handle (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="@thorne.atelier or https://..."
                          value={contact.socialOrUrl}
                          onChange={(e) => setContact({ ...contact, socialOrUrl: e.target.value })}
                          className="w-full p-3 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-avora-charcoal"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 8: REVIEW & SUBMIT */}
                {currentStep === 8 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-avora-charcoal">
                      Review Your Consultation Request
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">
                      Check your details below before transmitting:
                    </p>

                    <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-avora-border space-y-3 text-xs font-mono">
                      <div className="flex justify-between pb-2 border-b border-avora-border-light">
                        <span className="text-avora-muted">NAME & EMAIL:</span>
                        <span className="font-bold text-avora-charcoal">{contact.name} ({contact.email})</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-avora-border-light">
                        <span className="text-avora-muted">FOCUS AREAS:</span>
                        <span className="text-avora-charcoal">{thinkingAbout.join(', ')}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-avora-border-light">
                        <span className="text-avora-muted">CONNECTION MODE:</span>
                        <span className="text-avora-charcoal font-semibold">{meetingType}</span>
                      </div>
                      {isLiveMeeting && meetingDetails.preferredDate && (
                        <div className="flex justify-between pb-2 border-b border-avora-border-light">
                          <span className="text-avora-muted">PREFERRED TIMING:</span>
                          <span className="text-avora-charcoal">
                            {meetingDetails.preferredDate} ({meetingDetails.preferredTime || 'Flexible'}) — {meetingDetails.timezone}
                          </span>
                        </div>
                      )}
                      <div>
                        <span className="text-avora-muted block mb-1">CONCEPT BRIEF:</span>
                        <p className="font-sans text-xs text-avora-charcoal/90 italic bg-white p-3 rounded-lg border border-avora-border-light">
                          "{ideaDescription}"
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-avora-ivory border border-avora-border text-xs font-mono text-avora-muted">
                      <span>✓ Free 30-minute exploratory session • No commitment • Direct founder dialogue</span>
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {errorMsg && (
                  <p className="text-xs font-mono text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                    {errorMsg}
                  </p>
                )}

                {/* Navigation Buttons */}
                <div className="pt-6 border-t border-avora-border-light flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="px-4 py-2.5 rounded-xl border border-avora-border bg-white text-xs font-sans font-medium text-avora-charcoal hover:bg-avora-ivory flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 8 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl bg-avora-charcoal text-white text-xs font-sans font-semibold tracking-wide hover:bg-black flex items-center gap-2 shadow"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="px-8 py-3.5 rounded-xl bg-avora-charcoal text-white text-xs font-sans font-bold tracking-wider uppercase hover:bg-black flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Consultation ↗</span>
                    </button>
                  )}
                </div>
              </motion.div>
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
                  CONSULTATION REQUEST RECEIVED.
                </h3>
                <p className="text-sm font-sans text-avora-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-avora-charcoal">{contact.name}</strong>. Your concept has been submitted to AVORA. I will review your idea and email you within 24–48 hours to confirm the details.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setIdeaDescription('');
                      setNeedHelpWith([]);
                    }}
                    className="text-xs font-mono text-avora-muted underline hover:text-black"
                  >
                    Submit another consultation inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
