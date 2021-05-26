<template>
  <main class="main-container">
    <div class="timeline-index-view">
      <div class="timeline-container">
        <nav class="tag-nav"></nav>
        <div class="timeline-content">
          <div class="timeline-entry-list">
            <div class="entry-list-container">
              <div class="list-wrap">
                <!-- <VastPersonalInfo /> -->
                <VastArticleItem
                  v-for="item in lists"
                  :key="item.id"
                  :item="item"
                ></VastArticleItem>
              </div>
            </div>
          </div>
          <aside class="index-aside">
            <!-- <VastIndexLogin v-if="!isShowLogin"></VastIndexLogin> -->
            <VastInfoWrapper></VastInfoWrapper>
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  useStore,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'
import { Store } from 'vuex'
import { articleListApi } from '~/api'

export default defineComponent({
  setup() {
    const store: Store<any> = useStore()
    const isShowLogin = computed(() => store.state.user.isLogin)
    const lists = ref([])
    const fetchList = async (): Promise<void> => {
      try {
        const params = {
          offset: 0,
          limit: 10,
        }
        const res: any = await articleListApi(params)
        if (res.code === 0) {
          lists.value = res.data
        }
      } catch (error) {}
    }

    onMounted(async () => {
      await fetchList()
    })
    return {
      isShowLogin,
      lists,
    }
  },
  head: {},
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
