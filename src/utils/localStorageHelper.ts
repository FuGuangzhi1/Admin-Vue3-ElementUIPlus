export const getLocalData = (key: string) => {
    return window.localStorage.getItem(key);
}
export const setLocalData = (key: string, value: string) => {
     window.localStorage.setItem(key, value);
}