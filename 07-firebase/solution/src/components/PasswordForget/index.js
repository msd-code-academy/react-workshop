import React, {Component} from 'react'
import {Link as RouterLink} from 'react-router-dom'
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
    maxWidth: 345,
    padding: 20
  },
  textField: {
    width: '100%'
  }
}

const PasswordForgetPage = ({classes}) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <PasswordForgetForm />
    </CardContent>
  </Card>
)

const INITIAL_STATE = {
  email: '',
  error: null
}

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = {...INITIAL_STATE}
  }

  onSubmit = (event) => {
    const {email} = this.state

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({...INITIAL_STATE})
      })
      .catch((error) => {
        this.setState({error})
      })
    event.preventDefault()
  }
  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {email, error} = this.state
    const {classes} = this.props
    const isInvalid = email === ''
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          id="standard-required"
          label="Email"
          name="email"
          value={email}
          className={classes.textField}
          margin="normal"
          onChange={this.onChange}
        />
        <CardActions>
          <Button disabled={isInvalid} type="submit" color="primary">
            Reset My Password
          </Button>
        </CardActions>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const PasswordForgetLink = () => (
  <Link component={RouterLink} to={ROUTES.PASSWORD_FORGET}>
    Forget Password?
  </Link>
)

const PasswordForgetForm = compose(
  withFirebase,
  withStyles(styles)
)(PasswordForgetFormBase)

export default withStyles(styles)(PasswordForgetPage)

export {PasswordForgetForm, PasswordForgetLink}
