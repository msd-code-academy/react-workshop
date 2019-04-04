import React from 'react'
import {render, cleanup, prettyDOM, fireEvent} from 'react-testing-library'

describe.skip('Playground', () => {
  afterEach(() => {
    cleanup()
  })

  const ByLabelText = () => (
    <div>
      <label htmlFor="username-input">Username</label>
      <input id="username-input" />

      <label id="username-label">Username</label>
      <input aria-labelledby="username-label" />

      <label>Username <input /></label>
    </div>
  )

  it('ByLabelText', () => {
    // const {} = render(<ByLabelText />)

    // console.log(prettyDOM(('Username')))
  })

  const ByPlaceholderText = () => (
    <div>
      <input placeholder="Username" />
    </div>
  )

  it('ByPlaceholderText', () => {
    // const {} = render(<ByPlaceholderText />)

    // console.log(prettyDOM(('Username')))
  })

  const ByText = () => (
    <div>
      <a href="/about">About ℹ️</a>
      <input type="submit" value="Send data" />
    </div>
  )

  it('ByText', () => {
    // const {} = render(<ByPlaceholderText />)

    // console.log(prettyDOM((/about/i)))
  })

  const ByAltText = () => (
    <div>
      <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
    </div>
  )

  it('ByAltText', () => {
    // const {} = render(<ByPlaceholderText />)

    // console.log(prettyDOM((/incredibles.*png$/i)))
  })

  const ByTitle = () => (
    <div>
      <span title="Delete" id="2"></span>
      <svg>
        <title>Close</title>
        <g><path /></g>
      </svg>
    </div>
  )

  it('ByTitle', () => {
    // const {} = render(<ByPlaceholderText />)

    // console.log(prettyDOM(('Delete')))
  })

  const ByDisplayValue = () => (
    <div>
      <input type="text" id="lastName" value="Value" />
      <textarea id="messageTextArea">Value</textarea>
      <select id="state-select" data-testid="state">
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option selected value="AK">Value</option>
        <option value="AZ">Arizona</option>
      </select>
    </div>
  )

  it('ByDisplayValue', () => {
    // const {} = render(<ByPlaceholderText />)

    // console.log(prettyDOM(('Value')))
  })

  const ByRole = () => (
    <div>
      <div role="dialog">...</div>
    </div>
  )

  it('ByRole', () => {
    // const {} = render(<ByPlaceholderText />)

    // console.log(prettyDOM(('dialog')))
  })

  const ByTestId = () => (
    <div>
      <input data-testid="username-input" />
    </div>
  )

  it('ByTestId', () => {
    // const {} = render(<ByPlaceholderText />)

    // console.log(prettyDOM(('dialog')))
  })
})
