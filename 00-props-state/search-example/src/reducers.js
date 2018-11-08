const initialState = {route: '', query: '', results: []}

const reducer = (state = initialState, action) => {
  const {type, route, query, results} = action
  switch (type) {
    case 'SET_ROUTE': return {...state, route}
    case 'SET_QUERY': return {...state, query}
    case 'SET_RESULTS': return {...state, results}
    default: return state
  }
}

export default reducer
