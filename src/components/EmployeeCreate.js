import React from 'react'

import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jae"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="021 000 0000"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate
