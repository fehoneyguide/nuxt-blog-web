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

/**
 * @description 获取文章列表
 * @param params
 * @returns
 */
export const articleListApi = (params: object) =>
  $axios({
    url: 'article',
    method: 'get',
    params,
  })
/**
 * @description 获取文章的详情
 * @param params
 * @returns
 */
export const articleDetailApi = (id: string) =>
  $axios({
    url: `article/${id}`,
    method: 'get',
  })
