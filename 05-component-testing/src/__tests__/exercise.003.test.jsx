import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import sinon from 'sinon'
import chai, {expect} from 'chai'
import chaiDom from 'chai-dom'
import chaiSinon from 'sinon-chai'

import * as Fetcher from '../Fetcher'

import { MovieList } from '../MovieList';

chai.use(chaiDom)
chai.use(chaiSinon)

describe('Exercise 003', () => {
  const sandbox = sinon.createSandbox()
  const baseProps = {
    wishlist: [],
    addWishlistItem: () => {}
  }

  let fetcherStub

  beforeEach(() => {
    fetcherStub = sandbox.stub(Fetcher, 'default').callsFake((props) => props.children({
      data: {
        results: [{
          title: 'Movie title',
          id: 2,
        }]
      }
    }))
  })

  afterEach(() => {
    sandbox.restore()
    cleanup()
  })

  it('should display movie with data', () => {
    // Render component
    // Check if there is one movie
    // Check if the title is matching
  })


  // STUBS
  it('should display loading when fetching data', () => {
    // fetcherStub.callsFake((props) => props.children({loading: true}))

    // Render component
    // Check if there is loading
  })

  it('should NOT display loading when data are already fetched', () => {
    // Stub fetcher with appropriate loading state
    // Render component
    // Check that the loading is not displayed
  })

  it('should display movie not in wishlist by default', () => {
    // Render component
    // Check if the movie has black heart
  })

  it('should display movie in wishlist', () => {
    // Define props
    // Render component
    // Check if the movie has red heart
  })

  it('should handle add wishlist item', () => {
    // Define props with spy
    // Render component
    // Fire click event
    // Check if the event was called with param id of the movie
  })
})
