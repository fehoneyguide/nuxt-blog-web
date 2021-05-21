<template>
  <button class="login-btn" @click="handleRegister">注册</button>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api'
import { Store } from 'vuex'

export default defineComponent({
  setup(_props) {
    const store: Store<any> = useStore()
    const handleRegister = (): void => {
      store.commit('user/changeShowRegisterFlag', true)
      console.log()
    }
    return {
      handleRegister,
    }
  },
  head: {},
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
