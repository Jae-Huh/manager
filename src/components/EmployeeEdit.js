import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeClear } from '../actions'

class EmployeeEdit extends React.Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  componentWillUnmount() {
    this.props.employeeClear()
  }

  onButtonPress() {
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeClear })(EmployeeEdit)
