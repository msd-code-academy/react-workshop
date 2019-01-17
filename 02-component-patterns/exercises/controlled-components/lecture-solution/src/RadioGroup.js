import React, {Component} from 'react'

const RadioContext = React.createContext()

const RadioGroupOption = ({value, label}) => (
  <div className="radio-group-item">
    <RadioContext.Consumer>
      {({contextValue, onChange}) => (
        <input id={value} name="form" type="radio" onChange={onChange} checked={contextValue === value} value={value} />
      )}
    </RadioContext.Consumer>
    <label htmlFor={value}>{value || label}</label>
  </div>
)

class RadioGroup extends Component {
  static Option = RadioGroupOption

  onChange = (event) => {
    this.props.onChange(event.target.value)
  }
  getContext = () => ({
    contextValue: this.props.value,
    onChange: this.onChange
  })

  render() {
    return (
      <RadioContext.Provider value={this.getContext()}>
        <fieldset className="radio-group">{this.props.children}</fieldset>
      </RadioContext.Provider>
    )
  }
}

export default RadioGroup
