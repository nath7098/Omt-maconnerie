// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.omt-maconnerie-tours.fr'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],

  site: {
    url: siteUrl,
    name: 'O.M.T Maçonnerie Tours',
    defaultLocale: 'fr',
    trailingSlash: false,
  },

  runtimeConfig: {
    public: { siteUrl },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#2b2b2b' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'geo.region', content: 'FR-37' },
        { name: 'geo.placename', content: 'Tours' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  // Site 100 % statique : toutes les pages sont pré-générées en HTML (idéal pour le SEO)
  nitro: {
    prerender: { crawlLinks: true, routes: ['/', '/sitemap.xml'] },
  },

  sitemap: {
    exclude: ['/mentions-legales'],
  },

  experimental: { payloadExtraction: true },
})
