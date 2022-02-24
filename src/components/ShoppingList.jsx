import React from "react";

export default function ShoppingList(props) {
  const { shoppingList, onIncrement, onDecrement, removeProduct } = props;
  return (
    <div className="bg-light m-3 border border-light rounded">
      <div className="row m-2 mb-3 text-center">
        <span className="col-3 align-middle">Product name</span>
        <span className="col-3 align-middle">Quantity</span>
        <span className="col-4 align-middle"></span>
        <span className="col-2 text-end">Price</span>
      </div>

      {shoppingList.length === 0 && (
        <div className="mb-2">Shopping list is empty.</div>
      )}
      {shoppingList.map((product, index) => (
        <div key={index} id={index} className="row m-2">
          <span className="col-3 align-middle">{product.name}</span>
          <div className="col-3 d-flex justify-content-between">
            <span className="col-1 align-right">
              <button
                type="button"
                onClick={() => onDecrement(product)}
                className="btn btn-outline-primary font-weight-bold btn-sm"
              >
                {" "}
                -{" "}
              </button>
            </span>
            <span className="col-1 text-center ms-1 me-1">
              {product.quantity}
            </span>
            <span className="col-1 align-left">
              <button
                type="button"
                onClick={() => onIncrement(product)}
                className="btn btn-primary font-weight-bold btn-sm"
              >
                {" "}
                +{" "}
              </button>
            </span>
          </div>
          <span className="col-1 align-middle">
            <button
              type="button"
              onClick={() => removeProduct(product)}
              className="btn btn-warning btn-sm"
            >
              Remove
            </button>
          </span>
          <span className="col-3 align-middle"></span>
          <span className="col-2 text-end">{product.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
