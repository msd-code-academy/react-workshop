import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Main from './04-solution'

test('default color', () => {
  const { container: div } = render(<Main />)
  expect(div.querySelector('.Main-box').style.backgroundColor).toBe('orange')
})

test('modified color', () => {
  const { container: div } = render(<Main />)
  const input = div.querySelector('input')
  expect(input).toHaveProperty('value', '')

  fireEvent.change(input, { target: { value: 'green' } })
  expect(input).toHaveProperty('value', 'green')
  expect(div.querySelector('.Main-box').style.backgroundColor).toBe('green')
})
