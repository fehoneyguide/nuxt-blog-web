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
  min-height: 100vh;
  overflow-x: initial;
  .main {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    display: block;
    min-height: calc(100vh - 2rem);
  }
  .view-container {
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
}
</style>
