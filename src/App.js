import Header from "./components/Header"; //header,main,basket components will be imported
import Main from "./components/Main";

import Basket from "./components/Basket";
import data from "./data"; // importing data
import { useState } from "react"; //useState component will be imported,impliment state in functional component
function App() {
  const { products } = data; //defining or extract products from data
  const [cartItems, setCartItems] = useState([]); //pass cartItems to the basket
  const onAdd = (product) => {
    //product will be added to the cart
    const exist = cartItems.find((x) => x.id === product.id); //exist is a variable to check cartItems
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>{" "}
        {/* pass the products to main components*/}
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
