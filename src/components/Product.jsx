import React, { Component } from "react";

class Product extends Component {
  state = {
    id: 1,
    name: "bread",
    price: 15,
    quantity: 6
  };

  handleIncrease = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDecrease = () => {
    let newQuantity = this.state.quantity > 0 ? this.state.quantity - 1 : 0;
    this.setState({ quantity: newQuantity });
  };

  render() {
    return (
      <div>
        <span className="m-3">{this.state.name}</span>
        <span className="m-3">{this.state.price}</span>
        <span className="m-3">{this.state.quantity}</span>
        <button
          onClick={this.handleIncrease}
          className="btn btn-primary font-weight-bold"
        >
          {" "}
          +{" "}
        </button>
        <button
          onClick={this.handleDecrease}
          className="btn btn-outline-primary font-weight-bold"
        >
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}

export default Product;
