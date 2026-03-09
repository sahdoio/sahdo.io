// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      hashnodeHost: process.env.HASHNODE_PUBLICATION_HOST || 'sahdo.io'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [{ src: '~/plugins/prism' }],
})