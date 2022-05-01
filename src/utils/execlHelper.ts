export const exportExecl = (result: Blob | MediaSource, execlName: string) => {
    var link = document.createElement('a')
    var body = document.querySelector('body') as HTMLElement
    /*window.URL.createObjectURL可以用于在浏览器上预览本地图片或者视频,创建一个url*/
    link.href = window.URL.createObjectURL(result)//为Blob对象创建一个url地址
    link.download = execlName
    link.style.display = 'none'
    body.appendChild(link)
    link.click()
    body.removeChild(link)
    window.URL.revokeObjectURL(link.href)// 释放地址
}