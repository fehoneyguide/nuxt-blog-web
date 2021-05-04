<template>
  <nuxt-link to="">
    <div class="events-inner">
      <div class="banner"></div>
      <div class="message">
        <div class="title">2021五一感恩粉丝大抽奖</div>
        <div class="date">
          <span class="el-icon-date"></span>
          <span>2021-05-05 周三</span>
        </div>
        <div class="bottom">
          <div class="address">
            <span>不限</span>
          </div>
          <div class="btn-jsoin" @click="handleToDetail">活动详情</div>
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
  setup(_props) {
    console.log(_props)
    const handleToDetail = () => {
      window.open(`https://t.bilibili.com/516913002135599242?tab=2`, `_blank`)
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
    background-image: url('~assets/images/info.png');
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
    }
  }
}
</style>
