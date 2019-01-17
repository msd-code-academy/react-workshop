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
      this.setState({isOnline: true})
    }

    handleOffline = () => {
      this.setState({isOnline: false})
    }

    render() {
      const {isOnline} = this.state
      const {...props} = this.props
      return <WrappedComponent {...props} isOnline={isOnline} />
    }
  }

  // Use a displayName that identifies this as a HOC
  OnlineStatus.displayName = `withOnlineStatus(${getDisplayName(WrappedComponent)})`

  // Hoist all non-React static methods from the WrappedComponent.
  // It copies non-React specific statics from a child component to a parent component.
  hoistStatics(OnlineStatus, WrappedComponent)
  return OnlineStatus
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
