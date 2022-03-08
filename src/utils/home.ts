import { ref } from "vue";
import HomeApi from '@/api/homeApi'
export const watchIsCollapse = (isCollapse: Boolean) => {
  const el = document.getElementsByClassName('el-aside')[0] as HTMLElement
  console.log("调用成功watchIsCollapse")
  if (isCollapse) {
    el.style.width = "200px";
  } else {
    el.style.width = "64px";
  }
}

export const getMenuAsync = async () => {
  const result = await HomeApi.GetMenuAsync()
  return result.data
}