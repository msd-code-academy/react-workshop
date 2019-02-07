import React from 'react'
import {Button} from './../lib'

const Example = () => (
  <div className="Selector">
    Example 03: "cascade" style sheets
    <Button>Default</Button>
    <Button className="Selector__buttonWannaBe">Why not changed</Button>
    <Button className="Selector__buttonModified">But fine here</Button>
  </div>
)

export default {
  id: '03',
  title: 'Selector specificity',
  component: Example,
}
