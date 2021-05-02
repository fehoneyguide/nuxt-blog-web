<template>
  <div class="vast-header-logo">
    <nuxt-link to="/">
      <!-- <img src="/images/be.png" alt="" /> -->
      <h3>前端厚说</h3>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.vast-header-logo {
  min-width: 98px;
  margin-right: 2rem;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
  }
  img {
    /* width: auto;
    height: auto; */
    border-style: none;
    width: 98px;
    height: 38px;
  }
  h3 {
    color: #2e3135;
  }
}
</style>
