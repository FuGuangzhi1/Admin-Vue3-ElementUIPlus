import { reactive, ref } from 'vue'
import StudyInfoApi from '@/api/studyInfoApi'
import { ElForm } from 'element-plus'
import { timestampToTime } from '@/utils/dataTimeHelper'

export const total = ref<Number>(0)
//控制模态框开关
export const centerDialogVisible = ref(false)
//模态框提示
export const tip = ref("tip")
//表格数据
export const tableData: any = ref([])
//是否显示分页组件
export const isShowPagination = ref<boolean>(true)
//下拉框数据绑定
export const selectData: any = reactive([]);
//获取表单数据
export const ruleFormRef = ref<InstanceType<typeof ElForm> | undefined>()
//下拉框真实数据
export const studyTypeId = ref('')
//查询条件
export const formInline = reactive({
    studyInfoName: '',
    studyTypeId: ''
})
//表格数据获取
export const loadTableData = async () => {
    console.log(formInline)
    const result = await StudyInfoApi.GetStudyInfoViewAsync(formInline.studyInfoName, formInline.studyTypeId);
    total.value = result.total
    isShowPagination.value = parseInt(result.total) > 5
    tableData.value = result.data
    console.log(result)
}

//表格数据查询
export const onQuery = async () => {
    await loadTableData()
    console.log('select')
}
export interface StudyInfo {
    id: string;
    studyInfoName: string;
    studyInfoDescribe: string;
    studyTypeId: string;
    createTime: string;
}
//添加或者删除的表单
export const fromData: StudyInfo = reactive({
    id: '00000000-0000-0000-0000-000000000000',
    studyInfoName: 'star',
    studyInfoDescribe: 'star',
    studyTypeId: 'star',
    createTime: timestampToTime()
})

//修改
export const handleEdit = (index: number, row: any) => {
    centerDialogVisible.value = true
    tip.value = '修改数据'
    fromData.id = row.id
    fromData.studyInfoName = row.studyInfoName
    fromData.studyInfoDescribe = row.studyInfoDescribe
    fromData.studyTypeId = row.studyTypeName
    fromData.createTime = row.createTime
    console.log(index, row, fromData)
    studyTypeId.value = row.studyTypeId
}
//删除
export const handleDelete = async (index: number, row: any) => {
    const result = await StudyInfoApi.RemoveStudyInfoAsync(row.id)
    await loadTableData()
    console.log(result)
    console.log(index, row)
}
//添加
export const openAddFrom = async () => {
    resetForm(ruleFormRef.value)
    fromData.id = '00000000-0000-0000-0000-000000000000'
    centerDialogVisible.value = true
    tip.value = '新增数据'

}
//添加或者编辑提交
export const onSubmit = async (formEl: InstanceType<typeof ElForm> | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            if (fromData.id === '00000000-0000-0000-0000-000000000000') {
                const result = await StudyInfoApi.AddStudyInfoAsync(fromData)
                console.log(result)
            } else {
                fromData.studyTypeId = studyTypeId.value
                console.log(studyTypeId.value)
                const result = await StudyInfoApi.EditStudyInfoAsync(fromData)
                console.log(result)
            }
            centerDialogVisible.value = false
            await loadTableData()
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

//表单验证
export const rules = reactive({
    studyInfoName: [
        { required: true, message: 'Please input studyInfoName', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    studyInfoDescribe: [{ required: true, message: 'Please input StudyInfoDescribe', }],
    studyTypeId: [{ required: true, message: '请选择', }]
})


//清空form表单数据
export const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
export const fromChange = (val: any) => {
    studyTypeId.value = val
}