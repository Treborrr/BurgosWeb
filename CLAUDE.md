# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR (Vite)
npm run build      # Production build
npm run lint       # ESLint validation
npm run preview    # Preview production build locally
```

No test framework is configured.

## Architecture

**Casa Hospedaje Burgos** — a React + Vite hotel booking SPA for a colonial-style accommodation in Chachapoyas, Peru.

**Key files:**
- `src/data/rooms.js` — Static room data (10 rooms); the only data source
- `src/App.jsx` — Root component composing all sections
- `src/index.css` — All CSS including CSS variables (color palette, fonts, shadows)

**Components** (`src/components/`):
- `Navbar.jsx` — Scroll-aware fixed header; logo shrinks and background changes on scroll
- `Hero.jsx` — Full-viewport hero with background image and animated text
- `BookingSystem.jsx` — Room search/filter by dates + guests, cart system, WhatsApp booking integration
- `InfoSections.jsx` — Attractions, FAQ accordion, location + embedded Google Maps
- `Footer.jsx` — 3-column grid with nav, contact, and social links

**Design system** (CSS variables in `index.css`):
- Primary: `--color-burgundy` (#2e1a14), Accent: `--color-gold` (#ceab58), Background: `--color-cream` (#faf5f0)
- Fonts: Playfair Display (headings), Montserrat (body) — Google Fonts
- Responsive breakpoints: 768px (footer), 900px (nav), 992px (info grid)

**Tech stack:**
- React 19, Vite 7, plain JavaScript/JSX (no TypeScript)
- `lucide-react` for icons, `framer-motion` installed but lightly used
- ESLint 9 flat config (`eslint.config.js`)
- No router (anchor `#section` links), no backend (WhatsApp API for bookings)
