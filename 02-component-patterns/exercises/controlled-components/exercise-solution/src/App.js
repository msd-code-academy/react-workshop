import React, {Component} from 'react'

import Stepper from './Stepper'
import './App.css'

const steps = [
  {
    title: 'First Step!',
    content: 'Here is the first step, its really good.'
  },
  {
    title: 'Second Step!',
    content: 'First is the worst, second the best'
  },
  {
    title: 'Third Step!',
    content: 'THIRD STEP YOU MADE IT, GOOD JOB!'
  }
]

class App extends Component {
  state = {
    stepIndex: 0
  }

  canMoveForward = (index) => index < steps.length - 1

  canMoveBack = (index) => index > 0

  onStepChange = (index) => {
    this.setState({
      stepIndex: index
    })
  }

  render() {
    return (
      <Stepper
        stepIndex={this.state.stepIndex}
        steps={steps}
        canMoveForward={this.canMoveForward}
        canMoveBack={this.canMoveBack}
        onChange={this.onStepChange}>
        <Stepper.ActiveStep />
        <Stepper.Status />
        <Stepper.Controls />
      </Stepper>
    )
  }
}

export default App
