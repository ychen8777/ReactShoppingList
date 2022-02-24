import "./styles.css";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import AddForm from "./components/AddForm";
import { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState([
    //{ name: "bread", quantity: 5, price: 1.6666 }
  ]);

  function addProduct(newProduct) {
    setShoppingList((prevShoppingList) => {
      return [...prevShoppingList, newProduct];
    });
  }

  function onIncrement(product) {
    const curProduct = shoppingList.find((p) => p.id === product.id);
    setShoppingList(
      shoppingList.map((p) =>
        p.id === product.id
          ? { ...curProduct, quantity: curProduct.quantity + 1 }
          : p
      )
    );
  }

  return (
    <div className="App">
      <Header></Header>
      <div>
        <AddForm onAdd={addProduct}></AddForm>
      </div>
      <div>
        <ShoppingList
          shoppingList={shoppingList}
          onIncrement={onIncrement}
        ></ShoppingList>
      </div>
    </div>
  );
}
