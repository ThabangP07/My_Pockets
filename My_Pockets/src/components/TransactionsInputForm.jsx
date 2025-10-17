import React, { useState, useEffect } from "react";

function TransactionsInputForm() {
  const [formData, setFormData] = useState({
    item: "",
    shop: "",
    price: "",
  });

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("/transaction.json");
        if (!response.ok) throw new Error("Failed to load data");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error loading transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <form onSubmit={handleSubmit} className="border p-2 rounded-2xl shadow-md">
      <div className="m-2 w-full">
        <label>Item: </label>
        <input
          className="border rounded"
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          required
        />
      </div>

      <div className="m-2">
        <label>Shop: </label>
        <input
          className="border rounded"
          type="text"
          name="shop"
          value={formData.shop}
          onChange={handleChange}
          required
        />
      </div>

      <div className="m-2 w-full">
        <label>Price: </label>
        <input
          className="border rounded"
          type="number"
          name="price"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <button className="border rounded-lg p-1 block mx-auto" type="submit">
        Submit
      </button>
    </form>
  );
}

export default TransactionsInputForm;
