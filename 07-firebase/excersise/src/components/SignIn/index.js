import React from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import {SignUpLink} from '../SignUp'
import {PasswordForgetLink} from '../PasswordForget'
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../constants/routes'

const styles = {
  card: {
    minWidth: 300,
    padding: 20
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const SignInPage = ({classes}) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </CardContent>
  </Card>
)

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }

  // Follow onSubmit implementation in SignUp form.
  onSubmit = (event) => {}

  // Same logic like for SignUp form.
  onChange = (event) => {}

  render() {
    const {email, password, error} = this.state
    const {classes} = this.props
    const isInvalid = password === '' || email === ''
    return (
      <form onSubmit={this.onSubmit} className={classes.form}>
        {/* Add Text fields for email and password. */}

        {/* ------------------------ */}
        <CardActions>
          <Button disabled={isInvalid} type="submit" color="primary">
            Sign In
          </Button>
        </CardActions>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
  withStyles(styles)
)(SignInFormBase)

export default withStyles(styles)(SignInPage)

export {SignInForm}
