<template>
  <li class="item">
    <div class="itemsap">
      <a>
        <img :src="item.avatar_large" alt="" class="avatar" />
        <div class="info-box">
          <a
            ><span class="username"> {{ item.user_name }}</span>
          </a>
          <div class="detail">{{ item.description || '还没有啊~' }}</div>
        </div>
        <button class="follow-btn">已关注</button>
      </a>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'

interface IFansItem {
  user_id: string
  user_name: string
  description: string
}
export default defineComponent({
  props: ['item'],
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.item {
  border-bottom: 1px solid rgba(230, 230, 231, 0.5);

  /* background-color: #fff; */
  border-radius: 10px;
  .itemsap {
    position: relative;
    box-sizing: border-box;
  }
}
a {
  display: flex;
  align-items: center;
  padding: 0.5rem 2.4rem;
  min-height: 7rem;
  cursor: pointer;
}
.avatar {
  flex: 0 0 auto;
  margin-right: 1.667rem;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
}
.info-box {
  flex: 1 1 auto;
  min-width: 0;
  position: relative;
  .username {
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.333rem;
    font-weight: 600;
    color: #2e3135;
  }
  .detail {
    position: absolute;
    top: 66px;
    left: 26px;
    font-size: 1rem;
    font-weight: 500;
    color: #b9c0c8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.follow-btn {
  flex: 0 0 auto;
  margin: 0 0 0 1rem;
  padding: 0;
  width: 7.5rem;
  height: 2.5rem;
  font-size: 1rem;
  color: #92c452;
  background-color: #fff;
  border: 1px solid #92c452;
  border-radius: 2px;
}
</style>
