<template>
  <div class="vast-users">
    <VastUserCard v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from '@nuxtjs/composition-api'
import { listApi } from '~/api'
export default defineComponent({
  setup() {
    const list: Ref<never[]> = ref([])
    const fetchUsers = async () => {
      try {
        const res: any = await listApi({
          offset: 0,
          limit: 10,
        })
        if (res.code === 0) {
          list.value = res.data
        }
      } catch (error) {}
    }
    onMounted(async () => {
      await fetchUsers()
    })

    return {
      list,
    }
  },
})
</script>

<style lang="scss">
// .vast-users {
// }
</style>
