<template>
  <nuxt-link to="">
    <div class="events-inner">
      <div class="banner" v-if="item.id === '0'"></div>
      <div class="banner1" v-if="item.id === '1'"></div>
      <div class="banner2" v-if="item.id === '2'"></div>
      <div class="banner3" v-if="item.id === '3'"></div>
      <div class="banner4" v-if="item.id === '4'"></div>

      <div class="message">
        <div class="title">{{ item.title }}</div>
        <div class="date">
          <span class="el-icon-date"></span>
          <span>{{ item.date }}</span>
        </div>
        <div class="bottom">
          <div class="address">
            <span>不限</span>
          </div>
          <div
            class="btn-jsoin"
            :class="item.isEnd ? 'is-end' : ''"
            @click="handleToDetail($event, item.descUrl)"
          >
            活动详情
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
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
  props: ['item'],
  setup(_props) {
    const handleToDetail = (_: any, descUrl: string) => {
      window.open(`${descUrl}`, `_blank`)
    }
    return {
      handleToDetail,
    }
  },
})
</script>
<style lang="scss" scoped>
a {
  transition: all 0.2s linear;
  cursor: pointer;
  width: 25%;
  padding-left: 7px;
  padding-right: 7px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
}
.events-inner {
  border-radius: 2px;
  overflow: hidden;
  color: #333;
  background-color: #fff;
  .banner {
    /* background-image: url('~assets/images/info.png'); */
    background-size: cover;
    padding-top: 58.82%;
    background-color: #ccc;
    background-repeat: no-repeat;
  }
  .banner1 {
    background-image: url('~assets/images/info.png');
    background-size: cover;
    padding-top: 58.82%;
    background-color: #ccc;
    background-repeat: no-repeat;
  }
  .banner2 {
    background-image: url('~assets/images/star.png');
    padding-top: 58.82%;
    background-size: cover;
    background-color: #ccc;
    background-repeat: no-repeat;
  }
  .banner3 {
    background-image: url('~assets/images/gaoji.jpg');
    background-size: cover;
    padding-top: 58.82%;
    background-color: #ccc;
    background-repeat: no-repeat;
  }
  .banner4 {
    background-image: url('~assets/images/juejin.png');
    background-size: cover;
    padding-top: 58.82%;
    background-color: #ccc;
    background-repeat: no-repeat;
  }

  .message {
    padding: 20px 12px 15px;
    .title {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      height: 40px;
      font-size: 14px;
      font-weight: 700;
    }
    .date {
      margin-top: 6px;
      color: #333;
    }
    .bottom {
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      .btn-jsoin {
        width: 100px;
        height: 25px;
        border-radius: 30px;
        background-color: #4d91fd;
        line-height: 25px;
        color: #fff;
        text-align: center;
      }
      .is-end {
        background-color: #aaa;
      }
    }
  }
}
</style>
