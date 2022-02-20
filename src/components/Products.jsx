import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "bread", price: 2, quantity: 1 },
      { id: 2, name: "cola", price: 2, quantity: 3 },
      { id: 3, name: "butter", price: 3.99, quantity: 1 },
      { id: 4, name: "milk", price: 5.99, quantity: 2 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    );
  }
}

export default Products;
