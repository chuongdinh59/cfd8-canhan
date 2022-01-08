import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import authService from '../service/authService';
import cartService from '../service/cartService';
import userService from '../service/userService';


function* fetchLogin(action) {
    try {
        const token = yield call(authService.login, action.payload)
        localStorage.setItem('token', JSON.stringify(token.data))
        yield put({ type: 'GET_PROFILE' })
    } catch (err) {
        
    }
}

function* getProfile(action) {
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            const user = yield call(userService.getInfo)
            yield put({ type: 'SET_PROFILE', payload: user.data })
        }
        
    } catch (err) {
        
    }
}

function* getCart() {
    console.log(1);
   try {
       const token = JSON.parse(localStorage.getItem('token'))

       if (token) {
           const cart = yield call(cartService.getCart)
           console.log(cart);
           yield put({ type: 'SET_CART', payload: cart.data })
       }

   } catch (error) {
       
   }
}


function* updateQuantity( action ) {
    try {
        const { product_id, quantity } = action.payload
        
        console.log(product_id, quantity);

        yield call(cartService.updateQuantity, product_id, quantity)

        console.log('DONE UPDATE...');
        yield put({type: "GET_CART"})

    } catch (error) {
        
    }
}

function* rootSaga() {

    yield takeEvery('LOGIN', fetchLogin);
    yield takeLatest('GET_PROFILE', getProfile)
    yield takeLatest('GET_PROFILE', getCart) 
    yield takeLatest('GET_CART', getCart)
    yield takeEvery(['INCREMENT', 'DECREMENT'], updateQuantity) 

}

export default rootSaga;