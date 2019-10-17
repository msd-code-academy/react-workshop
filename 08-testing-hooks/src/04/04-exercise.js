import React, { useState } from 'react'

const Main = () => {
  const defaultColor = 'orange'

  const [color, setColor] = useState('')
  const handleChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className="Main">
      <h3>Libraries for testing</h3>
      <input placeholder={defaultColor} value={color} onChange={handleChange} />
      <div className="Main-box" style={{ backgroundColor: color || defaultColor }} />
    </div>
  )
}

export default Main
