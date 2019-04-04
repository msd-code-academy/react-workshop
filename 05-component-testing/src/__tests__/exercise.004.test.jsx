import React from 'react'
import {render, cleanup, waitForElement, fireEvent} from 'react-testing-library'
import {MemoryRouter} from 'react-router'
import chai, {expect} from 'chai'
import chaiDom from 'chai-dom'

import App from '../App'

chai.use(chaiDom)

describe('Exercise 004', () => {
  afterEach(() => {
    cleanup()
  })

  it('should by able to add movie to wishlist', async () => {
    // Render component - <MemoryRouter initialEntries={['/']}><App /></MemoryRouter>
    // Wait for wishlist button to be displayed - await waitForElement(() => find the element)
    // Check if the button has black heart
    // Click on the button
    // Check if the button has red heart
  })
})
