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
    },
    removeCart(id) {
        console.log(id);
        return callApiWithToken(`${API}/ecommerce/v1/cart/remove-item/${id}`, {
            method: 'DELETE'
        })
    }
}

export default cartService