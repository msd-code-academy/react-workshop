import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import HomePage from './homepage';
import ExerciseOne from './exercise-1';
import ExerciseTwo from './exercise-2';
import ExerciseThree from './exercise-3';

import ComponentWithUseReducer from './use-reducer';
import ComponentWithUseContext from './use-context';

import './App.css';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/exercise-one">Exercise 1</Link></li>
          <li><Link to="/exercise-two">Exercise 2</Link></li>
          <li><Link to="/exercise-three">Exercise 3</Link></li>
          <li><Link to="/use-reducer">useReducer</Link></li>
          <li><Link to="/use-context">useContext</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/exercise-one" component={ExerciseOne} />
          <Route path="/exercise-two" component={ExerciseTwo} />
          <Route path="/exercise-three" component={ExerciseThree} />
          <Route path="/use-reducer" component={ComponentWithUseReducer} />
          <Route path="/use-context" component={ComponentWithUseContext} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
