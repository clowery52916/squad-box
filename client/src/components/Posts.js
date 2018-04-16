import React, {Component} from 'react';
import axios from 'axios'
import {Button} from 'semantic-ui-react'
import EditPost from './EditPost'
import styled from 'styled-components'

const PostContainer = styled.div `
    text-align: center;
`

const DeleteWarning = styled.div `
 border: 1px solid red;
 color: red;
 font-size: 40px;
`

const PostStyle = styled.div `
margin: 20px auto;
background: white;
color: #151515;
width: 50%;
border-radius: 6px;
`

const ButtonSpacing = styled.div `
margin: 20px;
`

class Posts extends Component {
  state = {
    user: {},
    post: {},
    deleteToggle: false,
    editToggle: false,
    button: true
  }

  componentWillMount() {
    this.getPost()
  }

  getPost = async () => {
    const postId = this.state.id
    const res = await axios.get(`/api/users/:user_id/posts/${postId}`)
    this.setState({post: res.data})
  }

  deleteToggle = () => {
    this.setState({
      deleteToggle: !this.state.deleteToggle
    })
    this.setState({
      button: !this.state.button
    })
  }

  editToggle = () => {
    this.setState({
      editToggle: !this.state.editToggle
    })
    this.setState({
      button: !this.state.button
    })
  }

  deletePost = async () => {
    const postId = this.state.id
    const userId = this.state.post.userId
    console.log(userId)
    await axios.delete(`/api/users/${userId}/posts/${postId}`)
    this.props.history.push(`/users/${userId}`)
  }

  render() {
    return (<PostContainer>
      <PostStyle>
        <div>
          <h1>{this.state.post.title}</h1>
        </div>
        <div>
          <p>{this.state.post.post}</p>
        </div>
      </PostStyle>
      {
        this.state.button
          ? (<div>
            <Button onClick={this.editToggle}>Edit</Button>
          </div>)
          : null
      }
      <ButtonSpacing>
        {
          this.state.editToggle
            ? (<EditPost userId={this.state.user_id} postId={this.state.id} getPost={this.getPost} editToggle={this.editToggle}/>)
            : null
        }
      </ButtonSpacing>
      {
        this.state.button
          ? (<Button onClick={this.deleteToggle}>Delete</Button>)
          : null
      }
      {
        this.state.deleteToggle
          ? (<DeleteWarning>
            <p>Are you sure you want to delete?</p>
            <Button onClick={this.deletePost}>Yes</Button>
            <div>
              <Button onClick={this.deleteToggle}>No</Button>
            </div>
          </DeleteWarning>)
          : null
      }
    </PostContainer>);
  }
}

export default Posts;
