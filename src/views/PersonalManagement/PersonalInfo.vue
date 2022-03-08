<template>
    <span>
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
    </span>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import PersonalInfo from '@/api/personalInfoApi'

let data: any = ref({})
const squareUrl = ref<string>('');

// const fileList: any = []
PersonalInfo.GetUserAsync().then(res => {
    data.value = res.data
})
const ProfilePhoto = async () => {
    const ProfilePhoto = await PersonalInfo.GetProfilePhotoAsync();
    squareUrl.value = ProfilePhoto.data;
}
ProfilePhoto().then(_ => { })
const handleRequest = (e: any) => {
    const fd = new FileReader()
    fd.readAsDataURL(e.file)
    // 将文件转化为base64格式传入后端
    fd.onload = async () => {
        console.log(fd.result)
        const data = {
            imgSrc: '',
            imgName: e.file.name
        }
        data.imgSrc = fd.result as string
        if (data.imgSrc === '') return
        await PersonalInfo.SaveImgBase64(data)
    }
    ProfilePhoto().then(_ => { })
}
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