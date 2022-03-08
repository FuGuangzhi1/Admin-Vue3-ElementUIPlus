import httpClinet from "@/http/requert";
class PersonalInfoApi {
    private url = 'api/PersonalInfo/'
    public async GetUserAsync(): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'GetUser',
            method: 'get',
        })
    }
    public async GetProfilePhotoAsync(): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'GetProfilePhoto',
            method: 'get',
        })
    }
    public async SaveImgBase64(data: any): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'SaveImgBase64',
            method: 'post',
            data: data
        })
    }

}
export default new PersonalInfoApi()