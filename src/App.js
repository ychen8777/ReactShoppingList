import "./styles.css";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import AddForm from "./components/AddForm";
import { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState([
    //{ name: "bread", quantity: 5, price: 1.6666 }
  ]);
  const [index, setIndex] = useState(0);

  function addProduct(newProduct) {
    newProduct.id = index;
    setShoppingList((prevShoppingList) => {
      return [...prevShoppingList, newProduct];
    });
    setIndex((prevIndex) => prevIndex + 1);
  }

  function onIncrement(product) {
    const curProduct = shoppingList.find((p) => p.id === product.id);
    //console.log(curProduct.id);
    setShoppingList(
      shoppingList.map((p) =>
        p.id === product.id
          ? { ...curProduct, quantity: curProduct.quantity + 1 }
          : p
      )
    );
  }

  function onDecrement(product) {
    const curProduct = shoppingList.find((p) => p.id === product.id);
    if (curProduct.quantity === 1) {
      // remove from shopping list
      setShoppingList(shoppingList.filter((p) => p.id !== product.id));
    } else {
      setShoppingList(
        shoppingList.map((p) =>
          p.id === product.id
            ? { ...curProduct, quantity: curProduct.quantity - 1 }
            : p
        )
      );
    }
  }

  function onRemove(product) {
    setShoppingList(shoppingList.filter((p) => p.id !== product.id));
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
          onDecrement={onDecrement}
          onRemove={onRemove}
        ></ShoppingList>
      </div>
    </div>
  );
}
