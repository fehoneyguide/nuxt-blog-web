<template>
  <div class="vast-header-box">
    <header v-if="isShowHeader" class="main-header">
      <div class="container">
        <vast-header-logo></vast-header-logo>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list"></li>
            <li class="nav-item-search"></li>
            <li class="nav-item-avatar"></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const isShowHeader = ref(true)
    return {
      isShowHeader,
    }
  },
})
</script>
<style lang="scss">
.vast-header-box {
  height: 5rem;
  position: relative;
  .main-header {
    background-color: #fff;
    transform: translateZ(0);
    height: 4rem;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    z-index: 250px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.2s;
    .container {
      max-width: 960px;
      margin: auto;
      height: 100%;
      display: flex;
      align-items: center;
      .main-nav {
        height: 100%;
        flex: 1 0 auto;
      }
    }
  }
}
</style>
