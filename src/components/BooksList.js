/* eslint-disable react-redux/useSelector-prefer-selectors */
// BooksList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { asyncRemoveBook } from '../redux/books/booksAsyncActions';
import '../styles/BooksList.css';
import '../index.css';
import loading from '../loading.png';

export const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const removeBtn = (book) => {
    dispatch(asyncRemoveBook(book)).then((response) => {
      const alert = document.getElementById('alert');
      alert.innerHTML = response.payload;
      setTimeout(() => {
        alert.innerHTML = '';
      }, 3000);
    });
  };

  return (
    <ul className="book-container">
      {books.map((book) => (
        <li className="book" key={book.item_id}>
          <div className="c1">
            <div className="book-data">
              <div className="book-category">{book.category}</div>
              <Book title={book.title} author={book.author} />
            </div>
            <div className="btn-array">
              <button className="comments" type="button">Comments</button>
              <span> | </span>
              <button className="remove" type="button" onClick={() => removeBtn(book)}>Remove</button>
              <span> | </span>
              <button className="edit" type="button">Edit</button>
            </div>
          </div>
          <div className="c2">
            <img src={loading} alt="loading" />
          </div>
          <span className="v-splitter">|</span>
          <div className="c3">
            <span>CURRENT CHAPTER</span>
            <h4>Chapter 12</h4>
            <button
              type="button"
              className="btn-up-progress"
            >
              UPDATE PROGRESS
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
