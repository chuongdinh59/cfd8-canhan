import { API } from "../constant/api"
import { callApiWithToken } from "../utils/callApiWithToken"



const userService = {
    getInfo() {
        return callApiWithToken(`${API}/user/get-info`)
   },
   updateInfo(data) {
       callApiWithToken(`${API}/user/update`, {
           method: 'POST',
           body: JSON.stringify(data) 
    })
   }
}


export default userService