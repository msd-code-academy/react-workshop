import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import ExerciseOne from './exercise-1';

import './App.css';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/exercise-one">Functional Component</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Switch>
          <Route path="/" exact component={() => <div>Home Page</div>} />
          <Route path="/exercise-one" component={ExerciseOne} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
