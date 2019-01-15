import React, {Component} from 'react'

import Count from './Count'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-counter">
          <Count />
          <button className="App-counter-btn" onClick={() => console.log('increment')}>
            Increment
          </button>
          <button className="App-counter-btn" onClick={() => console.log('decrement')}>
            Decrement
          </button>
          <p>count</p>
        </div>
      </div>
    )
  }
}

export default App
