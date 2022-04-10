import React, { useState } from 'react';
import AddThoughtForm from '../AddThoughtForm/AddThoughtForm.js';
import Thought from '../Thought/Thought';
import { generateId, getNewExpirationTime } from '../utilities/utilities';

function App() {
  const [thoughts, setThoughts] = useState([]);

  const addThought = thought => setThoughts((prev) => [thought, ...prev])

  const removeThought = id => {
    setThoughts(prev => prev.filter(thought => thought.id !== id))
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App