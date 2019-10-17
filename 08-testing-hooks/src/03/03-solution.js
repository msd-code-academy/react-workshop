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
  const { rawColor: bgInput, validColor: bgColor, setColor: bgSet } = useColor('orange')
  const { rawColor: fgInput, validColor: fgColor, setColor: fgSet } = useColor('blue')
  const bgChange = (event) => { bgSet(event.target.value) }
  const fgChange = (event) => { fgSet(event.target.value) }

  return (
    <div className="Main">
      <h3>Custom Hooks</h3>
      <input placeholder="background" value={bgInput} onChange={bgChange} />
      <input placeholder="foreground" value={fgInput} onChange={fgChange} />
      <div className="Main-box" style={{ backgroundColor: bgColor, color: fgColor }}>
        {bgColor}/{fgColor}
      </div>
    </div>
  )
}

export default Main
