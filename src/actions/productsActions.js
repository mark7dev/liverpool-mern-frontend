import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from './types';
import request from 'superagent';
// import axios from 'axios';

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

    request
    .delete(APIDeleteProduct)
    .then(
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    )
    .catch(error => {
        console.log(error);
    })
}

export const addProduct = post => dispatch => {

    request
    .post('http://localhost:5000/productos/')
    .send(post)
    .then(response => {
        // console.log(response);
        dispatch({
            type: ADD_PRODUCT,
            payload: response.body
        })
    })
    .catch(error => {
        console.log(error);
    })
}

// export const addProduct = post => async dispatch => {
//     const response = await axios.post('http://localhost:5000/productos/', post);

//         dispatch({
//             type: ADD_PRODUCT,
//             payload: response.body
//         })
    
// }