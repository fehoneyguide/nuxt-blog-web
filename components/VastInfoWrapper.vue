<template>
  <div class="info-wrap">
    <div class="per-info">
      <!-- <img src="https://yayxs.github.io/avatar.jpg" alt="" class="per-img" /> -->
      <h3 class="name">vast</h3>
      <div class="num">
        <div class="left">
          <h3>222</h3>
          <h6>Article</h6>
        </div>
        <div class="right">
          <h3>10</h3>
          <h6>Tag</h6>
        </div>
      </div>
      <hr />
    </div>
    <h4 class="about">
      <i class="el-icon-user"></i>
      关于我
    </h4>
    <ul class="contact">
      <vast-info-wrapper-item
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></vast-info-wrapper-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const list = ref([
      {
        id: 1,
        name: 'bilibili',
        info: '洋小洋同学',
        link: 'https://space.bilibili.com/310726273',
        style: 'backgroundColor: rgb(242, 109, 109)',
      },
      {
        id: 2,
        name: '掘金',
        info: '洋小洋同学',
        link: 'https://juejin.cn/user/3491704661872910/posts',
        style: 'backgroundColor: rgb(251, 155, 95)',
      },
      {
        id: 3,
        name: '微信公众号',
        info: '前端厚说',
        link: '',
        style: 'backgroundColor: rgb(52, 152, 219)',
      },
      {
        id: 4,
        name: '知乎',
        info: 'vast',
        link: '',
        style: 'backgroundColor: rgb(244, 126, 96)',
      },
      {
        id: 5,
        name: 'QQ群',
        info: '713593204',
        link: '',
        style: 'backgroundColor: rgb(225, 91, 100)',
      },
    ])
    return {
      list,
    }
  },
})
</script>

<style lang="scss" scoped>
.info-wrap {
  position: sticky;
  top: 110px;
  overflow: hidden;
  transition: all 0.3s;
  margin-top: 15px;
  margin-left: 15px;
  flex: 0 0 300px;
  height: auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-sizing: border-box;
  padding: 0 15px;
  background-color: #fff;
  .per-info {
    display: block;
    padding-top: 1rem;
    img {
      display: block;
      margin: 2rem auto 1rem;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }
    .name {
      font-size: 1.8rem;
      text-align: center;
      color: #242424;
      line-height: 1.25;
      font-weight: 500;
    }
    .num {
      display: flex;
      margin: 0 auto 1rem;
      width: 80%;
      align-items: center;
      margin-top: 10px;
      .left {
        border-right: 1px solid #333;
        flex: 0 0 50%;
        text-align: center;
      }
      .right {
        text-align: center;
        flex: 0 0 50%;
      }
      h3 {
        font-size: 1.4rem;
        margin: 0 0 0.6rem;
        color: #242424;
        font-weight: 500;
      }
      h6 {
        color: #242424;
        margin: 0;
        font-weight: 500;
      }
    }
    hr {
      border: 0;
      border-top: 1px solid #eaecef;
    }
  }
  .about {
    color: #242424;
    font-weight: 500;
    line-height: 3;
    font-size: 1.4rem;
  }
  .contact {
    list-style: none;
    padding-left: 0;
  }
}
</style>
