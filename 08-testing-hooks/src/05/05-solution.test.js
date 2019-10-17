import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils"
import Main from './05-solution'

jest.useFakeTimers()

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

test('success', async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({ id: 0, name: 'John' })
    })
  );

  await act(async () => {
    render(<Main />, div)
  })
  expect(div.querySelector('.Main-box').style.backgroundColor).toBe('green')

  global.fetch.mockRestore()
})

test('timeout', async () => {
  await act(async () => {
    render(<Main />, div)
    jest.advanceTimersByTime(1000)
  })
  expect(div.querySelector('.Main-box').style.backgroundColor).toBe('red')
})
