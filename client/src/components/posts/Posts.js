import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Form, Message } from 'semantic-ui-react'
import {addPost, editPost, saveNewPost} from '../../actions/post.actions.js'
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

class LoginForm extends Component {
  state = {
    user: {
      post: '',
    },
    createdPost: {},
    redirectToAllUsers: false,
  }



  addPost = () => {
    const userId = this.props.match.params.userId
    const post = this.state.post
    axios.post(`/api/users/${userId}/${post}`, {user: this.state.post}).then((res) => {
      this.setState({redirectToAllUsers: true, createdPost: res.data})
    })
  }
//   saveNewPost = () => {
//     axios.get('/api/users/:id', {user: this.state.user}).then((res) => {
//     this.setState({redirectToSingleUser: true, singleUser: res.data})
//   })
// }
//
// editPost = () => {
//   axios.patch('/api/users/:id', {editUser: this.state.editUser}).then((res) => {
//     this.setState({ editUser: res.data})
//   })
// }

  handleChange = (e) => {
    const user = {
      ...this.state.user
    }
    user[e.target.name] = e.target.value
    this.setState({user})
    console.log('handleChange')
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.newUser()
  //   console.log('User submitted info')
  // }
  handleSignUp = (e) => {
    e.preventDefault()
    this.addPost()
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
      console.log("REDIRECTING TO ALL USERS", this.state.createdPost)
      return <Redirect to='/users' />
    }
    return (
      <FormContainer>
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name"> </label>
          <input onChange={this.handleChange} name="post" type="text" value={this.state.post}/>
        </div>
        {/* <div>
          <label htmlFor="email">Email: </label>
          <input onChange={this.handleChange} name="email" type="text" value={this.state.email}/>
        </div>
        <div>
          <label htmlFor="name">Password: </label>
          <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input onChange={this.handleChange} name="age" type="text" value={this.state.age}/>
        </div> */}
        <br/>
        <ButtonSpacing>
        <button onClick={this.handleSignUp}>Log-in</button>
        </ButtonSpacing>

      </form>

    </div>
  </FormContainer>
  )
  }
}
const mapStateToProps = (state) => {
  return {newUser: state.newUser}
}

export default connect(mapStateToProps, {push, addPost, editPost, saveNewPost})(LoginForm);





// import React, { Component } from "react";
// import { Form, Input, Button } from "semantic-ui-react";
// import axios from "axios";
// import styled from "styled-components";
// import {connect} from 'react-redux'
// import {push} from 'react-router-redux'
// import { Redirect } from 'react-router-dom'
// import {editToggle, editPost, saveNewPost, addPost, deletePost } from '../../actions/post.actions'
// import EditPost from './EditPost'
//
// const FormContainer = styled.div`
//   width: 60vw;
//   margin: 20px auto;
// `;
//
// const ButtonSpacing = styled.div`
// margin: 10px;
// `
// class Posts extends Component {
//   state = {
//     post: {
//       user_id: 1,
//         addPost: false
//     }
//   }
//
//   addPost = () => {
//     axios.get(`/api/users/id`, {post: this.state.createdPost}).then((res) => {
//       this.setState({addPost: true, createdPost: res.data})
//     })
//   }
// editPost
//   handleChange = (e) => {
//     const post = {
//       ...this.state.post
//     }
//     post[e.target.title] = e.target.value
//     this.setState({post})
//   }
//
//   deletePost = async () => {
//     const userId = this.props.match.params.id
//     console.log(userId)
//     await axios.delete(`/api/users/${userId}`)
//     console.log(this.props.match.params.id)
//     this.props.history.push('/')
//   };
//
//   toggleEdit = () => {
//     this.setState({ addPost: !this.state.addPost })
//   };
//
//   handleSubmit = async e => {
//     e.preventDefault()
//     const userId = this.state.userId
//     console.log(userId)
//     const postUpdate = { ...this.state.post }
//     await axios.post(`/users/${userId}/post`, postUpdate)
//     this.toggleEdit()
//     await this.addPost()
//   };
//
//   handleChange = e => {
//     const post = e.target.name
//     const newPost = { ...this.state.post }
//     newPost[ post ] = e.target.value
//     this.setState({ post: newPost })
//   };
//
//   render() {
//       if (this.state.addPost) {
//         console.log("REDIRECTING TO SINGLE USER", this.state.post)
//         return <Redirect push="push" to={`/users/${this.state.post}`}/>
//     }
//     return (
//       <FormContainer>
//         {console.log(this.state.post)}
//         <Form onSubmit={this.handleSubmit}>
//             <div key='id'>
//             <label>Post</label>
//           </div>
//           <textarea
//             placeholder="Comment must contain at least 20 characters."
//             onChange={this.handleChange}
//             type="text"
//             name="posts"
//             required
//             value={this.state.posts}
//           />
//           <ButtonSpacing>
//           <Button onClick={this.props.handleSubmit}>Submit</Button>
//           </ButtonSpacing>
//           {/* <EditPost/> */}
//         </Form>
//       </FormContainer>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {addPost: state.addPost}
// }
//
// export default connect(mapStateToProps, {push, editToggle, editPost, saveNewPost, addPost, deletePost})(Posts);
