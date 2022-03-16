import React from 'react';
import { connect } from 'react-redux';
import {data} from '../data/data';
import Product from './Product';
import producerStyle from './product.module.css';
function Home ({list}) {

    // const _newData = data.map(_data => {

    //     if(list.length) {
    //         for(let i =0 ; i <list.length; i++ ) {
    //         if(_data.sku === list[i].sku){
    //             _data.quantity -=list[i].quantity;
    //         };
    //         };
    //     }
        
    //     // if(list.length)
    //     //     if(_data.sku === list[0].sku )
    //     //     _data.quantity -=list[0].quantity;
    //     return _data;
    // });

console.log(list);    
    return (
        <div className={producerStyle.container}>
            {
                data && data.map(product => (
                    <Product key = {product.id} data={product}/>
                ))
            }
        </div>
    );
};

const mapStateToProp = (state) => ({
    list : state.cartReducer.list,
})

export default connect(mapStateToProp, {})(Home);
