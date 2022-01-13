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
   try {
       const token = JSON.parse(localStorage.getItem('token'))

       if (token) {
           const cart = yield call(cartService.getCart)
           yield put({ type: 'SET_CART', payload: cart.data })
       }

   } catch (error) {
       
   }
}

function* addProduct(action) {
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        if (!token) {
            return;
        }
        yield call(cartService.updateQuantity, action.payload.id, 1)
        yield put({type: "GET_CART"})
    } catch (error) {
    }
}

function* updateQuantity(action) {
    console.log(action);
    try {
        const { product_id, quantity } = action.payload

        yield call(cartService.updateQuantity, product_id, quantity)

        console.log('next get cart');
        yield put({ type: "GET_CART" }) 
        

    } catch (error) {
        
    }
}
function* removeCart(action) {
    try {
        const { id } = action.payload
        yield call(cartService.removeCart, id)
        yield put({type: 'GET_CART'})
    } catch (error) {
        
    }    
}
function* rootSaga() {
    console.log('rootSaga');
    yield takeEvery('LOGIN', fetchLogin);
    yield takeLatest('GET_PROFILE', getProfile)
    yield takeLatest('GET_PROFILE', getCart) 
    yield takeLatest('GET_CART', getCart)
    yield takeEvery('ADD_PRODUCT', addProduct)
    yield takeEvery('REMOVE_CART', removeCart)
    yield takeEvery(['INCREMENT', 'DECREMENT'], updateQuantity) 
}

export default rootSaga;