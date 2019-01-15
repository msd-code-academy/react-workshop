import React, {Component} from 'react'

const StepperContext = React.createContext()

const StepperNext = () => (
  <StepperContext.Consumer>
    {({hasNext, stepForward}) => (
      <button className="step-btn" onClick={stepForward} disabled={!hasNext}>Next</button>
    )}
  </StepperContext.Consumer>
)

const StepperPrevious = () => (
  <StepperContext.Consumer>
    {({hasPrevious, stepBack}) => (
      <button className="step-btn" onClick={stepBack} disabled={!hasPrevious}>Back</button>
    )}
  </StepperContext.Consumer>
)

const StepperControls = () => (
  <React.Fragment>
    <StepperPrevious />
    <StepperNext />
  </React.Fragment>
)

const StepperStatus = () => (
  <StepperContext.Consumer>
    {({steps, stepIndex, goToIndex}) => (
      <div className="stepper-status">
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            <span
              className="status-item"
              style={{color: stepIndex === i ? '#000000' : '#aaaaaa'}}
              onClick={() => goToIndex(i)}
            >
              {step.title}
            </span>
            {i !== steps.length - 1 && <span className="status-divider" />}
          </React.Fragment>
        ))}
      </div>
    )}
  </StepperContext.Consumer>
)

const ActiveStep = () => (
  <StepperContext.Consumer>
    {({stepIndex, steps}) => {
      const activeStep = steps[stepIndex]
      return (
        <div className="step">
          <h2>{activeStep.title}</h2>
          <p>{activeStep.content}</p>
        </div>
      )
    }}
  </StepperContext.Consumer>
)

class Stepper extends Component {

  static Controls = StepperControls
  static Next = StepperNext
  static Previous = StepperPrevious
  static Status = StepperStatus
  static ActiveStep = ActiveStep

  stepForward = () => {
    const {onChange, stepIndex} = this.props
    onChange(stepIndex + 1)
  }

  stepBack = () => {
    const {onChange, stepIndex} = this.props
    onChange(stepIndex - 1)
  }

  goToIndex = (index) => {
    const {onChange} = this.props
    onChange(index)
  }

  getContext = () => {
    const {
      steps,
      stepIndex,
      canMoveForward,
      canMoveBack
    } = this.props
    return {
      steps,
      stepIndex,
      stepForward: this.stepForward,
      stepBack: this.stepBack,
      goToIndex: this.goToIndex,
      hasNext: canMoveForward(stepIndex),
      hasPrevious: canMoveBack(stepIndex)
    }
  }

  render() {
    return (
      <div className="stepper">
        <StepperContext.Provider value={this.getContext()}>
          {this.props.children}
        </StepperContext.Provider>
      </div>
    )
  }
}

export default Stepper
