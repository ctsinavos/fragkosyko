import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://fragkosyko.com',
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're using our own global.css
    }),
  ],
});

