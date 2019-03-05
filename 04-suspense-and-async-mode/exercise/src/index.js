import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Classic, synchronous render:
// ReactDOM.render(<App />, document.getElementById('root'));

// To enable concurrent mode, uncomment the following:
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
