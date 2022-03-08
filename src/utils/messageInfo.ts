import { ElMessage } from 'element-plus'

export function massageShow(type: number, massage: string): any {
    switch (type) {
        case 0:
            ElMessage({
                message: massage,
                type: 'success',
            })
            return
        case 1:
            ElMessage.error(massage)
            return
        case 2:
            ElMessage({
                message: massage,
                type: 'warning',
            })
            return
        case 3:
            ElMessage(massage)
            return
        default:
    }

}
