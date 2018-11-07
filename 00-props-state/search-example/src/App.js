import React, {PureComponent} from 'react';
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

const Search = ({query, results, onChange, onSubmit}) => (
  <div>
    <form onSubmit={onSubmit}>
      Search: <input value={query} onChange={onChange}/>
      <button>Go</button>
    </form>
    <div>
      Results for {query}: {results.map(result => <Result result={result} key={result.title}/>)}
    </div>
  </div>
)

class SearchLogic extends PureComponent {
  state = {
    query: 'abc'
  }

  handleChange = (e) => {console.log(e.target.value)}

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  render() {
    const {query} = this.state
    const {handleChange, handleSubmit} = this
    return this.props.children({query, handleChange, handleSubmit})
  }
}

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          logo, navigation, ...
        </header>
        <SearchLogic>
          {({query, handleChange, handleSubmit}) =>
              <Search query={"abc"} results={fakeRes1} onChange={handleChange} onSubmit={handleSubmit}/>}
        </SearchLogic>
        <footer>
          MIT License
        </footer>
      </div>
    );
  }
}

export default App;
