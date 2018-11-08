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

* [00-init](https://github.com/msd-code-academy/react-workshop/pull/2/commits/d81f4537be988531828311029937428383a94d3b)
  - hardcoded content without any props or state, all at top level
* [01-props](https://github.com/msd-code-academy/react-workshop/pull/2/commits/22d64a3032b6b50b636bbbca3ef38fa090d17f66)
  - create components, identify what should be props
* [02-state](https://github.com/msd-code-academy/react-workshop/pull/2/commits/a895efd0b4e17445a7d2e0c5fae404d327776ce1)
  - create wrapper components for state
* [03-shared-state](https://github.com/msd-code-academy/react-workshop/pull/2/commits/1a1ab7735d40ac0d788e1b92a44d60e7342ca2e4)
  - lift the state up in the hierarchy as needed

Git diffs (to discuss concepts that would take longer to code):

* [04-router](https://github.com/msd-code-academy/react-workshop/pull/2/commits/e36985d36276101782534b8a27a30665e7a324bf)
  - use a simplified version of [react-router](https://reacttraining.com/react-router/web/guides/quick-start) to preserve some state via URL
* [05-context](https://github.com/msd-code-academy/react-workshop/pull/2/commits/7b01848b9f7635ae8bc9d9f75f8a35d19283c76f)
  - use the React [Context](https://reactjs.org/docs/context.html) to avoid passing props in intermediate components
* [06-hooks](https://github.com/msd-code-academy/react-workshop/pull/2/commits/76d381db8f44ec2a89ed96b22035552e70ef4bf5)
  - a teaser of [React Hooks](https://reactjs.org/docs/hooks-overview.html) (more in a separate workshop)
* [07-redux](https://github.com/msd-code-academy/react-workshop/pull/2/commits/c977249efee84507570d30d9e8dc1c7b4c57b39d)
  - convert to [Redux](https://redux.js.org/basics/exampletodolist) to simplify debugging with dev tools or if we cannot use alpha features in our project

## Useful tips

* `<input value=...` is called a [Controlled Component](https://reactjs.org/docs/forms.html#controlled-components) (by React),<br>
  `<input defaultValue=...` is [Uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) (controlled by DOM / browser)
* `class ... method = () => ...` is [Class Fields](https://github.com/tc39/proposal-class-fields) feature
* `<A>{(x) => <B prop={x} />}</A>` is [Render Props](https://reactjs.org/docs/render-props.html) (a.k.a "children as a function")
* `<>` is syntax sugar for [`<React.Fragment>`](https://reactjs.org/docs/fragments.html#short-syntax)
* for reusable components, see also distinction between smart/dumb (a.k.a logical/presentational) components, e.g. https://youtu.be/Y7es1vcib14
* `Enhanced = withSomething(Wrapped)` is a [Higher Order Component](https://reactjs.org/docs/higher-order-components.html)
* `componentWillReceiveProps` => see [You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

`TODO: update tips during live coding if needed`
