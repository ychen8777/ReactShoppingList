import React from "react";

export default function Product(props) {
  const { product } = props;

  return (
    <div className="row m-2">
      <span className="col-3 align-middle">{product.name}</span>
      <span className="col-3 align-middle">{product.price}</span>
      <span className="col-3 align-middle">{product.quantity}</span>
    </div>
  );
}
