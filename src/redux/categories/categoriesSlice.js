// categoriesSlice.js

const CHECK_STATUS = 'bookstore/categories/CHECKED_STATUS';
const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction...';
    default:
      return state;
  }
};

export default categoriesReducer;
