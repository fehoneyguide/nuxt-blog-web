import { $axios } from '~/utils/axios'

interface IParams {
  articleId: string | number
  cotent: string
}

export const createComm = (data: IParams) =>
  $axios({
    url: 'comment',
    method: 'post',
    data,
  })
