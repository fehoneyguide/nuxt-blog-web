import { Plugin } from '@nuxt/types'
// import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
// import { initAxios, initCookies } from '~/utils/axios'
const axiosAccessor: Plugin = (ctx) => {
  console.log(ctx)
  // initAxios($axios)
  // initCookies($cookies)
  // $axios.onRequest((config: AxiosRequestConfig) => {
  //   config.startTime = Date.now()
  //   console.log('发起请求' + config.url)
  // })
}

// export default function ({ $axios }) {

//   $axios.onError((err) => {
//     console.error('请求发生错误', err)
//   })
// }

export default axiosAccessor
