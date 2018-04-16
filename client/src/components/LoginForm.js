import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {Form, Input, Button} from "semantic-ui-react";
import {saveNewUser, saveEditUser, singleUserPath} from '../actions/user.actions.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

const FormContainer = styled.div `
  width: 60vw;
  margin: 20px auto;
`;

const ButtonSpacing = styled.div `
margin: 10px;
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
    singleUserPath = () => {
      axios.get('/api/users/:id', {user: this.state.user}).then((res) => {
      this.setState({redirectToSingleUser: true, singleUser: res.data})
    })
  }
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
    console.log('handleSignUp')
  }

  handleUpdate = (e) => {
    const editUser = {
      ...this.props.editUser

    }
  console.log('handleUpdate')
  }

  render() {
    if (this.state.redirectToAllUsers) {
      console.log("REDIRECTING TO ALL USERS", this.state.createdUser)
      return <Redirect to='/users'/>
    }

    return (<div>
      <FormContainer>
        <h3>Create an account, or login into your existing one!</h3>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <label>Full Name:
            </label>
          </div>
          <Input placeholder="name" onChange={this.handleChange} type="text" key="name" required="required" value={this.state.newUser}/> {/* <Input placeholder="Comment must contain at least 20 characters." onChange={this.handleChange} type="text" name="comment" required="required" value={this.state.saveEditUser}/> */}

          <div>
            <label htmlFor="email">Email</label>
            <Input onChange={this.handleChange} key="email" type="text" value={this.state.email}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input placeholder='pasword must contain 6 or more characters' onChange={this.handleChange} key="password" type="text" value={this.state.password}/>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <Input onChange={this.handleChange} key="age" type="number" value={this.state.age}/>
          </div>
          <ButtonSpacing>
            <Button onClick={this.handleSignUp}>Log-in</Button>
          </ButtonSpacing>

        </Form>

      </FormContainer>

    </div>)
  }
}
const mapStateToProps = (state) => {
  return {newUser: state.newUser}
}

export default connect(mapStateToProps, {push, saveNewUser, saveEditUser, singleUserPath})(LoginForm);
