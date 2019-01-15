import React, {Component} from 'react'

const RadioGroupOption = ({value, label}) => (
  <div className="radio-group-item">
    <input id={value} name="form" type="radio" value={value} />
    <label htmlFor={value}>{value || label}</label>
  </div>
)

class RadioGroup extends Component {
  static Option = RadioGroupOption

  render() {
    return <fieldset className="radio-group">{this.props.children}</fieldset>
  }
}

export default RadioGroup
