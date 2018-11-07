import React, {Component} from 'react';
import './App.css';

const fakeRes1 = [{title: 'Result 1', body: 'Long Description'}]
const fakeRes2 = [{title: 'Result 1', body: 'Description D'}, {title: 'Result 2', body: 'Description E'}]

const Result = ({result}) => {
  const {title, body} = result
  return (
    <div>
      <h2>{title}</h2> {body}
    </div>
  )
}

const Search = ({query, results}) => (
  <div>
    <div>
      Search: <input value={query}/>
      <button>Go</button>
    </div>
    <div>
      Results for {query}: {results.map(result => <Result result={result} key={result.title}/>)}
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          logo, navigation, ...
        </header>

        <Search query={"abc"} results={fakeRes1}/>

        <Search query={"def"} results={fakeRes2}/>

        <footer>
          MIT License
        </footer>
      </div>
    );
  }
}

export default App;
