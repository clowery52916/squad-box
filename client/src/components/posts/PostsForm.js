import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Form, Message } from 'semantic-ui-react'
import {addPost, saveNewPost } from '../../actions/post.actions.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
  align-items:
`;

const ButtonSpacing = styled.div`
margin: 10px;
`;
const FormStyle = styled.div `
margin: 20px auto;
background: white;
color: #151515;
width: 60%;
border-radius: 6px;
align-items: center;
`

class PostForm extends Component {
  state = {
    post: {
      id:'',
      body:''
    },
    addPost: {},
    redirectToAllUsers: false,
    redirectToSingleUser: false
  }

  saveNewPost = () => {
    axios.post(`/api/users/${this.state.user}/posts`, {post: this.state.post}).then((res) => {
      this.setState({redirectToAllUsers: true, addPost: res.data},{redirectToSingleUser: true, addPost: res.data})
    })
  }
//   singleUserPath = () => {
//     axios.get('/api/posts/:id', {user: this.state.user}).then((res) => {
//     this.setState({redirectToSingleUser: true, singleUser: res.data})
//   })
// }
//
// saveEditUser = () => {
//   axios.patch('/api/users/:id', {editUser: this.state.editUser}).then((res) => {
//     this.setState({ editUser: res.data})
//   })
// }

  handleChange = (e) => {
    const post = {
      ...this.state.post
    }
    post[e.target.name] = e.target.value
    this.setState({post})
    console.log('handleChange')
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.newUser()
  //   console.log('User submitted info')
  // }
  handleSignUp = (e) => {
    e.preventDefault()
    this.saveNewPost()
    console.log('handleChange')
  }

  // handleUpdate = (e) => {
  //   const editUser = {
  //     ...this.props.editUser
  //
  //   }
  // console.log('handleUpdate')
  // }


  render() {
    if (this.state.redirectToAllUsers) {
      console.log("REDIRECTING TO ALL USERS", this.state.addPost)
      return <Redirect to='/users/' />
    }
    return (
        <div className='search list' >
            <h1>{this.state.body}</h1>
            <button onSignUp={this.togglePost}>Edit Your Post</button>
            <button onSignUp={this.handleDelete}>Delete User Account</button>
            {this.state.showEdit
                ?
                <div>
                    <form onSubmit={this.handleSubmit}>

                        <input body='body'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.body}
                            placeholder={this.state.body}
                        />

                        <button type='submit'>Update User</button>



                    </form>
                </div>
                : null}
        </div>
    );
}
}


// const mapStateToProps = (state) => {
//   return {posts: state.posts[0]}
// }

const mapStateToProps = (state) => {
  return {addPost: state.addPost}
}

export default connect(mapStateToProps, {push, saveNewPost, addPost})(PostForm);
