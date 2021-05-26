<template>
  <div class="main-header-box">
    <header class="main-header">
      <div class="container">
        <VastHeaderLogo />
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <ul class="phone-hide">
                <li
                  v-for="item in mainTitleList"
                  :key="item.id"
                  class="nav-item"
                >
                  <nuxt-link :to="item.to">{{ item.name }}</nuxt-link>
                </li>
              </ul>
            </li>
            <section class="right"></section>
            <li class="nav-item search">
              <VastHeaderSearch />
            </li>
            <li class="nav-item add">
              <VastMainHeaderCreation />
            </li>
            <li v-if="isShowRegisterBtn" class="nav-item autu">
              <VastHeaderRegisterBtn @change-dialog="changeDialog" />
              <!-- <VastHeaderLoginBtn /> -->
            </li>
            <template v-else>
              <li class="nav-item notification">
                <nuxt-link to="">
                  <i class="el-icon-message-solid"></i>
                </nuxt-link>
              </li>
              <li class="nav-item menu">
                <img
                  src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/ed0c58d0b0fbece798227044e252820f~300x300.image"
                  alt="洋小洋同学的头像"
                  class="avatar"
                  @click.stop="handleClick"
                />
              </li>
            </template>
          </ul>
        </nav>
        <VastAvatarTip
          v-show="isShow"
          class="avatar-tip"
          @emit-flag="emitFlag"
        />
      </div>
    </header>

    <el-dialog
      :visible.sync="isShowDialog"
      width="23.5rem"
      :close-on-click-modal="false"
      close-on-press-escape
    >
      <VastIndexRegister @change-dialog="changeDialog" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props) {
    const mainTitleList = ref([
      {
        id: '1',
        name: '首页',
        to: '/home',
      },
      {
        id: '2',
        name: '互鱼',
        to: '/fish',
      },
      {
        id: '3',
        name: '教程',
        to: '/tutorial',
      },
      {
        id: '4',
        name: '粉丝',
        to: '/fans',
      },
      {
        id: '5',
        name: '活动',
        to: '/events',
      },
    ])
    const isShowDialog = ref(false)
    const changeDialog = (val: boolean) => {
      isShowDialog.value = val
    }
    const isShowRegisterBtn = ref(false)
    const handleClick = (): void => {
      isShow.value = !isShow.value
    }
    const isShow: Ref<boolean> = ref(false)
    const emitFlag = (val: boolean) => {
      isShow.value = !val
    }
    return {
      mainTitleList,
      isShowDialog,
      changeDialog,
      isShowRegisterBtn,
      handleClick,
      isShow,
      emitFlag,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
.main-header-box {
  height: 5rem;
  position: relative;
  line-height: normal;
  .main-header {
    z-index: 250;
    background-color: #fff;
    height: 5rem;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.2s;
    .container {
      max-width: 960px;
      margin: auto;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      .main-nav {
        height: 100%;
        flex: 1 0 auto;
        color: #909090;
        .nav-list {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          height: 100%;
          margin: 0;
          position: relative;
          .main-nav-list {
            display: flex;
            .phone-hide {
              display: flex;
              .nav-item {
                padding: 0 1.5rem;
                height: 5rem;
                color: #71777c;
                font-size: 1.3rem;
                justify-content: center;
                align-items: center;
                display: flex;
                margin: 0;
                a {
                  color: #71777c;
                  cursor: pointer;
                  text-decoration: none;
                }
              }

              a.nuxt-link-active {
                color: #007fff;
                cursor: pointer;
                text-decoration: none;
              }

              .search {
                flex: 1 1 auto;
                justify-content: flex-end;
                cursor: auto;
              }
              .add {
                cursor: default;
              }
            }
          }
          .notification {
            position: relative;
            i {
              font-size: 2rem;
              color: #71777c;
            }
          }
          .menu {
            position: relative;
            height: 100%;
            .avatar {
              position: absolute;
              top: 1.2rem;
              display: inline-block;
              background-size: cover;
              background-color: #eee;
              border-radius: 50%;
              width: 2.5rem;
              height: 2.5rem;
              cursor: pointer;
            }
          }
        }
      }
      .avatar-tip {
        position: absolute;
        top: 50px;
        right: 0;
      }
    }
  }
}
</style>
