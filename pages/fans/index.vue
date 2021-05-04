<template>
  <div></div>
</template>

<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    router.push('/fans/vast')
  },
})
</script>
