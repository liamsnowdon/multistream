import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Multistream - Watch multiple Twitch and Youtube streams at once!',
  },

  buildModules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-windicss',
  ],
})
