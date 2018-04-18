import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Users</Button.Content>
      <Button.Content visible>
        <Icon name='person' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>
        Sign-up for a Pro account
      </Button.Content>
    </Button>
  </div>
)

export default ButtonExampleAnimated
