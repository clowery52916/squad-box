import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveEditUser, deleteUser} from '../../actions/user.actions'
import styled from 'styled-components'
import {Form, Input, Button} from "semantic-ui-react"
import { Redirect } from 'react-router-dom'
import {push} from 'react-router-redux'
import axios from 'axios'

const FormContainer = styled.div `
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

class EditUser extends Component {
  state = {
    user: {
      email: '',
      password: '',
      age: ''
    },
    editUser: {},
    redirectToAllUsers: false,
    redirectToSingleUser: false
  }

  saveEditUser = () => {
    axios.post('/api/users', {user: this.state.user}).then((res) => {
      this.setState({redirectToAllUsers: true, editUser: res.data})
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
  handleSubmit = (e) => {
    e.preventDefault()
    this.saveEditUser()
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
      console.log("REDIRECTING TO ALL USERS", this.state.editUser)
      return <Redirect to='/users' />
    }
    return (
      <FormContainer>
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:  </label>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/>
        </div>
        <div>
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
        </div>
        <div>
          <label htmlFor="photo">Profile Pic: </label>
          <input onChange={this.handleChange} name="photo" type="text" value={this.state.photo}/>
        </div>
        <br/>
        <ButtonSpacing>
        <button onClick={this.handleSubmit}>Log-in</button>
        </ButtonSpacing>

      </form>

    </div>
  </FormContainer>
  )
  }
}
const mapStateToProps = (state) => {
  return {editUser: state.editUser}
}
export default connect(mapStateToProps, {
 push,
saveEditUser})(EditUser)
