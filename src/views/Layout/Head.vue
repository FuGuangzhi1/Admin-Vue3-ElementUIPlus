<template>
    <img v-if="squareUrl" :src="squareUrl" alt="需要上传你的头像" class="img" />
    <div class="upload">
        <el-button @click="loginOut">登出</el-button>
        <el-upload action :http-request="handleRequest" :show-file-list="false">
            <el-button>头像上传</el-button>
        </el-upload>  </div>
</template>

<script lang="ts" setup>
import { squareUrl, handleRequest } from '@/business/personalInfoBLL'
import router from '@/router';
const loginOut = () => {
    window.localStorage.clear()
    router.push('/')
}
</script>
<style lang="scss" scoped>
@import "@/style/heard.scss"
</style>
