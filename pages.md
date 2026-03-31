# GitHub Pages Deployment Guide

## Project: Dylan Gorrah Developer Portfolio
**Repository:** `https://github.com/Dylan-Gorrah/Dylan-Gorrah-Developer`

---

## SEO & GitHub Pages Configuration Summary

### 1. Vite Configuration (`vite.config.js`)
```javascript
base: '/Dylan-Gorrah-Developer/',
```
**Purpose:** Sets the base URL for GitHub Pages deployment. This ensures all assets load correctly from the repository subdirectory.

### 2. SEO Meta Tags Added (`index.html`)

#### Primary Meta Tags
| Tag | Value |
|-----|-------|
| `title` | Dylan Gorrah \| Frontend Developer (React, TypeScript, Next.js) — South Africa |
| `description` | Frontend developer portfolio for Dylan Gorrah. React + TypeScript specialist building fast, modern websites and web apps with Tailwind CSS, Framer Motion animations, and conversion-focused UI. |
| `keywords` | Dylan Gorrah, Frontend developer South Africa, React developer portfolio, TypeScript developer, Next.js developer, Tailwind CSS, Framer Motion, Web developer Bloemfontein |
| `author` | Dylan Gorrah |
| `robots` | index, follow |
| `canonical` | https://dylan-gorrah.github.io/Dylan-Gorrah-Developer/ |

#### Open Graph (Facebook/LinkedIn)
| Property | Value |
|----------|-------|
| `og:type` | website |
| `og:url` | https://dylan-gorrah.github.io/Dylan-Gorrah-Developer/ |
| `og:title` | Dylan Gorrah \| Frontend Developer |
| `og:description` | Frontend developer portfolio for Dylan Gorrah... |
| `og:image` | Profile image URL |
| `og:site_name` | Dylan Gorrah Portfolio |

#### Twitter Cards
| Property | Value |
|----------|-------|
| `twitter:card` | summary_large_image |
| `twitter:url` | https://dylan-gorrah.github.io/Dylan-Gorrah-Developer/ |
| `twitter:title` | Dylan Gorrah \| Frontend Developer |
| `twitter:description` | Frontend developer portfolio... |
| `twitter:image` | Profile image URL |

### 3. Additional SEO Features
- **Theme Color:** `#0d0c0a` (matches dark background)
- **Favicon:** Linked at `/favicon.ico`
- **Responsive:** Viewport meta tag for mobile

---

## Deployment Steps

### Step 1: Build the Project
```bash
npm run build
```
This creates a `dist/` folder with production-ready files.

### Step 2: Initialize Git (if not done)
```bash
git init
git remote add origin git@github.com:Dylan-Gorrah/Dylan-Gorrah-Developer.git
```

### Step 3: Push Source Code
```bash
git add .
git commit -m "Initial portfolio with Vite + React + GitHub Pages config"
git push -u origin main
```

### Step 4: Deploy to GitHub Pages (Option A: gh-pages branch)
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

### Step 4 Alternative: GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Live URL
**https://dylan-gorrah.github.io/Dylan-Gorrah-Developer/**

---

## SEO Checklist

- [x] Title tag optimized with keywords
- [x] Meta description with call-to-action
- [x] Keywords meta tag
- [x] Canonical URL set
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Robots meta (index, follow)
- [x] Author meta tag
- [x] Theme color for mobile browsers
- [x] Favicon linked
- [x] Responsive viewport

---

## Performance Optimizations

1. **Vite build** creates optimized bundles
2. **Tree-shaking** removes unused code
3. **CSS variables** for efficient theming
4. **Framer Motion** animations are GPU-accelerated
5. **Lucide icons** are imported individually (tree-shakeable)

---

## Post-Deployment Verification

1. Check live URL loads correctly
2. Verify profile image displays
3. Test all three nav buttons (Projects, Business, About)
4. Run [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
5. Check [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
6. Validate with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## Keywords Strategy

**Primary Keywords:**
- Dylan Gorrah
- Frontend developer South Africa
- React developer portfolio

**Secondary Keywords:**
- TypeScript developer
- Next.js developer
- Tailwind CSS developer
- Web developer Bloemfontein
- JavaScript specialist

**Long-tail Keywords:**
- React TypeScript frontend developer South Africa
- Modern web developer portfolio 2025
- Frontend developer for hire Bloemfontein

---

## Future SEO Improvements

1. Add structured data (JSON-LD) for Person schema
2. Create sitemap.xml
3. Add Google Analytics 4
4. Implement dark/light mode toggle with meta theme-color updates
5. Add blog section for content marketing
6. Optimize images (WebP format, lazy loading)

---

## File Structure for Deployment

```
portfolio/
├── .github/workflows/deploy.yml    # GitHub Actions (optional)
├── dist/                           # Build output (auto-generated)
├── IMG/
│   └── Dylan Gorrah.png
├── public/
│   └── favicon.ico
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── Portfolio.jsx
├── index.html                      # SEO-optimized
├── package.json
├── vite.config.js                  # GitHub Pages base path
└── pages.md                        # This file
```

---

**Last Updated:** March 31, 2026
**Deploy Status:** Ready for GitHub Pages
