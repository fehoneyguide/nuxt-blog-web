<template>
  <li class="user-card">
    <div itemscope="itemscope" itemtype="http://schema.org/Person" class="user">
      <meta itemprop="name" content="vast" />
      <!-- <meta itemprop="name" content="vast" /> -->
    </div>
    <nuxt-link to="">
      <div class="link">
        <img src="" alt="" class="avatar" />
        <div class="info-box">
          <nuxt-link to="">{{ item.username }}</nuxt-link>
        </div>
        <button>个人空间</button>
      </div>
    </nuxt-link>
  </li>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// import VueTypes from 'vue-types'
export default defineComponent({
  name: 'UserCard',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.user-card {
  list-style: none;
  display: list-item;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  .user {
    position: relative;
    box-sizing: border-box;
  }
  .link {
    display: flex;
    align-items: center;
    padding: 0.5rem 2.4rem;
    min-height: 7rem;
    color: #b9c0c8;
    cursor: pointer;
    img {
      flex: 0 0 auto;
      margin-right: 1.667rem;
      width: 4.17rem;
      height: 4.17rem;
      border-radius: 50%;
    }
    .info-box {
      flex: 1 1 auto;
      min-width: 0;
      a {
        font-size: 1.333rem;
        font-weight: 500;
        color: #393939;
      }
    }
    button {
      flex: 0 0 auto;
      margin: 0 0 0 1rem;
      padding: 0;
      width: 6.6rem;
      height: 2.5rem;
      font-size: 1.1rem;
      color: #37c701;
      background-color: #fff;
      border: 1px solid rgba(55, 199, 1, 0.6);
      border-radius: 2px;
    }
  }
}
</style>
