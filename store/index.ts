import { Store } from 'vuex'

import { initStore } from '~/utils/store'

const initializer = (store: Store<any>) => initStore(store)

export const plugins = [initializer]

export * from '~/utils/store'
