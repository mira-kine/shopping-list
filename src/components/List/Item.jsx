import React, { useState } from 'react';
import './List.css';
import Button from '@mui/material/Button';

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
        <Button
          className="button"
          variant="outlined"
          size="medium"
          aria-label={`Save ${item.text}`}
          onClick={() => setEdit(false)}
        >
          Save
        </Button>
      </>
    );
  } else {
    itemStatus = (
      <>
        <label className="item-label">{item.text}</label>
        <Button
          variant="outlined"
          className="button"
          size="medium"
          aria-label={`Edit ${item.text}`}
          onClick={() => setEdit(true)}
        >
          Edit
        </Button>
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
      <Button
        className="button"
        variant="outlined"
        size="medium"
        aria-label={`Delete ${item.text}`}
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </Button>
    </div>
  );
}
