import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import {MyStatus} from './useState/class';
import {MyMouse} from './useEffect/class';
import {ChuckJokes} from './useCustom/index';
import {Notes} from './reactHooksNotes/notes';
import './App.css';

const MainScreen = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>React Hooks</h2>
    <p>
      &quot;making the usage of JS classes unnecessary since 2018&quot;
    </p>
  </div>
);

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/useState">useState</Link></li>
          <li><Link to="/useEffect">useEffect</Link></li>
          <li><Link to="/useCustom">useCustom</Link></li>
          <li><Link to="/notes">Notes</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Route path="/" exact component={MainScreen} />
        <Route path="/useState" component={MyStatus} />
        <Route path="/useEffect" component={MyMouse} />
        <Route path="/useCustom" component={ChuckJokes} />
        <Route path="/notes" component={Notes} />
      </div>
    </div>
  </Router>
);

export default App;

