import React, {Component, PureComponent} from 'react';
import {withRouter, RouterContext} from './router';
import './App.css';

const fakeRes1 = [{title: 'Result 1', body: 'Long Description', more: 'abc'}]
const fakeRes2 = [{title: 'Result 1', body: 'Description D', more: 'def'}, {title: 'Result 2', body: 'Description E'}]

class Result extends Component {
  handleClick = (e) => {
    e.preventDefault()
    const {more} = this.props
    const {route, changeRoute} = this.context
    changeRoute(`${route} ${more}`)
  }
  render(){
    const {title, body, more} = this.props
    return (
      <div>
        <h1>{title}
        </h1>
        {body}
        {more && <div><a onClick={this.handleClick} href='#'>See more</a></div>}
      </div>
    )
  }
}
Result.contextType = RouterContext

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

class SearchLogic extends PureComponent {
  state = {
    query: this.props.route || '',
    submittedQuery: '',
    results: []
  }
  
  componentDidMount() {
    if (this.props.route) {
      this.handleSubmit()
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.route !== nextProps.route) {
      this.setState({query: nextProps.route})
      this.handleSubmit()
    }
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e && e.preventDefault()
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
  createHandlerSubmit = (newRoute) => (e) => {
    const {changeRoute} = this.props // from withRouter
    changeRoute(newRoute)
  }
  
  render() {
    const {route} = this.props
    return (
      <div className="App">
        <SearchLogic route={route}>
          {({query, submittedQuery, results, handleChange}) => (
            <>
              <header className="App-header">
                logo, navigation, ... {results.length ? `Showing ${results.length} results` : null}
              </header>
              <Search {...{query, submittedQuery, results}}
                onChange={handleChange}
                onSubmit={this.createHandlerSubmit(query)}/>
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

const AppWithRouter = withRouter(App)

export default AppWithRouter;
