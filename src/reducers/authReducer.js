// const user = {
//     username: 'chuong@gmail.com',
//     password: '123Aa*Bb'
// }

const initialState = {
    login: false,
    user: null
}

 const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                login: !!action.payload,
                user: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default  authReducer 