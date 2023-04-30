import React, { useState } from 'react';
import Note from './components/Note';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      title: '',
      content: '',
      id: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, ...updatedNote };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>My Notes</h1>
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="note-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
