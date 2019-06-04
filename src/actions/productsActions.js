import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT } from './types';
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

export const showProduct = id => dispatch => {
    const APIShowProduct = `http://localhost:5000/productos/${id}`;

    request
    .get(APIShowProduct)
    .then(response => {
        dispatch({
            type: SHOW_PRODUCT,
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

export const addProduct = product => dispatch => {

    request
    .post('http://localhost:5000/productos/')
    .send(product)
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

export const editProduct = product => dispatch => {
    
    request
    .put(`http://localhost:5000/productos/${product.id}`)
    .send(product)
    .then(response => {
        // console.log(response);
        dispatch({
            type: EDIT_PRODUCT,
            payload: response.body
        })
    })
    .catch(error => {
        console.log(error);
    })
}

