import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import {addComment, editComment, toggleComment, deleteComment} from '../actions/comment.actions.js'
import {addPost, editPost, togglePost, deletePost} from '../actions/post.actions.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
`;

const ButtonSpacing = styled.div`
margin: 10px;
`

class Edit extends Component {
    state = {
      user: {
        posts: '',
        comments:''
      }

    }

    // handleChange = (event) => {
    //   this.setState({ comments: event.target.value })
    // }
    //
    // handleSubmit = (event) => {
    //   event.preventDefault()
    //   this.props.editComment(
    //     this.props.id,
    //     this.state.comments
    //   )
    //   this.setState({ comments: '' })
    // }
    handleChange = (event) => {
      this.setState({ posts: event.target.value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.editPost(
        this.props.id,
        this.state.posts
      )
      this.setState({ posts: '' })
    }

  render() {
    return (
      <FormContainer>
        {console.log(this.props.user)}
        {console.log(this.props.comment_id)}
        {console.log(this.props.post_id)}
        <Form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
          </div>
          <Input
            placeholder="title"
            onChange={this.handleChange}
            type="text"
            name="title"
            required
            value={this.state.posts}
          />

          <div>
            <label>Comment</label>
          </div>
          <textarea
            placeholder="Comment must contain at least 20 characters."
            onChange={this.handleChange}
            type="text"
            name="comment"
            required
            value={this.state.posts}
          />
          <ButtonSpacing>
          <Button>Save Changes</Button>
          <Button onClick={this.props.editToggle}>Cancel</Button>
          </ButtonSpacing>
        </Form>
        {/* <Form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
          </div>
          <Input
            placeholder="title"
            onChange={this.handleChange}
            type="text"
            name="title"
            required
            value={this.state.comments}
          />

          <div>
            <label>Comment</label>
          </div>
          <textarea
            placeholder="Comment must contain at least 20 characters."
            onChange={this.handleChange}
            type="text"
            name="comment"
            required
            value={this.state.comments}
          />
          <ButtonSpacing>
          <Button>Save Changes</Button>
          <Button onClick={this.props.editToggle}>Cancel</Button>
          </ButtonSpacing>
        </Form> */}
      </FormContainer>

    );
  }
}

const mapStateToProps = (state) => {
  return {post_id: state.update}
}
export default connect(mapStateToProps, {push, addComment, toggleComment, editComment, deleteComment, addPost, editPost, togglePost, deletePost})(Edit)
