// AddBookForm.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { asyncAddBook } from '../redux/books/booksAsyncActions';
import '../index.css';

export const AddBookForm = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    const alert = document.getElementById('alert');
    e.preventDefault();
    if (e.target.title.value && e.target.author.value) {
      const book = {
        item_id: nanoid(),
        title: e.target.title.value,
        author: e.target.author.value,
        category: 'Uncategorized',
      };
      dispatch(asyncAddBook(book)).then((response) => {
        e.target.title.value = '';
        e.target.author.value = '';
        alert.innerHTML = response.payload;
        setTimeout(() => {
          alert.innerHTML = '';
        }, 2400);
      });
    } else {
      alert.innerHTML = 'Type the book Title and Author';
      setTimeout(() => {
        alert.innerHTML = '';
      }, 2400);
    }
  };

  return (
    <div className="add-book-container">
      <span className="h-splitter" />
      <h2>ADD NEW BOOK</h2>
      <form className="add-book-form" onSubmit={submitForm}>
        <input
          name="title"
          id="bookTitle"
          type="text"
          placeholder="Add a Title"
          className="add-book-text"
        />
        <input
          type="text"
          className="add-book-text"
          placeholder="Add an Author"
          id="bookAuthor"
          name="author"
        />
        <button
          type="submit"
          className="btn-add-book"
          id="submit-book"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
