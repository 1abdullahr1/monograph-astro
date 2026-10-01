// @ts-check
import { defineConfig } from 'astro/config';

// Static output — deploys directly to Cloudflare Pages (dist/ folder).
// No adapter needed for static sites.
export default defineConfig({
  site: 'https://monograph.pages.dev',
});
