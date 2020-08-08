/**
 * Routing structure and nesting of components is defined here
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import Nav from './components/Nav';
import Home from './components/Home';

export default (
  <Router>
    <div>
      <Nav>
        <Route exact path="/" component={Home} />
      </Nav>
    </div>
  </Router>
);
