
const initialState = {}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                cart: action.payload
            }
        default:
            break;
    }
    return state
};

export default cartReducer;