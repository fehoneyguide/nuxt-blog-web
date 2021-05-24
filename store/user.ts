// Vuex supports basic typing functionality out of the box
// import type { Context } from '@nuxt/types'

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { Notification } from 'element-ui'
import { login } from '~/api'
import { getToken, setToken, removeToken } from '~/utils/cookies'
import { userInfo, IUser } from '~/types/user'

@Module({
  name: 'user',
  namespaced: true,
  stateFactory: true,
})
export default class App extends VuexModule {
  public token: string = ''
  public userInfo: userInfo = {}
  public get username() {
    return this.userInfo.username || ''
  }

  public get avatar() {
    return this.userInfo.avatar || ''
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_USERINFO(userInfo: userInfo) {
    this.userInfo = userInfo
  }

  @Action
  public async login(loginInfo: IUser) {
    try {
      const res = await login(loginInfo)
      console.log(res)
    } catch (error) {}
  }
}
