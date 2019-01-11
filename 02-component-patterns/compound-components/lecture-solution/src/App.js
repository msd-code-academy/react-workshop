import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import Logo from './Logo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <Navigation.Item to="/" label="Home" />
          <Navigation.Split />
          <Logo />
          <Navigation.Split />
          <Navigation.Item to="/messages" label="Messages" />
          <Navigation.Item to="/notifications" label="Notification" />
          <SearchBar />
          <Navigation.Item to="/profile" label="Profile" />
        </Navigation>
      </div>
    );
  }
}

export default App;
