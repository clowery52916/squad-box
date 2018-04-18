import React, {Component} from 'react';

import {Grid, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const TextContainer = styled.div`
  font-family: cursive;
  color: inherit;
`

const SemanticGrid = () => (<Grid celled="celled" stackable="stackable">
  <Grid.Row>

    <Grid.Column computer={13}>
      <TextContainer>
      <h1>Squad Goals</h1>

      <h3>Love the life you live</h3>
      <br/>
      <p>Safe space for kids of all ages! As long as your under 18!!.</p>
      <p>Wafer wafer lemon drops lemon drops. Bear claw wafer oat cake wafer jelly-o sweet. Sweet roll I love cupcake. I love apple pie carrot cake sugar plum muffin bear claw I love I love. I love lemon drops gingerbread chocolate oat cake I love muffin. Lollipop sugar plum jelly beans I love. Macaroon I love gingerbread dessert. Chocolate bar dessert croissant bear claw pastry candy canes I love gummi bears.</p>
      </TextContainer>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column computer={3}>
      <Image src='https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=650bd0410a4789c650e84a7f628336f0&auto=format&fit=crop&w=1200&q=600'/>
    </Grid.Column>
    <Grid.Column computer={10}>
      <TextContainer>
      <h1>See Your Friends!</h1>
      <p>You could see there was text coming out of her eyes, text coming out of her wherever. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you know, shot. You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?</p>
      </TextContainer>
    </Grid.Column>
    <Grid.Column computer={3}>
      <Image src='https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27aecaf25f31cf45d2de3ad774dad6ed&auto=format&fit=crop&w=400&q=200'/>
    </Grid.Column>
    <Grid.Column computer={3}>
      <Image src='https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=891fe858de061305b9d58986c3970d60&auto=format&fit=crop&w=400&q=200'/>
    </Grid.Column>
    <Grid.Column computer={3}>
      <Image src='https://images.unsplash.com/photo-1501238295340-c810d3c156d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6aa5a477df99c1cf12588ca8a0b03162&auto=format&fit=crop&w=400&q=200'/>

    </Grid.Column>
  </Grid.Row>
</Grid>)

export default SemanticGrid
