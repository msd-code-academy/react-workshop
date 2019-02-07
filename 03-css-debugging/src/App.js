import React  from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './App.scss'
import examples from './examples'

const App = () => (
  <Router>
    <div className="App">
      <div className="App__header">
        {examples.map(ex => <NavLink key={ex.id} to={`/${ex.id}`}>{ex.title}</NavLink>)}
      </div>

      <div className="App__content">
        {examples.map(ex => <Route key={ex.id} path={`/${ex.id}`} component={ex.component} />)}
      </div>
    </div>
  </Router>
)

export default App
