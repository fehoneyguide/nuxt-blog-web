<template>
  <div class="release-btn">
    <button @click="handleRelease">发布</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useRouter,
  computed,
  ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  head: {},
  setup() {
    const handleRelease = (): void => {}
    return {
      handleRelease,
    }
  },
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
