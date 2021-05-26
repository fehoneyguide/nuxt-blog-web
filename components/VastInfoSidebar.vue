<template>
  <div class="info-sidebar">
    <nuxt-link v-for="item in list" :key="item.id" to=""></nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const list = ref([
      {
        id: 1,
        name: '个人资料',
        classVal: 'el-icon-info',
      },
      {
        id: 2,
        name: '账号设置',
        classVal: 'el-icon-setting',
      },
    ])

    return {
      list,
    }
  },
})
</script>

<style lang="scss" scoped>
.info-sidebar {
  background-color: #fff;
  box-sizing: border-box;
  width: 230px;
  height: 626px;
  padding: 8px;
}
</style>
