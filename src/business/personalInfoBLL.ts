import { ref } from 'vue';
import PersonalInfo from '../api/personalInfoApi'

export let userData: any = ref({})
export const squareUrl = ref<string>('');

export const ProfilePhoto = async () => {
    if (window.localStorage.getItem('ProfilePhotoData') == null || window.localStorage.getItem('ProfilePhotoData') == "") {
        const { data } = await PersonalInfo.GetProfilePhotoAsync();
        squareUrl.value = data;
        window.localStorage.setItem('ProfilePhotoData', data)
    } else {
        squareUrl.value = window.localStorage.getItem('ProfilePhotoData') ?? ""
    }

}

export const handleRequest = async (e: any) => {
    const fd = new FileReader()
    fd.readAsDataURL(e.file)
    // 将文件转化为base64格式传入后端
    fd.onload = async () => {
        console.log(fd.result)
        const data = {
            imgSrc: '',
            imgName: e.file.name
        }
        data.imgSrc = fd.result as string
        if (data.imgSrc === '') return
        await PersonalInfo.SaveImgBase64(data)
        window.localStorage.setItem('ProfilePhotoData', data.imgSrc)
    }
    await ProfilePhoto()
}

