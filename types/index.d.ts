/**
 * @description https://dev.to/carlomigueldy/getting-started-with-nuxt-composition-api-typescript-417f
 */
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance
  }
  interface Context {
    $axios: NuxtAxiosInstance
  }
}
declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $axios: NuxtAxiosInstance
  }
}

export interface IAppConfig {
  host: string | number // 主机
  port: number | string
}
