// booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'O Auto da Compadecida', author: 'Ariano Suassuna' },
  { id: '2', title: 'Crime and Punishment', author: 'Fiodor Dostoyevsky' },
  { id: '3', title: 'Mininos Sabidos', author: 'Judá Teixeira' },
];
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { bookAdded } = booksSlice.actions;

export default booksSlice.reducer;
