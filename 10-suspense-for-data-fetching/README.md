# React Suspense for Data Fetching

## Prerequisites
Please go to https://github.com/msd-code-academy/react-workshop and clone the project. Then inside the project run:

```
git pull
cd 10-suspense-for-data-fetching
npm ci
npm start
```

We are using Parcel (https://parceljs.org/) for development server instead of webpack. It starts on port 1234. _(unfortunately hot reload sometimes doesn't work with parcel and react experimental, therefore is disabled)_.

## Introduction

- React Suspense for Data Fetching is pretty experimental, so there are some rough edges that you're going to be working through.
- The APIs can change in the future.
- Only Facebook is using it in production with Relay.
- One of the things that I love about React in general, is that they're always applying the things that they're presenting to us internally at Facebook first, so they get some of the quirks worked out.
- We're playing around with things, we're making little abstractions from things. Some of these things might be a bad idea, some of them might be good ideas. This is the whole point of this workshop, is to experiment with this, get familiar with the ideas and the concepts and the things that it enables, and then let you run off and play around with it, and give feedback back to the React team.

## Approaches

### Fetch-on-Render (not using Suspense)

Start rendering components. Each of these components may trigger data fetching in their effects and life-cycle methods. This approach often leads to “waterfalls”.

### Fetch-Then-Render (not using Suspense)

Start fetching all the data for the next screen as early as possible. When the data is ready, render the new screen. We can’t do anything until the data arrives.

1. Start fetching
2. Finish fetching
3. Start rendering

### Render-as-You-Fetch (using Suspense)

Start fetching all the required data for the next screen as early as possible, and start rendering the new screen immediately — before we get a network response. As data streams in, React retries rendering components that still need data until they’re all ready.

  1. Start fetching
  2. Start rendering
  3. Finish fetching

## Setup

Install experimental React
```
npm install react@experimental
```

Use concurrent mode to enable experimental features.

```
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## Usage

```
// This is not a Promise. It's a special object (resource) from our Suspense integration.
const peopleResource = wrapPromise(fetchPeople);

const People = () => {
  // Try to read people list, although it might not have loaded yet
  const people = peopleResource.read();

  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>{person.name}</li>
      ))}
    </ul>
  );
};

const Page = () => {
  return (
    <React.Suspense fallback={<div>Loading people...</div>}>
      <People />
    </React.Suspense>
  );
};
```

Here’s what happens when we render `<Page>` on the screen:

- We’ve already kicked off the requests in `peopleResource`. It gave us a special “resource” instead of a Promise. In a realistic example, it would be provided by our data library’s Suspense integration, like Relay.

- React tries to render `<Page>`. It returns `<People>` as children.

- React tries to render `<People>`. It calls `peopleResource.read()`. That will throw a Promise, no further code in `<People>` is executed. None of the data is fetched yet, so this component “suspends”. React skips over it, and tries rendering other components in the tree.

- There’s nothing left to try rendering. Because `<People>` suspended, React shows the closest `<Suspense>` fallback above it in the tree: "Loading people...". We’re done for now.

- This resource object represents the data that isn’t there yet, but might eventually get loaded. When we call `read()`, we either get the data, or the component “suspends”.

- When `peopleResource` is fetched, the `<People>` component will render successfully and we’ll no longer need the loading fallback. Eventually, we’ll get all the data, and there will be no fallbacks on the screen.

## Errors

When we need to handle our errors and display something useful to the user, then we can rely on an ErrorBoundary to catch that for us. This is the standard ErrorBoundary API that React has supported for quite some time.

```
export default class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch() {
    // log the error to the server
  }

  render() {
    return this.state.error ? (
      <div>Error: {this.state.error}</div>
    ) : (
      this.props.children
    );
  }
}
```

## Loading States

`useTransition` allows components to avoid undesirable loading states by waiting for content to load before transitioning to the next screen. It also allows components to defer slower, data fetching updates until subsequent renders so that more crucial updates can be rendered immediately.

The useTransition hook returns two values in an array.

- startTransition is a function that takes a callback. We can use it to tell React which state we want to defer.
- isPending is a boolean. It’s React’s way of informing us whether we’re waiting for the transition to finish.


## Suspense List

`<SuspenseList>` helps coordinate many components that can suspend by orchestrating the order in which these components are revealed to the user.

SuspenseList takes two props:

- revealOrder (forwards, backwards, together) defines the order in which the SuspenseList children should be revealed.

  - together reveals all of them when they’re ready instead of one by one.

- tail (collapsed, hidden) dictates how unloaded items in a SuspenseList is shown.

  - By default, SuspenseList will show all fallbacks in the list.
  - collapsed shows only the next fallback in the list.
  - hidden doesn’t show any unloaded items.

## Sources and Useful Links
- https://reactjs.org/docs/concurrent-mode-suspense.html
