import { SHOW_PRODUCTS, DELETE_PRODUCT } from './types';
import request from 'superagent';

export const showProducts = () => dispatch => {
    const APIShowProducts = 'http://localhost:5000/productos';

    request
    .get(APIShowProducts)
    .then(response => {
        dispatch({
            type: SHOW_PRODUCTS,
            payload: response.body
        })
    })
    .catch(error => {
        console.log(error);
    })
}

export const deleteProduct = id => dispatch => {
    const APIDeleteProduct = `http://localhost:5000/productos/${id}`;

    request.delete(APIDeleteProduct)
    .then(
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    )
    .catch()
}