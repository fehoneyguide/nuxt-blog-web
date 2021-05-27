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
    <div v-if="isShowPanel" class="panel">
      <div class="title">发布文章</div>
      <div class="form-container">
        <el-form
          ref="form"
          :model="formData"
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
              <button
                class="select-btn"
                type="button"
                @click.stop="handleUploadCover"
              >
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
              v-model="formData.summary"
              type="textarea"
              placeholder="请输入摘要"
            ></el-input>
          </el-form-item>

          <div class="footer">
            <div class="btn-container">
              <button class="cancle" type="button" @click.stop="handleCancle">
                取消
              </button>
              <!-- 要设置type="button" button在浏览器中默认的类型为submit -->
              <button class="confirm" type="button" @click.stop="handleConfirm">
                确定并发布
              </button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
    <input
      v-show="isShowFile"
      id="ipt-file"
      type="file"
      accept="image/*"
      name="cover"
      @change="handleChangeCover"
    />
    <div class="mavonEditor">
      <no-ssr>
        <mavon-editor
          v-model="handBook"
          :toolbars="markdownOption"
          :ishljs="true"
          class="editor"
          @change="handleEditChange"
        />
      </no-ssr>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useRouter,
  computed,
  useFetch,
  ref,
  Ref,
  useStore,
  onMounted,
  reactive,
  toRefs,
} from '@nuxtjs/composition-api'
import type { Store } from 'vuex'

import { labelListApi, createApi } from '~/api'

interface IParams {
  title: string // 文章的标题
  summary: string // 文章摘要
  content: string // 文章内容
}
interface IFormData {
  labelName: string
  summary: string
}

export default defineComponent({
  layout: 'editor',
  setup() {
    const store: Store<any> = useStore()
    const isShowPanel = computed(() => store.state.create.changeReleaseShow)
    const handBook: Ref<string> = ref('')
    const isShowFile: Ref<boolean> = ref(false)
    const markdownOption: Ref<object> = ref({
      bold: true, // 粗体
      italic: true, // 斜体
      header: true, // 标题
      underline: true, // 下划线
      strikethrough: true, // 中划线
      mark: true, // 标记
      superscript: true, // 上角标
      subscript: true, // 下角标
      quote: true, // 引用
      ol: true, // 有序列表
      ul: true, // 无序列表
      link: true, // 链接
      imagelink: true, // 图片链接
      code: true, // code
      table: true, // 表格
      fullscreen: true, // 全屏编辑
      readmodel: true, // 沉浸式阅读
      htmlcode: true, // 展示html源码
      help: true, // 帮助
      /* 1.3.5 */
      undo: true, // 上一步
      redo: true, // 下一步
      trash: true, // 清空
      save: true, // 保存（触发events中的save事件）
      /* 1.4.2 */
      navigation: true, // 导航目录
      /* 2.1.8 */
      alignleft: true, // 左对齐
      aligncenter: true, // 居中
      alignright: true, // 右对齐
      /* 2.2.1 */
      subfield: true, // 单双栏模式
      preview: true, // 预览
    })
    const title: Ref<string> = ref('')
    const content: Ref<string> = ref('')
    const labelIds: Ref<string> = ref('')
    const formData = ref({
      labelName: '',
      summary: '',
    })

    const lebelOptions = ref([])

    const formRules: Ref<object> = ref({
      labelName: [
        { required: true, message: '请输入标签名称', trigger: 'blur' },
      ],
    })
    const handleEditChange = (md: string, _: string): void => {
      content.value = md
    }
    const handleChangeCover = (e: any): void => {
      const fileList = [...e.target.files]
      console.log(fileList)
      if (fileList.length < 1) {
        return
      } else {
        const file = fileList[0]
        console.log(file)
      }
      e.target.value = ''
    }
    const handleSelectChange = (labelId: string): void => {
      labelIds.value = labelId
    }
    const handleTitleChange = ({
      target: { value },
    }: {
      target: HTMLInputElement
    }): void => {
      title.value = value
    }
    const handleConfirm = async (): Promise<void> => {
      const params: IParams = {
        title: title.value,
        content: content.value,
        summary: formData.value.summary,
      }

      console.log(params)
      try {
        const res = await createApi(params)
        console.log(res)
      } catch (error) {}
    }
    const handleCancle = (): void => {
      store.commit('create/CHANGE_RELEASE_SHOW', false)
    }
    const handleUploadCover = (): void => {
      // 获取inpt标签
      const ipt: HTMLInputElement | null = document.querySelector('#ipt-file')
      ipt?.click()
    }
    const fetchLabels = async (): Promise<void> => {
      const params = {
        offset: 0,
        limit: 10,
      }
      try {
        const res: any = await labelListApi(params)
        if (res.code === 0) {
          lebelOptions.value = res.data
        }
      } catch (error) {}
    }
    onMounted(async () => {
      await fetchLabels()
    })
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
      handleEditChange,
      handleCancle,
      handleUploadCover,
      handleChangeCover,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
.relea-container {
  min-height: calc(100vh - 3rem);
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
    min-height: 90vh;
    .editor {
      min-height: 90vh;
    }
  }
}
</style>
