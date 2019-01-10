import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <Navigation.Item to="/" label="Home" />
          <Navigation.Split />
          <Navigation.Item to="/messages" label="Messages" />
          <Navigation.Item to="/notifications" label="Notification" />
          <Navigation.Item to="/profile" label="Profile" />
        </Navigation>
      </div>
    );
  }
}

export default App;
