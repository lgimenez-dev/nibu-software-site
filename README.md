# Nibu Solutions

> Software That Drives Your Business

A responsive marketing website for **Nibu Solutions**, a fictional software company. It showcases a suite of fictional products (NimbusFlow, SentinelCore, AtlasDB Engine, PulseSync), how the team works, client testimonials, and a contact flow — the kind of site a real B2B software company would ship.

<img width="0" height="0" style="display:none;" alt="image" src="https://github.com/user-attachments/assets/79c3d140-1dfd-4dcd-900c-752b3b2a39ca" />


## Features

- **Home** — hero video, product showcase, feature highlights, stats, and testimonials
- **About Us** — team profiles, company values, and trusted-brands carousel
- **Contact** — validated contact form (React Hook Form + Zod) protected with Google reCAPTCHA
- **Support** — searchable/filterable directory of support technicians
- **Download** — product download cards
- Fully responsive layout with animated sections (Framer Motion, Lottie)

## Tech Stack

| Library | Version |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 7 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| React Router DOM | 7 |
| React Hook Form | 7 |
| Zod | 4 |
| shadcn/ui + Radix UI | — |
| Lottie React | 2 |
| Embla Carousel | 8 |
| Lucide React | 0.562 |

## Project Structure

```
src/
├── assets/        # Images, animations, videos, product icons
├── components/
│   ├── layout/    # Header, Footer
│   ├── shared/    # Reusable components (floating buttons, scroll-to-top, etc.)
│   └── ui/        # shadcn/ui primitives
├── hooks/         # Shared React hooks
├── lib/           # Utilities and helpers
└── pages/
    ├── home/
    ├── about-us/
    ├── contact/
    ├── support/
    └── download/
```

Each page folder is self-contained: components, constants, types, and hooks live next to the page that uses them.

## Getting Started

**Requirements:** Node.js 18+, pnpm

```bash
# Clone the repository
git clone https://github.com/lgimenez-dev/nibu-software-site.git
cd nibu-solutions-website

# Install dependencies
pnpm install

# Start the dev server
pnpm run dev
```

The app will be available at `http://localhost:3000`.

## Available Scripts

| Command | Description |
|---|---|
| `pnpm run dev` | Start the Vite dev server |
| `pnpm run build` | Type-check and build for production |
| `pnpm run lint` | Run ESLint |
| `pnpm run preview` | Preview the production build locally |

## Disclaimer

Nibu Solutions, its products, and testimonials are fictional and created solely for portfolio purposes.
