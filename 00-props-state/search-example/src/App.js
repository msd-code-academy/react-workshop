import React, {useState, useEffect, useContext} from 'react';
import './App.css';

const fakeRes1 = [{title: 'Result 1', body: 'Long Description', more: 'abc'}]
const fakeRes2 = [{title: 'Result 1', body: 'Description D', more: 'def'}, {title: 'Result 2', body: 'Description E'}]

export const RouterContext = React.createContext()
const getHash = () => window.decodeURI(window.location.hash.substr(1))

const Result = ({title, body, more}) => {
  const {route, setRoute} = useContext(RouterContext)

  const handleClick = (e) => {
    e.preventDefault()
    setRoute(`${route} ${more}`)
  }

  return (
    <div>
      <h1>{title}
      </h1>
      {body}
      {more && <div><button onClick={handleClick}>See more</button></div>}
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
        Results for {submittedQuery}: {results.map(result => <Result {...result} key={result.title}/>)}
      </div>
    )}
  </div>
)
const App = () => {
  const [route, setRoute] = useState(getHash())
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    setQuery(route)
    window.location.hash = route
    const timeout = setTimeout(() => setResults(Math.random() < 0.5 ? fakeRes1 : fakeRes2), 500)
    return () => clearTimeout(timeout)
  }, [route])

  useEffect(() => {
    window.onhashchange = () => setRoute(getHash())
    return () => window.onhashchange = undefined
  }, [])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setRoute(query)
  }

  return (
    <div className="App">
      <RouterContext.Provider value={{route, setRoute}}>
        <header className="App-header">
          logo, navigation, ... {results.length ? `Showing ${results.length} results` : null}
        </header>
        <Search {...{query, results}}
          submittedQuery={route}
          onChange={handleChange}
          onSubmit={handleSubmit}/>
        <footer>
          MIT License
          {route &&
           <div>More info about <a href={`https://google.com?q=${route}`}>{route}</a>.</div>
          }
        </footer>
      </RouterContext.Provider>
    </div>
  );
}

export default App;
