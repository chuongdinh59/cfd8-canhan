import { combineReducers, createStore } from 'redux'
import { loginAction } from '../actions'
import authReducer from '../reducers/authReducer'
import userService from '../service/userService'
const rootReducer = combineReducers({
    auth: authReducer
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const token = JSON.parse(localStorage.getItem('token'))
if (token) {
    userService.getInfo().then(user => {
        store.dispatch(loginAction({
            type: 'LOGIN',
            payload: user.data
        }))
    })
}


export default store
