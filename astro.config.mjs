// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://topdentistsfootscray.com.au',
  integrations: [tailwind(), sitemap()],
  image: {
    domains: ['astro.build'],
  },
});
