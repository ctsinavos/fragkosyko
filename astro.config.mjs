import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://fragkosiko.gr',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el'],
    routing: {
      prefixDefaultLocale: true, // /en/about for English, /el/about for Greek
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're using our own global.css
    }),
  ],
});

