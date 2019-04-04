import React from 'react'
import {render, cleanup} from 'react-testing-library'
import chai, {expect} from 'chai'

import chaiDom from 'chai-dom'

import Movie from '../Movie'

chai.use(chaiDom)

describe('Exercise 001', () => {
  const baseProps = {
    title: 'New Movie',
    id: 12,
    includedInWishlist: false,
    onClick: () => {}
  }

  afterEach(() => {
    cleanup()
  })

  it('should display title', () => {
    // Render component with baseProps
    // Check if title is matching
  })

  it('should NOT display image when not available', () => {
    // Render component with baseProps
    // Check if there is no image
  })

  it('should display image with src when available', () => {
    // const props = {
    //   ...baseProps,
    //   image: 'image'
    // }

    // Render component with props
    // Check image with attribute src
  })

  it('should display movie not in wishlist by default', () => {
    // Render component  with baseProps
    // Check if the movie has black heart
  })

  it('should display movie in wishlist', () => {
    // Define props
    // Render component with props
    // Check if the movie has red heart
  })
})
