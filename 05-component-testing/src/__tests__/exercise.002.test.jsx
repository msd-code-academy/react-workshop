import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import chai, {expect} from 'chai'
import sinon from 'sinon'

import chaiSinon from 'sinon-chai'

import Movie from '../Movie'

chai.use(chaiSinon)

describe('Exercise 002', () => {
  const baseProps = {
    title: 'New Movie',
    id: 12,
    includedInWishlist: false,
    onClick: () => {}
  }

  afterEach(() => {
    cleanup()
  })

  it('should handle add wishlist item', () => {
    // const props = {
    //   ...baseProps,
    //   onClick: sinon.spy()
    // }

    // Render component
    // Fire click event
    // Check if the event was called with param id of the movie
  })
})
