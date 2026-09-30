# AVORA — Multidisciplinary Designer & Web Developer

> **"IDEA → DESIGN → EXPERIENCE → DEVELOPMENT"**  
> **"TURNING IDEAS INTO LIVING DIGITAL EXPERIENCES."**

A luxury editorial, production-quality digital studio experience built for **AVORA** by **Kumar Shaurya**. Uniting brand identity, graphic design, streetwear apparel, product UI/UX design systems, and 120Hz-ready frontend engineering into a single cohesive universe.

[![CI](https://github.com/Kshaurya-07/Avora/actions/workflows/ci.yml/badge.svg)](https://github.com/Kshaurya-07/Avora/actions/workflows/ci.yml)
[![Live on Render](https://img.shields.io/badge/Render-Deployed-success?logo=render&logoColor=white)](https://avora.onrender.com)
[![React 18](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

---

## ✦ Brand Universe & Positioning

- **Studio**: AVORA
- **Founder**: Kumar Shaurya ([Email AVORA ↗](mailto:kshaurya0708@gmail.com))
- **Positioning**: Multidisciplinary Designer & Web Developer
- **Aesthetic**: Luxury Editorial Design + Designer Portfolio + Futuristic 3D WebGL + Cinematic Storytelling
- **Theme**: Curated Light Theme (Warm white `#FAF9F6`, bone ivory, muted charcoal `#18181B`, iridescent lavender, azure, and rose accents)
- **Audio Posture**: 100% Silent by design. Pure visual, typographic, and interactive immersion without intrusive sound effects.

---

## ✦ 7 Core Creative Disciplines

AVORA structures its capabilities into 7 clearly defined, interactively demonstrated disciplines:

| # | Discipline | Capability & Demonstration | Primary Toolkit |
|:---:|:---|:---|:---|
| **01** | **LOGO DESIGN** | Mathematical golden ratio construction grids, monograms, symbol development, wordmarks, B&W contrast inversion, and multi-scale responsive lockup systems. | Adobe Illustrator, Figma, Canva, Math Grids |
| **02** | **BRANDING** | Comprehensive identity architecture, typography pairing, curated Pantone color palettes, tactile packaging mockups, and complete brand style manuals. | Figma, Adobe Illustrator, Canva, Photoshop |
| **03** | **GRAPHIC DESIGN** | Experimental silkscreen posters, high-fashion editorial layouts, campaign key visuals, marketing collateral, and agile social design systems. | Canva (Featured Agile Socials), Photoshop, Illustrator |
| **04** | **APPAREL DESIGN** | Streetwear capsule direction, heavyweight boxy tee & hoodie silhouettes, technical print placements (front, back, sleeve, puff ink), and manufacturer tech packs. | Adobe Illustrator, Photoshop, Physical Tech Packs |
| **05** | **UI/UX DESIGN** | High-end digital product design, multi-device viewport prototypes (iPhone, iPad, Studio Display), component design tokens, and frictionless SaaS workflows. | Figma, FigJam, Tokens Studio |
| **06** | **WEB DESIGN** | Awwwards-caliber editorial websites, asymmetric grids, fluid breakpoint responsiveness (Desktop, Tablet, Mobile), and scroll choreography. | Figma, Adobe Creative Suite, Blender |
| **07** | **WEB DEVELOPMENT** | Translating design vision into production React/Next.js code, Three.js WebGL shaders, Tailwind utility layers, and 120Hz-ready fluid momentum scrolling. | React 18, TypeScript, Three.js, Vite, Tailwind |

---

## ✦ Architecture & Upgrades

### 1. Real Consultation & Project Onboarding Email Pipeline
- **Backend Route**: `POST /api/consultation`
- **Delivery Recipient**: Strictly sent to `kshaurya0708@gmail.com`.
- **Subject Format**: `New AVORA Consultation — [SERVICE NAME]` (e.g. *New AVORA Consultation — Logo Design*).
- **Reply-To**: Automatically set to the **customer's submitted email address** so clicking "Reply" in your email client responds directly to the client.
- **Payload Contents**: Full customer contact coordinates (Name, Email, Phone with country code, Company/Brand), complete service-specific answers, meeting preferences, preferred date/time, timezone, and reference links.
- **Spam Protection & Rate Limiting**: Built-in honeypot bot trap (`_hp`) and IP rate limiting (maximum 5 requests per IP per hour).
- **Server Infrastructure**:
  - **Development**: Synchronously handled in Vite dev middleware (`vite.config.ts`).
  - **Production**: Native Node.js HTTP server (`server.js`) with zero extra runtime dependencies, serving `dist/` and providing SPA fallback routing.

### 2. Live Dynamic Form Validation (Red $\rightarrow$ Green)
- **Consultation Forms & Project Planner**:
  - **Full Name**: Required (minimum 2 characters).
  - **Email Address**: Required (`type="email"`, strict regex client validation).
  - **Phone Number**: Required (searchable 19-country code selector dropdown e.g. `+91`, `+1`, `+44`, `+971`, etc., and phone number validation).
  - **Company / Brand**: Optional.
- **Dynamic Visual Feedback**:
  - As soon as a user enters valid credentials, inputs dynamically transition into a verified **green state** (`border-emerald-400 bg-emerald-50/20`) with a **`✓ Valid`** checkmark badge.
  - Invalid inputs show clear inline errors (`border-rose-300`).
- **Session State Preservation**: Contact coordinates and step answers are preserved in `sessionStorage` so navigating or switching tabs never wipes client input.

### 3. Public Email Text Concealment
- Raw visible `kshaurya0708@gmail.com` text has been concealed across the entire site.
- Replaced with elegant, clickable **`Email AVORA ↗`** CTAs across the Navbar, Feature Tray, Command Menu, About Page, Footer, and Final CTA while maintaining direct `mailto:kshaurya0708@gmail.com` links.

### 4. 120Hz-Ready Real 3D WebGL Crystal (`GlassCrystal.tsx`)
- High-performance Three.js faceted crystal with dynamic pointer tracking using `THREE.MathUtils.lerp` inertia (0.05 damping) on rotation, inner polyhedron core, and iridescent lighting.
- Pointer tracking runs directly inside the Three.js render loop without triggering React component re-renders.
- Automatically pauses the 3D render loop via `IntersectionObserver` when scrolled off-screen, saving GPU battery.

### 5. Interactive About Page (`/about` — `AboutPage.tsx`)
- **Founder Section**: Real, unembellished profile of **Kumar Shaurya**, Multidisciplinary Designer & Web Developer (zero fake awards, zero fabricated clients).
- **Interactive 8-Step Creative Process**: Stepper bar allows clicking steps `01 DISCOVER` to `08 DELIVER` to transform a central studio canvas with dynamic visual diagrams and deliverables.
- **Interactive 7 Service Processes**: Every service deep dive includes an expandable 4-stage flowchart (`01 DISCOVER`, `02 EXPLORE`, `03 REFINE`, `04 FINALIZE`) revealing step-by-step methodologies and visual blueprint specifications.
- **Transparent Disclosures**: Clear explanations on using templates/scaffolding for rapid prototyping and using AI as an accelerator for ideation without replacing human artistry.

### 6. Interactive Toolkit (`Toolkit.tsx`)
- **Canva Prominence**: Dedicated spotlight highlighting Canva as the studio's primary agile engine for client-editable social systems, decks, and marketing visuals.
- **Live Tool Inspector**: Interactive selector matrix detailing what AVORA uses each tool for, relevant services, standard outputs, and studio craftsmanship rationale.

### 7. Creative Control Panel Tray (`FeatureTray.tsx`)
- Clicking `[ PANEL ]` beside the AVORA logo opens an expandable control panel with direct service shortcuts, consultation launchpads, and email triggers. Full keyboard accessibility (closes on `ESC`).

---

## ✦ Tech Stack

| Category | Technology |
|:---|:---|
| **Frontend Framework** | React 18, TypeScript, Vite 5 |
| **3D & WebGL Engine** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Styling & Design Tokens** | Tailwind CSS, PostCSS, Autoprefixer |
| **Motion Physics & Pacing** | Framer Motion, Lenis (Smooth Momentum Scroll), Canvas Confetti |
| **Backend & Delivery** | Native Node.js HTTP Server (`server.js`), Resend / SMTP API dispatcher |
| **Typography** | Playfair Display (Editorial Serif), Plus Jakarta Sans, JetBrains Mono |
| **Icons** | Lucide React |
| **Hosting & CI/CD** | Render Web Service (`render.yaml`), GitHub Actions CI (`ci.yml`) |

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/Kshaurya-07/Avora.git
cd Avora
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.  
The Vite dev server includes synchronous middleware for `POST /api/consultation`.

### 4. Build & Run Production Server
```bash
npm run build
npm start
```
The production server (`server.js`) serves `dist/` and handles `POST /api/consultation`.

---

## ✦ Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
|:---|:---|:---|
| `CONSULTATION_RECEIVER` | Destination email for all consultation submissions | `kshaurya0708@gmail.com` |
| `RESEND_API_KEY` | Optional Resend API key for live transactional email delivery | `re_123456789` |
| `EMAIL_FROM` | Sender address for outgoing emails | `onboarding@resend.dev` |
| `PORT` | HTTP port for the production server | `3000` |

*Note: In development without an API key, the server safely logs the complete formatted consultation inquiry to the terminal with `Reply-To: customer.email`.*

---

## ✦ Deployment on Render

This project includes a pre-configured [`render.yaml`](./render.yaml) for deployment as a **Node Web Service**:

1. Sign in to **[Render](https://render.com)** with your GitHub account.
2. Click **New +** → **Blueprint**.
3. Select your repository: **`Kshaurya-07/Avora`**.
4. Render automatically configures:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**: `CONSULTATION_RECEIVER=kshaurya0708@gmail.com`, `EMAIL_FROM=onboarding@resend.dev`
5. Add your `RESEND_API_KEY` in the Render dashboard if you wish to dispatch live emails through Resend.
6. Click **Apply**.

---

## ✦ Project Architecture

```text
AVORA/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI workflow (Build, Typecheck, API smoke test)
├── server/
│   └── emailService.js         # Server-side validation, rate limiting, anti-spam & email formatting
├── src/
│   ├── components/
│   │   ├── canvas/             # Three.js WebGL crystal & hero scene
│   │   │   ├── GlassCrystal.tsx
│   │   │   └── HeroScene.tsx
│   │   ├── mockups/            # Interactive discipline capability demonstrations
│   │   │   ├── ApparelMockup.tsx
│   │   │   ├── BrandingMockup.tsx
│   │   │   ├── GraphicDesignMockup.tsx
│   │   │   ├── LogoDesignMockup.tsx
│   │   │   ├── UIUXMockup.tsx
│   │   │   ├── WebDesignMockup.tsx
│   │   │   └── WebDevMockup.tsx
│   │   ├── navigation/         # Header navigation, command palette & control tray
│   │   │   ├── CommandMenu.tsx
│   │   │   ├── FeatureTray.tsx
│   │   │   └── Navbar.tsx
│   │   ├── pages/              # Dedicated full page views
│   │   │   └── AboutPage.tsx
│   │   ├── sections/           # Modular homepage sections
│   │   │   ├── About.tsx
│   │   │   ├── Consultation.tsx
│   │   │   ├── DesignedThenBuilt.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Packages.tsx
│   │   │   ├── Playground.tsx
│   │   │   ├── ProjectPlanner.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TickerIntro.tsx
│   │   │   ├── Toolkit.tsx
│   │   │   └── VisualServices.tsx
│   │   └── ui/                 # Reusable UI widgets & custom cursor
│   │       ├── CustomCursor.tsx
│   │       └── SoundToggle.tsx
│   ├── data/                   # Centralized data models & service configs
│   │   ├── packages.ts
│   │   ├── playground.ts
│   │   ├── projects.ts
│   │   └── services.ts
│   ├── styles/                 # Tailwind utility styles & glassmorphic classes
│   │   └── index.css
│   ├── types/                  # Strict TypeScript interface declarations
│   │   └── index.ts
│   ├── App.tsx                 # Root coordinator with SPA history router & Lenis
│   └── main.tsx                # DOM root entry point
├── .env.example                # Documented environment variables template
├── package.json                # Scripts & project dependencies
├── render.yaml                 # Render Blueprint for zero-config deployment
├── server.js                   # Production native Node.js HTTP server (dist/ + /api/consultation)
├── tailwind.config.js          # Custom luxury palette & typography tokens
├── tsconfig.json               # Strict TypeScript configuration
└── vite.config.ts              # Vite dev server middleware & production chunking
```

---

## ✦ Contact & Inquiries

- **Founder**: Kumar Shaurya
- **Email**: [Email AVORA ↗](mailto:kshaurya0708@gmail.com)
- **GitHub**: [@Kshaurya-07](https://github.com/Kshaurya-07)
- **Repository**: [https://github.com/Kshaurya-07/Avora](https://github.com/Kshaurya-07/Avora)

---

## ✦ License

© 2026 AVORA Studio — Kumar Shaurya. All Rights Reserved.