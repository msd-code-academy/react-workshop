import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Content from './pages/content';
import PragueImage from './pages/prague-image';

// Exercise 1
//
// Rewrite this component so that it uses lazy() and Suspense for code splitting
// Display the Spinner from './components/spinner' until the lazy loaded components are ready
//
// 10 minutes, then we will do it together
// Check the "network" in developer tools when done

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/content">Content</Link></li>
          <li><Link to="/image">Image</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/content" component={Content} />
          <Route path="/image" component={PragueImage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;

