import React from 'react'
import { connect } from 'react-redux'

import { emailChanged } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class LogInForm extends React.Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  }
}

export default connect(mapStateToProps, { emailChanged })(LogInForm)
