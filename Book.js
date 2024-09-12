// src/components/Book.js
import React, { useState } from "react";

const Book = ({ book, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({ ...book });

  const handleUpdate = () => {
    onUpdate(updatedBook);
    setIsEditing(false);
  };

  return (
    <div className="book">
      {isEditing ? (
        <div className="book-edit-form">
          <input
            type="text"
            value={updatedBook.title}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, title: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedBook.author}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, author: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedBook.genre}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, genre: e.target.value })
            }
          />
          <textarea
            value={updatedBook.content}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, content: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>{book.content}</p>
          <button className="delete" onClick={() => onDelete(book.id)}>
            Delete
          </button>
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;
