import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Form, Message } from 'semantic-ui-react'
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
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: rgb(74, 74, 74);
  background: rgb(172, 172, 172);
  border: none;
  border-radius: 3px;
`;
const Button = styled.button`
  position: relative;
  background-color: rgb(74, 74, 74);
  border-radius: 30%;
  font-size: 10px;
  color: #FFFFFF;
  padding: 10px;
  width: 150px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

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
          {/* <label htmlFor="name">Name:  </label> */}
          <Input onChange={this.handleChange} name="name" type="text" value={this.state.name} placeholder='Name'/>
        </div>
        <div>
          {/* <label htmlFor="email">Email: </label> */}
          <Input onChange={this.handleChange} name="email" type="text" value={this.state.email} placeholder='Email'/>
        </div>
        <div>
          {/* <label htmlFor="name">Password: </label> */}
          <Input onChange={this.handleChange} name="password" type="text" value={this.state.password} placeholder='Password'/>
        </div>
        <div>
          {/* <label htmlFor="age">Age: </label> */}
          <Input onChange={this.handleChange} name="age" type="text" value={this.state.age} placeholder='Age'/>
        </div>
        <div>
          {/* <label htmlFor="photo">Profile pic: </label> */}
          <Input onChange={this.handleChange} name="photo" type="text" value={this.state.photo} placeholder='Profile Pic'/>
        </div>
        <br/>
        <ButtonSpacing>
        <Button onClick={this.handleSignUp}>Log-in</Button>
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
