<template>
  <div class="article-suspended-panel">
    <div class="comment-btn panel-btn comment-adjust"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.article-suspended-panel {
  position: fixed;
  margin-left: -7rem;
  top: 16rem;
  .comment-adjust {
    background-position: 50% 55%;
    position: relative;
    margin-bottom: 0.75rem;
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
    background-image: url('https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/7fc22c26599fcf0896e91e8c8cf93549.svg');
  }
}
</style>
