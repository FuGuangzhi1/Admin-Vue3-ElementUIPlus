
import { massageShow } from '@/utils/messageInfo';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';


let loading: any;

const startLoading = () => {

  interface Options {
    lock: boolean;
    text: string;
    background: string;
  };

  const options: Options = {
    lock: true,
    text: "加载中...",
    background: 'rgba(0,0,0,0.7)'
  }
  loading = ElLoading.service(options);
}

const endLoading = () => {
  loading.close();
}
let token: string | null = window.localStorage.getItem('access_token')
// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (token != null) config.headers = {
    Authorization: token
  }
  // 加载
  startLoading();
  return config;
})


// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
  // 结束loading
  endLoading();
  console.log(response)
  //不同相应所给的提示
  if (response.data) {
    massageShow(response.data.state, response.data.massage)
  }
  return response.data;
}, (error: AxiosError) => {
  if (token == null) {
    massageShow(1, "登录过期")
  }
  // 结束loading
  endLoading();
  console.log(error.response?.headers['token-expired'])
  //过期提示
  if (error.response?.headers['token-expired']) {
    massageShow(1, "登录过期")
    window.localStorage.setItem('access_token', '')
    return
  }
  // 错误提醒
  massageShow(1, error.message)
  return Promise.reject(error);
})

export default axios;