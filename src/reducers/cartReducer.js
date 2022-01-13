
const initialState = {}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            console.log('case: set_cart');
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