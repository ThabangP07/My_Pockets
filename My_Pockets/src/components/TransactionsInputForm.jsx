import React, { useState, useEffect } from "react";

function TransactionsInputForm() {
  const [formData, setFormData] = useState({
    item: "",
    store: "",
    price: "R",
  });

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const response = await fetch("/transaction.json");
        const data = await response.json();

        // Save directly to localStorage
        localStorage.setItem("transactions", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to load transactions:", error);
      }
    };

    loadTransactions();
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
    // Add new transaction
   
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("transactions")) || [];
    dataFromLocalStorage.push(formData)

    // Save to local storage
    localStorage.setItem("transactions", JSON.stringify(dataFromLocalStorage));

    // Reset form
    setFormData({ item: "", store: "", price: "R" });
  };


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
        <label>Store: </label>
        <input
          className="border rounded"
          type="text"
          name="store"
          value={formData.store}
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
