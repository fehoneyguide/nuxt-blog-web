<template>
  <div class="index-register-container">
    <div class="title">VB - 前端厚说</div>
    <div class="slogan">虽然长的丑但是想得美</div>
    <form action="javascript:">
      <div class="username">
        <input
          v-model="username"
          type="text"
          placeholder="请输入用户名"
          required
          @blur.stop="handleUserNameBlur"
        />
      </div>
      <div class="password">
        <input
          v-model="password"
          type="text"
          placeholder="请输入密码"
          required
        />
      </div>

      <button class="register-btn" @click.stop="handleLoginClick">登录</button>
    </form>
    <div class="agreement-box">
      <span>登录即表示签订卖身契</span>
      <br />
      <span>协议请看--></span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  useFetch,
  useContext,
  useStore,
} from '@nuxtjs/composition-api'
import { IUser } from '../types/user'
import { isExitApi } from '~/api'
export default defineComponent({
  setup() {
    const store = useStore()
    const data: IUser = reactive({
      username: '',
      password: '',
    })
    const handleUserNameBlur = async (): Promise<void> => {
      // 判断用户名是否ok
      if (!data.username) {
        console.log('用户名为空，不做校验')
      } else {
        // todo
        try {
          const res: any = await isExitApi({
            username: data.username,
          })
          if (res.code !== 0) {
            console.log('用户名不ok')
          } else {
            console.log('用户名ok')
          }
        } catch (error) {}
      }
    }
    const handleLoginClick = async (): Promise<void> => {
      try {
        if (!data.username && !data.password) {
          console.log('用户名密码为空，请检查')
        } else {
          await store.dispatch(`user/login`, data)
        }
      } catch (error) {}
    }

    return {
      ...toRefs(data),
      handleUserNameBlur,
      handleLoginClick,
    }
  },
})
</script>

<style lang="scss">
.index-register-container {
  position: relative;
  width: 20rem;
  padding: 1.3rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  div {
    margin-top: 10px;
  }
  img {
    position: absolute;
    left: 50%;
    bottom: 100%;
    margin: 0 0 -20px -60px;
    width: 120px;
  }
  .title {
    margin-bottom: 0.5rem;
    font-size: 1.16rem;
    color: #2e3135;
    font-weight: 600;
  }
  .slogan {
    margin-bottom: 0.5rem;
    font-size: 1.16rem;
    color: #2e3135;
    line-height: 1.29;
  }
  form {
    input[type='text'],
    input[type='password'] {
      padding: 10px;
      border: 1px solid #e9e9e9;
      border-radius: 2px;
      width: 100%;
      height: 40px;
      outline: none;
      transition: all 300ms;
      &:focus:valid {
        border-color: #09f;
      }
      &:focus:invalid {
        border-color: #f66;
      }
    }
    .register-btn {
      overflow: hidden;
      margin-top: 10px;
      border: none;
      border-radius: 2px;
      width: 100%;
      height: 34px;
      outline: none;
      background-color: #09f;
      cursor: pointer;
      color: #fff;
      transition: all 300ms;
    }
    .username,
    .password {
      img {
        display: none;
        margin-bottom: -27px;
      }
      &:focus-within {
        img {
          display: block;
        }
        & ~ img {
          display: none;
        }
      }
    }
  }

  .agreement-box {
    margin-top: 1.6rem;
    font-size: 1.168rem;
    line-height: 1.5;
    color: #767676;
  }
}
</style>
