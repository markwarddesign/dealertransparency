# Dealer Transparency — RPM Platform

A marketing and revenue performance platform built for automotive dealerships. The site showcases a suite of data-driven tools — **RADAR**, **PACE**, and **MILES** — designed to help dealer groups unlock hidden revenue, optimize lead follow-up, and improve the customer experience.

## Live Site

[dealertransparency.com](https://dealertransparency.com)

---

## Products

| Product | Full Name | Status |
|---------|-----------|--------|
| **RADAR** | Retention & Advertising Drip | ✅ Live |
| **PACE** | Premium Acquisition & Exchange | 🔜 Coming Soon |
| **MILES** | Monthly Investment & Lifetime Savings | ✅ Live at [miles.dealertransparency.com](https://miles.dealertransparency.com) |

### RADAR
Automated CRM messaging that nurtures internet leads for months after initial contact — working 24/7 inside the dealership's existing CRM. Consistently achieves **70%+ contact rates** and generates an estimated **$3M in annual revenue** per dealer group.

### PACE
Turns service-lane customers into inventory acquisition opportunities — helping dealers source high-demand used vehicles before they hit the open market. Projected at **$5M in annual revenue** per dealer group.

### MILES
A transparent payment calculator that shows customers their true monthly investment and lifetime cost of ownership. Makes deals crystal clear and builds buyer confidence.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **React:** 19 with React Compiler
- **Deployment:** GitHub Pages via `gh-pages`

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main RPM landing page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── components/
│   │   ├── Header.tsx    # Sticky nav with dark/light mode
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   └── radar/
│       └── page.tsx      # RADAR product detail page
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
# Production build (static export)
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## Features

- **Dark / Light mode** — auto-detected from OS preference, toggled in the footer
- **Fully static export** — zero server dependency, hosted on GitHub Pages with a custom domain
- **Responsive design** — mobile-first layout with animated hero, card grid, and accordion sections
- **Accessible navigation** — keyboard-friendly mobile menu with ARIA attributes

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
