<template>
  <div>
    <header>
      <div class="follow-header follow-header-info">
        <div class="breadcrumb">
          <p class="cur">我的掘金粉丝（{{ total }}位）</p>
        </div>
      </div>
    </header>
    <VastFollowJueJIn
      v-for="item in fetchedItems"
      :key="item.user_id"
      :item="item"
    ></VastFollowJueJIn>
    <div class="page">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="20"
        layout="total,prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'

interface IFansItem {
  user_id: string
  user_name: string
  description: string
  avatar_large: string
}
export default defineComponent({
  setup() {
    const fetchedItems = ref<IFansItem[]>([])
    const total = ref(0)
    const currentPage = ref(1)
    const handleCurrentChange = (val: number) => {
      currentPage.value = val
      doFetch()
    }
    const { fetch: doFetch, fetchState } = useFetch(() => {
      return fetch(
        `http://localhost:2222/api/v1/juejin/follows?user_id=3491704661872910&page=${currentPage.value}&limit=20`
      )
        .then((response) => response.json())
        .then((res) => {
          const { data, count } = res
          fetchedItems.value = data
          total.value = count
        })
    })
    doFetch()
    return {
      fetchedItems,
      total,
      currentPage,
      handleCurrentChange,
    }
  },
})
</script>
<style lang="scss" scoped>
.page {
  margin: 30px 10px;
  display: flex;
  justify-content: center;
}
.follow-header {
  border-bottom: 1px solid #e5e9ef;
  padding-bottom: 20px;
  min-height: 30px;
  margin: 20px 20px 0;
  .breadcrumb {
    line-height: 30px;
    font-size: 0;
    .cur {
      color: #222;
      font-size: 18px;
    }
  }
}
</style>
