import React, { useEffect } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils"
import Main, { validateColor, useColor } from './03-solution'

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

  test('default value', () => {
    const Test = ({ defaultColor }) => {
      const { rawColor, validColor, setColor } = useColor(defaultColor)
      return validColor
    }
    act(() => {
      render(<Test defaultColor="black" />, div)
      render(<Test defaultColor="orange" />, div)
    })
    expect(div.textContent).toBe('black')
  })

  test('modify value', () => {
    const Test = ({ color = '' }) => {
      const { rawColor, validColor, setColor } = useColor('gg')
      useEffect(() => setColor(color), [color])
      return `${rawColor}/${validColor}`
    }
    act(() => {
      render(<Test />, div)
    })
    expect(div.textContent).toBe('/gg')

    act(() => {
      render(<Test color="red" />, div)
    })
    expect(div.textContent).toBe('red/red')

    act(() => {
      render(<Test color="orang" />, div)
    })
    expect(div.textContent).toBe('orang/red')
  })
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
    expect(box.style.color).toBe('blue')
  });

  test('modified colors', () => {
    act(() => { render(<Main />, div) })

    const [input1, input2] = div.querySelectorAll('input')
    const box = div.querySelector('.Main-box')

    act(() => {
      modify(input1, 'gree')
      modify(input2, 'red')
    })

    expect(input1).toHaveProperty('value', 'gree')
    expect(input2).toHaveProperty('value', 'red')
    expect(box.style.backgroundColor).toBe('orange')
    expect(box.style.color).toBe('red')

    act(() => {
      modify(input1, 'green')
      modify(input2, 'yellow')
    })

    expect(input1).toHaveProperty('value', 'green')
    expect(input2).toHaveProperty('value', 'yellow')
    expect(box.style.backgroundColor).toBe('green')
    expect(box.style.color).toBe('yellow')
  })
})
