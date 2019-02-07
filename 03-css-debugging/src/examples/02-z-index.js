import React from 'react'

const Example = () => (
  <div className="Z">
    <div className="Z__shouldBeOnTop">
      Example 02: why am I not on top?
    </div>
    <div className="Z__evilStackingContext">
      Lorem ipsum
    </div>
  </div>
)

export default {
  id: '02',
  title: 'Z-index',
  component: Example,
}
