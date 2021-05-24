import { $axios } from '~/utils/axios'
export const login = (data: object) =>
  $axios({
    url: 'api/v1/user/login',
    method: 'post',
    data,
  })
