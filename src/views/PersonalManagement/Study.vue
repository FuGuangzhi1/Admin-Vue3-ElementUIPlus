<template>
    <span>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="StudyInfoName">
                <el-input
                    v-model="formInline.studyInfoName"
                    :suffix-icon="Search"
                    placeholder="StudyInfoName"
                ></el-input>
            </el-form-item>
            <el-form-item label="StudyTypeName">
                <el-select v-model="formInline.studyTypeId" :clearable="true" placeholder="Select">
                    <el-option
                        v-for="item in selectData.value"
                        :key="item.id"
                        :label="item.value"
                        :value="item.id"
                    />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onQuery">Query</el-button>
                <el-button type="success" @click="openAddFrom">Add</el-button>
                <el-button type="info">ExportExecl</el-button>
                <el-button type="warning">ImportExecl</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="studyInfoName" label="StudyInfoName" />
            <el-table-column prop="studyInfoDescribe" label="StudyInfoDescribe" />
            <el-table-column prop="studyTypeName" label="StudyTypeName" />
            <el-table-column prop="createTime" label="CreateTime">
                <template #default="scope">
                    <span>{{ jsonTimeFormat(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="updateTime" label="UpdateTime">
                <template #default="scope">
                    <span>{{ jsonTimeFormat(scope.row.updateTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <DeleteButton @confirmEvent="handleDelete(scope.$index, scope.row)"></DeleteButton>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            v-show="isShowPagination"
            small
            background
            layout="prev, pager, next"
            :total="total"
            class="mt-4"
        ></el-pagination>
        <el-dialog width="500px" v-model="centerDialogVisible" :title="tip" center>
            <el-form
                ref="ruleFormRef"
                :inline="true"
                :model="fromData"
                :rules="rules"
                class="demo-form-inline"
            >
                <el-form-item label="StudyInfoName" prop="studyInfoName">
                    <el-input
                        v-model="fromData.studyInfoName"
                        placeholder="Please Input StudyInfoName"
                    />
                </el-form-item>
                <el-form-item prop="studyTypeId" label="StudyTypeName">
                    <el-select v-model="fromData.studyTypeId" @change="fromChange">
                        <el-option
                            v-for="item in selectData.value"
                            :key="item.id"
                            :label="item.value"
                            :value="item.id"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item prop="studyInfoDescribe" label="StudyInfoDescribe">
                    <el-input
                        v-model="fromData.studyInfoDescribe"
                        placeholder="Please Input StudyInfoDescribe"
                    />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                    <el-button type="primary" @click="onSubmit(ruleFormRef)">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </span>
</template>

<script lang="ts" setup>
import DeleteButton from '@/components/button/DeleteButton.vue'
import { Search } from '@element-plus/icons-vue'
import StudyInfoApi from '@/api/studyInfoApi'
import {
    fromChange,
    resetForm,
    ruleFormRef,
    rules,
    onSubmit,
    openAddFrom,
    formInline,
    selectData,
    onQuery,
    tableData,
    handleEdit,
    handleDelete,
    isShowPagination,
    total,
    centerDialogVisible,
    fromData,
    tip,
    loadTableData
} from '@/business/studyBLL'
import { onMounted } from 'vue';
import { jsonTimeFormat } from '@/utils/dataTimeHelper'
//下拉框数据获取，并存入浏览器数据库
if (window.localStorage.getItem("SelectData") != null) {
    selectData.value = JSON.parse(window.localStorage.getItem("SelectData") ?? '')
} else {
    StudyInfoApi.GetStudyTypeAsync().then(result => {
        selectData.value = result.data
        window.localStorage.setItem("SelectData", JSON.stringify(result.data))
        console.log(selectData)
    })
}
onMounted(async () => {
    await loadTableData()
})

</script>
<style scoped>
.el-pagination {
    float: right;
    margin-top: 10px;
}
.el-button--text {
    margin-right: 15px;
}
.el-select {
    width: 200px;
}
.el-input {
    width: 200px;
}
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>