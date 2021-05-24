import { Store, ActionTree } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import User from '~/store/user'

interface RootState {
  userModule: User
}

// eslint-disable-next-line import/no-mutable-exports
let UserModule: User
export const actions: ActionTree<RootState, RootState> = {}

function initStore(store: Store<any>): void {
  UserModule = getModule(User, store)
}

export { initStore, UserModule }
