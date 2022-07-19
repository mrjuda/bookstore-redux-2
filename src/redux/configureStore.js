// configureStore.js

import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../components/books/booksSlice';
import categoriesReducer from '../components/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
