
const user = JSON.parse(localStorage.getItem('login')) 

const initialState = {
    login: !!user,
    user
}

 const testReducer = (state = initialState, action) => {
     switch (action.type) {
         
         case 'LOGIN':
             return {
                login: true,
                user: {
                     username: 'Dinh Chuong',
                     password: '123'
                }
            }
         case 'LOGOUT':
            localStorage.removeItem('login')

            return {    
                login: false,   
                user: null
            }
        default:
           return state
    }
}
export default testReducer