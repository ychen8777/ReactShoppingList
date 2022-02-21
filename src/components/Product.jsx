import React, { Component } from "react";

class Product extends Component {
  state = {
    name: this.props.name,
    price: this.props.price,
    quantity: this.props.quantity
  };

  handleIncrease = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDecrease = () => {
    let newQuantity = this.state.quantity > 0 ? this.state.quantity - 1 : 0;
    this.setState({ quantity: newQuantity });
  };

  render() {
    console.log("props", this.props);
    return (
      <div className="row m-2">
        <span className="col-3 align-middle">{this.state.name}</span>
        <span className="col-3 align-middle">{this.state.price}</span>
        <span className="col-3 align-middle">{this.state.quantity}</span>
        <span className="col-2 align-middle">
          <button
            onClick={this.handleIncrease}
            className="btn btn-primary font-weight-bold btn-sm me-1"
          >
            {" "}
            +{" "}
          </button>
          <button
            onClick={this.handleDecrease}
            className="btn btn-outline-primary font-weight-bold btn-sm align-middle"
          >
            {" "}
            -{" "}
          </button>
        </span>
      </div>
    );
  }
}

export default Product;
