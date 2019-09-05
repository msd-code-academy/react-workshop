import React from 'react'
import Typography from '@material-ui/core/Typography'

import {withAuthorization} from '../Session'

const HomePage = () => (
  <div>
    <Typography variant="h5" gutterBottom>
      Home Page
    </Typography>
    <Typography variant="body1" gutterBottom>
      The Home page is accesible by every <u>signed in</u> user.
    </Typography>
  </div>
)

const condition = (authUser) => authUser !== null

export default withAuthorization(condition)(HomePage)
