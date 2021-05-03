<template>
  <main class="main-container">
    <div class="timeline-index-view">
      <div class="timeline-container">
        <nav class="tag-nav"></nav>
        <div class="timeline-content">
          <div class="timeline-entry-list">
            <div class="entry-list-container">
              <header>
                <div class="follow-header follow-header-info">
                  <div class="breadcrumb">
                    <p class="cur">我的掘金粉丝</p>
                  </div>
                </div>
              </header>
              <div class="list-wrap">
                <p v-if="fetchState.pending || !fetchState.timestamp">
                  正在获取数据
                </p>
                <template v-else>
                  <VastFollowBiLi
                    v-for="item in fetchedJJFansList"
                    :key="item.user_id"
                    :item="item"
                  />
                </template>
              </div>
            </div>
          </div>
          <aside class="index-aside">
            <VastIndexLogin></VastIndexLogin>
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, useFetch, ref } from '@nuxtjs/composition-api'
interface IJJFansItem {
  avatar_large: string
  user_name: string
  job_title: string
  description: string
}
import axios from 'axios'
export default defineComponent({
  head: {},
  setup() {
    const fetchedJJFansList = ref<IJJFansItem[]>([])

    // 网络请求

    const { fetch, fetchState } = useFetch(async () => {
      const res = await axios.get(
        'http://127.0.0.1:2222/jjFans?jj_user_id=3491704661872910&cursor=0&limit=20'
      )
      fetchedJJFansList.value = res.data.data.data
      console.log(fetchState)
    })
    fetch()
    return {
      fetchedJJFansList,
      fetchState,
    }
  },
})
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  display: block;
  margin-top: 4.4rem;
  .timeline-index-view {
    position: relative;

    .timeline-container {
      position: relative;

      .timeline-content {
        position: relative;
        .timeline-entry-list {
          margin-right: 21.66rem;
          border-radius: 2px;
          width: 700px;
          .entry-list-container {
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
          }
        }
        .index-aside {
          width: 20rem;
          height: 500px;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }
      }
    }
  }
}
</style>
