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
        />
        <img
          src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png"
          alt=""
        />
      </div>
      <div class="password">
        <input
          v-model="password"
          type="text"
          placeholder="请输入密码"
          required
        />
        <img
          src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png"
          alt=""
        />
      </div>
      <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" />
      <button class="register-btn" type="button" @click.stop="handleClick">
        注册
      </button>
    </form>
    <div class="agreement-box">
      <span>注册即表示</span>
      <br />
      <span>同意本站协议 <a>隐私政策</a> <a>用户协议</a> </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

import { Notification } from 'element-ui'
import { registerApi } from '~/api'

export default defineComponent({
  setup(_, { emit }) {
    const info = reactive({
      username: '',
      password: '',
    })
    const handleClick = async () => {
      try {
        const res: any = await registerApi(info)
        if (res.code === 0) {
          Notification({
            title: '提示',
            message: '注册成功',
          })
          // 关闭弹窗
          emit('change-dialog', false)
        }
      } catch (error) {}
    }
    return {
      ...toRefs(info),
      handleClick,
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
    a {
      color: #007fff;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
