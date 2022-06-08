import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Redirect,
  Route,
  Routes,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { BooksList } from './redux/books/BooksList';
import { AddBookForm } from './redux/books/AddBookForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <BooksList />
                <AddBookForm />
              </>
            )}
          />
          {/* <Redirect to="/" /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
