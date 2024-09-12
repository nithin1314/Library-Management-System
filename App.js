// src/App.js
import React, { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      content: "A novel about a totalitarian regime."
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      content: "A novel about racial injustice."
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Tragedy",
      content: "A novel about the American dream."
    }
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  return (
    <div className="container">
      <h1>Library Management System</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
    </div>
  );
};

export default App;
