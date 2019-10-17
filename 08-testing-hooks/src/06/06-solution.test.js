import React from 'react'
import { render } from '@testing-library/react'
import Main from './06-solution'

// jest.mock('react-redux', () => ({
jest.mock('./react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => ({ data: [{ id: 2 }] }),
  // useSelector: (selectorFn) => {
  //   switch (selectorFn.name) {
  //     case 'dataSelector':
  //       return { data: [{ id: 2 }] }
  //   }
  // },
  connect: () => (Component) => Component
}))

test('Main', () => {
  const { container } = render(<Main />)
  expect(container.textContent).toBe('2')
})