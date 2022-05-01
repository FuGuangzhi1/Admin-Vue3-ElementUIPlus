export const getSessionData = (key: string) => {
    return window.sessionStorage.getItem(key);
}
export const setSessionData = (key: string, value: string) => {
     window.sessionStorage.setItem(key, value);
}