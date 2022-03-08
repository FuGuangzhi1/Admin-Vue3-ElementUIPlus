import httpClinet from "@/http/requert";
//主页面接口类
class HomeApi {
    private url = 'api/home/'
    public async GetMenuAsync(): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'GetMenu',
            method: 'post',
        })
    }
}
export default new HomeApi()