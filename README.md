# Royal Chai

A premium, royal-themed landing page for a luxury chai brand, built with Next.js and Tailwind CSS. The project features a rich aesthetic with gold and amber gradients, smooth animations, and interactive elements.

## Features

- **Royal Aesthetic**: Custom gold/amber color palette and serif typography.
- **Interactive Animations**: Floating ornaments, confetti effects on signup, and smooth scroll animations.
- **Custom Icons**: All icons are implemented as lightweight, inline SVGs (no external icon libraries).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Performance**: Built on Next.js 16 with optimized assets and animations.

## Folder Structure

```
.
├── app/                    # Next.js App Router directory
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── layout.tsx          # Root layout with metadata and font setup
│   └── page.tsx            # Main landing page composition
├── components/             # Reusable UI components
│   ├── EmailSignup.tsx     # Newsletter signup with confetti animation
│   ├── FloatingOrnaments.tsx # Background floating decorative elements
│   ├── Footer.tsx          # Site footer with social links
│   ├── Header.tsx          # Navigation bar with responsive mobile menu
│   ├── Hero.tsx            # Hero section with animated elements
│   ├── Logo.tsx            # Custom animated SVG logo component
│   └── StorySection.tsx    # "Our Story" section with cards
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration (custom colors/animations)
└── tsconfig.json           # TypeScript configuration
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: Custom Inline SVGs

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
