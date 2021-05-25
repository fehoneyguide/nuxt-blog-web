import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'create',
  namespaced: true,
  stateFactory: true,
})
export default class App extends VuexModule {
  public changeReleaseShow: boolean = false

  @Mutation
  private CHANGE_RELEASE_SHOW(changeReleaseShow: boolean) {
    console.log(changeReleaseShow)
    this.changeReleaseShow = changeReleaseShow
  }
}
