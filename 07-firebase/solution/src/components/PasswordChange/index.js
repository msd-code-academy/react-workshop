import React, {Component} from 'react'
import {compose} from 'recompose'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'

import {withFirebase} from '../Firebase'

const styles = {
  textField: {
    width: '100%'
  }
}

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {...INITIAL_STATE}
  }

  onSubmit = (event) => {
    const {passwordOne} = this.state

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const {passwordOne, passwordTwo, error} = this.state
    const {classes} = this.props
    const isInvalid = passwordOne !== passwordTwo || passwordOne === ''
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          id="passwordOne"
          name="passwordOne"
          value={passwordOne}
          label="New Password"
          margin="normal"
          type="password"
          onChange={this.onChange}
          className={classes.textField}
        />
        <TextField
          id="passwordTwo"
          name="passwordTwo"
          value={passwordTwo}
          label="Confirm New Password"
          margin="normal"
          type="password"
          onChange={this.onChange}
          className={classes.textField}
        />
        <CardActions>
          <Button disabled={isInvalid} type="submit">
            Change My Password
          </Button>
        </CardActions>
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default compose(
  withFirebase,
  withStyles(styles)
)(PasswordChangeForm)
