import { $axios } from '~/utils/axios'
import { IPageParams } from '~/types/create'
/**
 * @description 获取所有的标签
 * @param data
 * @returns
 */
export const labelListApi = (params: IPageParams) =>
  $axios({
    url: 'label',
    method: 'get',
    params,
  })
