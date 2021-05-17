<template>
  <div class="relea-container">
    <div class="top-main-title">
      <input
        type="text"
        class="ipt-content"
        placeholder="输入文章标题……"
        @input="handleTitleChange"
      />
    </div>
    <div class="op-btns">
      <VastReleaseBtn />
    </div>
    <div class="panel" v-if="isShowPanel">
      <div class="title">发布文章</div>
      <div class="form-container">
        <el-form
          :model="formData"
          ref="form"
          label-width="80px"
          :inline="false"
          size="small"
          :rules="formRules"
        >
          <el-form-item label="添加标签" prop="labelName">
            <el-select
              v-model="formData.labelName"
              placeholder="请选择文章的标签"
              clearable
              filterable
              @change="handleSelectChange"
            >
              <el-option
                v-for="item in lebelOptions"
                :key="item.id"
                :label="item.labelName"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章封面" prop="cover">
            <div class="cover-upload">
              <button class="select-btn">
                <div class="button-slot">
                  <img
                    src="https://sf1-scmcdn2-tos.pstatp.com/xitu_juejin_web_editor/img/add.0e2d17b6.svg"
                    alt=""
                    height="20px"
                  />
                  <div class="uplaod">上传封面</div>
                </div>
              </button>
            </div>
          </el-form-item>
          <el-form-item label="编辑摘要" prop="summary">
            <el-input
              type="textarea"
              v-model="formData.summary"
              placeholder="请输入摘要"
            ></el-input>
          </el-form-item>

          <div class="footer">
            <div class="btn-container">
              <button class="cancle">取消</button>
              <button class="confirm" @click="handleConfirm">确定并发布</button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
    <input type="file" v-show="isShowFile" />
    <div class="mavonEditor">
      <no-ssr>
        <mavon-editor :toolbars="markdownOption" v-model="handBook" />
      </no-ssr>
    </div>
  </div>
</template>

<script lang="ts">
interface IParams {
  title: string
}

import axios from 'axios'
import {
  defineComponent,
  useRouter,
  computed,
  useFetch,
  ref,
  Ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  head: {},
  layout: 'editor',
  setup() {
    const isShowPanel: Ref<boolean> = ref(true)
    const handBook: Ref<string> = ref('')
    const isShowFile: Ref<boolean> = ref(false)
    const markdownOption: Ref<object> = ref({
      bold: true, // 粗体
    })
    const title: Ref<string> = ref('')
    const formData: Ref<object> = ref({
      labelName: 'NodeJS',
      summary: '',
    })

    const lebelOptions = ref([])

    const formRules: Ref<object> = ref({
      labelName: [
        { required: true, message: '请输入标签名称', trigger: 'blur' },
      ],
    })
    const handleSelectChange = (): void => {}
    const handleTitleChange = ({
      target: { value },
    }: {
      target: HTMLInputElement
    }): void => {
      title.value = value
    }
    const handleConfirm = (e): void => {
      e.preventDefault()

      const params: IParams = {
        title: title.value,
      }
      console.log(params)
    }
    const { fetch, fetchState } = useFetch(async () => {
      const res = await axios.get(
        `http://101.201.148.180:3009/api/v1/label?offset=0&limit=10`
      )

      lebelOptions.value = res.data.data
    })
    fetch()
    return {
      isShowPanel,
      handBook,
      isShowFile,
      markdownOption,
      formData,
      handleSelectChange,
      lebelOptions,
      formRules,
      handleConfirm,
      title,
      handleTitleChange,
    }
  },
})
</script>

<style lang="scss" scoped>
.relea-container {
  position: relative;
  .op-btns {
    position: fixed;
    top: 2rem;
    right: 5rem;
  }
  .top-main-title {
    width: 100%;
    height: 5.334rem;
    .ipt-content {
      width: 100%;
      flex: 1 1 auto;
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: 500;
      color: #1d2129;
      border: none;
      outline: none;
      overflow: visible;
      padding-left: 2rem;
    }
  }
  .panel {
    width: 560px;
    font-size: 1.2rem;
    white-space: nowrap;
    color: #909090;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 2px #f1f1f1;
    box-shadow: 0 1px 2px #f1f1f1;
    cursor: default;
    z-index: 2000;
    margin: 1.8rem -3rem 0 0;
    top: 3rem;
    right: 5rem;
    position: absolute;
    &::before {
      content: '';
      position: absolute;
      margin-left: -0.5rem;
      top: -0.6rem;
      right: 5rem;
      width: 1rem;
      height: 1rem;
      background-color: #fff;
      border: 1px solid #ddd;
      border-right: none;
      border-bottom: none;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .title {
      padding: 24px 20px 16px 20px;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #1d2129;
      border-bottom: 1px solid #e5e6eb;
    }
    .form-container {
      .el-form-item {
        padding: 1rem 0;
        padding-left: 1rem;
      }
      .el-select {
        width: 335px;
      }
      .el-textarea {
        width: 335px;
      }
      .cover-upload {
        .select-btn {
          width: 160px;
          cursor: pointer;
          height: 86px;
          background-color: #fafafa;
          border: 1px dashed #e5e6eb;
          margin-bottom: 16px;
          .button-slot {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
            }
            .upload {
              font-weight: 400;
              font-size: 14px;
              line-height: 22px;
              color: #86909c;
              margin-top: 20px;
            }
          }
        }
      }
      .footer {
        border-top: 1px solid #e5e6eb;
        height: 72px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 20px;
        display: flex;
        align-items: center;
        .btn-container {
          text-align: right;
          flex: auto;
          .cancle {
            width: 90px;
            padding: 4px 0;
            cursor: pointer;
            background-color: #fff;
            color: #1d7dfa;
            border: 1px solid #1d7dfa;
            font-size: 14px;
            line-height: 22px;
          }
          .confirm {
            width: 90px;
            padding: 4px 0;
            cursor: pointer;
            background-color: #1d7dfa;
            box-sizing: border-box;
            font-size: 14px;
            line-height: 22px;
            color: #fff;
            border: none;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
}
</style>
