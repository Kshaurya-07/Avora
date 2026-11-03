# AVORA

A multidisciplinary design and web development studio site, covering brand identity, graphic and editorial design, apparel design, product UI/UX, web design, and web development.

## Table of Contents

- [Overview](#overview)
- [Services](#services)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview

AVORA presents the work of Kumar Shaurya, a multidisciplinary designer and web developer. The site is designed as an editorial, visual portfolio and studio experience, with service descriptions, interactive demonstrations, project planning, and a consultation form.

The original README uses the tagline "Idea to design to experience to development" and describes the studio as turning ideas into digital experiences. The aesthetic described in the original README is a curated light theme with warm white, bone ivory, and muted charcoal tones.

## Services

AVORA structures its work into seven disciplines, as described in the original README:

| Discipline | Focus |
| --- | --- |
| Logo design | Construction grids, monograms, symbol development, wordmarks, and responsive lockups |
| Branding | Identity architecture, typography pairing, colour palettes, packaging mockups, and brand style manuals |
| Graphic design | Posters, editorial layouts, campaign visuals, marketing collateral, and social design systems |
| Apparel design | Streetwear capsule direction, tee and hoodie silhouettes, print placements, and manufacturer tech packs |
| UI/UX design | Digital product design, multi-device prototypes, component tokens, and SaaS workflows |
| Web design | Editorial websites, asymmetric grids, responsive layouts, and scroll-based presentation |
| Web development | Production React and Next.js code, Three.js WebGL work, Tailwind styling, and smooth scrolling |

Tools mentioned in the original README include Figma, Adobe Illustrator, Photoshop, Canva, Blender, and Tokens Studio, with the specific tool varying by discipline.

## Features

- **Consultation pipeline:** A consultation form that posts to `POST /api/consultation`, with service-specific questions, meeting preferences, and reference links.
- **Form validation:** Client and server validation for name, email, and phone, with inline guidance and session state preservation during multi-step forms, as described in the original README.
- **Spam protection:** A honeypot field and IP rate limiting, as described in the original README.
- **Interactive about page:** An 8-step creative process and service deep-dives, as described in the original README.
- **Interactive toolkit:** A selector describing what each tool is used for, by service.
- **3D presentation:** A Three.js crystal visual that pauses when scrolled off-screen, as described in the original README.
- **Control panel:** A panel with service shortcuts and consultation entry points, with keyboard accessibility, as described in the original README.
- **Silent by design:** No intrusive sound effects, as described in the original README.

The original README also includes a detailed list of recent bug fixes. Those fixes are summarised here as stability work on the command palette, project planner, custom cursor, navigation, server handling, rate limiting, and email rendering, rather than reproduced in full, because a README is not the right place for a detailed changelog.

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | React 18, TypeScript, Vite 5 |
| 3D and WebGL | Three.js, @react-three/fiber, @react-three/drei |
| Styling | Tailwind CSS, PostCSS, Autoprefixer |
| Motion | Framer Motion, Lenis, Canvas Confetti, as described in the original README |
| Backend and delivery | Native Node.js HTTP server (`server.js`), Resend / SMTP dispatch, as described in the original README |
| Typography | Playfair Display, Plus Jakarta Sans, JetBrains Mono |
| Icons | Lucide React |
| Hosting and CI | Render Web Service (`render.yaml`), GitHub Actions CI (`ci.yml`), as described in the original README |

## Project Structure

The structure below is a condensed summary of the layout described in the original README.

```text
AVORA/
├── .github/workflows/ci.yml
├── server/emailService.js
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   ├── mockups/
│   │   ├── navigation/
│   │   ├── pages/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── server.js
├── render.yaml
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
git clone https://github.com/Kshaurya-07/Avora.git
cd Avora
npm install
npm run dev
```

Follow the terminal output for the local development address. The Vite development server includes middleware for `POST /api/consultation`, as described in the original README.

### Production build and server

```bash
npm run build
npm start
```

The production server serves the built site and handles `POST /api/consultation`, as described in the original README.

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `CONSULTATION_RECEIVER` | Destination email for consultation submissions |
| `RESEND_API_KEY` | Optional Resend API key for live email delivery |
| `EMAIL_FROM` | Sender address for outgoing emails |
| `PORT` | HTTP port for the production server |

In development without an API key, the server logs the formatted consultation inquiry to the terminal, as described in the original README. Do not commit real API keys or personal email credentials.

## Deployment

The project includes a Render Blueprint (`render.yaml`) for deployment as a Node web service:

1. Sign in to Render with your GitHub account.
2. Create a new Blueprint and select this repository.
3. Render configures the Node environment, build command, and start command from `render.yaml`.
4. Add a `RESEND_API_KEY` in the Render dashboard if live email dispatch through Resend is required.

The original README lists the build command as `npm install && npm run build` and the start command as `npm start`.

## Contributing

Issues and pull requests are welcome. Please keep design and copy changes consistent with the studio's editorial style, and do not add fabricated clients, awards, or testimonials.

## License

© 2026 AVORA Studio — Kumar Shaurya. All rights reserved.

## Author

Kumar Shaurya — https://github.com/Kshaurya-07
