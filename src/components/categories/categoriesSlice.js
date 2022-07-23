// categoriesSlice.js
/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: 'Update me',
  },
  reducers: {
    checkStatus: (state) => {
      state.value = 'Under construction...';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
