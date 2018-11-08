import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {setRouteAndSubmit, setQuery} from './actions';
import './App.css';

const mapStateToProps = ({route, query, results}) => ({route, query, results})
const mapDispatchToProps = {setRoute: setRouteAndSubmit, setQuery}


let Result = ({title, body, more, route, setRoute}) => {
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
Result = connect(mapStateToProps, mapDispatchToProps)(Result)


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


const App = ({route, setRoute, query, setQuery, results}) => {
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setRoute(query)
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
