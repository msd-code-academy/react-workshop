import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import PasswordForget from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'

import * as ROUTES from '../../constants/routes'
import {withAuthentication} from '../Session'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#f5f5f5'
  },
  test: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.root}>
        <Navigation />
        <div className={classes.test}>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </div>
    </Router>
  )
}

export default withAuthentication(App)
