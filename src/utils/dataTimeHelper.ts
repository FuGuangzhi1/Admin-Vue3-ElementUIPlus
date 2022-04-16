// 获取当前日期时间
export const timestampToTime = () => {
    var date = new Date();
    var Y = date.getFullYear() + "-";
    var M =
        (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
    var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    // var text = " ";
    // var hh =
    //     date.getHours() < 10 ? "0" + date.getHours() : date.getHours() + ":";
    // var mm =
    //     date.getMinutes() < 10
    //         ? "0" + date.getMinutes()
    //         : date.getMinutes() + ":";
    // var ss =
    //     date.getSeconds() < 10 ? "0" + date.getDate() : date.getSeconds();
    return Y + M + D;
}

export const jsonTimeFormat = (jsonTime: any) => {
    var dateee = new Date(jsonTime).toJSON();
    var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    return date
}