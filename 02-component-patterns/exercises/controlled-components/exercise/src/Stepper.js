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
    {({steps, activeStepIndex, goToIndex}) => (
      <div className="stepper-status">
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            <span
              className="status-item"
              style={{color: activeStepIndex === i ? '#000000' : '#aaaaaa'}}
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
    {({activeStepIndex, steps}) => {
      const activeStep = steps[activeStepIndex]
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

  state = {
    // Assume that the first step is always active at first.
    activeStepIndex: 0
  }

  findActiveStep = (step) => {
    return step.id === this.state.activeStepId;
  }

  stepForward = () => {
    this.setState(state => {
      return {
        activeStepIndex: state.activeStepIndex + 1
      }
    })
  }

  stepBack = () => {
    this.setState(state => {
      return {
        activeStepIndex: state.activeStepIndex - 1
      }
    })
  }

  goToIndex = index => {
    this.setState({ activeStepIndex: index })
  }

  getContext() {
    const { steps } = this.props
    const { activeStepIndex } = this.state
    const hasPrevious = activeStepIndex > 0
    const hasNext = activeStepIndex < steps.length - 1
    return {
      activeStepIndex: activeStepIndex,
      stepForward: this.stepForward,
      stepBack: this.stepBack,
      goToIndex: this.goToIndex,
      steps,
      hasNext,
      hasPrevious
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
