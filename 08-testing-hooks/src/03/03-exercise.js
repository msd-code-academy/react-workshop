import React, { useState } from 'react'

export const validateColor = (value) => {
  const div = document.createElement('div')
  div.style.color = value
  return !!div.style.color
}
export const useColor = (defaultColor) => {
  const [rawColor, setRawColor] = useState('')
  const [validColor, setValidColor] = useState(defaultColor)

  const setColor = (value) => {
    setRawColor(value)
    if (!value) {
      setValidColor(defaultColor)
    } else if (validateColor(value)) {
      setValidColor(value)
    }
  }

  return { rawColor, validColor, setColor }
}

const Main = () => {
  const defaultColor = 'orange'

  // TODO: replace with the custom hook
  const [inputColor, setInputColor] = useState('')
  const [validColor, setValidColor] = useState(defaultColor)
  const handleChange = (event) => {
    const { value } = event.target
    setInputColor(value)
    if (!value) {
      setValidColor(defaultColor)
    } else if (validateColor(value)) {
      setValidColor(value)
    }
  }
  // Tip:
  // const { rawColor, validColor, setColor } = useColor()

  return (
    <div className="Main">
      <h3>Custom Hooks</h3>
      <input placeholder={defaultColor} value={inputColor} onChange={handleChange} />
      <div className="Main-box" style={{ backgroundColor: validColor }}>
        {validColor}
      </div>
    </div>
  )
}

export default Main
