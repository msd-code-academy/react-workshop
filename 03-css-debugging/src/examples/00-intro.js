import React from 'react'
import {css, cx} from 'emotion'

const clsPrefix = 'Intro'
const coin = 0.5 // Math.random()

const randomStyle = css`color: orange;`
const randomName = cx({
  first: coin < 0.6,
  second: coin > 0.4
})
const niceName = cx(`${clsPrefix}__niceName`, css`color: green;`)

const Example = () => (
  <div className={clsPrefix}>
    Example 00: browser inspector + class names
    <div className={randomStyle}>Lorem ipsum</div>
    <div className={randomName}>Lorem ipsum</div>
    <div className={niceName}>Lorem ipsum</div>
  </div>
)

export default {
  id: '00',
  title: 'Intro',
  component: Example,
}
