# React Workshop - Testing Hooks

## Setup

To follow exercises on your own laptop, please clone and install dependencies:

```
git clone https://github.com/msd-code-academy/react-workshop.git
cd react-workshop/07-firebase/excersise/
yarn
yarn start
```

> Following is a list of TODO items, not course content yet:

## 00 introduction

- link to React Hooks, useState example

## 01 testing useState (exercise)

- code+test without useState
- add state to component
- add test

## 02 low priority for unit-testing effects (demo)

- code+test without state or effect
- add effect that modifies state after fetching data
- test 2 states (initial render, with data) without unit-testing the effect itself

## 03 TDD (exercise)

- code+test without state, dummy event handler
- add test of the event
- implement event handler

## 04 custom hooks (demo)

- code of component with lots of logic + test for just initial render
- move to a new custom hook
- add test for the hook, using dummy component

## 05 testing libraries (overview)

- links to useful libraries (disclaimer whether or not I had time to try them)

## 06 react-redux (demo)

- existing actions, reducer, ... and simple tests for them
- add useDispatch, useSelector to component
- mock the selectors, use dummy dispatch and connect

## 07 add a feature using redux (exercise or homework)

- working solution from 06
- add new JSON property to data
- update redux code
- update component
- extra challenge: TDD

Q&A possible at any time.
