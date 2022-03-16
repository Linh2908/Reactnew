import { ADD_CART, MINUS_PRODUCT, PLUS_PROD } from '../contanst/cartContants';

export const addCart = (id) => dispatch => {
    dispatch({
        type : ADD_CART,
        payload : id,
    });
};

export const minusProD = (data) => dispatch => {
    dispatch({
        type : MINUS_PRODUCT,
        payload : data,
    });
};

export const plusProd = (data) => dispatch => {
    dispatch({
        type : PLUS_PROD,
        payload : data,
    });
};