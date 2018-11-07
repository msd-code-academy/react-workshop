import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          logo, navigation, ...
        </header>
        <div>
          <div>
            Search: <input value="abc"/>
            <button>Go</button>
          </div>
          <div>
            Results for abc:
            <div>
              <h2>Result 1</h2>
              Long description </div>
          </div>
        </div>
        <footer>
          MIT License
        </footer>
      </div>
    );
  }
}

export default App;
