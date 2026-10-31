# Jeremy Sebring's Personal Website

Built with [Astro](https://astro.build) + React islands, styled with Tailwind CSS and shadcn/ui, deployed as static assets on Cloudflare Workers.

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

The site builds to a fully static `dist/` and is served by the `personalsite` Cloudflare Worker.

- **Build command:** `pnpm build`
- **Output directory:** `dist`
- **Node version:** 22.23.4 or newer in the Node 22 release line (see `.nvmrc`)

Cloudflare Workers Builds installs the pinned pnpm version, runs `pnpm build`, and deploys `dist/` using `npx wrangler deploy` when `main` changes.

### Cloudflare Web Analytics

Set `PUBLIC_CF_ANALYTICS_TOKEN` in the Worker build's environment variables to enable the beacon.
