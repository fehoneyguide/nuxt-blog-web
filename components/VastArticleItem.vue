<template>
  <nuxt-link to="">
    <el-card shadow="hover" class="a">
      <div class="article-item">
        <div class="item-info">
          <div class="info-text">
            <h3>闭包初始</h3>
            <div class="text-desc">
              关于闭包 我们都知道cehsascecasace测试啊测还测 关于闭包
              我们都知道cehsascecasace测试啊测还测 关于闭包
              我们都知道cehsascecasace测试啊测还测
              我们都知道cehsascecasace测试啊测还测
            </div>
            <div class="text-tag">
              标签：
              <VastTagsBox />
              <!-- <tag-box :tag-list="item.tags"></tag-box> -->
            </div>
          </div>
          <div class="info-data">
            <div class="data-view">
              <i class="el-icon-view"></i>
              <span>100</span>
            </div>
            <div class="data-view">
              <i class="el-icon-chat-round"></i>
              <span>12</span>
            </div>
            <div class="data-view">
              <i class="mio-icon-zan iconfont"></i>
              <span>123</span>
            </div>
            <div class="data-view">
              <span>创建时间</span>
              <span> 2021-05-06 12:12 </span>
            </div>
            <div class="data-view">
              <span>作者：</span>
              <span> vast </span>
            </div>
          </div>
        </div>
        <div class="item-right-img">
          <img src="https://yayxs.github.io/avatar.jpg" alt="" />
        </div>
      </div>
    </el-card>
  </nuxt-link>
</template>

<style lang="scss">
.article-item {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .item-info {
    min-height: 120px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info-text {
      h3 {
        color: #333;
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .text-tag {
        color: #666;
        margin: 10px 0;
        display: flex;
        align-items: center;
      }

      .text-desc {
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .info-data {
      display: flex;
      align-items: center;
    }
  }
  .item-right-img {
    width: 125px;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
