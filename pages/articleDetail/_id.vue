<template>
  <div class="detail">
    <div v-html="detailInfo.content"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  useRoute,
} from '@nuxtjs/composition-api'
import { articleDetailApi } from '~/api'
export default defineComponent({
  setup() {
    const r = useRoute()
    const detailInfo = ref({})
    const fetchDetail = async (id: string) => {
      const res: any = await articleDetailApi(id)
      if (res.code === 0) {
        detailInfo.value = res.data
      }
    }
    onMounted(async () => {
      await fetchDetail(r.value.params.id)
    })
    // watchEffect()
    return {
      detailInfo,
    }
  },
})
</script>
