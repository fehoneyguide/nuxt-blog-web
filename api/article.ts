import { $axios } from '~/utils/axios'
/**
 * @description 文章的封面
 * @param params
 * @returns
 */
export const coverApi = () =>
  $axios({
    url: 'upload/cover',
    method: 'post',
    // params,
  })

/**
 * @description 创建一篇文章
 * @param params
 * @returns
 */
export const createApi = (data: object) =>
  $axios({
    url: 'article',
    method: 'post',
    data,
  })
