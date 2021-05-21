// Vuex supports basic typing functionality out of the box
import type { GetterTree, MutationTree } from 'vuex'

export const namespace = 'user'
export interface IUserState {
  showRegisterFlag: boolean
}

export const state = (): IUserState => ({
  showRegisterFlag: false,
})
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  showRegisterFlag: (state) => state.showRegisterFlag,
}
export const MutationType = {
  CHANGE_SHOW_REGISTER: 'changeShowRegisterFlag',
}

export const mutations: MutationTree<RootState> = {
  [MutationType.CHANGE_SHOW_REGISTER]: (
    state: { showRegisterFlag: boolean },
    newShowRegisterFlag: boolean
  ) => {
    state.showRegisterFlag = newShowRegisterFlag
  },
}
