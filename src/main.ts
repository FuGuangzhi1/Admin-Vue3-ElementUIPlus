import { createApp, createVNode } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import axios from './http/requert'
const app = createApp(App)
// 全局挂载axios
app.config.globalProperties.$axios = axios;
app.use(ElementPlus)

app.use(store)
app.use(router)
app.mount('#app')

// 注册全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons])
  })

