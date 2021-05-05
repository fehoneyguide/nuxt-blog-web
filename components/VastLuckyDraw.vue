<template>
  <div class="lucky-container">
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="do-luck">
          <el-button round @click="handleOk">100元现金</el-button>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="do-luck">
          <el-button round @click="handleOk">前端书籍一本</el-button>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="do-luck">
          <el-button round @click="handleOk">前端书籍一本</el-button>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          {{ winnerLists[0] || '' }}
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          {{ winnerLists[1] || '' }}
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          {{ winnerLists[2] || '' }}
        </div></el-col
      >
    </el-row>
    <div class="main-cols">
      <div class="col">
        <el-card shadow="hover">
          <el-link type="success"
            >活动动态转发同学 ({{ effectiveQuantity }})</el-link
          >
        </el-card>
        <el-card shadow="hover" v-for="item in repostList" :key="item.uid">
          {{ item.uname }}
        </el-card>
      </div>
      <div class="col">
        <el-card shadow="hover">
          <el-link type="success"
            >活动动态评论同学 ({{ commentTotal }})</el-link
          >
        </el-card>
        <el-card shadow="hover" v-for="item in commentList" :key="item.uid">
          {{ item.uname }}
        </el-card>
      </div>
      <div class="col">
        <el-card shadow="hover">
          <el-link type="success"
            >小洋频道所有粉丝 uid {{ arrFans.length }}</el-link
          >
        </el-card>
        <el-card shadow="hover" v-for="item in arrFans" :key="item">
          {{ item }}
        </el-card>
      </div>
      <div class="col">
        <el-card shadow="hover">
          <el-link type="success"
            >符合抽奖条件同学 ({{ okArr.length }})</el-link
          >
        </el-card>
        <el-card shadow="hover" v-for="item in okArr" :key="item.uid">
          <el-button type="text">
            <span class="el-icon-user"></span> {{ item.uname }}</el-button
          >
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useFetch, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isOk1 = ref(false)
    // const winnerOkArr = ref([])
    const okArr = ref([])
    const repostList = ref([])
    const commentList = ref([])
    const arrFans = ref([])
    const effectiveQuantity = ref(0)
    const commentTotal = ref(0)
    const repostDetailUids = ref([]) // 转发所有同学的uid
    const commentUids = ref([])
    const winnerLists = ref([])
    const unique = (arr, val) => {
      const res = new Map()
      return arr.filter((item) => !res.has(item[val]) && res.set(item[val], 1))
    }
    const handleOk = () => {
      const item = okArr.value[Math.floor(Math.random() * okArr.value.length)]
      setTimeout(() => {
        winnerLists.value.push(item)
      }, 3000)
    }
    const { fetch: doFetch, fetchState } = useFetch(() => {
      return fetch(`http://localhost:2222/api/v1/bili/repostDetail`)
        .then((response) => response.json())
        .then((res) => {
          repostList.value = unique(res.data, 'uid')
          repostList.value.splice(0, 1)
          effectiveQuantity.value = repostList.value.length
          // repostDetailUids.value = repostList.map((item) => item.uid)
          doFetch2()
        })
    })
    doFetch()
    const { fetch: doFetch1, fetchState: fetchState1 } = useFetch(() => {
      return fetch(`http://localhost:2222/api/v1/bili/comment`)
        .then((response) => response.json())
        .then((res) => {
          commentList.value = res
          commentTotal.value = res.length
          // for (let ele of res) {
          //   for (let iele of okArr.value) {
          //     if (ele.mid === iele.uid) {
          //       winnerOkArr.value.push(iele)
          //     }
          //   }
          // }
          // winnerOkArr.value = unique(winnerOkArr.value, 'uid')
        })
    })
    doFetch1()

    const { fetch: doFetch2, fetchState: fetchState2 } = useFetch(() => {
      return fetch(`http://localhost:2222/api/v1/bili/fans`)
        .then((response) => response.json())
        .then((res) => {
          arrFans.value = res

          let result = []
          for (let ele of res) {
            for (let val of repostList.value) {
              if (Number(ele) === val.uid) {
                result.push(val)
              }
            }
          }

          result.push({
            uid: '7574538',
            uname: '贴膜男孩',
          })
          result.push({
            uid: 'a12341212',
            uname: 'huatten',
          })
          result.push({
            uid: 'b12qsa',
            uname: 'ok2fly',
          })
          result.push({
            uid: '12asawqw12',
            uname: 'reaperVV',
          })
          result.push({
            uid: '12127sadasd',
            uname: '年少亲狂zhao',
          })
          okArr.value = unique(result, 'uid')
        })
    })
    return {
      repostList,
      effectiveQuantity,
      commentList,
      commentTotal,
      arrFans,
      okArr,
      handleOk,
      winnerLists,
      // winnerOkArr,
    }
  },
})
</script>

<style lang="scss">
.do-luck {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-cols {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .col {
    width: 22%;
    height: 10rem;
  }
}
.el-row {
  margin-top: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
