<template>
  <div class="comment-list-box">
    <div class="comment-form">
      <div class="avatar-box">
        <img
          src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/ed0c58d0b0fbece798227044e252820f~300x300.image"
          class="avatar"
          alt=""
        />
      </div>
      <div class="form-box">
        <el-input
          v-model="comment"
          placeholder="请输入评论…"
          @focus="handleIptFocus"
          @blur="handleBlur"
        ></el-input>
        <div class="action-box">
          <div class="submit">
            <span>Ctrl or ⌘ + Enter</span>
            <button
              :disabled="isDisable"
              class="btn"
              @click.stop="handleComment"
            >
              评论
            </button>
          </div>
        </div>
      </div>
    </div>
    <span class="container triangle-top">
      <em class="triangle"></em>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useRoute } from '@nuxtjs/composition-api'
import { Notification } from 'element-ui'
import { createComm } from '~/api'
export default defineComponent({
  setup() {
    const comment = ref('')
    const isDisable = ref(true)
    const r = useRoute()
    const handleIptFocus = () => {
      isDisable.value = false
    }

    const handleBlur = () => {
      if (!comment.value) {
        isDisable.value = true
      }
    }

    const handleComment = async () => {
      const params: any = {
        content: comment.value,
        articleId: r.value.params.id,
      }
      const res: any = await createComm(params)
      if (res.code === 0) {
        comment.value = ''
        Notification.success({
          title: 'Tips',
          message: '评论文章成功',
        })
      }
    }
    return {
      comment,
      isDisable,
      handleIptFocus,
      handleBlur,
      handleComment,
    }
  },
})
</script>

<style lang="scss" scoped>
.comment-list-box {
  position: relative;
  border-top: 1px solid #ebebeb;
  padding-top: 1.333rem;
  padding-bottom: 1.333rem;

  .comment-form {
    margin: 0 1.666rem 1.333rem;
    display: flex;
    position: relative;
    padding: 1rem 1.333rem;
    background-color: #fafbfc;
    border-radius: 3px;
    .avatar-box {
      flex: 0 0 auto;
      .avatar {
        margin: 0 1rem 0 0;
        width: 2.667rem;
        height: 2.667rem;
        border-radius: 50%;
        object-fit: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        display: inline-block;
        background-color: #eee;
        background-size: cover;
      }
    }
    .form-box {
      flex: 1 1 auto;
      position: relative;
      .action-box {
        display: flex;
        align-items: center;
        margin: 0.65rem 0 0;
        justify-content: flex-end;
        .submit {
          span {
            color: #c2c2c2;
            margin-right: 8px;
            font-size: 13px;
          }
          .btn {
            &:disabled {
              cursor: default;
              opacity: 0.4;
            }

            flex: 0 0 auto;
            margin-left: auto;
            padding: 0.5rem 1.3rem;
            font-size: 1.25rem;
            color: #fff;
            background-color: #027fff;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
          }
        }
      }
    }
  }
  .triangle-top {
    position: absolute;
    top: -8px;
    left: 50%;
    margin: -7px 0 0 -7px;
    width: 14px;
    height: 14px;
    border-top: 1px solid #fff;
    transform: rotate(180deg);
    display: inline-block;
    max-width: 960px;
    .triangle {
      position: absolute;
      margin: auto;
      top: -6px;
      left: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      background: #fff;
      font-style: italic;
    }
  }
}
</style>
