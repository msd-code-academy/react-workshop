import React, {Component} from 'react'
import {compose} from 'recompose'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

import {withFirebase} from '../Firebase'

const styles = {
  root: {
    margin: 0,
    minWidth: 400,
    maxHeight: '100vh'
  },
  card: {
    padding: 20,
    marginBottom: 20
  }
}

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({loading: true})

    this.props.firebase.users().on('value', (snapshot) => {
      const usersObject = snapshot.val()
      const userList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key
      }))

      this.setState({
        users: userList,
        loading: false
      })
    })
  }

  componentWillUnmount() {
    this.props.firebase.users().off()
  }

  render() {
    const {users, loading} = this.state
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
          Admin
        </Typography>
        {loading && <div>Loading...</div>}
        <UserList users={users} classes={classes} />
      </div>
    )
  }
}

const UserList = ({users, classes}) =>
  users.map((user) => (
    <Card key={user.uid} className={classes.card}>
      <div>
        <strong>ID:</strong> {user.uid}
      </div>
      <div>
        <strong>E-Mail:</strong> {user.email}
      </div>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
    </Card>
  ))

export default compose(
  withFirebase,
  withStyles(styles)
)(AdminPage)
