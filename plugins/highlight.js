// import Vue from 'vue'
import Hljs from 'highlight.js/lib/highlight'

const Highlight = {}
Highlight.install = (Vue, _) => {
  Vue.directive('highlight', (el) => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}

export default Highlight
