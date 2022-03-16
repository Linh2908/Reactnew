import { connect } from "react-redux";
import Cartitem from "./CartItem";
import {payOrder} from '../action/walletAction';
function Cart({list, walletParam, payOrder}) {

    const {walletAmout, list : walletList} = walletParam;

    const sumPrice = walletList.length!==0 && 
    walletList.reduce((result, currentProd) => result + (currentProd.price * currentProd.quantity), 0);

    console.log(list);
    return ( 
        <div>
            {
               list && list.length !== 0 ? list.map(item => (
                   <Cartitem data={item} key={item.id}/>
               )) : <p>Ban chua chon mua san pham nao</p>
            }

            <hr/>
            <div>
                <h1>Thanh Toan :</h1>
                {
                   
                    sumPrice && <div>
                        <h3>Tien con lai : {walletAmout}</h3>
                        <h3>Tong Tien : {sumPrice}</h3>
                        <button onClick={() => payOrder(walletAmout, sumPrice)}>Thanh Toan</button>
                    </div>
                }
               
            </div>
        </div>
     );
};

const mapStateToProp = (state) => ({
    list : state.cartReducer.list,
    walletParam : state.walletReducer,
})

export default connect(mapStateToProp, {payOrder})(Cart);