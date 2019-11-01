import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ProjectList from './components/ProjectList';
import ActionList from './components/ActionList'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/">
            <h2>Project tracker</h2>
          </Link>
        </div>
        <Route exact path="/" component={ProjectList} />
        <Route exact path="/actions/:id" component={ActionList} />


      </div>
    </Router>
  );
}

export default App;
