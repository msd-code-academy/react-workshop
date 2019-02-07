import React from 'react'

const boxes = Array.from(Array(50)).map((_, i) => <div>{i}</div>)
const Example = () => (
  <div className="Responsive">
    {boxes}
  </div>
)

export default {
  id: '04',
  title: 'Responsive design',
  component: Example,
}
