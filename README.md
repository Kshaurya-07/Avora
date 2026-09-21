# AVORA — Multidisciplinary Designer & Web Developer Experience

> **"IDEA → DESIGN → EXPERIENCE → DEVELOPMENT"**
> 
> **"AVORA — DESIGNING IDEAS INTO EXPERIENCES."**

A premium, production-quality 3D creative studio website combining **Luxury Editorial Design + Designer Portfolio + Futuristic 3D + Cinematic Storytelling + Interactive Digital Experience**.

---

## ✦ Brand Universe

- **Brand Name**: AVORA
- **Positioning**: Multidisciplinary Designer & Web Developer
- **Theme**: Light Theme (Warm white, ivory, cream, soft gray, charcoal, with subtle iridescent lavender, blue, pink, and cyan accents)
- **Visual Balance**: 40% Designer Portfolio, 25% Creative Studio, 20% Futuristic 3D, 15% Developer / Digital Experience

---

## ✦ Creative Disciplines

1. **01 BRANDING**: Mathematical logo construction grids, typography hierarchy, Pantone swatch palettes, packaging mockups, and comprehensive brand guidelines.
2. **02 GRAPHIC DESIGN**: Experimental poster studio, high-fashion editorial layouts, silkscreen print specifications, and dynamic visual compositions.
3. **03 APPAREL**: Streetwear and contemporary fashion studio with interactive garment flipper (front/back), 480gsm French terry hoodie specs, 300gsm boxy tee silhouettes, and technical print zones.
4. **04 UI/UX DESIGN**: High-end digital product design with interactive device switcher (Mobile iPhone, Tablet iPad, Desktop Studio Display), live waveform audio visualizers, and component token sync.
5. **05 WEB DESIGN**: Digital experience showcase with interactive responsive browser viewports (1440px, 768px, 375px) and editorial landing page pacing.
6. **06 WEB DEVELOPMENT**: "Design → Code → Functional Experience" pipeline showcasing Figma tokens, clean TypeScript/React code, and living interactive UI widgets.

---

## ✦ Key Features

- **Real 3D WebGL Crystal Experience**: Three.js refractive iridescent crystal with mouse parallax, inertial rotation, and dynamic light reaction.
- **Asymmetric Editorial Portfolio**: Filterable showcase featuring case studies with structured Brief, Approach, Process, and Outcome breakdowns.
- **"Designed. Then Built." Pipeline**: Interactive bridge demonstrating how static design translates directly into responsive, high-performance code.
- **Creative Playground**: Masonry gallery for experimental typography, GLSL shaders, and streetwear concepts with a fullscreen lightbox viewer.
- **Curated Service Packages**: Clear scope tiers (Brand Starter, Digital Presence, Web Experience, Complete Brand) with pre-filled quote requests.
- **Interactive 5-Step Project Planner**: Smooth multi-step onboarding with validation, progress indicator, and celebratory confetti.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Keyboard-driven modal navigation across the entire digital universe.
- **Ambient Generative Soundscape**: Optional subtle Web Audio ambient drone toggleable from the navigation bar.
- **Custom Contextual Cursor**: Fluid spring cursor with dynamic labels (`VIEW`, `EXPLORE`, `DRAG`).
- **Smooth Momentum Scroll**: Integrated Lenis scroll engine respecting `prefers-reduced-motion`.

---

## ✦ Tech Stack

- **Core**: React 18, TypeScript, Vite 5
- **3D & WebGL**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Typography**: Google Fonts (Playfair Display, Syne, Plus Jakarta Sans, JetBrains Mono)
- **Motion & Interaction**: Framer Motion, Lenis, Canvas Confetti
- **Icons**: Lucide React

---

## ✦ Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## ✦ Structure

```text
src/
├── assets/          # Static media and icons
├── components/
│   ├── canvas/      # Three.js 3D scenes & crystal shaders
│   ├── mockups/     # Interactive discipline stages (Branding, Graphic, Apparel, UI/UX, Web, Dev)
│   ├── navigation/  # Floating glass navbar, CommandMenu (⌘K)
│   ├── sections/    # Hero, Ticker, Services, Work, CaseStudyModal, Playground, Planner, etc.
│   └── ui/          # CustomCursor, SoundToggle, Badges
├── data/            # Projects, Services, Playground, Packages data models
├── styles/          # Tailwind directives, glassmorphism, iridescent styles
├── types/           # TypeScript data interfaces
├── App.tsx          # Root application coordinator
└── main.tsx         # Mount entry point
```

---

## ✦ License

© AVORA. All Rights Reserved.