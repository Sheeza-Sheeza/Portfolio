# Sheeza Rafique — AI Engineer Portfolio

A modern, production-ready portfolio website showcasing MLOps and AI engineering projects. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Single-page home with anchored sections (Hero, About, Skills, Projects, Contact)
- Individual project case study pages with architecture diagrams
- Dark/light theme toggle with system preference support
- Fully responsive design (mobile-first)
- SEO optimized (metadata, JSON-LD, sitemap, robots.txt)
- Accessibility features (skip link, focus states, reduced motion, ARIA labels)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
cd portfolio
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Home page sections
│   ├── projects/           # Project cards, diagrams
│   ├── ui/                 # Reusable UI primitives
│   └── providers/          # Theme provider
├── content/                # Site content (projects, skills, config)
└── lib/                    # Utilities
```

## Customization

### Update contact links

Edit [`content/site.ts`](content/site.ts) to update:

- LinkedIn profile URL in [`content/site.ts`](content/site.ts)
- Email, GitHub, DagsHub links

### Add a project

Add a new entry to [`content/projects.ts`](content/projects.ts). Project case study pages are auto-generated from the slug.

## Deployment (Vercel)

1. Push the `portfolio` folder to a GitHub repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Update `siteConfig.url` in `content/site.ts` with your Vercel domain
5. *(Optional)* Add a custom domain in Vercel project settings

### Environment variables

None required — this is a static content site.

## Featured Projects

1. **Vehicle Insurance MLOps** — Production AWS pipeline (MongoDB → S3 → EC2)
2. **MLOPS Capstone** — DVC + MLflow + DagsHub sentiment analysis
3. **ReviewSense** — E-commerce NLP dashboard with batch inference
4. **MLOps Experiment Platform** — Dual-pipeline FastAPI control panel

## License

Private portfolio — all rights reserved.
