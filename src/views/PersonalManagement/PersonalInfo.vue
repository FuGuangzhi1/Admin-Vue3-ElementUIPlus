<template>
    <el-card class="cardHigth">
        <div>
            <el-row :gutter="12">
                <el-col :span="6">
                    <el-card class="hightSex" shadow="always">
                        <!-- <el-avatar id="img" shape="square" :size="50" :src="squareUrl"></el-avatar> -->
                        <img v-if="squareUrl" :src="squareUrl" class="img" />
                        <el-upload action :http-request="handleRequest" :show-file-list="false">
                            <el-button type="primary">
                                点击上穿头像
                                <el-icon class="el-icon--right">
                                    <Upload />
                                </el-icon>
                            </el-button>
                        </el-upload>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="hightSex" shadow="always">性别:{{ data.sex }}</el-card>
                </el-col>
            </el-row>
        </div>
        <br />
        <div>
            <el-row :gutter="12">
                <el-col :span="6">
                    <el-card>姓名:{{ data.name }}</el-card>
                </el-col>
                <el-col :span="5">
                    <el-card>年龄:{{ data.age }}</el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>邮箱:{{ data.email }}</el-card>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>
<script lang="ts" setup>
import { data, squareUrl, handleRequest } from '@/business/personalInfoBLL'

</script>
<style scoped>
.hightSex {
    height: 200px;
}

.img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
}
</style>
<style>
.cardHigth {
    height: 520px;
}
</style>