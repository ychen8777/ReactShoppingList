import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./components/Product";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<Product />, rootElement);
