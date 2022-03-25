import React from "react";

export default function Basket(props) {
  //initialize the props,properties that comes from parent
  const { cartItems, onAdd, onRemove } = props; //fetch cartItems from App.js

  return (
    //aside is html tag element to show side bars
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-2 text-right">{item.qty}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}
