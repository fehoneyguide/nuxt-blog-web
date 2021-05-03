<template>
  <main class="main-container">
    <div class="timeline-index-view">
      <div class="timeline-container">
        <nav class="tag-nav"></nav>
        <div class="timeline-content">
          <div class="timeline-entry-list">
            <div class="entry-list-container">
              <header>
                <div class="follow-header follow-header-info">
                  <div class="breadcrumb">
                    <p class="cur">我的B站粉丝</p>
                  </div>
                </div>
              </header>
              <div class="list-wrap">
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
                <VastFollowBiLi />
              </div>
            </div>
          </div>
          <aside class="index-aside">
            <VastIndexLogin></VastIndexLogin>
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  display: block;
  margin-top: 4.4rem;
  .timeline-index-view {
    position: relative;

    .timeline-container {
      position: relative;

      .timeline-content {
        position: relative;
        .timeline-entry-list {
          margin-right: 21.66rem;
          border-radius: 2px;
          width: 700px;
          .entry-list-container {
            .follow-header {
              border-bottom: 1px solid #e5e9ef;
              padding-bottom: 20px;
              min-height: 30px;
              margin: 20px 20px 0;
              .breadcrumb {
                line-height: 30px;
                font-size: 0;
                .cur {
                  color: #222;
                  font-size: 18px;
                }
              }
            }
          }
        }
        .index-aside {
          width: 20rem;
          height: 500px;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }
      }
    }
  }
}
</style>
