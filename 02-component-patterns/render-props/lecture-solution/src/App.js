import React, { Component } from 'react';

import Fetch from './Fetch'
import './App.css';

const URL = 'http://quotes.rest/qod.json?category=inspire'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fetch url={URL} >
          {({loading, error, data}) => {
            if (error !== null) {
              console.log(error)
              return <p>{error.toString()}</p>
            }
            return loading ? <p>'Loading...'</p> : <p>{data.contents.quotes[0].quote}</p>
          }}
        </Fetch>
      </div>
    )
  }
}

export default App
