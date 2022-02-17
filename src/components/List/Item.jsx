import React, { useState } from 'react';
import './List.css';

export default function Item({ item, handleUpdate, handleDelete, handleDone }) {
  const [edit, setEdit] = useState(false);

  let itemStatus;
  if (edit) {
    itemStatus = (
      <>
        <input
          value={item.text}
          aria-label="Edit field"
          onChange={(e) => {
            handleUpdate({ ...item, text: e.target.value });
          }}
        />
        <button className="button" aria-label={`Save ${item.text}`} onClick={() => setEdit(false)}>
          Save
        </button>
      </>
    );
  } else {
    itemStatus = (
      <>
        <label className="item-label">{item.text}</label>
        <button className="button" aria-label={`Edit ${item.text}`} onClick={() => setEdit(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        value={item.done}
        onChange={() => handleDone(item.id)}
      />
      {itemStatus}
      <button
        className="button"
        aria-label={`Delete ${item.text}`}
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}
