import React from "react";

export default function ShoppingList(props) {
  const { shoppingList, onIncrement, onDecrement, onRemove } = props;
  const subtotal = shoppingList.reduce((a, c) => a + c.quantity * c.price, 0);
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
      {shoppingList.map((product) => (
        <div key={product.id} className="row m-2">
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
              onClick={() => onRemove(product)}
              className="btn btn-warning btn-sm"
            >
              Remove
            </button>
          </span>
          <span className="col-3 align-middle"></span>
          <span className="col-2 text-end">{product.price.toFixed(2)}</span>
        </div>
      ))}

      {shoppingList.length !== 0 && (
        <div className="m-2">
          <div className="row"></div>
          <div className="row">
            <span className="col-9"></span>
            <span className="col-3">
              <hr align="right" style={{ height: 2 }}></hr>
            </span>
          </div>
          <div className="row">
            <span className="col-9"></span>
            <div className="col-3 d-flex justify-content-between">
              <span className="col-1 text-start ms-1 me-1">Subtotal: </span>
              <span className="col-2 text-end me-3">{subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
