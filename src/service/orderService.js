import { API } from "../constant/api"
import callApiWithToken from "../utils/callApiWithToken"


const orderService = {
    setOrder() {
        return callApiWithToken(`${API}/ecommerce/v1/order`).then(res => res.json(),
            { methods: 'POST'}
        )
    },
    getOrderDetail(id) {
        return callApiWithToken(`${API}/ecommerce/v1/order/${id}`).then(res => res.json())
    },
    getAllOrder() {
        return callApiWithToken(`${API}/ecommerce/v1/profile/order`).then(res => res.json())
    }
}

export default orderService;