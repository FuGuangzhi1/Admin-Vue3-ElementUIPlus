
import { baseURL } from '@/config';
import router from '@/router';
import { massageShow } from '@/utils/messageInfo';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';


let loading: any;
// create an axios instance
const service = axios.create({
  baseURL: baseURL, 
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})
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

const getToken = (): string | null => {
  let token: string | null = window.localStorage.getItem('access_token')
  if (token === null || token === '') {
    return getToken()
  } else {
    return window.localStorage.getItem('access_token')
  }
}
const endLoading = () => {
  loading.close();
}
// 请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  // 加载
  startLoading();
  if (config.url !== 'api/account/login') {
    config.headers = {
      Authorization: getToken() ?? ''
    }
  }
  return config;
})


// 响应拦截
service.interceptors.response.use((response: AxiosResponse<any>) => {
  // 结束loading
  endLoading();
  //不同相应所给的提示
  if (response.data) {
    massageShow(response.data.state, response.data.massage)
  }
  return response.data;
}, (error: AxiosError) => {
  // 结束loading
  endLoading();
  //过期提示
  if (error.response?.headers['token-expired'] == 'true') {
    massageShow(1, "登录过期")
    window.localStorage.clear()
    router.push('/')
  } else {
    // 错误提醒
    massageShow(1, error.message)
    console.log(error.message)
    return Promise.reject(error);
  }

})

export default service;