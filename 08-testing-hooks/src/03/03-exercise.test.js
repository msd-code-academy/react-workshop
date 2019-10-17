import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils"
import Main, { validateColor, useColor } from './03-exercise'

describe('useColor', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    document.body.appendChild(div)
  })
  afterEach(() => {
    unmountComponentAtNode(div)
    div.remove()
  })

  test('default value', () => { })
  test('modify value', () => { })
})

describe('validateColor', () => {
  test('some colors', () => {
    expect(validateColor('')).toBeFalsy()
    expect(validateColor('orang')).toBeFalsy()
    expect(validateColor('abc')).toBeFalsy()

    expect(validateColor('orange')).toBeTruthy()
    expect(validateColor('green')).toBeTruthy()
    expect(validateColor('#abc')).toBeTruthy()
  })
})

// input.value = "green" does not work in React 16, see https://stackoverflow.com/a/46012210/1176601
const inputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
const modify = (input, value) => {
  inputValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }))
}

describe('Main', () => {
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
    act(() => { render(<Main />, div) })

    const box = div.querySelector('.Main-box')
    expect(box.style.backgroundColor).toBe('orange')
    expect(box.textContent).toBe('orange')
  });

  test('modified color', () => {
    act(() => { render(<Main />, div) })

    const input = div.querySelector('input')
    const box = div.querySelector('.Main-box')
    expect(input).toHaveProperty('value', '')

    act(() => { modify(input, 'gree') })

    expect(input).toHaveProperty('value', 'gree')
    expect(box.style.backgroundColor).toBe('orange')
    expect(box.textContent).toBe('orange')

    act(() => { modify(input, 'green') })

    expect(input).toHaveProperty('value', 'green')
    expect(box.style.backgroundColor).toBe('green')
    expect(box.textContent).toBe('green')

    act(() => { modify(input, 'g') })

    expect(input).toHaveProperty('value', 'g')
    expect(box.style.backgroundColor).toBe('green')
    expect(box.textContent).toBe('green')

    act(() => { modify(input, '') })

    expect(input).toHaveProperty('value', '')
    expect(box.style.backgroundColor).toBe('orange')
    expect(box.textContent).toBe('orange')
  })
})
