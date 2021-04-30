<template functional>
  <div>
    <img
      v-if="props.url"
      src=""
      alt=""
      class="user-avatar"
      :class="{"
      user-avatar--round":props.round
      }"
      :src="props.url"
    >
  </div>
</template>
