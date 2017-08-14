import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LogInForm from './components/LogInForm'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={LogInForm} title="Please Login" />
    </Router>
  )
}

export default RouterComponent
