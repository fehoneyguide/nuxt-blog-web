import { $axios } from '~/utils/axios'
import { IPageParams } from '~/types/user'
/**
 * @description 登录接口
 * @param data
 * @returns
 */
export const login = (data: object) =>
  $axios({
    url: 'user/login',
    method: 'post',
    data,
  })
/**
 * @description 判断用户名是否ok
 * @param data
 * @returns
 */
export const isExitApi = (data: object) =>
  $axios({
    url: 'user/isExit',
    method: 'post',
    data,
  })

export const listApi = (params: IPageParams) =>
  $axios({
    url: 'user',
    method: 'get',
    params,
  })
