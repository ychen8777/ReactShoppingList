import "./styles.css";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import AddForm from "./components/AddForm";
import { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState([
    { name: "bread", quantity: 5, price: 1.99 }
  ]);
  return (
    <div className="App">
      <Header></Header>
      <div>
        <AddForm></AddForm>
      </div>
      <div>
        <ShoppingList shoppingList={shoppingList}></ShoppingList>
      </div>
    </div>
  );
}
