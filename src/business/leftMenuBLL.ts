import router from "@/router";
import { ref } from "vue";
import { editableTabs, editableTabsValue } from "./tageBLL";
export const iconName: String = 'Guide'
// export const handleOpen: Function = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
// export const handleClose: Function = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
export const index = ref<string>("");
let tabIndex = 0;
export const skip: Function = (path: string, name: string, index: string) => {
    router.push(`/${path}`)
    const newTabName = `${++tabIndex}`
    let isAdd: boolean = true
    editableTabs.value.forEach(el => {
        if (el.title === name) {
            isAdd = false
            editableTabsValue.value = el.name
        }

    })
    if (isAdd) {
        editableTabs.value.push({
            title: name,
            name: newTabName,
            path: path,
            id: index
        })
        editableTabsValue.value = newTabName
    }

}