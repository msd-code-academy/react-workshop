import React, {Component} from 'react'

const StepContext = React.createContext({})

const StepNext = () => (
  <StepContext.Consumer>
    {({hasNext, stepForward}) => (
      <button className="step-btn" disabled={!hasNext} onClick={stepForward}>
        Next
      </button>
    )}
  </StepContext.Consumer>
)

const StepBack = () => (
  <StepContext.Consumer>
    {({hasPrevious, stepBack}) => (
      <button className="step-btn" disabled={!hasPrevious} onClick={stepBack}>
        Back
      </button>
    )}
  </StepContext.Consumer>
)

const StepButtons = () => (
  <React.Fragment>
    <StepBack />
    <StepNext />
  </React.Fragment>
)

const StepperStatus = () => (
  <StepContext.Consumer>
    {({steps, activeStepIndex, goToIndex}) => (
      <div className="stepper-status">
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            <span
              className="status-item"
              style={{color: activeStepIndex === i ? '#000000' : '#aaaaaa'}}
              onClick={() => goToIndex(i)}>
              {step.title}
            </span>
            {i !== steps.length - 1 && <span className="status-divider" />}
          </React.Fragment>
        ))}
      </div>
    )}
  </StepContext.Consumer>
)

const ActiveStep = () => (
  <StepContext.Consumer>
    {({steps, activeStepIndex}) => {
      {
        const activeStep = steps[activeStepIndex]
        return (
          <div>
            <h2>{activeStep.title}</h2>
            <p>{activeStep.content}</p>
          </div>
        )
      }
    }}
  </StepContext.Consumer>
)

class Stepper extends Component {
  state = {
    activeStepIndex: 0
  }

  static Status = StepperStatus
  static Buttons = StepButtons
  static Next = StepNext
  static Back = StepBack
  static ActiveStep = ActiveStep

  stepBack = () => {
    // const {activeStepIndex} = this.state
    // this.setState({activeStepIndex: activeStepIndex - 1})
    this.setState((state) => {
      return {
        activeStepIndex: state.activeStepIndex - 1
      }
    })
  }

  stepForward = () => {
    // const {activeStepIndex} = this.state
    // this.setState({activeStepIndex: activeStepIndex + 1})
    this.setState((state) => {
      return {
        activeStepIndex: state.activeStepIndex + 1
      }
    })
  }

  goToIndex = (index) => {
    this.setState({activeStepIndex: index})
  }

  getContext = () => {
    const {steps} = this.props
    const {activeStepIndex} = this.state

    const hasNext = activeStepIndex < steps.length - 1
    const hasPrevious = activeStepIndex > 0

    return {
      steps,
      activeStepIndex: this.state.activeStepIndex,
      hasNext,
      hasPrevious,
      stepBack: this.stepBack,
      stepForward: this.stepForward,
      goToIndex: this.goToIndex
    }
  }

  render() {
    return (
      <div className="stepper">
        <StepContext.Provider value={this.getContext()}>{this.props.children}</StepContext.Provider>
      </div>
    )
  }
}

export default Stepper
