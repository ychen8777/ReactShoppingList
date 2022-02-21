import "./styles.css";
import Header from "./components/Header";
import Products from "./components/Products";
import AddForm from "./components/AddForm";

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <AddForm></AddForm>
      </div>
      <div>
        <Products></Products>
      </div>
    </div>
  );
}
