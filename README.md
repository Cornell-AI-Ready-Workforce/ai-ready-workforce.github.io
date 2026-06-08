# AIW Website

Website for AI-Ready Workforce, a Cornell research initiative focused on simulation-based assessment, evidence traces, and human review for AI-ready skills.

The earlier concept and variant routes were removed. The current production site is deployed at:

- `https://ai-ready-workforce.vercel.app/`

## Deployment

`SITE_CANONICAL_ORIGIN` controls where legacy routes redirect. Leave it unset for the current Vercel deployment before June 15, 2026; set it to `https://ai-ready-workforce.ai.cornell.edu` when the Cornell deployment becomes canonical.

GitHub Pages deploys from `Cornell-AI-Ready-Workforce/ai-ready-workforce.github.io` through `.github/workflows/pages.yml`. Before the custom domain is active, the workflow builds with `GITHUB_PAGES_BASE_PATH=/ai-ready-workforce.github.io` so the project Pages URL can load assets. After `https://ai-ready-workforce.ai.cornell.edu` is configured in GitHub Pages and Cornell DNS, set the repository variable `PAGES_CUSTOM_DOMAIN=true` so future builds target the domain root.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If that port is already in use:

```bash
npm run dev -- --port 3001
```

## Project Structure

- `src/app/page.tsx` renders the current website.
- `src/components/landing/landing-page.tsx` contains the landing page content, motion, and layout.
- `src/components/ui/` keeps only the UI primitives used by the site.
- `public/images/` contains the active hero, assessment, logo, and team portrait assets.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint checks.
