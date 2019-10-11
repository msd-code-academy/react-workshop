import React, { useState } from 'react'

const Main = () => {
  const defaultColor = 'orange'

  const [color, setColor] = useState('')
  const handleHange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className="Main">
      <h3>Adding State</h3>
      <input placeholder={defaultColor} value={color} onChange={handleHange} />
      <div className="Main-box" style={{ backgroundColor: color || defaultColor }} />
    </div>
  )
}

export default Main
