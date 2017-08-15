import React from 'react'
import { connect } from 'react-redux'

import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends React.Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect()(EmployeeEdit)
