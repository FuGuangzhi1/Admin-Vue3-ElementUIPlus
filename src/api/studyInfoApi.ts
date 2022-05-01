import { StudyInfo } from "@/business/studyBLL";
import httpClinet from "@/http/requert";
class StudyInfoApi {
    private url = 'api/StudyInfo/'

    public async GetStudyInfoViewAsync(studyInfoName: string | null, studyTypeId: string | null, currentPage: Number, pageSize: Number): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'GetStudyInfoView',
            method: 'get',
            params: {
                studyInfoName: studyInfoName,
                studyTypeId: studyTypeId,
                currentPage: currentPage,
                pageSize: pageSize,

            }
        })
    }
    public async GetStudyTypeAsync(): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'GetStudyType',
            method: 'get',
        })
    }
    public async AddStudyInfoAsync(studyInfo: StudyInfo): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'AddStudyInfo',
            method: 'post',
            data: studyInfo
        })
    }
    public async EditStudyInfoAsync(studyInfo: StudyInfo): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'EditStudyInfo',
            method: 'put',
            data: studyInfo
        })
    }
    public async RemoveStudyInfoAsync(id: string | null): Promise<any> {
        return await httpClinet.request({
            url: this.url + 'RemoveStudyInfo',
            method: 'delete',
            params: {
                id: id
            }
        })
    }
    public async GetStudyInfoExeclAsync(execlName: string | null, sheetName: string | null, isXlsx: boolean | null): Promise<any> {
        return await httpClinet.request({
            responseType: 'blob',
            url: this.url + 'GetStudyInfoExecl',
            method: 'get',
            params: {
                execlName: execlName,
                sheetNamr: sheetName,
                isXlsx:isXlsx
            }
        })
    }
}

export default new StudyInfoApi()