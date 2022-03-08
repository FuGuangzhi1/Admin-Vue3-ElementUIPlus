<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- <Head /> -->
      </el-header>
      <!-- 左菜单 -->
      <el-container>
        <el-aside width="200px">
          <LeftMenu v-if="initSuccess" :fatherMethod="watchIsCollapse" :menuData="data" />
        </el-aside>
        <el-container>
          <!-- 主要显示页面 -->
          <el-main>
            <Tage />
            <!-- <router-view /> -->
          </el-main>
          <!-- 底部 -->
          <el-footer>
            <div class="copyright">
              ©2022-02
              <el-divider direction="vertical"></el-divider>QQ:31159950559
              <el-divider direction="vertical"></el-divider>E-mail:FuGuangzhi1@outlook.com.
              <el-divider direction="vertical"></el-divider>
              <el-link href="https://github.com/FuGuangzhi1/showtimecodeweb">GitHUb:FuGuangzhi</el-link>
              <el-divider direction="vertical"></el-divider>有问题可用以上方式留言
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import LeftMenu from './Layout/LeftMenu.vue';
// import Head from '@/views/Layout/Head.vue';
import { watchIsCollapse, getMenuAsync } from '@/utils/home'
import { onMounted, shallowRef } from 'vue';
import Tage from '@/views/Layout/Tage.vue'
// import { getTokenRecord } from '@/utils/tokenManger';
const initSuccess: any = shallowRef<Boolean>(false)
const data: any = shallowRef([]);
onMounted(async () => {
  setTimeout(()=>console.log("Awit one second"), 1000)
  data.value = await getMenuAsync()
  setInterval(() => {
    initSuccess.value = true
  }, 1000)
})
</script>
<style lang="scss" scoped>
.common-layout {
  margin: 0px;
  padding: 0px;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #8e9eab;
  }
  .el-header {
    background-color: #8e9eab;
  }
  .el-footer {
    background-color: #8e9eab;
  }
  .el-main {
    background-color: white;
  }
}
.copyright {
  text-align: center;
  line-height: 50px;
}
</style>
