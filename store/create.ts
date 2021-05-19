import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const namespace = 'create'

export interface IShowPublishPopupState {
  isShow: boolean
}

export const state = (): IShowPublishPopupState => ({
  isShow: false,
})

export const MutationType = {
  CHANGE_SHOW: 'changeShow',
}

export const mutations: MutationTree<IShowPublishPopupState> = {
  [MutationType.CHANGE_SHOW]: (state, newVal: boolean) => {
    state.isShow = newVal
  },
}
