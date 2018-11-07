# Props / State / Redux - how to decide

A practical exercise about [Thinking in React](https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live) - Step 4: Identify Where Your State Should Live.

Using an empty [create-react-app]( https://github.com/facebook/create-react-app) project (link bellow), we will add a few features to illustrate modelling of components with static content, when to turn them into reusable components and how to choose a good time to add dynamic behaviour (i.e. with user input and API requests - illustrated on a Search feature). After a short brake for an open discussion with refreshments, we will implement a more complex feature (e.g. a Router with Back/Forward navigation and a Cache). The main objective will be to clarify the decision making process about application state.

## Setup

```
cd react-workshop/00-props-state  # or whereever you want to create a repo
create-react-app live_coding
```

## Content

Excercises (follow live coding / create your own example / help people around when finished):

* [00-init](search-example) - hardcoded content without any props or state, all at top level
* [01-props](01-props) - create components, identify what should be props
* [02-state](02-state) - create wrapper components for state
* [03-shared-state](03-intermediate-components) - move the state higher in the hierarchy when needed

Git diffs (to discuss concepts that would take longer to code):

* [04-router](04-router) - use react-router to preserve some state via URL
* [05-context](05-context) - use React Context API to avoid passing props in intermediate components
* [06-redux](06-redux) - use Redux instead of Context to enjoy the nice dev tools
* ??? [07-hooks](07-hooks) - use React Hooks to compare previous solutions with this bleeding edge feature
