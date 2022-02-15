import React from 'react';
import { useState } from 'react';
import './List.css';

export default function List({ items, handleUpdate }) {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <ul className="list-container">
        {items.map((item) => {
          if (edit === true) {
            return (
              <li key={item.id} className="list-item">
                <input type="checkbox" />
                <input
                  value={item.text}
                  onChange={(e) => {
                    handleUpdate({ ...item, text: e.target.value });
                  }}
                />
                <button onClick={() => setEdit(false)}>Save</button>
              </li>
            );
          } else {
            return (
              <li key={item.id} className="list-item">
                <input type="checkbox" />
                <p>{item.text}</p>
                <button onClick={() => setEdit(true)}>Edit</button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
