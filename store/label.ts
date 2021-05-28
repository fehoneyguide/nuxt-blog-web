import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { labelListApi } from '~/api'
import { IPageParams } from '~/types/user'

@Module({
  name: 'label',
  namespaced: true,
  stateFactory: true,
})
export default class App extends VuexModule {
  public labelLists: Array<object> = []

  @Mutation
  private CHANGE_LISTS(newVal: Array<object>) {
    this.labelLists = newVal
  }

  @Action
  public async getLabels(params: IPageParams) {
    try {
      const res: any = await labelListApi(params)
      if (res.code === 0) {
        this.CHANGE_LISTS(res.data)
      }
    } catch (error) {}
  }
}
