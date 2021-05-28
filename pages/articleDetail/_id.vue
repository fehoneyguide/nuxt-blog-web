<template>
  <div class="main-area">
    <vast-article-suspended-panel />
    <article class="article">
      <div id="markdown-body" v-html="$md.render(content)"></div>
      <vast-comment-list></vast-comment-list>
    </article>
    <div id="sidebar"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useRoute,
  watch,
} from '@nuxtjs/composition-api'

import { articleDetailApi } from '~/api'
import VastArticleSuspendedPanel from '~/components/VastArticleSuspendedPanel.vue'
import VastCommentList from '~/components/VastCommentList.vue'
import { toToc } from '~/utils'

export default defineComponent({
  name: 'ArticleDetail',
  components: { VastArticleSuspendedPanel, VastCommentList },
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
    const doDoc = () => {
      let str: string | undefined = document.querySelector('#markdown-body')
        ?.innerHTML

      const tocs: any = str?.match(/<[hH][1-6]>.*?<\/[hH][1-6]>/g)

      tocs.forEach((item: string, index: number) => {
        const _toc = `<div name='toc-title' id='${index}'>${item} </div>`
        str = str?.replace(item, _toc)
      })
      const finTocs = toToc(tocs)
      const tocDiv = document.querySelector('#sidebar')
      if (tocDiv) {
        tocDiv.innerHTML = finTocs
      }
    }
    watch(
      () => r.value.hash,
      (val) => {
        const data = document.getElementsByClassName(
          `toc-link-${val}`
        )[0] as Element

        console.log(data)
      }
    )
    onMounted(async () => {
      await fetchDetail(r.value.params.id)
      //
      doDoc()
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
  width: 700px;
  max-width: 100%;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  position: relative;
  .article {
    margin-bottom: 3rem;
    padding: 2rem 0 0;
    #markdown-body {
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
      }
      li {
        margin-bottom: 0;
        list-style-type: disc;
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
  #sidebar {
    position: absolute;
    top: 0;
    width: 20rem;
    right: -22rem;
    margin-bottom: 1.5rem;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    .catalog-list {
      font-weight: 600;
      padding-left: 10px;
      position: relative;
      font-size: 15px;
      &:first-child::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 12px;
        bottom: 0;
        width: 2px;
        background-color: #ebedef;
        opacity: 0.8;
      }

      li {
        margin: 0;
        padding: 0;
        font-size: 1.167rem;
        font-weight: 400;
        line-height: 1.3;
        color: #333;
        list-style: none;
        a {
          color: #000;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 6px 0;
          padding: 4px 0 4px 21px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            background-color: #ebedef;
          }
          &::before {
            left: 5px;
            content: '';
            position: absolute;
            top: 50%;
            margin-top: -2px;
            width: 4px;
            height: 4px;
            background-color: currentColor;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
