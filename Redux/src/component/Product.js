import React from "react";
import { connect } from "react-redux";
import { addCart } from "../action/cartAction";
import productStyle from './product.module.css';
function Product({ data, addCart }) {
  return (
    <div className={productStyle.main}>
      <img className= {productStyle.img} src={data.image} alt={data.name} />

      <div>
        <h3>{data.name}</h3>
        <h4>{data.price}</h4>
        <span>{data.quantity}</span>
        <button onClick={() => addCart(data)}> + Add to Cart</button>
      </div>
    </div>
  );
}

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, { addCart })(Product);
