import React, { Component } from 'react';

import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const SemanticGrid = () => (
  <Grid celled stackable>
    <Grid.Row>
      <Grid.Column computer={3}>
      </Grid.Column>
      <Grid.Column computer={13}>
        <h1>Made in Atlanta</h1>
        <Link to={`/cities/1`}><h3>See the city.</h3></Link>
        <p>Lorem Ispum is a choke artist. It chokes! I write the best placeholder text, and
I'm the biggest developer on the web by far... While that's mock-ups and this is
politics, are they really so different? I'm speaking with myself, number one,
because I have a very good brain and I've said a lot of things. Lorem Ispum is a
choke artist. It chokes! You’re disgusting.</p>
<p>I think my strongest asset maybe by far is my temperament. I have a
placeholding temperament. I’m the best thing that ever happened to placeholder
text. You have so many different things placeholder text has to be able to do,
and I don't believe Lorem Ipsum has the stamina.</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column computer={3}>
        <Image src='https://images.unsplash.com/photo-1504889100631-d557a48f0d30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e0bbe98f30034814a40c517f9d261b9&auto=format&fit=crop&w=638&q=80' />
      </Grid.Column>
      <Grid.Column computer={10}>
        <h1>See the City</h1>
        <p>You could see there was text coming out of her eyes, text coming out of her
wherever. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's
being, you know, shot. You have so many different things placeholder text has to
be able to do, and I don't believe Lorem Ipsum has the stamina. I don't think
anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it
was. It could be Russia, but it could also be China. It could also be lots of
other people. It also could be some wordsmith sitting on their bed that weights
400 pounds. Ok?</p>
      </Grid.Column>
      <Grid.Column computer={3}>
        <Image src='https://images.unsplash.com/photo-1506834032040-36f9dcabe7ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7a9c1961a9020d95af82bd7e10dbf93&auto=format&fit=crop&w=500&q=60' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SemanticGrid
