import { ORDER_CONFIRM, ORDER_PAY, ORDER_PAY_FAILURE } from "../contanst/walletContants";


const initialState = {
    walletAmout : 100000000,
    list : [],
}
export const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_CONFIRM:
            
        console.log(action.payload);
        if(action.payload.isOrder) {

            return {
                ...state,
                list : [
                    ...state.list,
                    action.payload.infoProd,
                ]
            }
        }else{
            const _list  = state.list.filter(item => item.id !== action.payload.infoProd.id);

            return {
                ...state,
                list : _list,
            }

        };

        case ORDER_PAY : 
            
            alert(`So tien con lai : ${action.payload}`);

            return {
                walletAmout : action.payload,
                list : [],
            };


        case  ORDER_PAY_FAILURE : 
            alert('Khong du tien');
            return state;

        default:
            return state;
    }

   
};