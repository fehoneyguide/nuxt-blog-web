<template>
  <div class="main-header-box">
    <header class="main-header">
      <div class="container">
        <VastHeaderLogo />
        <nav class="main-nav">
          <ul class="nav-list">
            <li></li>
            <li></li>
            <li></li>
            <li class="nav-item autu">
              <VastHeaderRegisterBtn />
              <VastHeaderLoginBtn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <el-dialog
      :visible.sync="dialogVisible"
      width="23.5rem"
      :close-on-click-modal="false"
    >
      <VastIndexRegister />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  head: {},
  setup() {
    const dialogVisible = ref(true)

    return {
      dialogVisible,
    }
  },
})
</script>

<style lang="scss" scoped>
.main-header-box {
  height: 5rem;
  position: relative;
  line-height: normal;
  .main-header {
    z-index: 250;
    background-color: #fff;
    height: 5rem;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
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
      position: relative;
      .main-nav {
        height: 100%;
        flex: 1 0 auto;
        color: #909090;
        .nav-list {
          display: flex;
          align-items: center;
          height: 100%;
          margin: 0;
          justify-content: flex-end;
          position: relative;
        }
      }
    }
  }
}
</style>
