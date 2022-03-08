import httpClinet from "@/http/requert";
//用户接口类
class AccountApi {
    private url = 'api/account/' //地址
    //用户登录
    public async loginAsync(data: any): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'login',
            method: 'post',
            data: data
        })
    }
}
export default new AccountApi()