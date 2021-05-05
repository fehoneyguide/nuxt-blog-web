<template>
  <button class="login-btn" @click="handleRegister">注册</button>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref,
  useStore,
  computed,
} from '@nuxtjs/composition-api'
interface IJJFansItem {
  avatar_large: string
  user_name: string
  job_title: string
  description: string
}

// export interface State {
//   user: Object
// }

import axios from 'axios'
export default defineComponent({
  head: {},
  setup(_props, context) {
    const fetchedJJFansList = ref<IJJFansItem[]>([])

    const store = useStore()

    // fetch()
    return {
      handleRegister: () => store.commit('user/changeShowRegisterFlag', true),
    }
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
