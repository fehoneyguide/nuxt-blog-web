import { NuxtAxiosInstance } from '@nuxtjs/axios'

import { NuxtCookies } from 'cookie-universal-nuxt'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initAxios(axiosIns: NuxtAxiosInstance) {
  $axios = axiosIns
}
// eslint-disable-next-line import/no-mutable-exports
let $cookies: NuxtCookies

export function initCookies(cookiesIns: NuxtCookies) {
  $cookies = cookiesIns
}

export { $axios, $cookies }
