import React, { useState, useEffect } from 'react';

const prefixes = Array.from(Array(8)).map((_, i) => `0${i + 1}`)
const links = prefixes.map((i) =>
  <li key={i}>
    {i}: <a href={`#${i}-exercise`} id={`${i}-exercise`}>exercise</a>
    <br /><a href={`#${i}-solution`} id={`${i}-solution`}>solution</a>
  </li>
)

const components = {}
prefixes.filter((i) => i <= '01').forEach((i) => {
  import(`./${i}/${i}-exercise`).then((imported) => {
    components[`${i}-exercise`] = imported.default
  })
  import(`./${i}/${i}-solution`).then((imported) => {
    components[`${i}-solution`] = imported.default
  })
})

const useHashRouter = () => {
  const [route, setRoute] = useState()

  useEffect(() => {
    const handleNavigation = () => {
      setRoute(window.location.hash.substr(1))
    }
    setTimeout(handleNavigation, 100)
    window.addEventListener('hashchange', handleNavigation)
    return () => window.removeEventListener('hashchange', handleNavigation)
  }, [])

  return route
}

function App() {
  const route = useHashRouter()
  const Component = components[route]

  return (
    <div className="App">
      <ul className="App-header">
        {links}
      </ul>
      {Component && <Component />}
    </div>
  );
}

export default App;
