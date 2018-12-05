import React from 'react';
import './notes.css';

export const Notes = () => (
  <div className="notes_section">
    <h1>I. useState</h1>
    <code>const [state, setState] = useState(initialState);</code>
    <ul>
      <li>We can use both string or object as a state</li>
      <li>
        useState returns a tuple - array with state on the first place and
        function to set the state on the second
      </li>
      <li>
        You can pass a function to setState - it accepts an old state as argument
        and returns a new one
      </li>
      <li>
        The setState function does not automatically merge update objects (as opposed
        to the setState method of React class)!
      </li>
    </ul>
    <h1>II. useEffect</h1>
    <code>useEffect(fn, ?array);</code>
    <ul>
      <li>Accepts a function that can have side effects</li>
      <li>
        If this function will return some other function, React will run it as a
        clean up
      </li>
      <li>
        Specified effect is executed after every render by default. Previous effect
        is cleaned up before executing the next effect
      </li>
      <li>
        Array in the second argument tells React on what values our effect depends on
        and it will execute the effect only if (references to) those values change.
        If we pass an empty array here, it tells React that
        our effect doesn’t depend on anything from the component and the effect
        will be executed only on mount and its clean up on unmount
      </li>
    </ul>
    <h1>III. useContext</h1>
    <code>const context = useContext(Context);</code>
    <ul>
      <li>
        Accepts a context object (the value returned from React.createContext) and
        returns the current context value, as given by the nearest context provider
        for the given context
      </li>
      <li>
        When the provider updates, this Hook will trigger a rerender with the latest
        context value
      </li>
    </ul>
    <h1>IV. General notes</h1>
    <ul>
      <li>
        There are other native hooks like <code>useReducer</code>, <code>useCallback</code>,
        <code>useMemo</code>, <code>useRef</code>, ...
      </li>
      <li>Hooks can&apos;t be declared within any condition (we love hooks unconditionally)</li>
      <li>Hooks can&apos;t be used within a JS class</li>
      <li>
        We can create our own custom hook. It should follow the naming pattern
        and start with use[something]
      </li>
      <li>
        All custom hooks are executed during the component render, so we must be
        careful. We shouldn&apos;t for example make any side effects outside of useEffect
      </li>
    </ul>
    <h1>V. Sources and further reading</h1>
    <ul>
      <li>
        <a href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer">Official React Hooks documentation
        </a>
      </li>
      <li>
        Sophie Alpert and Dan Abramov&nbsp;
        <a href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
          target="_blank"
          rel="noopener noreferrer">talk about Hooks
        </a>
        &nbsp;at React Conf 2018: React Today and Tomorrow and 90% Cleaner React With Hooks
      </li>
      <li>
        <a href="https://usehooks.com/"
          target="_blank"
          rel="noopener noreferrer">Code examples using Hooks
        </a>
      </li>
      <li>
        Twitter accounts:&nbsp;
        <a href="https://twitter.com/dan_abramov"
          target="_blank"
          rel="noopener noreferrer">Dan Abramov
        </a>,&nbsp;
        <a href="https://twitter.com/_nudelx_"
          target="_blank"
          rel="noopener noreferrer">Alex Nudelman
        </a>,&nbsp;
        <a href="https://twitter.com/threepointone"
          target="_blank"
          rel="noopener noreferrer">Sunil Pai
        </a>
      </li>
      <li>
        <a href="https://medium.freecodecamp.org/why-react-hooks-and-how-did-we-even-get-here-aa5ed5dc96af"
          target="_blank"
          rel="noopener noreferrer">Why React Hooks Now and How Did We Even Get Here
        </a>
        &nbsp;by Ryan Yurkanin
      </li>
    </ul>
  </div>
);
