<template>
  <div class="relea-container">
    <div class="top-main-title">
      <input type="text" class="ipt-content" placeholder="输入文章标题……" />
    </div>
    <div class="op-btns">
      <VastReleaseBtn />
    </div>
    <div class="mavonEditor">
      <no-ssr>
        <mavon-editor :toolbars="markdownOption" v-model="handBook" />
      </no-ssr>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useRouter,
  computed,
  ref,
  Ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  head: {},
  layout: 'editor',
  setup() {
    const handBook: Ref<string> = ref('')
    const markdownOption = ref({
      bold: true, // 粗体
    })

    return {
      markdownOption,
      handBook,
    }
  },
})
</script>

<style lang="scss" scoped>
.relea-container {
  position: relative;
  .op-btns {
    position: fixed;
    top: 2rem;
    right: 5rem;
  }
  .top-main-title {
    width: 100%;
    height: 5.334rem;
    .ipt-content {
      width: 100%;
      flex: 1 1 auto;
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: 500;
      color: #1d2129;
      border: none;
      outline: none;
      overflow: visible;
      padding-left: 2rem;
    }
  }
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
}
</style>
