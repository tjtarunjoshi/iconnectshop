import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props; //read the products from props
  return (
    // this is the main content of app
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {" "}
        {/* main component is responsble to render products */}
        {products.map((
          product //render products with map method
        ) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
