import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Form, Message } from 'semantic-ui-react'
import {saveNewUser, saveEditUser, singleUserPath} from '../../actions/user.actions.js'
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
      email: '',
      password: '',
      age: ''
    },
    createdUser: {},
    singleUser: {},
    editUser: {},
    redirectToAllUsers: false,
    redirectToSingleUser: false
  }

  saveNewUser = () => {
    axios.post('/api/users', {user: this.state.user}).then((res) => {
      this.setState({redirectToAllUsers: true, createdUser: res.data})
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
  handleSignUp = (e) => {
    e.preventDefault()
    this.saveNewUser()
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
      console.log("REDIRECTING TO ALL USERS", this.state.createdUser)
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

export default connect(mapStateToProps, {push, saveNewUser, saveEditUser, singleUserPath})(LoginForm);
