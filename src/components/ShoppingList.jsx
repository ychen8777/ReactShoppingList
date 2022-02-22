import React from "react";

export default function ShoppingList(props) {
  const { shoppingList, onIncrement, onDecrement, removeProduct } = props;
  return (
    <div className="bg-light m-3 border border-light rounded">
      <div className="row m-2 mb-3 text-center">
        <span className="col-3 align-middle">Product name</span>
        <span className="col-3 align-middle">Price</span>
        <span className="col-3 align-middle">Quantity</span>
      </div>

      {shoppingList.length === 0 && <div>Shopping list is empty.</div>}
      {shoppingList.map((product) => (
        <div key={product.id} className="row m-2">
          <span className="col-3 align-middle">{product.name}</span>
          <span className="col-3 align-middle">{product.price}</span>
          <span className="col-3 align-middle">{product.quantity}</span>
          <span className="col-2 align-middle">
            <button
              type="button"
              onClick={() => onIncrement(product)}
              className="btn btn-primary font-weight-bold btn-sm me-1"
            >
              {" "}
              +{" "}
            </button>
            <button
              type="button"
              onClick={() => onDecrement(product)}
              className="btn btn-outline-primary font-weight-bold btn-sm align-middle"
            >
              {" "}
              -{" "}
            </button>
          </span>
          <span className="col-1 align-middle">
            <button
              type="button"
              onClick={() => removeProduct(product)}
              className="btn btn-warning"
            >
              Remove
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
