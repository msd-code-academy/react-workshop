import React from 'react';

export const RouterContext = React.createContext()

const getRoute = () => window.decodeURI(window.location.hash.substr(1))

export const withRouter = (Component) => {
  // dummy example, do NOT use in real life
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {route: getRoute()}
      window.onhashchange = this.readRoute
    }
    
    readRoute = () => {
      const route = getRoute()
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
      return (
        <RouterContext.Provider value={{route, changeRoute}}>
          <Component {...{route, changeRoute, ...this.props}}/>
        </RouterContext.Provider>
      )
    }
  }
}
