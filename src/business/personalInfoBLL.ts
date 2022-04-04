import { ref } from 'vue';
import PersonalInfo from '../api/personalInfoApi'

export let data: any = ref({})
export const squareUrl = ref<string>('');

// const fileList: any = []
if (window.localStorage.getItem('UserData') == null) {
    PersonalInfo.GetUserAsync().then(res => {
        data.value = res.data
        window.localStorage.setItem('UserData', JSON.stringify(res.data))
    })
} else {
    data.value = JSON.parse(window.localStorage.getItem('UserData') as string)
}

export const ProfilePhoto = async () => {
    if (window.localStorage.getItem('ProfilePhotoData') == null || window.localStorage.getItem('ProfilePhotoData') == "") {
        const ProfilePhoto = await PersonalInfo.GetProfilePhotoAsync();
        squareUrl.value = ProfilePhoto.data;
        window.localStorage.setItem('ProfilePhotoData', ProfilePhoto.data)
    } else {
        squareUrl.value = window.localStorage.getItem('ProfilePhotoData') ?? ""
    }

}
ProfilePhoto().then(_ => { })
export const handleRequest = (e: any) => {
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
        window.localStorage.setItem('ProfilePhotoData',  data.imgSrc )
    }
    ProfilePhoto().then(_ => { })
}