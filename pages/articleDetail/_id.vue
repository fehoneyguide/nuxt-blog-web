<template>
  <div class="main-area">
    <article class="article">
      <div class="markdown-body" v-html="$md.render(content)"></div>
    </article>
    <div class="sldebar"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useRoute,
} from '@nuxtjs/composition-api'
import { articleDetailApi } from '~/api'
export default defineComponent({
  name: 'ArticleDetail',
  scrollToTop: true,
  setup() {
    const r = useRoute()
    const content = ref('')
    const fetchDetail = async (id: string) => {
      const res: any = await articleDetailApi(id)
      if (res.code === 0) {
        content.value = res.data.content
      }
    }
    onMounted(async () => {
      await fetchDetail(r.value.params.id)
    })
    // watchEffect()
    return {
      content,
    }
  },
})
</script>

<style lang="scss" scoprd>
.main-area {
  margin-bottom: 1.5rem;
  padding: 0 2rem;
  position: relative;
  width: 700px;
  max-width: 100%;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  .article {
    margin-bottom: 3rem;
    padding: 2rem 0 0;
    .markdown-body {
      word-break: break-word;
      line-height: 1.75;
      font-weight: 400;
      font-size: 15px;
      overflow-x: hidden;
      color: #333;
      p {
        line-height: inherit;
        margin-top: 22px;
        margin-bottom: 22px;
      }
      h2 {
        padding-bottom: 12px;
        font-size: 24px;
        border-bottom: 1px solid #ececec;
        code {
          word-break: break-word;
          border-radius: 2px;
          overflow-x: auto;
          background-color: #fff5f5;
          color: #ff502c;
          font-size: 0.87em;
          padding: 0.065em 0.4em;
        }
      }
      h3 {
        font-size: 18px;
        padding-bottom: 0;
        code {
          word-break: break-word;
          border-radius: 2px;
          overflow-x: auto;
          background-color: #fff5f5;
          color: #ff502c;
          font-size: 0.87em;
          padding: 0.065em 0.4em;
        }
      }

      img {
        max-width: 100% !important;
        margin: 0;
        cursor: zoom-in;
        transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) !important;
      }
      ul {
        padding-left: 28px;
        li {
          margin-bottom: 0;
          list-style-type: disc;
        }
      }
      pre {
        overflow: auto;
        position: relative;
        line-height: 1.75;
      }
      a {
        text-decoration: none;
        color: #0269c8;
        border-bottom: 1px solid #d1e9ff;
      }
    }
  }
  .sldebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 20rem;
  }
}
</style>
