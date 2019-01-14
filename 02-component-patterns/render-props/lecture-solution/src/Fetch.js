import React, {Component} from 'react'

class Fetch extends Component {
  state = {
    loading: true,
    error: null,
    data: null
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => (
        this.setState({
          loading: false,
          data: data
        })
      ))
      .catch(error => (
        this.setState({
          loading: false,
          error: error
        })
      ))
  }

  render() {
    return this.props.children(this.state)
  }
}

export default Fetch