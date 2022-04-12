<template>
    <el-card class="cardHigth">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="项目技术栈描述" name="1">
                <div>一个管理系统</div>
                <div>前端用到了的技术Vue3+Ts+Axios+Store+Router+Element UI Plus</div>
                <div>后端用到的技术C#的Asp.Net6的Webapi+EFCore6.0</div>
            </el-collapse-item>
            <el-collapse-item title="项目功能描述" name="2">
                <div>基于jwt实现的登录功能</div>
                <div>用户的注册</div>
                <div>权限管理</div>
                <div>持续更新中......</div>
            </el-collapse-item>
        </el-collapse>
        </el-card>
</template>

<script lang="ts" setup>
import { ProfilePhoto } from '@/business/personalInfoBLL';
import { onMounted, ref } from 'vue'
const activeNames = ref(['0'])
const handleChange = (val: string[]) => {
    console.log(val)
}
onMounted(async () => {
    await ProfilePhoto()
})  
</script>
<style>
.cardHigth {
    height: 520px;
}
</style>
