import React, { useState } from "react";

function TransactionInputForm() {
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

  return (
    <form>
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

export default TransactionInputForm;
