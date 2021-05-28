<template>
  <div class="suspension-panel">
    <button
      v-if="isShowTopBtn"
      type="button"
      class="to-top"
      title="回到顶部"
      @click.stop="handleBackTop"
    >
      <i class="el-icon-caret-top"></i>
    </button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'VastSuspensionPanel',
  setup() {
    const currScrollTop = ref(0) // 当前滚动高度
    const handleBackTop = () => {
      document.querySelector('#vast-app')?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }

    const handleOnScroll = () => {
      if (document.scrollingElement?.scrollTop) {
        currScrollTop.value = document.scrollingElement?.scrollTop
      }
    }
    const isShowTopBtn = computed(() => currScrollTop.value > 100)
    const throttle = (fn: any, interval = 500) => {
      let run = true

      return function () {
        if (!run) return
        run = false
        setTimeout(() => {
          fn.apply()
          run = true
        }, interval)
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', throttle(handleOnScroll))
    })
    return {
      handleBackTop,
      isShowTopBtn,
    }
  },
})
</script>

<style lang="scss" scoped>
.suspension-panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 2000;
  .to-top {
    font-size: 1.6rem;
    margin: 1rem 0 0;
    padding: 0;
    width: 3.33rem;
    height: 3.33rem;
    line-height: 1;
    color: #909090;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(0 0 0 / 5%);
    cursor: pointer;
    transition: bottom 1s;
    i {
      line-height: 1;
      color: #909090;
    }
  }
}
</style>
