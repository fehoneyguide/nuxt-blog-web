<template>
  <div>
    <el-button type="primary" @click.stop="handleClickCreate"
      >创作<i class="el-icon-edit el-icon--right"></i
    ></el-button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useRouter,
  useStore,
} from '@nuxtjs/composition-api'
import { Store } from 'vuex'
export default defineComponent({
  setup() {
    const router = useRouter()
    const store: Store<any> = useStore()
    const token = computed(() => store.state.user.token)
    const handleClickCreate = (): void => {
      if (!token) {
        console.log('token 不存在')
      } else {
        router.push('/create')
      }
    }

    return {
      handleClickCreate,
    }
  },
  head: {},
})
</script>

<style lang="scss">
button {
  background-color: #fff;
}
</style>
