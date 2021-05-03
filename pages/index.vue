<template>
  <div class="view-container">
    <VastMainHeaderBox></VastMainHeaderBox>
    <VastMainContainer></VastMainContainer>
    <VastFollowBiLi />
    <!-- <section class="box"></section> -->
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

<style lang="scss" scoped>
.view-container {
  .box {
    width: 200px;
    height: 1000px;
    border: 1px solid red;
  }
}
</style>
