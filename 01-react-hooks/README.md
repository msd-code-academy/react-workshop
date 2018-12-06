# React Hooks

## What Are Hooks

* Exciting new (experimental) feature in React that make usage of JS classes unnecessary
* Hooks are functions that let you “hook into” React state and lifecycle methods from functional components
* Don't be afraid of hooks - they are just more direct way to use the React features you already know
* Until now, you had to choose between functional component vs. using lifecycle methods or state - you couldn't have both
* Hooks make it possible to use state and lifecycle methods within functional component

## Why To Use Hooks

* Using only functional components with Hooks allows code-reuse that makes the application faster to develop and easier to maintain
* *Should* be more efficient - functional components avoid a lot of overhead that classes require and the component tree (nesting level) should be much smaller with hooks
* Help to avoid "wrapper hell" - components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions
* Logically related code is grouped together in a hook instead of being spread among multiple class lifecycle methods => it is much cleaner and easier to understand (and therefore maintain)

## Native Hooks

### `useState`

```javascript
const [state, setState] = useState(initialState);
```

* `useState` returns a pair (tuple): the current state value and a function that lets you update it
* We can use both string or object as a state
* You can pass a function to `setState` - it accepts an old state as argument and returns a new one
* [DEMO](./hooks-example/src/useState/class.jsx)
* It is possible (and recommended) to use multiple useState hooks within one component - split state into multiple state variables based on which values tend to change together:

  ```javascript
  const MyComponent = () => {
    const [color, setColor] = useState('#000000');
    const [area, setArea] = useState(0);
    // ...
  }
  ```

* Watch out - `setState()` is not merging the old and new state together, **it replaces it**

  ```javascript
  const MyComponent = () => {
    const [state, setState] = useState({x: 1, y: 2});
    setState({x: 3});
    // state will be {x: 3}
  }
  ```

  Can be solved by spreading the current state:

  ```javascript
  const MyComponent = () => {
    const [state, setState] = useState({x: 1, y: 2});
    setState({
      ...state,
      x: 3
    });
    // state will be {x: 3, y: 2}
  }
  ```

### `useEffect`

```javascript
useEffect(fn, ?array);
```

* Hook for performing any "side effects" - serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`
* Accepts a function and optional array of objects to "observe"
* If the `fn` function will return some other function at the end, React will run it as a clean up
* Specified effect is executed after every render by default. Previous effect is cleaned up before executing the next effect
* Array in the second argument tells React on what values our effect depends on and it will execute the effect only if (references to) those values change. If we pass an empty array here, it tells React that our effect doesn’t depend on anything and the effect will be executed only on mount and its clean up on unmount
* [DEMO](./hooks-example/src/useEffect/class.jsx)

### Other Interesting Native Hooks

* `useReducer` => dispatching actions in React (similar to Redux)
* `useContext` => simple API for using React Context
* `useMemo` and `useCallback` => memoizing any pure function to cache expensive values and not have to re-compute them every time.
* `useRef` => returned object will persist for the full lifetime of the component, which is handy for keeping any mutable value around

## Custom Hooks

* *"A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks"*
* Allows you to extract component logic into reusable function
* Usually created by combining together multiple native hooks
* Should follow naming convention `use[Something]`
* All custom hooks are executed during the component render, so we must be careful. We shouldn't for example make any side effects outside of useEffect
* [DEMO](./hooks-example/src/useCustom/class.jsx)

## Limitations of Hooks

* Can be called only within a functional component, not within class (but it's possible to have a functional component using hooks as a child of a class component) or within regular JavaScript function
* Hooks can be called only at the top level. Don’t call Hooks inside loops, nested functions or conditions - *we love hooks unconditionally :)*

  ```javascript
  const MyComponent = () => {
    // WRONG:
    if (iFeelLuckyToday) {
      const [state, setState] = useState('initVal');
    }
  }
  ```


## Conclusion

* Hooks are currently still in alpha (`v16.7.0-alpha`), planned to be released in React 16.7
* No breaking changes - there are no plans to remove classes from React, Hooks are purely opt-in (you can use them, but you don't have to)
* Hooks allow code-reuse and logical grouping that make the application faster to develop and easier to maintain

## Sources and Further Reading

* [Official React Hooks documentation](https://reactjs.org/docs/hooks-intro.html)
* Sophie Alpert and Dan Abramov [talk about Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) at React Conf 2018: React Today and Tomorrow and 90% Cleaner React With Hooks
* [Code examples of creating custom Hooks](https://usehooks.com/)
* Inspiring twitter accounts: [Dan Abramov](https://twitter.com/dan_abramov), [Alex Nudelman](https://twitter.com/_nudelx_), [Sunil Pai](https://twitter.com/threepointone)
* [Why React Hooks Now and How Did We Even Get Here](https://medium.freecodecamp.org/why-react-hooks-and-how-did-we-even-get-here-aa5ed5dc96af)  by Ryan Yurkanin