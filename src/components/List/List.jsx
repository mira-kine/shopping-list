import React from 'react';
import './List.css';

export default function List({ items }) {
  return (
    <div>
      <ul className="list-container">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <p>{item.text}</p>
            <input type="checkbox" />
          </li>
        ))}
      </ul>
    </div>
  );
}
