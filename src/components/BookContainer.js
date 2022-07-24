// BookContainer.js

import React from 'react';
import { BooksList } from './BooksList';
import { AddBookForm } from './AddBookForm';

export const BookContainer = () => (
  <div className="WebPage">
    <BooksList />
    <AddBookForm />
  </div>
);

export default BookContainer;
