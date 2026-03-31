# Dylan Gorrah — Portfolio

<p align="center">
  <img src="IMG/Dylan%20Gorrah.png" alt="Dylan Gorrah" width="180" />
</p>

A modern, animated developer portfolio built with **React** and polished micro-interactions. It showcases real client work, services, and contact links in a clean single-page UI with a modal panel experience.

## Tech stack

- **React** (component-driven UI)
- **Framer Motion** (animations + transitions)
- **Lucide React** (icon set)
- **CSS-in-JS (inline `<style>` block)** with a custom design system (CSS variables)

## What’s in this repo

- **`portfolio.jsx`**
  - Single React component exporting the portfolio UI
  - Orbit-style hero animation with skill icons
  - Modal panels for:
    - Projects (list + detailed view)
    - Business/services (Digital Tech Authority)
    - About/skills
  - Project data is stored as a local `projects` array
  - Contact CTAs include WhatsApp, email, GitHub, and LinkedIn

## Featured projects (from the code)

- **Comfort Funeral Services (2026)**
  - Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion
  - Live: https://dylan-gorrah.github.io/Comfort-funiral-services/

- **Fen & Fern Creations (2025)**
  - React + TypeScript + Vite + Tailwind
  - WhatsApp checkout flow; delivery zones via Google Maps
  - Live: https://fenferncreations.com/

- **EJ Tours & Projects (2025)**
  - HTML/CSS/Vanilla JS + WhatsApp
  - Mentions structured data SEO + Open Graph targeting
  - Live: https://ejtoursandprojects.it.com

- **Success V3 — Web Studio (2026, in progress)**
  - React 18 + Vite 5 + Tailwind + Framer Motion

- **Monthly Claims System (2025)**
  - C# + ASP.NET Core + Entity Framework + SQLite

## SEO (optimized description you can reuse)

If you deploy this portfolio, use a description similar to this in your page metadata:

**Title idea**
- Dylan Gorrah | Frontend Developer (React, TypeScript, Next.js) — South Africa

**Meta description idea**
- Frontend developer portfolio for Dylan Gorrah. React + TypeScript specialist building fast, modern websites and web apps with Tailwind CSS, Framer Motion animations, and conversion-focused UI. Available for freelance and full-time opportunities.

**Keyword ideas**
- Dylan Gorrah
- Frontend developer South Africa
- React developer portfolio
- TypeScript developer
- Next.js developer
- Tailwind CSS
- Framer Motion
- Web developer Bloemfontein

## Local development

This repo currently contains only the main component (`portfolio.jsx`) and assets.

If you’re adding this into an existing React app, place `portfolio.jsx` into your `src/` directory and render it from your app entry.

### Install dependencies

```bash
npm install framer-motion lucide-react
```

## Notes

- The hero “profile” in `portfolio.jsx` currently renders initials (`DG`). The CSS is already prepared for an image (`.profile-circle img`). If you want, I can wire the UI to use `IMG/Dylan Gorrah.png` inside the app as well.
