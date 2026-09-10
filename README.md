# AB Tech Agency — MVP Website

A single-page marketing site for AB Tech Agency, built with React, Tailwind CSS, and lucide-react icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Structure

```
ab-tech-agency/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx                 # React entry point
    ├── App.jsx                  # Composition: assembles all sections
    ├── index.css                # Tailwind imports + design tokens + custom scrollbar
    └── components/
        ├── Nav.jsx              # Sticky glass navigation with scroll-spy + mobile menu
        ├── Hero.jsx             # Landing section with animated network visual
        ├── NetworkGraphic.jsx   # SVG connected-systems graphic
        ├── Capability.jsx       # Capability cards
        ├── Services.jsx         # Service offerings
        ├── Solutions.jsx        # 6-step process grid
        ├── Projects.jsx         # Portfolio cards
        ├── TechStack.jsx        # Technology groups
        ├── About.jsx            # Intro + Mission / Vision
        ├── Values.jsx           # Company values
        ├── Why.jsx              # Reasons to build with us
        ├── CTA.jsx              # Call-to-action band
        ├── Contact.jsx          # Contact form + details
        ├── Footer.jsx           # Footer with nav + socials
        └── BackToTop.jsx        # Floating back-to-top button
```

## Design system

- **Theme** — Light mode is the default, with a dark mode toggle in the navigation
  (Sun/Moon button). Your choice is saved to `localStorage` (`ab-tech-theme`) and a
  small inline script in `index.html` applies it before paint to avoid a flash.
- All design tokens live in `src/index.css` as CSS variables under
  `:root[data-theme="light"]` and `:root[data-theme="dark"]`, so every section
  re-themes instantly.
- Accent palette: electric blue (`#3A63E8` / `#6B92FF`), cyan (`#0891B2` / `#22D3EE`),
  and teal/cyan-green (`#0D9488` / `#2AF2C8`) with theme-aware glow shadows.
- Custom themed scrollbar with a blue → cyan → teal gradient thumb.
- Reduced-motion support for animated elements.

## Notes

- The contact form is wired to **FormSubmit** and delivers submissions to
  `arielbyishimo250@gmail.com` (see `src/components/Contact.jsx`). It includes the
  submitter's email as the reply-to, so you can reply to them directly from your
  inbox, and auto-sends a thank-you email to the submitter.
  **First step:** submit the form once, then click the activation email FormSubmit
  sends to your inbox — until you do, submissions won't be forwarded.
- Replace the placeholder phone in the Contact section and the social links in the
  Footer with AB Tech Agency's real details.
- Project cards in the Portfolio section are labeled "Concept" / "Prototype" — swap
  in real project data as they become available.