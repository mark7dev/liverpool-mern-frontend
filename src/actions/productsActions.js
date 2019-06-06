import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT } from './types';
import request from 'superagent';
// import axios from 'axios';

const API = 'https://liverpool-crud-challenge.herokuapp.com/apilivercrud/v1'

export const showProducts = () => dispatch => {
    const APIShowProducts = `${API}/products`;

    request
    .get(APIShowProducts)
    .then(response => {
        dispatch({
            type: SHOW_PRODUCTS,
            payload: response.body.products
        })
    })
    .catch(error => {
        console.log(error);
    })
}

export const showProduct = id => dispatch => {
    const APIShowProduct = `${API}/products/${id}`;

    request
    .get(APIShowProduct)
    .then(response => {
        dispatch({
            type: SHOW_PRODUCT,
            payload: response.body.product
        })
    })
    .catch(error => {
        console.log(error);
    })
}
 
export const deleteProduct = id => dispatch => {
    const APIDeleteProduct = `${API}/products/${id}`;

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
    .post(`${API}/products`)
    .send(product)
    .then(response => {
        dispatch({
            type: ADD_PRODUCT,
            payload: response.body.newProduct
        })
    })
    .catch(error => {
        console.log(error);
    })
}


export const editProduct = product => dispatch => {
    
    request
    .put(`${API}/products/${product.id}`)
    .send(product)
    .then(response => {
        dispatch({
            type: EDIT_PRODUCT,
            payload: response.body.product
        })
    })
    .catch(error => {
        console.log(error);
    })
}

