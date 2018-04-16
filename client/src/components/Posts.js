import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import { Redirect } from 'react-router-dom'
import {editToggle, editPost, saveNewPost, addPost, saveEditPost, deletePost } from '../actions/post.actions.js'


const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
`;

const ButtonSpacing = styled.div`
margin: 10px;
`

class Posts extends Component {
  state = {
    user:{
      posts:{
        body:''
      },
    },
    createdPost:{},
    editedPost:{},
    redirectToAllUsers: false
  };
  addPost = () => {
    axios.get(`/api/users/user_id/posts `, {post: this.state.createdPost}).then((res) => {
      this.setState({redirectToAllUsers: true, createdPost: res.data})
    })
  }
  saveNewPost = () => {
    axios.post(`/api/users/user_id/posts `, {post: this.state.createdPost}).then((res) => {
      this.setState({redirectToAllUsers: true, createdPost: res.data})
    })
  }
  editPost = () => {
    axios.patch(`/api/users/user_id/posts `, {post: this.state.editPost}).then((res) => {
      this.setState({redirectToAllUsers: true, editedPost: res.data})
    })
  }
  saveEditPost = () => {
    axios.delete(`/api/users/user_id/posts `, {post: this.state.editPost}).then((res) => {
      this.setState({redirectToAllUsers: true, editedPost: res.data})
    })
  }
  handleChange = (e) => {
    const post = {
      ...this.state.post
    }
    post[e.target.name] = e.target.value
    this.setState({post})
    console.log('addPost')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.newUser()
    console.log('User submitted info')
  }
  addPost = (e) => {
    e.preventDefault()
    this.addPostToUser()
    console.log('handleChange')
  }

  handleUpdate = (e) => {
    const editUser = {
      ...this.props.editUser

    }
  console.log('handleUpdate')
  }


  editToggle = (e) => {
    const addPost = {
      ...this.props.addPost

    }
  console.log('editToggle')
  }
  render() {
      if (this.state.redirectToAllUsers) {
        console.log("REDIRECTING TO SINGLE USER", this.state.createdPost.id)
        return <Redirect push="push" to={`/users/${this.state.createdPost.id}`}/>
    }
    return (
      <FormContainer>
        {console.log(this.state.post)}
        <Form onSubmit={this.handleChange}>
            <div key='user_id'>
            <label>Post</label>
          </div>
          <textarea
            placeholder="Comment must contain at least 20 characters."
            onChange={this.handleChange}
            type="text"
            name="posts"
            required
            value={this.state.user.posts}
          />
          <ButtonSpacing>
          <Button onClick={this.props.addPost}>Save?</Button>
          <Button onClick={this.props.editPost}>Edit?</Button>
          <Button onClick={this.props.delete}>Delete?</Button>
          </ButtonSpacing>
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = ownProps.id
  console.log(ownProps)
  return {user: state.user}
}

export default connect(mapStateToProps, {push, editToggle, editPost, addPost, saveNewPost, saveEditPost, deletePost})(Posts);
