import { ElForm } from "element-plus"

//清空form表单数据
export const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}