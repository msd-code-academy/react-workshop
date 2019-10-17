import React, { useState } from 'react'

export const validateColor = (value) => {
  const div = document.createElement('div')
  div.style.color = value
  return !!div.style.color
}

const Main = () => {
  const defaultColor = 'orange'

  const [inputColor, setInputColor] = useState('')
  const [validColor, setValidColor] = useState(defaultColor)
  const handleHange = (event) => {
    const { value } = event.target
    setInputColor(value)
    if (!value) {
      setValidColor(defaultColor)
    } else if (validateColor(value)) {
      setValidColor(value)
    }
  }

  return (
    <div className="Main">
      <h3>Adding State</h3>
      <input placeholder={defaultColor} value={inputColor} onChange={handleHange} />
      <div className="Main-box" style={{ backgroundColor: validColor }}>
        {validColor}
      </div>
    </div>
  )
}

export default Main
