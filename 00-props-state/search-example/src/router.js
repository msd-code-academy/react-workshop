import React from 'react';

export const withRouter = (Component) => {
  // dummy example, do NOT use in real life
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {route: window.location.hash.substr(1)}
      window.onhashchange = this.readRoute
    }
    
    readRoute = () => {
      const route = window.location.hash.substr(1)
      if (this.state.route !== route) {
        this.setState({route})
      }
    }
    
    changeRoute = (route) => {
      window.location.hash = route
      this.setState({route})
    }
    
    render() {
      const {route} = this.state
      const {changeRoute} = this
      return <Component {...{route, changeRoute, ...this.props}}/>
    }
  }
}
