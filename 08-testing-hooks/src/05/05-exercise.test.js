import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils"
import Main from './05-exercise'

let div
beforeEach(() => {
  div = document.createElement('div')
  document.body.appendChild(div)
})
afterEach(() => {
  unmountComponentAtNode(div)
  div.remove()
})

test('default color', () => {
  act(() => {
    render(<Main />, div)
  })
  expect(div.querySelector('.Main-box').style.backgroundColor).toBe('orange')
})

test('modified color', () => {
  // ???
})
