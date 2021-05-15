<template>
  <div>
    <el-button type="primary" @click="handleClickCreate"
      >创作<i class="el-icon-edit el-icon--right"></i
    ></el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useRouter,
  computed,
  ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  head: {},
  setup() {
    const router = useRouter()
    const handleClickCreate = (): void => {
      router.push('/create')
    }

    return {
      handleClickCreate,
    }
  },
})
</script>

<style lang="scss">
button {
  background-color: #fff;
}
</style>
