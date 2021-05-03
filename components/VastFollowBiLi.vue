<template>
  <div class="bili-card">
    <div class="follow-header follow-header-info">
      <div class="breadcrumb">
        <p class="cur">我的B站粉丝</p>
      </div>
    </div>
    <div class="follow-content">
      <div class="empty"></div>
      <div class="content">
        <ul class="relation-list">
          <li class="list-item">
            <nuxt-link to="">
              <img src="https://yayxs.github.io/avatar.jpg" alt="" />
            </nuxt-link>
            <div class="content">
              <a href="">
                <span class="fnas-name"> 社畜的 </span>
              </a>
              <p class="desc">这个人没有简介</p>
            </div>
          </li>
        </ul>
        <ul class="be-pager"></ul>
      </div>
    </div>
  </div>
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
.bili-card {
  position: relative;
  min-height: 600px;
  border-left: 1px solid #eee;
  .follow-header {
    border-bottom: 1px solid #e5e9ef;
    padding-bottom: 20px;
    min-height: 30px;
    margin: 20px 20px 0;
    .breadcrumb {
      line-height: 30px;
      font-size: 0;
      .cur {
        color: #222;
        font-size: 18px;
      }
    }
  }
  .follow-content {
    .content {
      padding-bottom: 10px;
      .relation-list {
        padding: 0 20px 20px;
        .list-item {
          border-bottom: 1px solid #eee;
          display: block;
          padding: 20px 0;
          position: relative;
          line-height: 1;
          a {
            border-radius: 48px;
            float: left;
            img {
              width: 60px;
              height: 60px;
              border-radius: 60px;
            }
          }
          .content {
            padding: 0 200px 0 0;
            position: relative;
            margin-left: 88px;
            margin-top: 10px;
            a {
              font-size: 16px;
              line-height: 19px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              max-width: 68px;
              display: inline-block;
              margin-bottom: 10px;
              span {
                color: rgb(251, 114, 153);
              }
            }
            .desc {
              color: #6d757a;
              overflow: hidden;
              white-space: nowrap;
              width: 100%;
              text-overflow: ellipsis;
              padding-right: 10px;
            }
          }
        }
      }
      .be-pager {
        margin: 15px 0;
      }
    }
  }
}
</style>
