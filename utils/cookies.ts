import { $cookies } from './axios'
const TOKEN_KEY: string = 'nuxt-token'

export const getToken = () => $cookies.get(TOKEN_KEY)

export const setToken = (token: string) => $cookies.set(TOKEN_KEY, token)

export const removeToken = () => $cookies.remove(TOKEN_KEY)
