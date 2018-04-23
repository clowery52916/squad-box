import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Form, Message } from 'semantic-ui-react'
import {saveNewPost, addPost} from '../../actions/post.actions.js'
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

class NewPostForm extends Component {
  state = {
    user: {
      id:''


    },
    post: {},
    createdPost: {},
    redirectToAllUsers: false,
    redirectToSingleUser: false
  }

  addPost = () => {
    axios.post(`/api/users/user_id/posts`, {post: this.state.post}, {user: this.state.user.id}).then((res) => {
      this.setState({redirectToAllUsers: true, createdPost: res.data})
    })
  }
//   singleUserPath = () => {
//     axios.get('/api/users/:id', {user: this.state.user}).then((res) => {
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
  handleSubmit = (e) => {
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
          <label htmlFor="post">What do you wamt to Share?:  </label>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/>
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
        <button onClick={this.handleSubmit}>Post</button>
        </ButtonSpacing>

      </form>

    </div>
  </FormContainer>
  )
  }
}
const mapStateToProps = (state) => {
  return {user: state.user},{post: state.post}
}

export default connect(mapStateToProps, {push, saveNewPost, addPost})(NewPostForm);
