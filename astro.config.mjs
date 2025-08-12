// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://barthollomew.github.io',
  base: '/top-dentists-footscray',
  integrations: [tailwind(), sitemap()],
  image: {
    domains: ['astro.build'],
  },
});
