import { ADD_CART, MINUS_PRODUCT, PLUS_PROD } from "../contanst/cartContants";
import { ORDER_PAY } from "../contanst/walletContants";

// const initialState = data;
export const cartReducer = (state = {
    list : [],
}, action) => {
    switch (action.type) {
        case ADD_CART:

            const _products = [...state.list];
            const product = _products.find(_product => _product.sku === action.payload.sku );
           
            if(product) {
                const newP = _products.map(_product => {
                    if(_product.sku === action.payload.sku) {
                        _product.quantity +=1;
                    };
    
                    return _product;
                });

                return {
                    ...state,
                    list : newP,
                }
            }
            

            return {
                ...state,
                list : [...state.list,{
                    ...action.payload,
                    quantity : 1,
                } ]
            };
        
        case MINUS_PRODUCT :

            const _newprod = state.list.find(prod => prod.sku === action.payload.sku);
            if(_newprod.quantity > 1) {

                const _newList = state.list.map(_prod => {
                    if(_prod.sku === action.payload.sku)
                    {
                        _prod.quantity -=1;
                    }
    
                    return _prod;
                });
    
                return {
                    ...state,
                    list: _newList,
                };
            }else{

                let products = state.list.filter(product => product.sku !== action.payload.sku);

                return {
                    ...state,
                    list : products,
                }
            };

        case PLUS_PROD : 

            let prods = state.list.map(_prod => {
                if(_prod.sku === action.payload.sku){
                    _prod.quantity +=1;
                }
                return _prod;
            } );
            return{
                ...state,
                list :prods,
            }

            

        case ORDER_PAY : 
            return {
                list : [],
            }
    
        default:
            return state;
    }
}