import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import SignOutButton from '../SignOut'
import {AuthUserContext} from '../Session'
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: '#ffffff'
  },
  title: {
    flexGrow: 1
  },
  divider: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}))

const Navigation = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React + Firebase
          </Typography>
          <AuthUserContext.Consumer>
            {(authUser) =>
              authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
          </AuthUserContext.Consumer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const NavigationAuth = () => {
  const classes = useStyles()
  return (
    <>
      <Button
        component={Link}
        to={ROUTES.LANDING}
        className={classes.menuButton}>
        Landing
      </Button>
      <Button component={Link} to={ROUTES.HOME} className={classes.menuButton}>
        Home
      </Button>
      <div className={classes.divider}>|</div>
      <Button
        component={Link}
        to={ROUTES.ACCOUNT}
        className={classes.menuButton}>
        Account
      </Button>
      <Button component={Link} to={ROUTES.ADMIN} className={classes.menuButton}>
        Admin
      </Button>
      <div className={classes.divider}>|</div>
      <Button
        component={Link}
        to={ROUTES.SIGN_IN}
        className={classes.menuButton}>
        Sign IN
      </Button>
      <Button
        component={Link}
        to={ROUTES.SIGN_UP}
        className={classes.menuButton}>
        Sign UP
      </Button>
      <SignOutButton />
    </>
  )
}

const NavigationNonAuth = () => {
  const classes = useStyles()
  return (
    <>
      <Button
        component={Link}
        to={ROUTES.LANDING}
        className={classes.menuButton}>
        Landing
      </Button>
      <Button
        component={Link}
        to={ROUTES.SIGN_IN}
        className={classes.menuButton}>
        Sign IN
      </Button>
    </>
  )
}

export default Navigation
