import React, { useState } from 'react'

export const validateColor = () => false

const Main = () => {
  const defaultColor = 'orange'

  const [inputColor, setInputColor] = useState('')
  const handleHange = (event) => {
    const { value } = event.target
    setInputColor(value)
    if (validateColor(value)) {
      // TODO
    }
  }

  return (
    <div className="Main">
      <h3>Adding State</h3>
      <input placeholder={defaultColor} value={inputColor} onChange={handleHange} />
      <div className="Main-box" style={{ backgroundColor: inputColor || defaultColor }}>
        {'orange '}
      </div>
    </div>
  )
}

export default Main
