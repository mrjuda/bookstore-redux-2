// App.js

import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { BooksList } from './components/books/BooksList';
import { AddBookForm } from './components/books/AddBookForm';
import { WebCategories } from './components/pages/WebCategories';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <>
                <BooksList />
                <AddBookForm />
              </>
            )}
          />
          {/* <Redirect to="/" /> */}
          <Route path="/WebCategories" element={<WebCategories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
