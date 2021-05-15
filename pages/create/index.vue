<template>
  <div class="relea-container">
    <div class="top-main-title">
      <input type="text" class="ipt-content" placeholder="输入文章标题……" />
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
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
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
import {
  defineComponent,
  useRouter,
  computed,
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
    const formData: Ref<object> = ref({
      labelName: 'NodeJS',
    })

    const lebelOptions = ref([
      {
        value: 'NodeJS',
        label: 'NodeJS',
      },
    ])

    const formRules: Ref<object> = ref({
      labelName: [
        { required: true, message: '请输入标签名称', trigger: 'blur' },
      ],
    })
    const handleSelectChange = (): void => {}
    return {
      isShowPanel,
      handBook,
      isShowFile,
      markdownOption,
      formData,
      handleSelectChange,
      lebelOptions,
      formRules,
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
        padding: 2rem 0;
        padding-left: 1rem;
      }
      .el-select {
        width: 335px;
      }
    }
  }
  .mavonEditor {
    width: 100%;
    height: 100%;
  }
}
</style>
