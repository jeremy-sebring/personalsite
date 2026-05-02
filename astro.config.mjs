import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkGfm from 'remark-gfm';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://jeremysebring.com',
  output: 'static',

  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx({ remarkPlugins: [remarkGfm] }),
  ],

  adapter: cloudflare()
});