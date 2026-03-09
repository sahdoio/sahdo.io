// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Lucas Sahdo | Software Engineer',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        { name: 'description', content: 'Senior Software Engineer specializing in PHP, Laravel, Node.js and system architecture.' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      hashnodeHost: process.env.HASHNODE_PUBLICATION_HOST || 'sahdo.io'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [{ src: '~/plugins/prism' }],
})