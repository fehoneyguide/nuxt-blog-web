// Vuex supports basic typing functionality out of the box
// import type { Context } from '@nuxt/types'
import type { GetterTree, MutationTree, ActionTree } from 'vuex'

import { login } from '~/api'
export const namespace = 'user'
export interface IUserState {
  showRegisterFlag: boolean
  token: string
  isLogin: boolean
}

export const state = (): IUserState => ({
  showRegisterFlag: false,
  token: '',
  isLogin: false,
})
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  showRegisterFlag: (state) => state.showRegisterFlag,
}
export const MutationType = {
  CHANGE_SHOW_REGISTER: 'changeShowRegisterFlag',
  CHANGE_IS_LOGIN: 'changeIsLogin',
  SET_TOKEN: 'set_token',
}

export const mutations: MutationTree<RootState> = {
  [MutationType.CHANGE_SHOW_REGISTER]: (
    state: IUserState,
    newShowRegisterFlag: boolean
  ) => {
    state.showRegisterFlag = newShowRegisterFlag
  },
  [MutationType.CHANGE_IS_LOGIN]: (state: IUserState, newVal: boolean) => {
    state.isLogin = newVal
  },
  [MutationType.SET_TOKEN]: (state: IUserState, newVal: string) => {
    state.token = newVal
  },
}

export const actionType = {
  LOGIN: 'login',
}

export const actions: ActionTree<RootState, RootState> = {
  // nuxtServerInit({ commit }, _context: Context) {},

  async [actionType.LOGIN]({ commit }, payload) {
    try {
      const res = await login(payload)
      console.log(res)
    } catch (error) {}
  },
}
