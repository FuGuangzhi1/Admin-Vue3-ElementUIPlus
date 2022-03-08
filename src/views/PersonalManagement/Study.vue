<template>
    <sapn>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="Approved by">
                <el-input v-model="formInline.user" placeholder="Approved by"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="formInline.region" placeholder="Activity zone">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
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
