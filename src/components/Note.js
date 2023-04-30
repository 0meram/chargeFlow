import React, { useState } from 'react';

function Note({ note, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedNote, setUpdatedNote] = useState(note);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDeleteClick = () => {
        onDelete(note.id);
    };

    const handleSaveClick = () => {
        onUpdate(note.id, updatedNote);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedNote({ ...updatedNote, [name]: value });
    };

    return (
        <div className={`note ${isEditing ? 'editing' : ''}`}>
            <div className="note-content">
                {isEditing ? (
                    <input
                        type="text"
                        name="title"
                        value={updatedNote.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                ) : (
                    <h2>{note.title}</h2>
                )}
                {isEditing ? (
                    <textarea
                        name="content"
                        value={updatedNote.content}
                        onChange={handleInputChange}
                        placeholder="Write your note here"
                    />
                ) : (
                    <p>{note.content}</p>
                )}
            </div>
            <div className="note-actions">
                {isEditing ? (
                    <button onClick={handleSaveClick}>Save</button>
                ) : (
                    <button onClick={handleEditClick}>Edit</button>
                )}
                <button onClick={handleDeleteClick}>delete</button>
            </div>
        </div>
    );
}

export default Note;
