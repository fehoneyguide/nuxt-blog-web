<template>
  <div class="view setting-view">
    <div class="shadow sub-view-box">
      <div class="info-profile">
        <h1 class="">个人资料</h1>
        <ul class="setting-list">
          <li class="item avatar">
            <span class="title">头像</span>
            <div class="avatar-uploader">
              <input type="file" class="input-file" />
              <img
                src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/ed0c58d0b0fbece798227044e252820f~300x300.image"
                alt=""
                class="avatar-img"
              />
              <div class="action-box">
                <div class="hint">
                  支持 jpg、png、jpeg 格式大小 5M 以内的图片
                </div>
                <button class="upload-btn">点击上传</button>
              </div>
            </div>
          </li>
          <li class="item">
            <span class="title">用户名</span>
            <div class="input-box">
              <input type="text" name="" id="" class="input" />
            </div>
          </li>
          <li class="item">
            <span class="title">个人主页</span>
            <div class="input-box">
              <input
                type="text"
                name=""
                id=""
                placeholder="请填写你的主页"
                class="input"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  useStore,
} from '@nuxtjs/composition-api'

import type { IUserState } from '../store/user'

export default defineComponent({})
</script>
<style lang="scss">
.setting-view {
  margin-bottom: 2rem;
  width: 58rem;
  max-width: 100%;
  .sub-view-box {
    position: relative;
    padding: 2.7rem 4rem 7rem;
    background-color: #fff;
    border-radius: 2px;
    .info-profile {
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      .avatar {
        padding: 1rem 0;
        .avatar-uploader {
          display: flex;
          .input-file {
            display: none;
          }
          .avatar-img {
            flex: 0 0 auto;
            width: 6rem;
            height: 6rem;
            margin-right: 1rem;
          }
          .action-box {
            margin-left: 1rem;
            .hint {
              color: #909090;
              font-size: 1rem;
              margin-bottom: 1.5rem;
            }
            .upload-btn {
              appearance: none;
              background-color: #007fff;
              color: #fff;
              border-radius: 2px;
              border: none;
              padding: 0.5rem 1.3rem;
              cursor: pointer;
            }
          }
        }
      }
      .item {
        display: flex;
        align-items: center;
        padding: 2rem 0;
        border-top: 1px solid #f1f1f1;
        .title {
          font-size: 1.2rem;
          color: #333;
          width: 10rem;
        }
        .input-box {
          display: flex;
          justify-content: flex-end;
          flex: 1;
          input {
            flex: 1;
            display: inline-block;
            border: none;
            outline: none;
            color: #909090;
            font-size: 1.3rem;
          }
        }
      }
    }
  }
  .shadow {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  }
}
</style>
