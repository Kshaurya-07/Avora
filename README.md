# AVORA

A multidisciplinary design and web development studio site, covering brand identity, graphic and editorial design, apparel design, product UI/UX, web design, and web development.

> Idea to design to experience to development — turning ideas into digital experiences.

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

AVORA presents the work of Kumar Shaurya, a multidisciplinary designer and web developer. The site is an editorial, visual portfolio and studio experience, with service descriptions, interactive demonstrations, project planning, and a consultation form.

The design uses a curated light theme in warm white, bone ivory, and muted charcoal, with iridescent lavender, azure, and rose accents. It is silent by design, with no intrusive sound effects.

## Services

AVORA structures its work into seven disciplines:

| Discipline | Focus |
| --- | --- |
| Logo design | Construction grids, monograms, symbol development, wordmarks, and responsive lockups |
| Branding | Identity architecture, typography pairing, colour palettes, packaging mockups, and brand style manuals |
| Graphic design | Posters, editorial layouts, campaign visuals, marketing collateral, and social design systems |
| Apparel design | Streetwear capsule direction, tee and hoodie silhouettes, print placements, and manufacturer tech packs |
| UI/UX design | Digital product design, multi-device prototypes, component tokens, and SaaS workflows |
| Web design | Editorial websites, asymmetric grids, responsive layouts, and scroll-based presentation |
| Web development | Production React and Next.js code, Three.js WebGL work, Tailwind styling, and smooth scrolling |

The toolkit includes Figma, Adobe Illustrator, Photoshop, Canva, Blender, and Tokens Studio, with the specific tools varying by discipline.

## Features

- **Consultation pipeline:** A consultation form that posts to `POST /api/consultation`, with service-specific questions, meeting preferences, and reference links.
- **Form validation:** Client and server validation for name, email, and phone, with inline guidance, a verified state for valid input, and session state preservation during multi-step forms.
- **Spam protection:** A honeypot field and IP rate limiting, limited to 5 requests per IP per hour.
- **Interactive about page:** An 8-step creative process, from Discover to Deliver, and service deep-dives with a four-stage flow: Discover, Explore, Refine, Finalize.
- **Interactive toolkit:** A selector describing what each tool is used for, by service.
- **3D presentation:** A Three.js crystal visual with pointer tracking that pauses when scrolled off-screen.
- **Control panel:** A panel with service shortcuts and consultation entry points, with keyboard accessibility, including closing with `Esc`.
- **Silent by design:** No intrusive sound effects.

Stability work in this codebase covers the command palette, project planner, custom cursor, navigation, server handling, rate limiting, and email rendering.

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | React 18, TypeScript, Vite 5 |
| 3D and WebGL | Three.js, @react-three/fiber, @react-three/drei |
| Styling | Tailwind CSS, PostCSS, Autoprefixer |
| Motion | Framer Motion, Lenis, Canvas Confetti |
| Backend and delivery | Native Node.js HTTP server (`server.js`), Resend / SMTP dispatch |
| Typography | Playfair Display, Plus Jakarta Sans, JetBrains Mono |
| Icons | Lucide React |
| Hosting and CI | Render Web Service (`render.yaml`), GitHub Actions CI (`ci.yml`) |

## Project Structure

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

Follow the terminal output for the local development address. The Vite development server includes middleware for `POST /api/consultation`.

### Production build and server

```bash
npm run build
npm start
```

The production server serves the built site and handles `POST /api/consultation`.

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

In development without an API key, the server logs the formatted consultation inquiry to the terminal. Do not commit real API keys or personal email credentials.

## Deployment

The project includes a Render Blueprint (`render.yaml`) for deployment as a Node web service:

1. Sign in to Render with your GitHub account.
2. Create a new Blueprint and select this repository.
3. Render configures the Node environment, build command, and start command from `render.yaml`.
4. Add a `RESEND_API_KEY` in the Render dashboard if live email dispatch through Resend is required.

Build command: `npm install && npm run build`

Start command: `npm start`

## Contributing

Issues and pull requests are welcome. Please keep design and copy changes consistent with the studio's editorial style, and do not add fabricated clients, awards, or testimonials.

## License

© 2026 AVORA Studio — Kumar Shaurya. All rights reserved.

## Author

Kumar Shaurya — https://github.com/Kshaurya-07
