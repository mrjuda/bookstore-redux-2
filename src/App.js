// App.js

import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Navbar } from './components/WebHeader';
import { BookContainer } from './components/BookContainer';
import { WebCategories } from './components/WebCategories';

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
                <BookContainer />
              </>
            )}
          />
          <Route path="/WebCategories" element={<WebCategories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
