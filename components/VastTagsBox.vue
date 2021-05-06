<template>
  <div class="tag-list">
    <div v-for="item in tagList" :key="item._id" class="list-box">
      <div class="box-tag" @click="tagClick(item._id)">
        <i class="icla"></i>{{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const tagList = ref([
      {
        _id: '122',
        name: 'JavaScript基础',
      },
    ])
    const showBorder = ref(true)

    const tagClick = () => {}
    return {
      tagList,
      showBorder,
      tagClick,
    }
  },
})
</script>
<style lang="scss">
.tag-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .list-box {
    cursor: pointer;
    margin: 5px 10px;
    .box-tag {
      background-color: rgb(65, 184, 131);
      color: #fff;
      height: 22px;
      line-height: 22px;
      padding: 0 5px 0 10px;
      position: relative;
      border-radius: 0 5px 5px 0;
      margin: 5px 12px;
      i {
        position: absolute;
        right: 100%;
        font-size: 0;
        line-height: 0;
        border: 11px solid transparent;
        border-right-color: rgb(65, 184, 131);
      }
    }
  }
}
</style>
