# React Workshop - Testing Hooks

## Setup

To follow exercises on your own laptop, please clone and install dependencies:

```
git clone https://github.com/msd-code-academy/react-workshop.git
cd react-workshop/08-testing-hooks/
yarn
yarn start
```

And in a separate terminal window:
```
yarn test
```

## 00 introduction

- https://reactjs.org/docs/thinking-in-react.html
- https://reactjs.org/docs/hooks-intro.html
- https://reactjs.org/docs/testing-recipes.html#events

Questions possible at any time.


## 01 testing useState
> [src/01](src/01)

Starting with a stateless component with a test:
- add state to component - render background color based on the input value
- update test


## 02 TDD
> [src/02](src/02)

Starting with the above solution and boilerplate code, display the last valid color name:
- add validation test + update component tests
- implement validation + update component


## 03 custom hooks
> [src/03](src/03)

- code of component with lots of logic + test for just initial render
- move to a new custom hook
- add test for the hook, using dummy component


## 04 testing libraries
> [src/04](src/04)

- links to useful libraries (disclaimer whether or not I had time to try them)


## 05 react-redux
> [src/05](src/05)

- existing actions, reducer, ... and simple tests for them
- add useDispatch, useSelector to component
- mock the selectors, use dummy dispatch and connect

