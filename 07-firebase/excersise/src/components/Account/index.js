import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import {PasswordForgetForm} from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import {AuthUserContext, withAuthorization} from '../Session'

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    padding: 20
  }
}))

const AccountPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Account
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <AuthUserContext.Consumer>
            {(authUser) => (
              <div>
                <Typography variant="h4" gutterBottom>
                  {authUser.email}
                </Typography>
                <PasswordForgetForm />
                <PasswordChangeForm />
              </div>
            )}
          </AuthUserContext.Consumer>
        </CardContent>
      </Card>
    </div>
  )
}

const condition = (authUser) => authUser !== null

export default withAuthorization(condition)(AccountPage)
