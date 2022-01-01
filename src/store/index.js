import { createStore,   combineReducers } from 'redux'
import authReducer from './authenReducer'
import testReducer from './testReducer';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    test: testReducer,
    todo: todoReducer

})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store