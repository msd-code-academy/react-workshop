import React, {Component} from 'react'
import cx from 'classnames'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import './App.css'

const NavigationItem = ({label, to, isActive}) => (
  <li
    className={cx({
      'nav-active': isActive
    })}>
    <a href={to}>{label}</a>
  </li>
)

class Navigation extends React.Component {
  static Item = NavigationItem
  // Pretend this is dynamic and must be
  // read from state!
  state = {active: 'Home'}
  render() {
    const {children} = this.props
    return (
      <ul className="nav" role="navigation">
        {children}
      </ul>
    )
  }
}

export default Navigation
