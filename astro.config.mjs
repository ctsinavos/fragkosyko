import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fragkosiko.gr',
  i18n: {
    defaultLocale: 'el',
    locales: ['el', 'en'],
    routing: {
      prefixDefaultLocale: false, // Greek (default) has no prefix; English uses /en/
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're using our own global.css
    }),
    sitemap({
      i18n: {
        defaultLocale: 'el',
        locales: {
          el: 'el-GR',
          en: 'en-US',
        },
      },
    }),
  ],
});
