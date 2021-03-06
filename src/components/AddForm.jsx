import React, { useState } from "react";

export default function AddForm(props) {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    price: ""
  });

  function handleChange(event) {
    var { name, value } = event.target;

    setProduct((prevProduct) => {
      if (name === "quantity") {
        value = parseInt(value, 10);
      } else if (name === "price") {
        value = parseFloat(value);
      }

      return {
        ...prevProduct,
        [name]: value
      };
    });
  }

  function addProduct(event) {
    props.onAdd(product);
    setProduct({ name: "", quantity: "", price: "" });
    event.preventDefault();
  }

  return (
    <div className="bg-light m-3 border border-light rounded">
      <form>
        <div className="row m-3">
          <label className="col-3">Product Name: </label>
          <input
            type="text"
            className="col-9 rounded border-1 border-light"
            name="name"
            maxlength="40"
            required
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="row m-3">
          <label className="col-3">Price: </label>
          <input
            type="number"
            min="0"
            step="0.01"
            max="2147483646"
            className="col-3 rounded border-1 border-light"
            name="price"
            required
            value={product.price}
            onChange={handleChange}
          />
          <label className="col-3">Quantity: </label>
          <input
            type="number"
            min="0"
            step="1"
            max="2147483646"
            className="col-3 rounded border-1 border-light"
            name="quantity"
            required
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3"
          id="addButton"
          onClick={addProduct}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
