# Jeremy Sebring's Personal Website

Built with [Astro](https://astro.build) + React islands, styled with Tailwind CSS and shadcn/ui, deployed on Cloudflare Pages.

## Getting Started

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command         | Action                                       |
| --------------- | -------------------------------------------- |
| `pnpm dev`      | Start the local dev server                   |
| `pnpm build`    | Build the static site to `./dist/`           |
| `pnpm preview`  | Preview the production build locally         |
| `pnpm check`    | Run `astro check` for type-checking          |

## Deployment

The site builds to a fully static `dist/` and is served by Cloudflare Pages.

- **Framework preset:** Astro
- **Build command:** `pnpm build`
- **Output directory:** `dist`
- **Node version:** 22 (Cloudflare's Workers Builds image caps at 22 as of 2026-06; bump to 24 when their image picks it up)

Cloudflare Pages auto-detects `pnpm-lock.yaml` and uses pnpm.

### Cloudflare Web Analytics

Set `PUBLIC_CF_ANALYTICS_TOKEN` in the Pages project's environment variables to enable the beacon.
