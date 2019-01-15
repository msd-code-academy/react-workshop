import React, {Component} from 'react'
import cx from 'classnames'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const NavigationContext = React.createContext({})

const NavigationSplit = () => <li className="nav-split" />

const NavigationItem = ({to, label}) => (
  <NavigationContext.Consumer>
    {({activeItem, changePage}) => {
      return (
        <Router>
          <li className={cx({'nav-active': activeItem === label})}>
            <Link to={to} onClick={changePage(label)}>
              {label}
            </Link>
          </li>
        </Router>
      )
    }}
  </NavigationContext.Consumer>
)

class Navigation extends Component {
  state = {active: 'Home'}

  changePage = (newActiveItem) => () => {
    this.setState({active: newActiveItem})
  }

  static Split = NavigationSplit

  static Item = NavigationItem

  render() {
    return (
      <ul className="nav" role="navigation">
        <NavigationContext.Provider value={{activeItem: this.state.active, changePage: this.changePage}}>
          {this.props.children}
        </NavigationContext.Provider>
      </ul>
    )
  }
}

export default Navigation
