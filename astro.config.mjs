// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hindzerowaste.com',
  // Page addresses match the current site (e.g. /rotary-trommel-machines) so
  // existing Google rankings and shared links keep working after launch.
  trailingSlash: 'ignore',
  // The project record now lives on the About page.
  redirects: {
    '/projects': '/about-us#projects',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'mr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/colour-preview'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' },
      },
    }),
  ],
});
