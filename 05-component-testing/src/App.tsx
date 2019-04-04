import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import MovieList from './MovieList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from './store';

class App extends Component<{}> {
  render() {
    return (
      <Provider store={configureStore()}>
          <div className="app">
          <Switch>
            <Route path="/" exact component={MovieList} />
          </Switch>
          </div>
      </Provider>
    );
  }
}

export default App;
