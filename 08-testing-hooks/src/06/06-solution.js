import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch, useSelector } from './react-redux'

const fetchData = (dispatch) => window.fetch('/api/data').then(({ data }) => dispatch({ type: 'DATA_SUCCESS', data }))
const dataSelector = (state) => state.api13.data

const Main = () => {
  const { data } = useSelector(dataSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData)
  }, [dispatch])

  return !data ? ('Loading...') : (
    <ul>{data.map(({ id }) => <li key={id}>{id}</li>)}</ul>
  )
}

export default Main