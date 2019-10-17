import React, { useState, useEffect } from 'react'

const Main = () => {
  const [color, setColor] = useState('orange')

  // useEffect(() => {
  //   window.fetch('https://jsonplaceholder.typicode.com/users/1').then((data) => {
  //     setColor('green')
  //   })
  // }, [])

  useEffect(() => {
    const fetchPromise = window.fetch('https://jsonplaceholder.typicode.com/users/1')
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(reject, 1000)
    })
    Promise.race([fetchPromise, timeoutPromise]).then((data) => {
      setColor('green')
    }).catch(() => {
      setColor('red')
    })
  }, [])

  return (
    <div className="Main">
      <h3>Fetch and timeout</h3>
      <div className="Main-box" style={{ backgroundColor: color }} />
    </div>
  )
}

export default Main
