import React from 'react'
import {compose} from 'recompose'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

import * as ROUTES from '../../constants/routes'
import {withFirebase} from '../Firebase'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#ffffff'
  }
}))

const SignOutButton = ({firebase, history}) => {
  const classes = useStyles()

  const onSignOut = () => {
    firebase.doSignOut()
    history.push(ROUTES.LANDING)
  }

  return (
    <Button onClick={onSignOut} className={classes.menuButton}>
      Sign Out
    </Button>
  )
}

export default compose(
  withRouter,
  withFirebase
)(SignOutButton)
