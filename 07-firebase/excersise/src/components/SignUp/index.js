import React, {Component} from 'react'
import {Link as RouterLink, withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import Link from '@material-ui/core/Link'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

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

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

const SignUpPage = ({classes}) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <SignUpForm />
    </CardContent>
  </Card>
)

class SignUpFormBase extends Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }

  onSubmit = (event) => {
    const {username, email, passwordOne} = this.state
    // Call authentication interface.

    // -----------------------------
    event.preventDefault()
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {username, email, passwordOne, passwordTwo, error} = this.state
    const {classes} = this.props
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''
    return (
      <form onSubmit={this.onSubmit} className={classes.form}>
        <TextField
          id="username-input"
          label="Full name"
          name="username"
          value={username}
          margin="normal"
          onChange={this.onChange}
        />
        {/* Add another Text fields. */}

        {/* ------------------------ */}
        <CardActions>
          <Button disabled={isInvalid} type="submit" color="primary">
            Sign Up
          </Button>
        </CardActions>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account?{' '}
    <Link component={RouterLink} to={ROUTES.SIGN_UP}>
      Sign Up
    </Link>
  </p>
)

const SignUpForm = compose(
  withRouter,
  withFirebase,
  withStyles(styles)
)(SignUpFormBase)

export default withStyles(styles)(SignUpPage)

export {SignUpForm, SignUpLink}
