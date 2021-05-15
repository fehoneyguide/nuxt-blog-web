<template>
  <div id="vast-app">
    <div class="view-container">
      <div class="main">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
#vast-app {
  overflow-x: initial;
  .main {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    display: block;
  }
  .view-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
}
</style>
