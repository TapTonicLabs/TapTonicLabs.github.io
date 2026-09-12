# TapTonic Labs

The marketing site for TapTonic Labs, an independent mobile app studio. Built with React + Vite and deployed to GitHub Pages.

Live at [taptoniclabs.github.io](https://taptoniclabs.github.io) (or the studio's custom domain, if configured).

## What's here

- `src/` — the landing page (React): hero, app portfolio, philosophy section, contact
- `public/apps/` — static per-app pages (privacy policy, terms of service, support) served at `/apps/<AppName>/`, linked from app store listings
- `public/app-ads.txt` — ad network authorization file

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL to view the site with hot module reload.

## Building

```bash
npm run build
```

Outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deployment

Pushes to `main` trigger [`.github/workflows/`](.github/workflows) to build the site and deploy `dist/` to GitHub Pages automatically — no manual deploy step needed.

## Adding a new app

1. Add the app's icon to `src/assets/` and an entry to the `APPS` array in [`src/App.jsx`](src/App.jsx).
2. Add its static pages (index, privacy policy, terms of service) under `public/apps/<AppName>/`.
3. Push to `main` — the site rebuilds and redeploys automatically.

## Tech stack

- [React](https://react.dev) 18
- [Vite](https://vitejs.dev) 5
- Plain CSS ([`src/App.css`](src/App.css)) — no CSS framework
