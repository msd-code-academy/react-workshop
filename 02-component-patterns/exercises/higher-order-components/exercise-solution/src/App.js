import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'

import './App.css'

const getDisplayName = (Component) => {
  return Component.displayName || Component.name || 'Component'
}

const withScreenDimensions = (WrappedComponent) => {
  class ScreenDimensions extends Component {
    state = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }


    handleResize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    render() {
      const {forwardRef, ...props} = this.props
      return (
        <WrappedComponent
          ref={forwardRef}
          {...props}
          screenDimensions={this.state}
        />
      )
    }
  }

  const displayName = getDisplayName(WrappedComponent)
  ScreenDimensions.displayName = `withScreenDimensions(${displayName})`

  const ForwardRef = React.forwardRef((props, ref) => (
    <ScreenDimensions forwardRef={ref} {...props} />
  ))
  hoistStatics(ForwardRef, WrappedComponent)
  return ForwardRef
}

class App extends Component {
  static version = '2.0.0'
  render() {
    const {screenDimensions} = this.props
    return (
      <div className='App'>
        <h1>{screenDimensions.width}px by {screenDimensions.height}px</h1>
      </div>
    )
  }
}

export default withScreenDimensions(App)
