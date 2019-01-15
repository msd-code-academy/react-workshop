import React, {Component} from 'react'

class Count extends Component {
  state = {
    count: 0
  }

  increase = () => {
    this.setState({count: this.state.count + 1})
  }

  decrease = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return this.props.children({
      increase: this.increase,
      decrease: this.decrease,
      count: this.state.count
    })
  }
}

export default Count
