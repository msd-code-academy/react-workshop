import React, { Component } from 'react';

import {Online, Offline} from './NetworkStatus'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Online>
            Online with a <Online.ConnectionSpeed /> connection.
            <br />
            Running at ~<Online.ConnectionType />
          </Online>
          <Offline />
        </h1>
      </div>
    );
  }
}

export default App;
