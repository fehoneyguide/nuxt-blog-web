<template>
  <div class="article-container">
    <div class="article-list">
      <nuxt-link :to="`/articleDetails/${item.id}`">
        <vast-article-item></vast-article-item>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const resData = useFetch(() => {
      return window
        .fetch(
          'https://sdjblog.cn:8090/blogPage/article/list?currentPage=1&pageSize=10&tags=&sortBy=createTime&sortOrders=-1'
        )
        .then((res) => res.json())
        .then((res) => {
          window.console.log(res)
        })
    })
  },
})
</script>

<style lang="scss" scoped>
.article-container {
  padding-bottom: 40px;
  .article-list {
    overflow: auto;
  }
}
</style>
