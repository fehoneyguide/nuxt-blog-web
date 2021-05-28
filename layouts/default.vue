<template>
  <div id="vast-app">
    <div class="view-container">
      <VastMainHeaderBox></VastMainHeaderBox>
      <nav class="view-nav">
        <ul class="sub-tag">
          <li v-for="item in subTitleList" :key="item.id" class="nav-item">
            <nuxt-link :to="item.to"> {{ item.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="main">
        <Nuxt />
      </div>
      <!-- <VastMainContainer></VastMainContainer> -->
      <!-- <VastFollowBiLi /> -->
      <!-- <section class="box"></section> -->
    </div>

    <div class="global-component-box">
      <vast-suspension-panel></vast-suspension-panel>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute, watch, ref } from '@nuxtjs/composition-api'
import VastSuspensionPanel from '~/components/VastSuspensionPanel.vue'

export default defineComponent({
  components: { VastSuspensionPanel },
  setup() {
    const route = useRoute()
    const routeUrl = ref('index')
    const subTitleList = ref([
      // {
      //   id: '1',
      //   name: '计算机通识',
      //   to: '/computer',
      // },
    ])
    const handleSubTitle = () => {
      if (
        routeUrl.value === 'fans-vast' ||
        (routeUrl.value === 'fans-bili') | (routeUrl.value === 'fans-juejin')
      ) {
        subTitleList.value = [
          {
            id: '1',
            name: '站内用户',
            to: '/fans/vast',
          },
          {
            id: '2',
            name: 'B站粉丝',
            to: '/fans/bili',
          },
          {
            id: '3',
            name: '掘金粉丝',
            to: '/fans/juejin',
          },
        ]
      } else if (
        routeUrl.value === 'events-hot' ||
        routeUrl.value === 'events-lottery'
      ) {
        subTitleList.value = [
          {
            id: '1',
            name: '热门活动',
            to: '/events/hot',
          },
          {
            id: '2',
            name: '抽奖进行时',
            to: '/events/lottery',
          },
        ]
      } else if (routeUrl.value === 'label') {
        subTitleList.value = [
          {
            id: '1',
            name: '全部标签',
            to: '/label',
          },
        ]
      } else if (routeUrl.value === 'home') {
        subTitleList.value = [
          {
            id: '1',
            name: '全部文章',
            to: '/home',
          },
        ]
      } else {
        subTitleList.value = []
      }
    }

    watch(
      () => route.value.name,
      (newParams) => {
        routeUrl.value = newParams
        handleSubTitle()
      },
      {
        immediate: true,
      }
    )

    return {
      subTitleList,
    }
  },
})
</script>

<style lang="scss" scoped>
#vast-app {
  overflow-x: initial;
  .main {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    display: block;
    margin-top: 4.4rem;
  }
  .view-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    .view-nav {
      left: 0;
      background-color: #fff;
      position: fixed;
      width: 100%;
      z-index: 100;
      height: 3.83rem;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
      transition: all 0.2s;
      transform: translateZ(0);
      .sub-tag {
        max-width: 800px;
        margin: auto;
        display: flex;
        align-items: center;
        line-height: 1;
        height: 100%;
        .nav-item {
          height: 100%;
          float: left;
          position: relative;
          display: flex;
          flex-shrink: 0;
          font-size: 1.16rem;
          color: #71777c;
          align-items: center;
          padding: 0 1rem 0 0;
          a {
            cursor: pointer;
            text-decoration: none;
            color: #71777c;
          }
        }
        a.nuxt-link-exact-active {
          color: #007fff;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
