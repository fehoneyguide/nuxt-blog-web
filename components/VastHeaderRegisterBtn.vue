<template>
  <button class="login-btn" @click="handleRegister">注册</button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  head: {},
  setup() {
    return {}
  },
})
</script>
<style lang="scss">
.login-btn {
  border: 1px solid #007fff;
  background-color: #fff;
  padding: 0.3rem 1.6rem;
  color: #007fff;
  line-height: 1.9rem;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
</style>
