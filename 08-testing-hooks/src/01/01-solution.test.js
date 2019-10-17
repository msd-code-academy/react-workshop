import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils"
import Main from './01-solution'

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
  act(() => {
    render(<Main />, div)
  })
  const input = div.querySelector('input')
  expect(input).toHaveProperty('value', '')
  act(() => {
    // input.value = "green" does not work in React 16, see https://stackoverflow.com/a/46012210/1176601
    const inputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
    inputValueSetter.call(input, 'green');
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })
  expect(input).toHaveProperty('value', 'green')
  expect(div.querySelector('.Main-box').style.backgroundColor).toBe('green')
})
