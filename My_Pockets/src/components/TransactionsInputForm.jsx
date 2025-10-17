import React, { useState } from "react";

function TransactionsInputForm() {
  const [formData, setFormData] = useState({
    item: "",
    shop: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      item: "",
      shop: "",
      price: "",
    });
  };
  //will handle data storage later either to local storage or file

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item: </label>
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Shop: </label>
        <input
          type="text"
          name="shop"
          value={formData.shop}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Price: </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default TransactionsInputForm;
