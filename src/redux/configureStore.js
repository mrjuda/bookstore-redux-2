// configureStore.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from '../components/books/booksSlice';
import categoriesReducer from '../components/categories/categoriesSlice';

const initialState = {
  books: [],
  categories: [],
};

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  initialState,
});

export default store;
