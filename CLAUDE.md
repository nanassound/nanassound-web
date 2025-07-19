# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Nanas Sound website - a company that specializes in designing synthesizers and Eurorack modules. The site showcases their products including AirBending (gesture-based MIDI controller software), Mini (USB-C Eurorack power supply), and various Eurorack modules.

Built with Astro v5, this is a static site generator project that creates a marketing website with product pages, documentation, and company information.

## Development Commands

All commands run from the project root:

- `npm install` - Install dependencies
- `npm run dev` - Start development server at localhost:4321 (Astro default)
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally before deploying
- `npm run astro` - Run Astro CLI commands

## Code Architecture

### Framework Stack
- **Astro 5.11.1** - Static site generator with component islands architecture
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Preline 2.5.1** - Tailwind CSS component library
- **MDX** - Markdown with JSX support for content authoring

### Directory Structure
```
src/
├── components/          # Reusable Astro components
│   ├── Navbar.astro    # Main navigation (Bulma-based)
│   ├── OnePageNavbar.astro  # Alternative navigation used in Layout
│   ├── Footer.astro    # Site footer
│   └── ...
├── layouts/
│   └── Layout.astro    # Main layout with SEO meta tags, social sharing
├── pages/              # File-based routing
│   ├── index.astro     # Homepage with hero section
│   ├── products/       # Product category pages
│   │   ├── software/
│   │   └── eurorack-modules/
│   └── ...
└── env.d.ts           # TypeScript environment definitions

public/
├── img/               # General images and logos
├── products-img/      # Product-specific images (WebP format)
└── schematics/        # PDF schematics for Eurorack modules
```

### Site Configuration
- **Domain**: nanassound.com (configured in astro.config.mjs)
- **Analytics**: Plausible.io integration in Layout.astro
- **Redirects**: Legacy URL redirects configured in astro.config.mjs
- **Deployment**: Uses Nixpacks with Node.js 22 for production builds

### Component Patterns
- Uses Astro component syntax (.astro files)
- Layout.astro handles SEO meta tags with Open Graph and Twitter Cards
- Product pages follow consistent structure with hero sections and feature grids
- Navigation uses both traditional Navbar (Bulma CSS) and OnePageNavbar (Tailwind/Preline)
- Roboto font imported from @fontsource for consistent typography

### Content Management
- Product images optimized as WebP format in /public/products-img/
- Schematics provided as PDFs in /public/schematics/
- No CMS - content managed directly in Astro components
- Markdown/MDX support available but primarily uses Astro components

### Deployment Notes
- Production builds use `npm run preview` (configured in nixpacks.toml)
- Static site deployment ready for CDN hosting
- All assets served from /public/ directory