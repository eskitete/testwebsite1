# ProFix Handyman — Vite + React + Tailwind Template

Production-ready handyman business website template built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack
- Vite + React + TypeScript
- Tailwind CSS (custom colors, fonts, container)
- Framer Motion (animations with reduced-motion support)
- React Router (code-split routes)
- Icons: `lucide-react`
- Forms: React Hook Form + zod
- SEO: `react-helmet-async` + JSON-LD helper
- Tests: Vitest + Testing Library

## Getting Started

### Install
pnpm install

### Develop
pnpm dev

Open http://localhost:5173

### Build
pnpm build

### Preview
pnpm preview

### Lint & Format
pnpm lint
pnpm format

### Test
pnpm test

## Deploy

### Netlify
- Build command: `pnpm build`
- Publish directory: `dist`
- Framework preset: Vite/React

### Vercel
- Import project → Framework: Vite
- Build command: `pnpm build`
- Output directory: `dist`

## Project Structure
- `src/routes/*`: Pages (Home, Services, Gallery, About, Pricing, Contact, 404)
- `src/components/*`: UI components (Header, Footer, Hero, ServiceCard, TestimonialCard, BeforeAfterSlider, ContactForm, CTASection, ScrollReveal)
- `src/components/ui/*`: Primitives (`Button`, `Input`, `Textarea`, `Select`, `Badge`)
- `src/lib/*`: Utilities (`cn`, `analytics` stub, `seo` with `Meta` + JSON-LD)
- `public/*`: Images and favicon (placeholders, easy to replace)

## Branding & Theme
- Colors are defined in `tailwind.config.ts` under `theme.extend.colors`:
  - primary: `#2563EB`
  - secondary: `#0EA5E9`
  - accent: `#F59E0B`
  - neutral: `#0F172A`
  - surface: `#FFFFFF`
- Fonts: Inter (body), Poppins (headings) are loaded in `index.html` and configured in Tailwind (`fontFamily.sans`, `fontFamily.heading`).
- Dark mode: system default with toggle in the header. Implementation: `src/theme/ThemeProvider.tsx`.

## Images
Replace the placeholder SVGs in `public/images/*` and `public/favicon.svg` with your brand assets. Keep paths the same for instant updates.

## SEO
- Base meta tags in `index.html`.
- Per-page meta via `<Meta />` component in `src/lib/seo.tsx`.
- LocalBusiness JSON-LD with `<LocalBusinessJsonLd />` on key pages (Home, Contact). Update name/phone/area served.

## Forms
`ContactForm` uses React Hook Form + zod for client validation. It posts to `/api/contact` (not implemented in this template).

Options to wire emails:
- Formspree: Replace fetch() call with Formspree endpoint. Example:
  ```ts
  await fetch('https://formspree.io/f/your-id', { method: 'POST', body: new FormData(formEl) })
  ```
- EmailJS: Use the `emailjs` SDK in the submit handler.
- Serverless: Create `/api/contact` on Netlify/Vercel to send email via your provider.

Notes:
- In development, a failed POST will simulate success for UX verification. Remove that branch in production.

## TODOs to Personalize
- Update phone number (`+1 (555) 123-4567`) in Header, CTA, Contact.
- Update service areas (Footer, JSON-LD).
- Replace testimonials in Home with real reviews.
- Swap placeholder images.
- Implement `/api/contact` or hook Formspree/EmailJS.

## Accessibility & UX
- Semantic HTML, focus-visible styles, color-contrast friendly.
- Motion respects reduced-motion.
- Smooth scrolling for anchors.

## Testing
- Minimal tests for Before/After slider logic and contact form validation.

## License
MIT — see `LICENSE`.

