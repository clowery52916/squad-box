import React, { Component } from 'react'
import Posts from './posts/Posts'
import PostsForm from './posts/PostsForm'
import Buttons from './styles/Buttons'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Main</h1>
        <Buttons/>
        <PostsForm />
        <Posts />
      </div>
    )
  }
}

export default App;
