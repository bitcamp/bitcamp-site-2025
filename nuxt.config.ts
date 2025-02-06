import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: 'netlify',
    externals: {
      inline: ['@vue/compiler-dom']
    },
  },

  typescript: {
    strict: true,
  },

  css: [
    '~/assets/css/global.css',
    '~/public/bitcamp-brand/bitcamp.css'
  ],
  compatibilityDate: '2024-09-13',
});
