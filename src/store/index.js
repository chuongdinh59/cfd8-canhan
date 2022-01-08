import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import authReducer from '../reducers/authReducer'
import cartReducer from '../reducers/cartReducer'
import pageReducer from '../reducers/pageReducer'
import rootSaga from './rootSaga'

const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    page: pageReducer
})

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)


const token = JSON.parse(localStorage.getItem('token'))
const pageNumber = JSON.parse(localStorage.getItem('page_number'))
if (token) {
    store.dispatch({type: 'GET_PROFILE'})
}
if (pageNumber) {
    store.dispatch({ type: 'UPDATE_PAGE', payload : pageNumber})
}

export default store
