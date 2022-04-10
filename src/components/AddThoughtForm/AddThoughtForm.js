import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../utilities/utilities';

function AddThoughtForm({ addThought }) {
  const [text,setText] = useState("");

  const handleTextChange = event => setText(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }
    if (!text) {
      alert("type something")
    } else {
      addThought(thought)
      setText("")
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default AddThoughtForm