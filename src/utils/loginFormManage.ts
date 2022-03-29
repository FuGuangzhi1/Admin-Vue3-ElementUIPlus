import router from "@/router";
import { ElForm } from "element-plus";
import { reactive, ref } from "vue";
import AcountApi from '@/api/acountApi'
import { tokenRecord } from "./tokenManger"
//登录的校验
export const rules = reactive({
  email: [
    {
      type: 'email',
      required: true,
      message: 'Email is incorrect...',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'password could not be empty...',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 30,
      message: "Password's length has to be 6 to 30 characters..."
    }
  ],
})
//登录的视图模型
interface User {
  email: string;
  password: string;
}
export const loginForm = reactive<User>({
  email: 'FuGuangzhi1@Outlook.com',
  password: '123456',
})
//获取表单数据
export const ruleFormRef = ref<InstanceType<typeof ElForm>>()
//登录事件
export const submitForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const data = await AcountApi.loginAsync(loginForm)
      console.log(data)
      if (data.state === 0) {
        tokenRecord(data.data)
        router.push('/home')

      }
    } else {
      console.log('error format')
      return
    }
  })
}

const isShowForm = ref(false);
export const onShow = () => {
  let formEle = document.getElementsByClassName('el-form')[0] as HTMLElement
  if (isShowForm.value) {
    formEle.style.cssText = " opacity: 1;"
    isShowForm.value = !isShowForm.value
  } else {
    formEle.style.cssText = " opacity: 0.1;"
    isShowForm.value = !isShowForm.value
  }
}