import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LogInForm from './components/LogInForm'

const RouterComponent = () => {
  return (
    // sceneStyle in Router component applies to all scenes
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LogInForm} title="Please Login" />
    </Router>
  )
}

export default RouterComponent
