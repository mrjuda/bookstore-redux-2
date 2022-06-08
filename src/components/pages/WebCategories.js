// WebCategories.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

export const WebCategories = () => {
  const dispatch = useDispatch();

  const callStatus = () => {
    dispatch(checkStatus({}));
  };

  // const status = useSelector((state) => state.categories.value);

  return (
    <div className="cat-container">
      <button
        type="button"
        className="check-status"
        onClick={callStatus}
      >
        Check Status
      </button>
      <p className="quote">
        If you only read the books that everyone else is reading,
        you can only think what everyone else is thinking.
        ― Haruki Murakami
      </p>
    </div>
  );
};

export default WebCategories;
