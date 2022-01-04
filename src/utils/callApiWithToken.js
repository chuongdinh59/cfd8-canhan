import authService from "../service/authService"


export const callApiWithToken = async (url, options = {}) => {
    const token = JSON.parse(localStorage.getItem('token'))

    options = {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${token.accessToken}`
        }
    }
    const res = await fetch(url, options)

    if (res.status === 403) {
        const newToken = await authService.refreshToken()
        if (newToken.data?.accessToken) {
            token.accessToken = newToken.data.accessToken
            localStorage.setItem('token', JSON.stringify(token))
            options = {
                ...options,
                headers: {
                    ...options.headers,
                    'Authorization': `Bearer ${token.accessToken}`
                }
            }
        }
        return fetch(url, options).then(res => res.json())
    }
    return res.json()
}



