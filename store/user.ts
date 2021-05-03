import type { Context } from '@nuxt/types'
import type { MutationTree } from 'vuex'

// export const namespace = 'user'
export interface IUserState {
  showRegisterFlag: boolean // 是否展示注册的弹窗
}
export const state = (): IUserState => ({
  showRegisterFlag: false,
})

export const MutationType = {
  CHANGE_SHOW_REGISTER: 'changeShowRegisterFlag',
}

export const mutations: MutationTree<IUserState> = {
  [MutationType.CHANGE_SHOW_REGISTER]: (
    state: { showRegisterFlag: boolean },
    newShowRegisterFlag: boolean
  ) => {
    console.log(newShowRegisterFlag)
    state.showRegisterFlag = newShowRegisterFlag
  },
}
