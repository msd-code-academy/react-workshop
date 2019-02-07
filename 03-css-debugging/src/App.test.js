import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import examples from './examples'
import fs from 'fs'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
});

it('all examples are imported', () => {
  const files = fs.readdirSync(`${__dirname}/examples`).filter(f => f.match(/^\d.*\.js$/)).map(f => f.slice(0, 2))
  const imported = examples.map(e => e.id)
  expect(imported.sort()).toEqual(files.sort())
})
