# Xi'An Kitchen

A landing page for Xi'An Kitchen — Northwestern Chinese noodle restaurant in Irvington, Portland OR.

Built with **React + TypeScript + Tailwind CSS + Vite**.

---

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere (Vercel, Netlify, GitHub Pages, etc.).

---

## Project Structure

```
src/
  components/
    Navbar.tsx          # Fixed top navigation
    Hero.tsx            # Full-screen hero section
    FeaturedBanner.tsx  # Noodle pull feature banner
    MenuSection.tsx     # Three signature dishes
    TrustPillars.tsx    # Dine in / Fresh daily / Bold flavors
    OurStory.tsx        # About / kitchen story
    Reviews.tsx         # Customer reviews
    CtaSection.tsx      # Come hungry CTA + hours
    Footer.tsx          # Site footer
  App.tsx               # Root component
  main.tsx              # React entry point
  index.css             # Global styles + Tailwind
```

---

## Pushing to GitHub

1. Create a new repo on [github.com](https://github.com/new)
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## Deploy to Vercel (free)

1. Push to GitHub (above)
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Vercel auto-detects Vite — just click Deploy

Done! Your site is live. 🎉
