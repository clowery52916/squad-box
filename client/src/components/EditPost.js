import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {editToggle, addPost } from '../actions/post.actions.js'


const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
`;

const ButtonSpacing = styled.div`
margin: 10px;
`

class EditPost extends Component {
  state = {
    update: {
      title: "",
      posts: ""
    }
  };

  handleChange = event => {
    const target = event.target.name;
    const editPost = { ...this.state.update };
    editPost[target] = event.target.value;
    this.setState({ update: editPost });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const user_id = this.props.user_id;
    const postId = this.state.id
    const update = this.state.update;
    const res = await axios.patch(
      `/api/users/${user_id}/posts/${postId}`,
      update
    );
    console.log(res.data);
    this.props.editToggle();
    this.props.addPost();
  };

  render() {
    return (
      <FormContainer>
        {console.log(this.props.user_id)}
        {console.log(this.props.postId)}
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
            value={this.state.title}
          />

          <div>
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
          <Button>Save Changes</Button>
          <Button onClick={this.props.editToggle}>Cancel</Button>
          </ButtonSpacing>
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {update: state.update}
}

export default connect(mapStateToProps, {push, editToggle, addPost})(EditPost);
