



import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import { Redirect } from 'react-router-dom'
import {editToggle, editPost, saveNewPost, addPost, deletePost } from '../../actions/post.actions'
import EditPost from './EditPost'

const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
`;

const ButtonSpacing = styled.div`
margin: 10px;
`
class Posts extends Component {
  state = {
    user: {
      post:''
    }
  }

  addPost = () => {
    axios.get(`/api/users/id`, {post: this.state.createdPost}).then((res) => {
      this.setState({addPost: true, createdPost: res.data})
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

  // deletePost = async () => {
  //   const userId = this.props.match.params.id
  //   console.log(userId)
  //   await axios.delete(`/api/users/${userId}`)
  //   console.log(this.props.match.params.id)
  //   this.props.history.push('/')
  // };
  //
  // toggleEdit = () => {
  //   this.setState({ addPost: !this.state.addPost })
  // };

  handleSubmit = async e => {
    e.preventDefault()
    // const userId = this.props.match.params.userId
    // console.log(userId)
    const postUpdate = { ...this.state.post }
    await axios.post(`/users/:id/`, postUpdate)
    this.toggleEdit()
    await this.addPost()
  };

  handleChange = e => {
    const post = e.target.name
    const newPost = { ...this.state.post }
    newPost[ post ] = e.target.value
    this.setState({ post: newPost })
  };

  render() {
      if (this.state.addPost) {
        console.log("REDIRECTING TO SINGLE USER", this.state.user)
        return <Redirect push="push" to={`/users/${this.state.post}`}/>
    }
    return (
      <FormContainer>
        {console.log(this.state.post)}
        <Form onSubmit={this.handleSubmit}>
            <div key='id'>
            <label>Post</label>
          </div>
          <textarea
            placeholder="Comment must contain at least 20 characters."
            onChange={this.handleChange}
            type="text"
            name="posts"
            required
            value={this.state.posts}
          />
          <ButtonSpacing>
          <Button onClick={this.props.handleSubmit}>Submit</Button>
          </ButtonSpacing>
          {/* <EditPost/> */}
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {addPost: state.addPost}
}

export default connect(mapStateToProps, {push, editToggle, editPost, saveNewPost, addPost, deletePost})(Posts);
