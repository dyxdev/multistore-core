// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
  },

  app: {
    baseURL: '/', // defaulted by nuxt
    // Look into HeadAndMeta.vue for the rest
    head: {
      meta: [{ charset: 'utf-8' }], // defaulted by nuxt
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    // '@nuxtjs/html-validator',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
    'nuxt-icon',
    "@nuxtjs/tailwindcss",
    'dayjs-nuxt',
    "@hebilicious/vue-query-nuxt",
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
    "@nuxtjs/i18n"
  ],
  ui: {
    icons: ['mdi', 'simple-icons','material-symbols']
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  // https://dev.to/jacobandrewsky/improving-performance-of-nuxt-with-fontaine-5dim
  fontMetrics: {
    fonts: ['Inter', 'Kalam'],
  },

  // https://dev.to/jacobandrewsky/optimizing-css-performance-in-nuxt-with-critters-4k8i
  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      // Default: 'media'
      preload: 'swap',
    },
  },

  // Vuetify's global styles
  css: [
    '@/assets/css/tailwind.css',
  ],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      'storeToRefs',
      'acceptHMRUpdate',
    ],
  },

  imports: {
    dirs: ['stores','components','composables','util'],
  },
  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      // Add more environment variables as needed
    },
  },
})