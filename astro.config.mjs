import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://jeremysebring.com',
  output: 'static',
  markdown: { processor: unified({ remarkPlugins: [remarkGfm] }) },
  integrations: [
    react(),
    mdx(),
  ],
});
