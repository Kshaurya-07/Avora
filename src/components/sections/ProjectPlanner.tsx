import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Send,
  User,
  Mail,
  Phone,
  Building,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectPlannerProps {
  initialService?: string;
}

const COUNTRY_CODES = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+1-CA', name: 'Canada', flag: '🇨🇦' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪' },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ProjectPlanner: React.FC<ProjectPlannerProps> = ({ initialService }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [services, setServices] = useState<string[]>(initialService ? [initialService] : []);
  const [budget, setBudget] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [contact, setContact] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    brand: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const availableServices = [
    'Logo Design',
    'Branding & Identity',
    'Graphic Design',
    'Apparel & Streetwear',
    'UI/UX Design',
    'Website Design',
    'Full Frontend Development',
    'Interactive 3D Experience',
  ];

  const budgetTiers = [
    '₹5K – ₹10K',
    '₹10K – ₹25K',
    '₹25K – ₹50K',
    '₹50K+',
  ];

  const timelineOptions = [
    'ASAP (Rush priority)',
    '1 – 2 Weeks',
    '2 – 4 Weeks',
    'Flexible schedule',
  ];

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
    );
  };

  const handleNext = () => {
    setErrorMsg('');
    if (currentStep === 1 && services.length === 0) {
      setErrorMsg('Please select at least one creative discipline.');
      return;
    }
    if (currentStep === 2 && !budget) {
      setErrorMsg('Please select an estimated budget range.');
      return;
    }
    if (currentStep === 3 && !timeline) {
      setErrorMsg('Please select your preferred project timeline.');
      return;
    }
    if (currentStep === 4 && description.trim().length < 10) {
      setErrorMsg('Please provide a brief sentence about your project vision.');
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!contact.name || contact.name.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!contact.email || !EMAIL_REGEX.test(contact.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!contact.phone || contact.phone.replace(/\D/g, '').length < 7) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const fullPhone = `${contact.countryCode} ${contact.phone.trim()}`;
      const payload = {
        name: contact.name.trim(),
        email: contact.email.trim(),
        phone: fullPhone,
        company: contact.brand.trim() || 'N/A',
        serviceName: `Project Onboarding — ${services.join(', ')}`,
        serviceKey: 'project-planner',
        serviceData: {
          disciplinesNeeded: services,
          selectedBudget: budget,
          preferredTimeline: timeline,
          projectVision: description.trim(),
        },
        budget,
        deadline: timeline,
        references: 'Direct onboarding questionnaire',
        meetingPreference: 'Email / Direct Call',
        preferredDate: 'Flexible',
        preferredTime: 'Flexible',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        _hp: honeypot,
      };

      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok && !data.success) {
        throw new Error(data.error || 'Server rejected submission');
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#10B981', '#A855F7', '#60A5FA', '#38BDF8'],
      });
    } catch (err) {
      console.error('Project planner submission error:', err);
      setErrorMsg('Something went wrong while sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isNameValid = contact.name.trim().length >= 2;
  const isEmailValid = Boolean(contact.email && EMAIL_REGEX.test(contact.email.trim()));
  const isPhoneValid = Boolean(contact.phone && contact.phone.replace(/\D/g, '').length >= 7);

  return (
    <section id="planner" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#F8F7F3] border-b border-avora-border">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-avora-muted inline-block">
            Project Onboarding
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-avora-charcoal">
            START A PROJECT.
          </h2>
          <p className="text-sm sm:text-base font-sans text-avora-muted max-w-xl mx-auto">
            Answer a few quick questions to align on scope, deliverables, timeline and vision.
          </p>
        </div>

        {/* Multi-step Card Container */}
        <div className="bg-white rounded-3xl border border-avora-border shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {/* Top Progress Bar */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs font-mono text-avora-muted mb-2">
                <span>STEP 0{currentStep} OF 05</span>
                <span>{Math.round((currentStep / 5) * 100)}% COMPLETE</span>
              </div>
              <div className="w-full h-1 bg-avora-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-500 rounded-full"
                  animate={{ width: `${(currentStep / 5) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          )}

          {/* Form Step Stages */}
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
                {/* STEP 1: SERVICES */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      What do you need?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Select all disciplines that apply to your initiative:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {availableServices.map((s) => {
                        const isSelected = services.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-emerald-50/70 border-emerald-400 text-avora-charcoal shadow-xs ring-1 ring-emerald-200'
                                : 'bg-[#FAF9F6] border-avora-border hover:bg-white text-avora-muted hover:text-black'
                            }`}
                          >
                            <span className="text-sm font-sans font-medium">{s}</span>
                            {isSelected ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            ) : (
                              <span className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: BUDGET */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      What is your estimated investment?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">This helps calibrate scope, fidelity and tech architecture:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {budgetTiers.map((tier) => {
                        const isSelected = budget === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setBudget(tier)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-emerald-50/70 border-emerald-400 text-avora-charcoal shadow-xs ring-1 ring-emerald-200'
                                : 'bg-[#FAF9F6] border-avora-border hover:bg-white text-avora-muted hover:text-black'
                            }`}
                          >
                            <span className="text-sm font-sans font-medium">{tier}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: TIMELINE */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      When do you need this completed?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Select an ideal target launch window:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {timelineOptions.map((opt) => {
                        const isSelected = timeline === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setTimeline(opt)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-emerald-50/70 border-emerald-400 text-avora-charcoal shadow-xs ring-1 ring-emerald-200'
                                : 'bg-[#FAF9F6] border-avora-border hover:bg-white text-avora-muted hover:text-black'
                            }`}
                          >
                            <span className="text-sm font-sans font-medium">{opt}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: VISION */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      Tell me about the initiative.
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">A short summary of what you are aiming to achieve:</p>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. We are launching a premium architectural studio and need a clean mathematical logo, typography system, and a 120Hz-ready website."
                      className="w-full p-4 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-emerald-400 font-sans resize-none"
                    />
                  </div>
                )}

                {/* STEP 5: CONTACT (With Green Validation States) */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-avora-charcoal">
                      Where should I send the proposal?
                    </h3>
                    <p className="text-xs font-mono text-avora-muted">Your contact coordinates for direct follow-up:</p>

                    {/* Anti-spam hidden honeypot */}
                    <input
                      type="text"
                      name="_hp_onboarding"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="space-y-4 pt-2">
                      {/* Name */}
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            <span>Your Full Name *</span>
                          </span>
                          {isNameValid ? (
                            <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Valid</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-zinc-400">Required</span>
                          )}
                        </label>
                        <input
                          type="text"
                          required
                          value={contact.name}
                          onChange={(e) => setContact({ ...contact, name: e.target.value })}
                          placeholder="Julian Thorne"
                          className={`w-full p-3.5 rounded-xl border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 transition-all ${
                            isNameValid
                              ? 'border-emerald-400 focus:ring-emerald-400 bg-emerald-50/20'
                              : 'border-avora-border focus:ring-purple-400'
                          }`}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" />
                            <span>Email Address *</span>
                          </span>
                          {isEmailValid ? (
                            <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Valid</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-zinc-400">Required</span>
                          )}
                        </label>
                        <input
                          type="email"
                          required
                          value={contact.email}
                          onChange={(e) => setContact({ ...contact, email: e.target.value })}
                          placeholder="julian@atelier.com"
                          className={`w-full p-3.5 rounded-xl border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 transition-all ${
                            isEmailValid
                              ? 'border-emerald-400 focus:ring-emerald-400 bg-emerald-50/20'
                              : 'border-avora-border focus:ring-purple-400'
                          }`}
                        />
                      </div>

                      {/* Phone with Country Code */}
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" />
                            <span>Phone Number *</span>
                          </span>
                          {isPhoneValid ? (
                            <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Valid</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-zinc-400">Required</span>
                          )}
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={contact.countryCode}
                            onChange={(e) => setContact({ ...contact, countryCode: e.target.value })}
                            className="w-32 p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            title="Select Country Calling Code"
                          >
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code + c.name} value={c.code}>
                                {c.flag} {c.code}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            required
                            placeholder="98765 43210"
                            value={contact.phone}
                            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                            className={`flex-1 p-3.5 rounded-xl border bg-[#FAF9F6] text-sm font-mono transition-all focus:outline-none focus:ring-2 ${
                              isPhoneValid
                                ? 'border-emerald-400 focus:ring-emerald-400 bg-emerald-50/20'
                                : 'border-avora-border focus:ring-purple-400'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Brand */}
                      <div>
                        <label className="text-xs font-mono uppercase text-avora-muted block mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5" />
                            <span>Brand or Company (Optional)</span>
                          </span>
                          <span className="text-[10px] text-zinc-400">Optional</span>
                        </label>
                        <input
                          type="text"
                          value={contact.brand}
                          onChange={(e) => setContact({ ...contact, brand: e.target.value })}
                          placeholder="Atelier Thorne Ltd"
                          className="w-full p-3.5 rounded-xl border border-avora-border bg-[#FAF9F6] text-sm text-avora-charcoal focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {errorMsg && (
                  <p className="text-xs font-mono text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </p>
                )}

                {/* Step Navigation Controls */}
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

                  {currentStep < 5 ? (
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
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="px-8 py-3.5 rounded-xl bg-emerald-600 text-white text-xs font-sans font-bold tracking-wider uppercase hover:bg-emerald-700 disabled:opacity-50 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND PROJECT BRIEF ↗</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Success State (Vibrant Green Verified) */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <Check className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>TRANSMITTED TO AVORA</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-avora-charcoal">
                  PROJECT BRIEF TRANSMITTED.
                </h3>
                <p className="text-sm font-sans text-avora-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-avora-charcoal">{contact.name}</strong>. Your project brief has been delivered to <strong className="text-avora-charcoal">AVORA</strong>. I will review your requirements and reach back using your contact coordinates.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setServices([]);
                      setBudget('');
                      setTimeline('');
                      setDescription('');
                    }}
                    className="text-xs font-mono text-emerald-700 font-semibold underline hover:text-black"
                  >
                    ← Submit another project inquiry
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
