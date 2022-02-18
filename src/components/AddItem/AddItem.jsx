import React from 'react';
import { useState } from 'react';
import './AddItem.css';
import { useShop } from '../../context/ShopProvider';

export default function AddItem() {
  const [newItem, setNewItem] = useState('');
  const { handleAdd } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAdd(newItem);
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="item"
            aria-label="add item"
          />
        </label>
        <button variant="contained" className="button" type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}
