<template>
  <div class="main-header-box">
    <header class="main-header">
      <div class="container">
        <VastHeaderLogo />
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <ul class="phone-hide">
                <li
                  class="nav-item"
                  v-for="item in mainTitleList"
                  :key="item.id"
                >
                  <nuxt-link :to="item.to">{{ item.name }}</nuxt-link>
                </li>
              </ul>
            </li>
            <section class="right"></section>
            <li class="nav-item search">
              <VastHeaderSearch />
            </li>
            <li class="nav-item add">
              <VastMainHeaderCreation />
            </li>
            <li class="nav-item autu">
              <VastHeaderRegisterBtn />
              <VastHeaderLoginBtn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <el-dialog
      visible.sync="true"
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
    const mainTitleList = ref([
      {
        id: '1',
        name: '首页',
        to: '/home',
      },
      {
        id: '2',
        name: '互鱼',
        to: '/fish',
      },
      {
        id: '3',
        name: '教程',
        to: '/tutorial',
      },
      {
        id: '4',
        name: '粉丝',
        to: '/fans',
      },
      {
        id: '5',
        name: '活动',
        to: '/events',
      },
    ])
    return {
      dialogVisible,
      mainTitleList,
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
          justify-content: space-evenly;
          height: 100%;
          margin: 0;
          position: relative;
          .main-nav-list {
            display: flex;
            .phone-hide {
              display: flex;
              .nav-item {
                padding: 0 1.5rem;
                height: 5rem;
                color: #71777c;
                font-size: 1.3rem;
                justify-content: center;
                align-items: center;
                display: flex;
                margin: 0;
                a {
                  color: #71777c;
                  cursor: pointer;
                  text-decoration: none;
                }
              }
              a.nuxt-link-active {
                color: #007fff;
                cursor: pointer;
                text-decoration: none;
              }

              .search {
                flex: 1 1 auto;
                justify-content: flex-end;
                cursor: auto;
              }
              .add {
                cursor: default;
              }
            }
          }
        }
      }
    }
  }
}
</style>
