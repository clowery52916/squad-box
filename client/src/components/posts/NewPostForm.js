import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { addPost } from '../../actions/post.actions'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'


class NewPostForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.addPost}>
        <Form.Field>
          <label>Post</label>
          <textarea placeholder='body' name="body" onChange={this.props.handleChange} value={this.props.addPost.body}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {addPost: state.addPost}
}

export default connect(null, { addPost })(NewPostForm);
