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
      <div className="bg-light m-3 border border-light rounded">
        <div className="row m-2 mb-3 text-center">
          <span className="col-3 align-middle">Product name</span>
          <span className="col-3 align-middle">Price</span>
          <span className="col-3 align-middle">Quantity</span>
        </div>
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
