// store.js

import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../components/books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
