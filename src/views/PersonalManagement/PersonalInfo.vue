<template>
    <el-card class="cardHigth">
        <el-descriptions title="User Info" border>
            <el-descriptions-item label="Username">{{ userData.name }}</el-descriptions-item>
            <el-descriptions-item label="Email">{{ userData.email }}</el-descriptions-item>
            <el-descriptions-item label="Sex">{{ userData.sex }}</el-descriptions-item>
            <el-descriptions-item label="Remarks">
                <el-tag size="small">handsome boy</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="wish">Star Star Star Star Star</el-descriptions-item>
        </el-descriptions>
        </el-card>
</template>
<script lang="ts" setup>
import { userData } from '@/business/personalInfoBLL'
import PersonalInfo from '@/api/personalInfoApi'
import { onMounted } from 'vue';
import { getLocalData, setLocalData } from '@/utils/localStorageHelper';
import '@/utils/string-extensions'
onMounted(async () => {
    let data = getLocalData('UserData')
    if (!data?.isNOtNullOrEmpty()) {
        const { data } = await PersonalInfo.GetUserAsync()
        userData.value = data
        setLocalData('UserData', JSON.stringify(data))
    } else {
        userData.value = JSON.parse(getLocalData('UserData') as string)
    }

})

</script>
<style scoped>

</style>
