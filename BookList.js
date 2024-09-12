// src/components/BookList.js
import React from "react";
import Book from "./Book";

const BookList = ({ books, onDelete, onUpdate }) => {
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default BookList;
