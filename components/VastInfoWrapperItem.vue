<template>
  <li class="category-item">
    <nuxt-link :to="item.link">
      <span class="label">{{ item.name }}</span>
      <span class="info" :style="item.style">{{ item.info }}</span>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
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

<style lang="scss" scoped vars="{ bgc }">
.category-item {
  margin-bottom: 0.8rem;
  padding: 0.4rem 0.8rem;
  transition: all 0.5s;
  border-radius: 0.25rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  line-height: 2;
  cursor: pointer;
  a {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      color: #424242;
    }
    .info {
      width: 6.6rem;
      height: 1.6rem;
      text-align: center;
      line-height: 1.6rem;
      border-radius: 0.25rem;
      background: #eee;
      font-size: 13px;
      color: #fff;
      background-color: rgb(242, 109, 109);
    }
  }
}
</style>
