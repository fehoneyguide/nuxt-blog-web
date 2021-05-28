<template>
  <li class="label-card">
    <div class="tag">
      <div class="info-box">
        <nuxt-link to="">
          <img
            src="https://lc-gold-cdn.xitu.io/bac28828a49181c34110.png?imageView2/2/w/100/h/100/q/85/format/webp/interlace/1"
            alt=""
          />
          <div class="title">前端</div>
        </nuxt-link>
        <div class="meta-box">
          <div class="sub">10关注</div>
          <div class="art">999文章</div>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.label-card {
  width: 25%;
  display: inline-block;
  margin-bottom: 1.3rem;
  padding: 0 0.7rem;
  box-sizing: border-box;
  list-style: none;

  .tag {
    background-color: #fff;
    display: inline-block;
    width: 100%;
    border: 1px solid #f1f1f1;
    transition: border-color 0.3s;
    text-align: center;
    padding: 1.5rem 0;
    .info-box {
      a {
        text-decoration: none;
        cursor: pointer;
        color: #909090;

        img {
          width: 50px;
          height: 50px;
          margin: 1rem auto;
          object-fit: contain;
        }
        .title {
          font-size: 1.5rem;
          line-height: 2rem;
          color: #333;
        }
      }
      .meta-box {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        color: #909090;
        .art {
          margin-left: 0.8rem;
          line-height: 2rem;
        }
        .sub {
          line-height: 2rem;
        }
      }
    }
  }
}
</style>
