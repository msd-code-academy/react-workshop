import React, {Component} from 'react'

import Fetch from './Fetch'
import './App.css'

// const URL = 'http://quotes.rest/qod.json?category=inspire'
// data path data.contents.quotes[0].quote

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fetch />
      </div>
    )
  }
}

export default App
