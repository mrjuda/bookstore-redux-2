// configureStore.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';
import { asyncGetState } from './books/booksAsyncActions';

const initialState = {
  books: [],
  categories: [],
};

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  initialState,
});

store.dispatch(asyncGetState());

export default store;
