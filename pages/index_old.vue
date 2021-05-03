<template>
  <div class="view-container">
    <VastMainHeaderBox></VastMainHeaderBox>
    <nav class="view-nav">
      <ul class="sub-tag">
        <li class="nav-item active">
          <nuxt-link to=""> 站内用户</nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link to=""> B站粉丝</nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link to=""> 掘金粉丝</nuxt-link>
        </li>
      </ul>
    </nav>
    <VastMainContainer></VastMainContainer>
    <!-- <VastFollowBiLi /> -->
    <!-- <section class="box"></section> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props) {
    onMounted(() => {
      // console.log(ctx.root.$router.push('/article/page'))
    })
  },
})
</script>

<style lang="scss" scoped>
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
          color: #007fff;
        }
      }
    }
  }
}
</style>
