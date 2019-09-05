import React from 'react'

const FirebaseContext = React.createContext(null)

// Implement FirebaseContext.Consumer which then pass firebase instance to Component.
export const withFirebase = (Component) => (props) => <div />

export default FirebaseContext
