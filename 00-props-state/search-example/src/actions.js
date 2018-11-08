const fakeRes1 = [{title: 'Result 1', body: 'Long Description', more: 'abc'}]
const fakeRes2 = [{title: 'Result 1', body: 'Description D', more: 'def'}, {title: 'Result 2', body: 'Description E'}]
const getHash = () => window.decodeURI(window.location.hash.substr(1))

export const setRoute = route => ({type: 'SET_ROUTE', route})
export const setQuery = query => ({type: 'SET_QUERY', query})
export const setResults = results => ({type: 'SET_RESULTS', results})

export const setRouteAndSubmit = route => dispatch => {
  window.location.hash = route
  dispatch(setRoute(route))
  dispatch(setResults([]))
  setTimeout(() => {
    dispatch(setResults(Math.random() < 0.5 ? fakeRes1 : fakeRes2))},
    500
  )
}

export const loadRoute = () => dispatch => {
  const hash = getHash()
  dispatch(setRouteAndSubmit(hash))
  dispatch(setQuery(hash))
}
