import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  build: {
    transpile: [/^element-ui/],
  },
  buildModules: [
    '@nuxtjs/composition-api/module', // Nuxt Composition-Api
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/typescript
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/styles/reset.scss',
    '~/assets/styles/global.scss',
    '~/assets/styles/ele-ui.scss',
  ],
  // router: {
  //   middleware: ['auth'],
  // },
  env: {},
  components: true,
  head: {
    title: '前端厚说',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A boilerplate to start a Nuxt+TS project quickly',
      },
      { hid: 'ebook-home referrer', name: 'referrer', content: 'never' },
    ],
    link: [],
  },
  loading: { color: '#0c64c1' },
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', 'cookie-universal-nuxt'],
  proxy: [
    // '/api/v1':{},
  ],
  publicRuntimeConfig: {
    axios: {
      // baseURL: 'http://101.201.148.180:3009/api/v1/', // Used as fallback if no runtime config is provided
      baseURL: 'http://127.0.0.1:2222/api/v1/', // Used as fallback if no runtime config is provided
    },
  },
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/element-ui',
    '~/plugins/highlight',
    { src: '~/plugins/bus.js', ssr: false },
    { src: '@/plugins/vue-mavon-editor', ssr: false },
  ],
}

export default config
