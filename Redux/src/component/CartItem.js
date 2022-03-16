import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import productStyle from './product.module.css';
import {orderConfirm} from '../action/walletAction';
import {minusProD, plusProd} from '../action/cartAction';
function Cartitem  ({data, orderConfirm, minusProD, plusProd}) {

    const [isOrder, setIsOrder] = useState(true);

    const handleChange = (data) => {
        setIsOrder(!isOrder);
        orderConfirm(data, isOrder);
    }

    useEffect(() => {
       
    }, [data]);
    return (
        <div className={productStyle.cart_container}>
            <img  className={productStyle.cart_img} src={data.image} alt={data.name}/>
            <span>{data.name}</span>
            <span>Gia : {data.price}</span>
            <span><button onClick={() =>minusProD(data) }>-</button> {data.quantity} <button onClick={() => plusProd(data)}>+</button></span>
            <span><input type={'checkbox'} onChange={()=> handleChange(data)}/></span>
        </div>
    );

}
const mapStatetToProp = (state) => ({})

export default connect(mapStatetToProp,{orderConfirm, minusProD,plusProd})(Cartitem);
