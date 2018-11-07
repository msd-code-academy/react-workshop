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

const Search = ({query, submittedQuery, results, onChange, onSubmit}) => (
  <div>
    <form onSubmit={onSubmit}>
      Search: <input value={query} onChange={onChange}/>
      <button>Go</button>
    </form>
    {submittedQuery && (
      <div>
        Results for {submittedQuery}: {results.map(result => <Result result={result} key={result.title}/>)}
      </div>
    )}
  </div>
)

class SearchLogic extends PureComponent {
  state = {
    query: 'abc',
    submittedQuery: '',
    results: []
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((state) => ({submittedQuery: state.query, results: []}))
    // fake API call
    setTimeout(() => {
      this.setState({results: Math.random() < 0.5 ? fakeRes1 : fakeRes2})
    }, 500)
  }

  render() {
    const {query, submittedQuery, results} = this.state
    const {handleChange, handleSubmit} = this
    return this.props.children({query, submittedQuery, results, handleChange, handleSubmit})
  }
}

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <SearchLogic>
          {({query, submittedQuery, results, handleChange, handleSubmit}) => (
            <>
              <header className="App-header">
                logo, navigation, ... {results.length ? `Showing ${results.length} results` : null}
              </header>
              <Search {...{query, submittedQuery, results}} onChange={handleChange} onSubmit={handleSubmit}/>
              <footer>
                MIT License
                {submittedQuery &&
                  <div>More info about <a href={`https://google.com?q=${submittedQuery}`}>{submittedQuery}</a>.</div>
                }
              </footer>
            </>
          )}
        </SearchLogic>
      </div>
    );
  }
}

export default App;
