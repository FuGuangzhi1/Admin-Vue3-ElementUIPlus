import { ref } from "vue"
import router from "@/router";
import { editableTabs } from "./tageBLL";
export const iconName: String = 'Guide'
export const handleOpen: Function = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
export const handleClose: Function = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
export const isCollapse = ref<Boolean>(false)
let tabIndex = 0;
export const skip: Function = (path: string, name: string) => {
    router.push(`/${path}`)
    const newTabName = `${++tabIndex}`
    let isAdd: boolean = true
    editableTabs.value.forEach(el => {
        if (el.title === name) {
            isAdd = false
        }
    })
    if (isAdd) {
        editableTabs.value.push({
            title: name,
            name: newTabName,
            path: path
        })
    }
}