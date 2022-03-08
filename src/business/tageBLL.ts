import router from "@/router";
import { ref } from "vue";
export const editableTabsValue = ref('0')
export const editableTabs = ref([
    {
        title: '首页',
        name: '0',
        path: 'Show'
    },
])
export const toLink = (path: any) => {
    let title = path.props.label
    editableTabs.value.forEach(
        x => {
            if (x.title === title) {
                if (title === '首页') {
                    router.push(`/Show`)
                } else {
                    router.push(`/${x.path}`)
                }
            }
        }
    )


}