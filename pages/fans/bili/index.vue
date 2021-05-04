<template>
  <div>
    <VastFollowBiLi v-for="item in fetchedFans" :key="item.mid" :item="item" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref,
  useStore,
  computed,
} from '@nuxtjs/composition-api'
interface IFanItem {
  mid: number
  uname: String
  face: string
  sign: string
}

export default defineComponent({
  setup(_props) {
    const fetchedFans = ref<IFanItem[]>([])

    const { fetch: doFetch, fetchState } = useFetch(() => {
      return fetch(
        `http://localhost:2222/api/v1/bili/follows?vmid=310726273&pn=1&ps=20`
      )
        .then((response) => response.json())
        .then((res) => {
          fetchedFans.value = res.data.list
        })
    })
    doFetch()
    return {
      fetchedFans,
    }
  },
})
</script>
