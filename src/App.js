import "./styles.css";
import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Products></Products>
      </div>
    </div>
  );
}
