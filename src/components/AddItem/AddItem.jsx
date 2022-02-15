import React from 'react';
import { useState } from 'react';

export default function AddItem({ handleAdd }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAdd(newItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add Item:
          <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
        </label>
      </form>
    </div>
  );
}
