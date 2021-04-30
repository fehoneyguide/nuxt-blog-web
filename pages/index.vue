<template>
  <div class="index-view-container">
    <vast-header-box />
    <vast-main></vast-main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props) {
    onMounted(() => {
      // console.log(ctx.root.$router.push('/article/page'))
    })
  },
})
</script>

<style lang="scss">
.index-view-container {
  position: relative;
  width: 100%;
}
</style>
