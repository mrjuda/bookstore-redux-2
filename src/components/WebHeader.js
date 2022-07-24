// Navbar.js

import React from 'react';
import '../index.css';

export const Navbar = () => (
  <div className="WebHeader">
    <h1 className="HeaderTitle">
      JL`s Bookstore
    </h1>
    <ul className="HeaderMenu">
      <li><a href="/">Books</a></li>
      <li><a href="/WebCategories">Categories</a></li>
    </ul>
  </div>
);

export default Navbar;
