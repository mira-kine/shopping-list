import React from 'react';
import { useState } from 'react';
import { useShop } from '../../context/ShopProvider';
import './List.css';

export default function List() {
  const [edit, setEdit] = useState(false);
  const { items, handleUpdate, handleDone, handleDelete } = useShop();
  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => {
          if (edit === true) {
            return (
              <li key={item.id} className="list-item">
                <input
                  value={item.text}
                  onChange={(e) => {
                    handleUpdate({ ...item, text: e.target.value });
                  }}
                  aria-label="Edit ${item.text}"
                />
                <button className="button" onClick={() => setEdit(false)}>
                  Save
                </button>
              </li>
            );
          } else {
            return (
              <li key={item.id} className="list-item">
                <input type="checkbox" onChange={() => handleDone(item.id)} />
                <p>{item.text}</p>
                <button className="button" onClick={() => setEdit(true)}>
                  Edit
                </button>
                <button className="button" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
