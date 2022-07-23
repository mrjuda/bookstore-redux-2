// BooksList.js
/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';
import './styles/BooksList.css';

export const BooksList = () => {
  const books = useSelector((state) => state.books);

  const renderedBooks = books.map((book) => (
    <li className="book" key={book.id}>
      <div>
        <span>{book.title}</span>
        <span> - </span>
        <span className="book-author">{book.author.substring(0, 100)}</span>
      </div>
      <button type="button">remove</button>
    </li>
  ));

  return (
    <section className="WebPage">
      <h2 className="HeaderTitle">
        Welcome to the Bookstore!
      </h2>
      <div className="text">
        <p>
          A room without books is like a body without a soul.
          ― Marcus Tullius Cicero
        </p>
        <br />
      </div>
      <ul className="book-container">
        {renderedBooks}
      </ul>
    </section>
  );
};

export default BooksList;
