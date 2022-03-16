import { ORDER_CONFIRM, ORDER_PAY, ORDER_PAY_FAILURE } from '../contanst/walletContants';

export const orderConfirm = (infoProd, isOrder) => dispatch => 
{

    dispatch({
        type : ORDER_CONFIRM,
        payload : {
            infoProd,
            isOrder,
        },
    });
};

export const payOrder = (money, sumPrice) => dispatch => {
    if(money > sumPrice) {
        dispatch({
            type : ORDER_PAY,
            payload : money - sumPrice,
        })
    }else {

        dispatch({
            type : ORDER_PAY_FAILURE, 
        })
    }
};