import React from 'react'

const Main = () => {
  const defaultColor = 'orange'

  return (
    <div className="Main">
      <h3>Adding State</h3>
      <input placeholder={defaultColor} />
      <div className="Main-box" style={{ backgroundColor: defaultColor }} />
    </div>
  )
}

export default Main
