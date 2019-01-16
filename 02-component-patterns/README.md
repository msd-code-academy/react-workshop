# React Component Patterns

## Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.

#### Function and Class Components

```javascript
const Welcome = (props) =>  (
  <h1>Hello, {props.name}</h1>;
)
```

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

Differences:

- syntax
- state
- lifecycle hooks & methods
- transpiled code by Babel

##### Pure Components

```javascript
class Welcome extends React.PureComponent {
  render() {
    return <h1>Welcome</h1>
  }
}
```

- optimization - reduces the number of render operation in the application
- calls the method `render` only if it detects changes in `state` or `props` - logic in `shouldComponentUpdate`

### Render Props

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

It gives you a way to pass data from the wrapping component to its inner composed component(s). Because of this function, you can use the children prop within the render prop component. The children prop becomes a children as a function.

```javascript
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
```
```javascript
const App () => (
  <Amount
    render={amount => (
      <div>{amount}</div>
    )}
  />
)
```
### Higher Order Components

### Compound Components

### Controlled Components
