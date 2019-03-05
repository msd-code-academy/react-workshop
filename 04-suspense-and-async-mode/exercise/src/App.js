import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/home';
// import Content from './pages/content';

import Kitties from './pages/kitties';

const Content = lazy(() => import('./pages/content'));
// const Kitties = lazy(() => import('./pages/kitties'));
const Contacts = lazy(() => import('./pages/contacts'));

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/content">Content</Link></li>
          <li><Link to="/kitties">Kitties</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
      <div className="App-content">
        <Suspense
          fallback={<div>I am loading the page, hang in there...</div>}
          maxDuration={1000}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/content" component={Content} />
            <Route path="/kitties" component={Kitties} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Suspense>
      </div>
    </div>
  </Router>
);

export default App;

