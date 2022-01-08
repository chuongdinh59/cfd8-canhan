import { API } from "../constant/api"
import callApiWithToken from "../utils/callApiWithToken"

const userService = {
    getInfo() {

        return callApiWithToken(`${API}/user/get-info`)
        // const token = JSON.parse(localStorage.getItem('token'))
        // return fetch(`${API}/user/get-info`, {
        //     headers: {
        //         'Authorization': `Bearer ${token.accessToken}`
        //     }
        // }).then(res => res.json())
    },
    updateInfo(data) {
        return callApiWithToken(`${API}/user/update`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // const token = JSON.parse(localStorage.getItem('token'))
        // return fetch(`${API}/user/update`, {
        //     headers: {
        //         'Authorization': `Bearer ${token.accessToken}`
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => res.json())
    }

}

export default userService