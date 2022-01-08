const initialState = {
    page: 1
}

const pageReducer = (state = initialState, action) => {
   switch (action.type) {
       case 'UPDATE_PAGE':
           return {
               ...state,
               page: action.payload
           }
   
       default:
           break;
    }
    
    return state
}

export default pageReducer