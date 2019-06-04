import { SHOW_PRODUCTS, DELETE_PRODUCT } from '../actions/types';

const initialState = {
    products: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
            
        default:
            return state;
    }
}