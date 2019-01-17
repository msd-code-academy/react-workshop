# React Component Patterns

## Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

#### Function and Class Components


const Welcome = (props) =>  (
  <h1>Hello, {props.name}</h1>
)



class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}


Differences:

- syntax
- state
- lifecycle hooks & methods
- transpiled code by Babel

##### Pure Components


class Welcome extends React.PureComponent {
  render() {
    return <h1>Welcome</h1>
  }
}


- optimization - reduces the number of render operation in the application
- calls the method `render` only if it detects changes in `state` or `props` - logic in `shouldComponentUpdate`

### Render Props

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

It gives you a way to pass data from the wrapping component to its inner composed component(s). Because of this function, you can use the children prop within the render prop component. The children prop becomes a children as a function.


class Amount extends Component {
  ...
  render() {
    return (
      <div>
        {this.props.render(this.state.amount)}
      </div>
    )
  }
}


const App () => (
  <Amount
    render={amount => (
      <div>{amount}</div>
    )}
  />
)

### Higher Order Components

Higher-order component is a function that takes a component and returns a new component, transforms a component into another one.

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
)

The first parameter is the wrapped component. The second parameter retrieves the data we’re interested in, given a `DataSource` and the current props.

A HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.


### Compound Components

Compound components leave your JSX markup clean. You can truly focus on presentation while the logic is tucked away in container components.

Compound components is a pattern in which components are used together such that they share an implicit state that let’s them communicate with each other in the background.

Using `React.cloneElement` or `Context API` 

### Controlled Components
