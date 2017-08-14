import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LogInForm from './components/LogInForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    // sceneStyle in Router component applies to all scenes
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LogInForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Scene>
    </Router>
  )
}

export default RouterComponent
