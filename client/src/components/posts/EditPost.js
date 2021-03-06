import React, {Component} from 'react';
import axios from 'axios'
import {Button} from 'semantic-ui-react'
import Posts from '../posts/Posts'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath, saveNewUser, singleUserPath} from '../../actions/user.actions.js'
import {deletePost, editToggle, editPost, addPost, saveEditPost, singlePostPath} from '../../actions/post.actions'
const PostContainer = styled.div `
    text-align: center;
`

const DeleteWarning = styled.div `
 border: 1px solid white;
 color: white;
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

class EditPost extends Component {
  state = {
    user:{
      post:''
    },

  }

    handleChange = (event) => {
      this.setState({ post: event.target.value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.editPost(
        this.props.id,
        this.state.post
      )
      this.setState({ post: '' })
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
    const post = this.state.post
    const user = this.state.user
    console.log(user)
    console.log(post)
    await axios.delete(`/api/users/${user.id}/posts`)
    this.props.history.push(`/users/${user.id}`)
  }

  render() {
    return (<PostContainer>
      <PostStyle>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="body">Edit Your Post </label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.todo}/>
        <button type="submit">Edit</button>
      </form>
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
            ? (<Posts userId={this.state.user_id} postId={this.state.post_id} editPost={this.editPost} editToggle={this.editToggle}/>)
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

const mapStateToProps = (state) => {return {users: state.users}}
export default connect(mapStateToProps, {
 push,
 userPath,
 singleUserPath,
 saveNewUser, deletePost, editToggle, editPost, addPost })(EditPost)
