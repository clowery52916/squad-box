import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { showAll, showCompleted, showCurrent } from '../../actions/visiblity.actions'

const ButtonExampleAnimated = (props) => {
  return (
  <div>
    <Button action>
      <Button.Content visible onClick={props.showAll}>Show All Your Posts</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
    {/* <Button visiblity>
      <Button.Content visible onClick={props.showCompleted}>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
     <Button animated>
        <Button.Content visible onClick={props.showCurrent}>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button> */}
  </div>
)
}

export default connect(null, { showAll, showCompleted, showCurrent })(ButtonExampleAnimated)
