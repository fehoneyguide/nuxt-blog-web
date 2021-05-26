<template>
  <ul class="nav-menu user-dropdown-list">
    <li class="nav-menu-item" @click.stop="handleClick">
      <nuxt-link v-for="item in list" :key="item.id" :to="`${item.link}`">
        <i :class="`${item.classVal}`"></i>
        <span>{{ item.name }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'VastAvatarTip',
  setup(_, { emit }) {
    const list: Ref<any> = ref([
      {
        id: 1,
        name: '标签管理',
        link: '/label',
        classVal: 'el-icon-price-tag',
      },
      {
        id: 2,
        name: '设置',
        link: '/settings/profile',
        classVal: 'el-icon-setting',
      },
      {
        id: 3,
        name: '登出',
        link: '',
      },
    ])
    const handleClick = (): void => {
      emit('emit-flag', true)
    }
    return {
      list,
      handleClick,
    }
  },
})
</script>
<style lang="scss" scoped>
.user-dropdown-list {
  width: fit-content;
  min-width: 13.1rem;
  right: 0;
  left: auto;
  transform: translateX(0);
  position: relative;
  margin: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  border: 1px solid rgba(177, 180, 185, 0.45);
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 1rem 0;
  .nav-menu-item {
    font-size: 1.3rem;
    cursor: pointer;
    white-space: nowrap;
    list-style: none;
    a {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      color: #71777c;
      i {
        display: inline-block;
        width: 1em;
        height: 1em;
        margin-right: 0.8rem;
        font-size: 1.2em;
        vertical-align: middle;
        color: #b2bac2;
      }
      span {
        margin-left: 0;
        flex-grow: 1;
      }
    }
  }
}
</style>
