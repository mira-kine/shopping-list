import React from 'react';
import './List.css';

export default function List({ items, handleUpdate }) {
  // edit button handleUpdate
  return (
    <div>
      <ul className="list-container">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            {/* <p>{item.text}</p> */}
            <input type="checkbox" />
            <input
              value={item.text}
              onChange={(e) => {
                handleUpdate({ ...item, text: e.target.value });
              }}
            />
            <button onClick={handleUpdate}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
