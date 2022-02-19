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
        <button
          className="button"
          variant="contained"
          size="medium"
          aria-label={`Save ${item.text}`}
          onClick={() => setEdit(false)}
        >
          <span>Save</span>
        </button>
      </>
    );
  } else {
    itemStatus = (
      <>
        <label className="item-label">{item.text}</label>
        <button
          variant="contained"
          className="button"
          size="medium"
          aria-label={`Edit ${item.text}`}
          onClick={() => setEdit(true)}
        >
          <span>Edit</span>
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
        variant="contained"
        size="medium"
        aria-label={`Delete ${item.text}`}
        onClick={() => handleDelete(item.id)}
      >
        <span>Delete</span>
      </button>
    </div>
  );
}
