import { GET_PRODUCTS,CREATE_USER,OPEN_PRODUCT_POPUP } from '../../action/constants';

const initial_states = {
    products:[],
    open:false
}

export default function productReducer(state = initial_states, action) {
    switch(action.type) {
        case GET_PRODUCTS:
        return {
            ...state,
            products:action.payload
        }
        case CREATE_USER:
        return {
            ...state,
            open:!state.open
        }
        case OPEN_PRODUCT_POPUP:
        return {
            ...state,
            open:action.open
        }
        default: return state; 
    }
}

