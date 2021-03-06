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
- https://reactjs.org/docs/testing-recipes.html

Questions possible at any time.


## 01 testing useState
> [src/01](src/01)

Starting with a stateless component with a test:
- add state to component - render background color based on the input value
- update test


## 02 TDD
> [src/02](src/02)

Display the last valid color name:
- add validation test
- implement validation
- update component tests
- update component


## 03 custom hooks
> [src/03](src/03)

Move the color logic to a reusable custom hook:
- e.g. following API: `{rawColor, validColor, setColor} = useColor(defaultColor)`
- refactor component (no need to update tests at this stage!)
- add tests for the custom hook
- use the hook multiple times


## 04 libraries for testing
- https://testing-library.com/docs/react-testing-library/intro
- https://airbnb.io/enzyme/

> [src/04](src/04)

Simplify tests with react-testing-library:
- replace `act()`
- replace modification of input value


## 05 mock API data and timers
> [src/05](src/05)

Use standard Jest mocking features:
- mock response from window.fetch
- mock setTimeout


## 06 react-redux
> [src2/06](src2/06)

[You Might Not Need Redux](https://www.google.com/search?q=you+might+not+need+redux), but if it's already used in the project
and you want to test a component:
- mock `useSelector`, `useDispacth` and `connect`
- or [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) (out of scope for today)
