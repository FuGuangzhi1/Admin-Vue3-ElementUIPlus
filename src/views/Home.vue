<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- <Head /> -->
        <!-- <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu> -->
      </el-header>
      <!-- 左菜单 -->
      <el-container>
        <el-aside width="200px">
          <LeftMenu v-if="initSuccess" />
        </el-aside>
        <el-container>
          <!-- 主要显示页面 -->
          <el-main>
            <Tage />
            <router-view v-slot="{ Component }">
              <transition name="el-zoom-in-center">
                <component :is="Component" />
              </transition>
            </router-view>
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
import { shallowRef, ref } from 'vue';
import Tage from '@/views/Layout/Tage.vue'
const initSuccess: any = shallowRef<Boolean>(false);


const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
setTimeout(() => initSuccess.value = true, 200)

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
background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  .el-header {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  .el-footer {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
  .el-main {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }
}
.copyright {
  text-align: center;
  line-height: 50px;
}
</style>
