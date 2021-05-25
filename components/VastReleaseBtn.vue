<template>
  <div class="release-btn">
    <button @click.stop="handleRelease">发布</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api'
import { Store } from 'vuex'
export default defineComponent({
  setup() {
    const store: Store<any> = useStore()
    const handleRelease = (): void => {
      store.commit('create/CHANGE_RELEASE_SHOW', true)
    }
    return {
      handleRelease,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
.release-btn {
  button {
    height: 32px;
    padding: 2px 16px;
    font-size: 14px;
    line-height: 22px;
    border: 1px solid #1d7dfa;
    border-radius: 2px;
    cursor: pointer;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #1d7dfa;
  }
}
</style>
