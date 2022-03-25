import React from "react";

export default function Product(props) {
  //set props as a parameter
  const { product, onAdd } = props; //read products from props
  return (
    <div className="imgbox">
      <img className="small" src={product.image} alt="" />
      <h3>{product.name}</h3>
      <div>{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
