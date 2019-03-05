# React Suspense and Concurrent Mode

## Code Splitting

* Bundling your application is great, but as your app grows, your bundle size will grow too, especially if you are including large 3rd party libraries
* This may have a huge impact on the time to first load and UX
* The bundle can be split into smaller chunks where the most important ones can be loaded first and then every other secondary are lazily loaded, so called **code splitting**

### What Is Code Splitting

* Multiple bundles are created that are loaded dynamically, only at the time they are needed
* Enables to **lazy-load** just the components that are currently needed by the user
* Can significantly improve performance of your app

### React.lazy

* lazy() is a function that enables you to to render a dynamic import as a regular component
* Will automagically load the bundle with the dynamically imported component at the moment it is required to render

#### Standard import

```javascript
import {ContactDetails} from './contactDetails';
```

#### Dynamic import

* If you're using **Create React App**, then this is enabled by default
* Otherwise it has to be configured in Webpack

```javascript
import('./contactDetails').then({ContactDetails} => {
  // component loaded and available here
});
```

#### React.lazy()

```javascript
import {React, lazy} from 'react';
const ContactDetails = lazy(() => import('./contactDetails'));

const MyComponent = () => (
  <div>
    <h1>Lazy Loaded Component:</h1>
    <ContactDetails />
  </div>
);
```

* lazy() Takes a function that calls the dynamic `import()` => it must return a Promise which resolves to a module containing a React component
* Using lazy loaded component on its own **will throw an error**, we have to wrap it in Suspense component
* But besides that we can use lazy loaded component the same way we use standard components
* NOTE: React.lazy supports only default exports, if you want to use named exports, you must use intermediate module that reexports it as the default

### Suspense

* Suspense is a React component that displays fallback content (e.g. spinner) while waiting for the dynamic component to load
* Fallback can be any valid react component

```javascript
import {React, lazy, Suspense} from 'react'
const ContactDetails = lazy(() => import('./contactDetails'));

const MyComponent = () => (
  <div>
    <Suspense fallback={<div>Lazy loaded component is on it's way...</div>}>
      <ContactDetails />
    </Suspense>
  </div>
);
```

* You can place the `Suspense` anywhere above the lazy loaded component
* It doesn't matter how deep is the lazy loaded component nested, it works similar to try-catch syntax - first Suspense component up in the component tree will catch the dynamic content and display fallback
* You can wrap multiple lazy components inside a single `Suspense` component => it will display fallback until all dynamic components are loaded. Try to **avoid multiple spinners next to each other**
* Replaces [react loadable](https://github.com/jamiebuilds/react-loadable)

```javascript
import {React, lazy, Suspense} from 'react'
const ContactDetails = lazy(() => import('./contactDetails'));
const FeedbackForm = lazy(() => import('./feedbackForm'));

const MyComponent = () => (
  <div>
    <Suspense fallback={<div>Lazy loaded component is on it's way...</div>}>
      <ContactDetails />
      <div>
        <div>What do you think about our app?</div>
        <FeedbackForm />
      </div>
    </Suspense>
  </div>
);
```

### Route based code splitting

Good place to start with code splitting is with individual Routes - it makes sense to load only pages your user visits.

```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading the page...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```

> Exercise 1 => [use Suspense with lazy()](./exercise/src/App.js)

***
**What we've gone through until now is in the production, from now on we will talk about the future**
***

### Suspense For Data Fetching

* Planned in the near future (mid 2019), now **experimental** package `react-cache`
* Eventually most data fetching should happen through Suspense but it will take a long time until all integrations are ready for that

First a resource needs to be created which is basically an object that has a `read()` method. This method takes key as its only parameter, which is a key for the hash map.

We can implement e.g. component for loading images:

```javascript
import React, {Suspense} from 'react';
import {unstable_createResource as createResource} from 'react-cache';

const ImageResource = createResource(src => new Promise(resolve => {
  // Creates an image object and resolves a promise once the image loads
  const img = new Image();
  img.onload = () => resolve();
  img.src = src;
}));

const Img = ({src, alt, ...props}) => {
  // if no image with given source is found in the resource (cache), this line will throw a promise:
  ImageResource.read(src);

  // And this line will have to wait until that promise resolves:
  return <img src={src} alt={alt} {...props} />;
};
```

We can use `Img` component inside `Suspense` as simply as:

```javascript
<Suspense fallback={<div>I am downloading the image...</div>}>
  <Img src="https://path/to/image.jpg" alt="My image" />
</Suspense>
```

React.Suspense has a componentDidCatch sort of mechanism which will catch the promise thrown by `ImageResource.read()` and show a fallback until the promise is resolved

> Demo

## Concurrent Mode (Asynchronous Rendering)

> "Concurrent Mode lets React apps be more responsive by rendering component trees without blocking the main thread." - Dan Abramov

* Formerly known as "Async mode", but "Concurrent mode" has been chosen eventually because it reflects more the ability to perform work on different priority levels
* Allows React to interrupt a long-running render (for example, rendering a new feed story) to handle a high-priority event (for example, text input or hover)
* keeps your app responsive while rendering complex component trees
* Also improves the user experience of Suspense by skipping unnecessary loading states on fast connections
* Concurrent mode is the future of React, so far only in experimental state.
* In Road map planned for Q2 2019
* No documentation yet

What's possible in Async mode? E.g. skipping unnecessary loading states on fast connections when using Suspense.  
When we use lazy loaded components, small delay in load is not noticeable by user. There is a threshold - if the component load is delayed, but it still loads "fast enough", then it's counterproductive to display the spinner - it can harm **perceived** performance of the app.

### Enabling The Concurrent Mode

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
```

### maxDuration

maxDuration prop of Suspense in concurrent mode defines the time in ms after which our fallback component will show up. This will avoid screen flickering issue which usually occurs on faster network where the loader shows up for few ms and then the data comes immediately.

### Important Changes In React With Concurrent Mode

Use `<React.StrictMode>` to reveal potential problems after enabling concurrent mode - [see more here](https://reactjs.org/docs/strict-mode.html#identifying-unsafe-lifecycles)

Following lifecycle methods will be deprecated in future versions of React and can be problematic with Concurrent Rendering:

* `componentWillMount`
* `componentWillReceiveProps`
* `componentWillUpdate`

Two new lifecycle methods will be added as a replacement:

* `getSnapshotBeforeUpdate`
* `getDerivedStateFromProps`

![Lifecycle Methods Overview](./images/concurrent_lifecycle_methods.jpeg)

## Notes

* lazy() and Suspense is [not yet available for server-side rendering](https://reactjs.org/docs/code-splitting.html#reactlazy)

## Conclusion

* Great solution for code splitting and improving UX
* Concurrent mode in early development so far, but it is the future of React

## Sources and Further Reading

* [Code Splitting the React app - official documentation]([https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/code-splitting.html))
* [Andrew Clark's talk on React Suspense](https://www.youtube.com/watch?v=z-6JC0_cOns)
* [Dan Abramov's talk on React Suspense](https://www.youtube.com/watch?v=6g3g0Q_XVb4) from ReactFest
* [Jared Palmer's talk on React Suspense](https://www.youtube.com/watch?v=SCQgE4mTnjU) from React Conf 2018
* [Talk of Andrew Clark and Brian Vaughn on Concurrent Rendering in React](https://www.youtube.com/watch?v=ByBPyMBTzM0) from React Conf 2018