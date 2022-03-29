<template>
    <sapn>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="StudyInfoName">
                <el-input v-model="formInline.user" placeholder="StudyInfoName"></el-input>
            </el-form-item>
            <el-form-item label="StudyTypeName">
                <el-select v-model="formInline.region" placeholder="StudyTypeName">
                    <el-option label="前端" value="0"></el-option>
                    <el-option label="后端" value="1"></el-option>
                     <el-option label="数据库" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="StudyInfoName" label="StudyInfoName" />
            <el-table-column prop="StudyInfoDescribe" label="StudyInfoDescribe"  />
            <el-table-column prop="StudyTypeName" label="StudyTypeName" />
            <el-table-column prop="CreateTime" label="CreateTime" />
            <el-table-column prop="UpdateTime" label="UpdateTime" />
        </el-table>
        <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4"></el-pagination>
    </sapn>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const tableData: any = []
const formInline = reactive({
    user: '',
    region: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>
<style>
.el-pagination{
    float: right;
    margin-top: 10px;
}
</style>