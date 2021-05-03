<template>
  <el-input
    v-model="searchVal"
    placeholder="站内搜~"
    clearable
    suffix-icon="el-icon-search"
  ></el-input>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  head: {},
  setup() {
    const searchVal = ref('')

    return {
      searchVal,
    }
  },
})
</script>
<style lang="scss" scoped>
.el-input__inner {
  width: 160px;
}
</style>
