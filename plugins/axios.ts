import { Plugin } from '@nuxt/types'
import { AxiosRequestConfig } from 'axios'
import { initAxios, initCookies } from '~/utils/axios'
import { UserModule } from '~/store'
const axiosAccessor: Plugin = (ctx) => {
  const {
    error,
    app: { $axios, $cookies },
  } = ctx
  initAxios($axios)
  initCookies($cookies)

  $axios.onRequest((config: AxiosRequestConfig) => {
    console.log('发起了请求~')
    console.log('token', UserModule.token)
    if (UserModule.token) {
      config.headers.Authorization = `Bearer ${UserModule.token}`
    }
    return config
  })

  $axios.onError((err) => {
    console.error('请求发生错误', err)
  })

  $axios.interceptors.response.use(
    (response: any) => {
      const { data, status } = response
      if (status === 200) {
        return data
      } else {
        error({ statusCode: status, message: data.message })
      }
    }
    // (err: any) => {
    //   // const {} = err.response
    // }
  )
}

export default axiosAccessor
