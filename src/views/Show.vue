<template>
    <el-card class="cardHigth">
        <h1>项目技术描述</h1>
        <el-divider />
        <h1>前端用到了的技术Vue3+Ts+Axios+Store+Router+Element UI Plus</h1>
        <el-divider />
        <h1>后端用到的技术C#的Asp.Net6的Webapi+EFCore6.0</h1>
        <el-divider />
        <h1>基于jwt实现的登录功能</h1>
        <el-divider />
        <h1>用户的注册</h1>
        <el-divider />
        <h1>权限管理</h1>
        <el-divider />
        <h1>持续更新中......</h1>
    </el-card>
</template>

<script lang="ts" setup>
import { ProfilePhoto } from '@/business/personalInfoBLL';
import { onMounted } from 'vue'
onMounted(async () => {
    await ProfilePhoto()
})  
</script>
<style>
.cardHigth {
    height: 520px;
}
</style>
