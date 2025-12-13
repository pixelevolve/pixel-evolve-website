# PixelEvolve Website

A modern, SEO-optimized marketing website for PixelEvolve AB, showcasing AI-powered e-commerce tools including the flagship **SmartLang**.

## Overview

PixelEvolve builds tools that help e-commerce businesses grow globally. This website serves as the marketing hub for the company, featuring:

- **Company homepage** with brand identity and product showcase
- **Product landing page** for SmartLang
- **Legal pages** (Privacy Policy, Terms of Service)

**Live Site**: [https://pixel-evolve.com](https://pixel-evolve.com)

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[@fontsource/inter](https://fontsource.org/fonts/inter)** - Modern sans-serif font
- **[Sharp](https://sharp.pixelplumbing.com/)** - Image processing

## Project Structure

```
pixel-evolve-web/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeaturesSection.astro
│   │   ├── PricingSection.astro
│   │   ├── FAQSection.astro
│   │   └── ...
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── LegalLayout.astro
│   ├── pages/            # Routes
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── translate/index.astro
│   ├── content/          # Markdown content
│   │   └── legal/
│   └── styles/
│       └── global.css
├── public/               # Static assets
│   ├── favicon.svg
│   ├── og-image.png
│   ├── logo-full.svg
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.cjs
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pixel-evolve-web

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run generate:images` | Generate PNG assets from SVGs |

## Features

### SEO Optimized

- Automatic XML sitemap generation
- JSON-LD structured data (Organization, SoftwareApplication)
- Open Graph and Twitter Card meta tags
- Semantic HTML structure

### Performance

- Static site generation for fastest load times
- Optimized fonts with @fontsource
- Responsive images
- Minimal JavaScript

### GDPR Compliant

- Cookie consent banner with granular controls
- Privacy policy and terms of service
- Consent stored in local storage

## Pages

### Homepage (`/`)

Company landing page featuring:
- Animated logo with "The Morph" concept
- Product showcase section
- Trust badge ("Engineered in Stockholm")

### SmartLang (`/translate/`)

Product landing page with:
- Feature highlights (6 key benefits)
- 3-step "How It Works" guide
- Pricing tiers (Free, Basic $19/mo, Pro $49/mo)
- FAQ section

### Legal Pages

- **Privacy Policy** (`/privacy/`)
- **Terms of Service** (`/terms/`)

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#3b82f6` | Buttons, links |
| Evolve Teal | `#10b981` | Accents, success states |
| Neutral 900 | `#111827` | Dark text |
| Neutral 50 | `#f8fafc` | Light backgrounds |

### Typography

- **Display**: Inter, 3rem, bold
- **Headings**: Inter, semibold
- **Body**: Inter, regular
- **Code**: JetBrains Mono

## Deployment

The site builds to static HTML and can be deployed to any static hosting provider:

```bash
# Build the site
npm run build

# Output directory: dist/
```

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 / CloudFront
- Any static file server

## Configuration

### Environment Variables

Environment variables are optional and primarily used for task management tooling. See `.env.example` for available options.

### Astro Config

Key settings in `astro.config.mjs`:

```javascript
{
  site: 'https://pixel-evolve.com',
  output: 'static',
  integrations: [tailwind(), sitemap()]
}
```

## Company Information

**PixelEvolve AB**
Org.nr: 559493-7418
Stockholm, Sweden

Contact: [hello@pixel-evolve.com](mailto:hello@pixel-evolve.com)

## License

This project is proprietary software. All rights reserved.
