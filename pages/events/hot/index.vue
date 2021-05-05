<template>
  <div class="events-wrap">
    <div class="events-list">
      <VastEventCard v-for="item in eventLists" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref,
  useStore,
  computed,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const eventLists = ref([
      // {
      //   id: '0', // 活动id
      //   descUrl: '', //活动详情的url,
      //   title: '粉丝破1000大关(未来时)',
      //   date: 'xxxxxxx',
      //   isEnd: false,
      // },
      {
        id: '1', // 活动id
        descUrl: 'https://t.bilibili.com/516913002135599242?tab=2', //活动详情的url,
        title: '2021五一感恩粉丝大抽奖',
        date: '2021-05-05 周三',
        isEnd: false,
      },
      {
        id: '2', // 活动id
        descUrl: 'https://juejin.cn/user/3491704661872910/pins', //活动详情的url,
        title: '庆祝React项目破100标星 -送书2本',
        date: '2021-04-17 周六',
        isEnd: true,
      },
      {
        id: '3', // 活动id
        descUrl: 'https://space.bilibili.com/310726273/dynamic', //活动详情的url,
        title: '送《JS高程书一本》B站直播',
        date: '2021-02-05 周五',
        isEnd: true,
      },
      {
        id: '4', // 活动id
        descUrl: '', //活动详情的url,
        title: '投票抽奖得66元（掘金打榜）',
        date: '2021-01-24 周五日',
        isEnd: true,
      },
    ])

    return {
      eventLists,
    }
  },
})
</script>

<style lang="scss">
.events-wrap {
  overflow: hidden;
  width: 100%;
  .events-list {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-left: -7px;
    margin-right: -7px;
    width: 100%;
    margin-top: 10px;
  }
}
</style>
