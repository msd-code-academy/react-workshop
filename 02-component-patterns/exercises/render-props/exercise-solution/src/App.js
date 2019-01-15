import React, { Component } from 'react';

import Count from './Count'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Count>
          {({increase, decrease, count}) => (
            <div className="App-counter">
              <h2>Counter</h2>
              <button className="App-counter-btn" onClick={increase}>Increment</button>
              <button className="App-counter-btn" onClick={decrease}>Decrement</button>
              <p>{count}</p>
            </div>
          )}
        </Count>
      </div>
    );
  }
}

export default App;
