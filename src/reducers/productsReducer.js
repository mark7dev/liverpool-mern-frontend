import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT } from '../actions/types';

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
        
        case SHOW_PRODUCT:
            return {
                ...state,
                product: action.payload
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            }
        
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map(
                    product => product._id === action.payload._id ? (product = action.payload) : product
                )
            }

        default:
            return state;
    }
}