import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Products from "./components/Products";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<Products />, rootElement);
