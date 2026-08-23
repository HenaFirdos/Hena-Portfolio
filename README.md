# Hena Firdos — Engineering Portfolio

A production-ready, responsive portfolio for Hena Firdos, positioned across Full Stack, Backend, and GenAI engineering.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- Shadcn-style reusable UI primitives

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Structure

```text
src/
├── components/       # Page sections and interactive UI
│   └── ui/           # Reusable button and section primitives
├── data/             # Portfolio content and project links
├── hooks/            # Scroll-spy behavior
├── lib/              # Shared utilities
├── App.tsx
└── main.tsx
```

Portfolio content is centralized in `src/data/portfolio.ts` for easy editing. The downloadable résumé profile lives in `public/Hena-Firdos-Resume.html` and can be replaced by a PDF with the same linked filename if desired.
