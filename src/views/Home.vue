<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Heard></Heard>
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
              <el-link :underline="false" href="https://github.com/FuGuangzhi1/showtimecodeweb">GitHUb:FuGuangzhi
              </el-link>
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
import { onMounted, shallowRef } from 'vue';
import Tage from '@/views/Layout/Tage.vue'
import Heard from '@/views/Layout/Head.vue'
import { ProfilePhoto } from '@/business/personalInfoBLL';
const initSuccess: any = shallowRef<Boolean>(false);
onMounted(async () => {
  await ProfilePhoto()
})

setTimeout(() => initSuccess.value = true, 200)
</script>
<style lang="scss" scoped>
@import "@/style/home.scss";
</style>
<style>
.copyright {
  text-align: center;
  line-height: 50px;
}
</style>