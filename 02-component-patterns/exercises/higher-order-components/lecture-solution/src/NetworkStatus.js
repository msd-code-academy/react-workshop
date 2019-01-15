import React, {Component} from 'react'
import hoistStatics from 'hoist-non-react-statics'

const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component'

const withOnlineStatus = (WrappedComponent) => {
  class OnlineStatus extends Component {
    state = {isOnline: navigator.onLine}

    componentDidMount() {
      window.addEventListener('online', this.handleOnline)
      window.addEventListener('offline', this.handleOffline)
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleOnline)
      window.removeEventListener('offline', this.handleOffline)
    }

    handleOnline = () => {
      console.log('on')
      this.setState({isOnline: true})
    }

    handleOffline = () => {
      console.log('off')
      this.setState({isOnline: false})
    }

    render() {
      const {isOnline} = this.state
      const {forwardRef, ...props} = this.props
      return <WrappedComponent ref={forwardRef} {...props} isOnline={isOnline} />
    }
  }

  OnlineStatus.displayName = `withOnlineStatus(${getDisplayName(WrappedComponent)})`

  function forwardRef(props, ref) {
    return <OnlineStatus {...props} forwardRef={ref} />
  }

  forwardRef.displayName = OnlineStatus.displayName

  const ForwardRef = React.forwardRef(forwardRef)
  hoistStatics(ForwardRef, WrappedComponent)
  return ForwardRef
}

export const Online = withOnlineStatus(
  class Online extends Component {
    static ConnectionSpeed = () => {
      const {downlink} = navigator.connection
      return <span>{downlink}Mbp/s</span>
    }
    static ConnectionType = () => {
      const {effectiveType} = navigator.connection
      return <span>{effectiveType.toUpperCase()}</span>
    }
    render() {
      const {isOnline, children} = this.props
      return isOnline ? children : null
    }
  }
)

export const Offline = withOnlineStatus(
  class Offline extends Component {
    render() {
      const {isOnline} = this.props
      return isOnline ? null : <div>Where do you go?!</div>
    }
  }
)
