import React, { useState } from "react";

export default function EditTransactionForm({ transaction, onUpdate, onCancel }) {
  const [editedTransaction, setEditedTransaction] = useState(transaction);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTransaction({ ...editedTransaction, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8001/transactions/${editedTransaction.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedTransaction)
      });
      if (response.ok) {
        onUpdate();
      } else {
        console.log('Error updating transaction ', response.statusText);
      }
    } catch (error) {
      console.error("Error updating transaction ", error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Transaction</h2>
      <form className="form-control" onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={editedTransaction.description}
          onChange={handleInputChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          className="form-control"
          name="amount"
          value={editedTransaction.amount}
          onChange={handleInputChange}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={editedTransaction.date}
          onChange={handleInputChange}
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          value={editedTransaction.category}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit" className="btn btn-success">Update Transaction</button>
        <button type="button" className="btn btn-danger" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}