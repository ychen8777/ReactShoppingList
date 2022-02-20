import React, { Component } from "react";
import Counter from "./Product";

class Products extends Component {
  state = {};

  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Products;
