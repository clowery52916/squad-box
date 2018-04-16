import React, {Component} from 'react';
import {Form, Input, Button} from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'

const FormStyle = styled.div `
width: 60vw;
margin: 20px auto;
`

const ButtonStyle = styled.div `
margin: 10px auto;
`

class CommentForm extends Component {
  state = {
    new: {
      title: '',
      comment: ''
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const newPost = {
      ...this.state.new
    }
    newPost[name] = event.target.value
    this.setState({new: newPost})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const user_id = this.state.id
    console.log(user_id)
    const payload = this.state.new
    const response = await axios.post(`/api/users/${user_id}/posts`, payload)
    console.log(response.data)
    const posts = [
      ...this.state.new,
      response.data
    ]
    this.setState({new: posts})
    this.props.toggleCommentForm()
    await this.props.getPost(user_id)
  }

  render() {
    return (<FormStyle>
      <Form onSubmit={this.handleSubmit}>
        <div>
          <label>title</label>
        </div>
        <Input placeholder="title" onChange={this.handleChange} type="text" name="title" required="required" value={this.state.title}/>
        <div>
          <div>
            <label>comment</label>
          </div>
          <textarea placeholder="Comment must contain at least 20 characters." onChange={this.handleChange} type="text" name="comment" require="require" value={this.state.comment}/>
          <ButtonStyle>
            <Button>Submit</Button>
            <Button onClick={this.props.toggleCommentForm}>Cancel</Button>
          </ButtonStyle>
        </div>

      </Form>
    </FormStyle>);
  }
}

export default CommentForm;
