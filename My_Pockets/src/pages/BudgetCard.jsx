import React, { useState } from "react";
import BudgetCardItem from "./BudgetCardItem";

function BudgetCard({ heading, item, amount }) {
  const [items, setItems] = useState([{ item, amount }]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ item: "", amount: "" });

  const handleAddClick = () => setShowForm(!showForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, formData]);
    setFormData({ item: "", amount: "" });
    setShowForm(false);
  };

  return (
    <div className="border rounded-2xl p-2 m-4">
      <div className="bg-amber-100 p-2 rounded-2xl flex justify-between mb-2">
        <h4 className="font-bold ">{heading}</h4>
        <button onClick={handleAddClick} className="border rounded-2xl p-2">
          {showForm ? "Cancel" : "Add"}
        </button>
      </div>

      {items.map((entry, index) => (
        <BudgetCardItem key={index} item={entry.item} amount={entry.amount} />
      ))}

      {showForm && (
        <form onSubmit={handleSubmit} className="p-2 space-y-2">
          <input
            className="border rounded p-1 mr-2"
            type="text"
            name="item"
            placeholder="Item name"
            value={formData.item}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded p-1 mr-2"
            type="number"
            name="amount"
            placeholder="Amount"
            min="0"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <button type="submit" className="border rounded p-1 block m-auto">
            Save
          </button>
        </form>
      )}

      <p className="mt-2 font-semibold">
        Total: R{" "}
        {items.reduce((sum, curr) => sum + Number(curr.amount || 0), 0).toFixed(
          2
        )}
      </p>
    </div>
  );
}

export default BudgetCard;
