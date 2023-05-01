import React, { useState } from 'react'
import Note from './components/Note'
import './App.css'

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || [],
  )
  const addNote = () => {
    const newNote = {
      title: '',
      content: '',
      id: Date.now(),
      date: new Date().toLocaleString(),
    }
    setNotes([...notes, newNote])
    localStorage.setItem('notes', JSON.stringify([...notes, newNote]))
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, ...updatedNote }
      }
      return note
    })
    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

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
  )
}

export default App
