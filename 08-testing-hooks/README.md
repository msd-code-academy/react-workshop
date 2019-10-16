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

## 01 testing useState
> [src/01](src/01)

Starting with a stateless component with a test:
- add state to component - render background color based on the input value
- update test


## 02 TDD
> [src/02](src/02)

Starting with the above solution and boilerplate code, display the last valid color name:
- add validation test
- implement validation
- update component tests
- update component

## 03 low priority for unit-testing effects
> [src/03](src/03)

- code+test without state or effect
- add effect that modifies state after fetching data
- test 2 states (initial render, with data) without unit-testing the effect itself

## 04 custom hooks
> [src/04](src/04)

- code of component with lots of logic + test for just initial render
- move to a new custom hook
- add test for the hook, using dummy component

## 05 testing libraries
> [src/05](src/05)

- links to useful libraries (disclaimer whether or not I had time to try them)

## 06 react-redux
> [src/06](src/06)

- existing actions, reducer, ... and simple tests for them
- add useDispatch, useSelector to component
- mock the selectors, use dummy dispatch and connect

## 07 add a feature using redux
> [src/07](src/07)

- working solution from 06
- add new JSON property to data
- update redux code
- update component
- extra challenge: TDD

Q&A possible at any time.
