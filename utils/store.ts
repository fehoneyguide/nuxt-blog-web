import { Store, ActionTree } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import User from '~/store/user'
import Label from '~/store/label'

interface RootState {
  userModule: User
  labelModule: Label
}

// eslint-disable-next-line import/no-mutable-exports
let UserModule: User, LabelModule: Label
export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit() {
    UserModule.SetToken()
  },
}

function initStore(store: Store<any>): void {
  UserModule = getModule(User, store)
  LabelModule = getModule(Label, store)
}

export { initStore, UserModule, LabelModule }
