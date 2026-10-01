# Monograph — Astro starter

A paper-and-ink design system ("Monograph") built as an Astro project. Static output, ready for
Cloudflare Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs static site to dist/
```

## Deploy to Cloudflare Pages

**Option A — Wrangler CLI (fastest):**

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=monograph
```

**Option B — Git integration:** push this folder to GitHub/GitLab, then in the Cloudflare
dashboard create a Pages project, connect the repo, and use:
- Build command: `npm run build`
- Build output directory: `dist`

## Structure

```
src/
  layouts/Base.astro      # HTML shell, imports monograph.css
  components/             # Nav, Card, Button, Tag, Stamp, SectionHead, Input
  pages/index.astro       # Demo home page
  styles/monograph.css    # The full design system (tokens + components)
```

## Customize

- Swap the accent: edit `--signal` in `src/styles/monograph.css` (alternatives commented inline).
- Dark mode: automatic via `prefers-color-scheme`.
- Fonts: Fraunces / Inter / IBM Plex Mono via Google Fonts; self-host for production.
