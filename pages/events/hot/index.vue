<template>
  <div class="events-wrap">
    <div class="events-list">
      <VastEventCard v-for="item in eventLists" :key="item.id" />
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
      {
        id: '1', // 活动id
        descUrl: '', //活动详情的url,
        title: '2021五一感恩粉丝大抽奖',
        date: '2021-05-05 周三',
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
