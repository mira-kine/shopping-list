import React from 'react';
import { useState } from 'react';
import './AddItem.css';

export default function AddItem({ handleAdd }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAdd(newItem);
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <label>
          Add Item:
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="item"
            aria-label="add item"
          />
        </label>
      </form>
    </div>
  );
}
