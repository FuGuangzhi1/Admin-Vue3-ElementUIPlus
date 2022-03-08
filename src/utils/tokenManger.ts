interface TokenInfo {
    access_token: string
    expires_in: number
}
export function tokenRecord(tokenInfo: TokenInfo): any {
    if (!tokenInfo) return
    window.localStorage.setItem('access_token', tokenInfo.access_token)
    window.localStorage.setItem('expires_in', tokenInfo.expires_in.toString())
}

export function getTokenRecord(): TokenInfo {
    let tokenInfo: TokenInfo = {
        access_token: window.localStorage.getItem('access_token') ?? '',
        expires_in: Number.parseInt(window.localStorage.getItem('access_token') ?? '0')
    };
    return tokenInfo
}
