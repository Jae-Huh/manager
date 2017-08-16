import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Communications from 'react-native-communications'

import { Card, CardSection, Button, Confirm } from './common'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeClear } from '../actions'

class EmployeeEdit extends React.Component {
  state = { showModal: false }

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

  onTextPress() {
    const { name, phone, shift } = this.props
    Communications.text(phone, `Hello, ${name}! Your upcoming shift is on ${shift}.`)
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

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeClear })(EmployeeEdit)
