<template>
    <el-card shadow="always">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="知识名称">
                <el-input v-model="formInline.studyInfoName" :suffix-icon="Search" placeholder="请输入知识名称..."></el-input>
            </el-form-item>
            <el-form-item label="知识类型">
                <el-select v-model="formInline.studyTypeId" :clearable="true" placeholder="请选择...">
                    <el-option v-for="item in selectData.value" :key="item.id" :label="item.value" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onQuery">查询</el-button>
                <el-button type="success" @click="openAddFrom">添加数据</el-button>
                <el-button type="info" @click="execlDialogVisible = !execlDialogVisible">Execl导出</el-button>
                <el-button type="warning">Execl导入</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" height="420px" style="width: 100% content">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="studyInfoName" align="center" label="知识名称" />
            <el-table-column prop="studyInfoDescribe" align="center" label="知识描述" />
            <el-table-column prop="studyTypeName" align="center" label="知识类型" />
            <el-table-column prop="createTime" align="center" label="创建时间">
                <template #default="scope">
                    <span>{{ jsonTimeFormat(scope.row.createTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="updateTime" align="center" label="修改时间">
                <template #default="scope">
                    <span>{{ jsonTimeFormat(scope.row.updateTime) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <DeleteButton @confirmEvent="handleDelete(scope.$index, scope.row)"></DeleteButton>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-show="isShowPagination" v-model:currentPage="currentPage" v-model:page-size="pageSize"
            :page-sizes="[5, 10, 20]" layout="sizes, prev, pager, next" :total="total" background
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        <el-dialog width="500px" v-model="centerDialogVisible" :title="tip" center>
            <el-form ref="ruleFormRef" :inline="true" :model="fromData" :rules="rules" class="demo-form-inline">
                <el-form-item label="StudyInfoName" prop="studyInfoName">
                    <el-input v-model="fromData.studyInfoName" placeholder="Please Input StudyInfoName" />
                </el-form-item>
                <el-form-item prop="studyTypeId" label="StudyTypeName">
                    <el-select v-model="fromData.studyTypeId" @change="fromChange">
                        <el-option v-for="item in selectData.value" :key="item.id" :label="item.value"
                            :value="item.id" />
                    </el-select>
                </el-form-item>
                <el-form-item prop="studyInfoDescribe" label="StudyInfoDescribe">
                    <el-input v-model="fromData.studyInfoDescribe" placeholder="Please Input StudyInfoDescribe" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                    <el-button type="primary" @click="onSubmit(ruleFormRef)">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog width="500px" v-model="execlDialogVisible" :title="execlTip" center>
            <div class="execlDiv">
                <el-input v-model="execlName" placeholder="请输入Execl的名字"></el-input>
            </div>
            <div class="execlDiv2">
                <el-switch v-model="isXlxs" inactive-text="Xlsx" />
                <el-button @click="onExportExecl">导出</el-button>
            </div>


        </el-dialog>
    </el-card>
</template>

<script lang="ts" setup>
import DeleteButton from '@/components/button/DeleteButton.vue'
import { Search } from '@element-plus/icons-vue'
import StudyInfoApi from '@/api/studyInfoApi'
import {
    execlTip,
    isXlxs,
    execlDialogVisible,
    execlName,
    onExportExecl,
    handleCurrentChange,
    handleSizeChange,
    currentPage,
    pageSize,
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
import { getSessionData, setSessionData } from '@/utils/sessionStorageHelper';

//下拉框数据获取，并存入浏览器数据库
if (getSessionData("SelectData") != null) {
    selectData.value = JSON.parse(getSessionData("SelectData") ?? '')
} else {
    StudyInfoApi.GetStudyTypeAsync().then(result => {
        selectData.value = result.data
        setSessionData("SelectData", JSON.stringify(result.data))
        console.log(selectData)
    })
}
onMounted(async () => {
    await loadTableData()
})

</script>
<style scoped>
.execlDiv {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
}
.execlDiv2 {
    width: 100%;
    margin-bottom: 10px;
    padding-left:28% ;
}

.execlDiv2 > .el-button {
margin-left: 15%;
}
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