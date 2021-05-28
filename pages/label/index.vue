<template>
  <div class="label-container">
    <vast-label-card></vast-label-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import VastLabelCard from '~/components/VastLabelCard.vue'
export default defineComponent({
  name: 'Label',
  components: { VastLabelCard },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.label-container {
  width: 100%;
}
</style>
