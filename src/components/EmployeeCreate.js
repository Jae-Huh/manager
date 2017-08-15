import React from 'react'
import { connect } from 'react-redux'

import { Card, CardSection, Button } from './common'
import { employeeUpdate, employeeCreate } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends React.Component {
  onButtonPress() {
    const { name, phone, shift } = this.props
    // shift: shift || 'Monday' is needed to save the initial value to the store because if the Picker is not touched, the value will remain an empty string.
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)
