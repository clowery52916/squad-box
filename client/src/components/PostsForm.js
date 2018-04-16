import React, {Component} from 'react';
import {Form, Input, Button} from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {editToggle, addPost } from '../actions/post.actions.js'


const FormStyle = styled.div `
width: 60vw;
margin: 20px auto;
`

const ButtonStyle = styled.div `
margin: 10px auto;
`

class PostForm extends Component {
  state = {
    post: {
      body: ''
    },
    createdPost: {}
  }

  addPost = () => {
    axios.get(`/api/users/`, {post: this.state.post}).then((res) => {
      this.setState({redirectToAllUsers: true, createdPost: res.data})
    })
  }
editPost
  handleChange = (e) => {
    const post = {
      ...this.state.post
    }
    post[e.target.title] = e.target.value
    this.setState({post})
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('New Post Submitted')
  // }
  handleSignUp = (e) => {
    e.preventDefault()
    console.log(e)
    this.saveNewUser()
  }

  render() {
    if (this.state.redirectToAllUsers) {
      console.log("REDIRECTING TO SINGLE USER", this.state.createdPost.id)
      return <Redirect push="push" to={`/users/${this.state.createdPost.id}`}/>
    }
    return (<FormStyle>
      <Form onSubmit={this.handleSubmit}>
        <div>
          <label>title</label>
        </div>
        <Input placeholder="title" onChange={this.handleChange} type="text" name="title"
          // required

          // value={this.props.post.title}
        />
        <div>
          <div>
            <label>post</label>
          </div>
          <textarea placeholder="Comment must contain at least 20 characters." onChange={this.handleChange} type="text" name="post" require={this.state.post}/>
          <ButtonStyle>
            <Button onClick={this.props.addPost}>Submit</Button>
            <Button onClick={this.props.addPost}>Cancel</Button>
          </ButtonStyle>
        </div>

      </Form>
    </FormStyle>);
  }
}

const mapStateToProps = (state) => {
  return {update: state.update}
}

export default connect(mapStateToProps, {push, editToggle, addPost})(PostForm);
