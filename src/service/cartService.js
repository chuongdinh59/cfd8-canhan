import { API } from '../constant/api'
import callApiWithToken from '../utils/callApiWithToken'


const cartService = {
    getCart() {
        return callApiWithToken(`${API}/ecommerce/v1/cart`)
    },
    updateQuantity(id, newQuantity) {
        return callApiWithToken(`${API}/ecommerce/v1/cart/quantity/${id}`,{
            method: 'PUT',
            body: JSON.stringify({quantity: newQuantity})
        })
    }
}

export default cartService