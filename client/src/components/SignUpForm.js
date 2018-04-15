import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Form, Message } from 'semantic-ui-react'
import {saveNewUser} from '../actions/user.actions.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import LoginForm from './LoginForm'

class SignUpForm extends Component {
  state = {
    user: {
      email: '',
      password: '',
      age: ''
    },
    createdUser: {},
    redirectToAllUsers: false,
  }

  saveNewUser = () => {
    axios.get('/api/users', {user: this.state.user}).then((res) => {
      this.setState({redirectToAllUsers: true, createdUser: res.data})
    })
  }

  handleChange = (e) => {
    const user = {
      ...this.state.user
    }
    user[e.target.name] = e.target.value
    this.setState({user})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('User submitted info')
  }
  handleSignUp = (e) => {
    e.preventDefault()
    this.saveNewUser()
  }

  render() {
    if (this.state.redirectToAllUsers) {
      console.log("REDIRECTING TO SINGLE USER", this.state.createdUser.id)
      return <Redirect push="push" to={`/users/${this.state.createdUser.id}`}/>
    }
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email" htmlFor="userName">Email</label>
          <input onChange={this.handleChange} name="email" type="text" value={this.state.email}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input onChange={this.handleChange} name="age" type="text" value={this.state.age}/>
        </div>
        <button onClick={this.handleSignUp}>Sign Up</button>
      </form>
<br/>

    </div>)
  }
}
const mapStateToProps = (state) => {
  return {newUser: state.newUser}
}

export default connect(mapStateToProps, {push, saveNewUser})(SignUpForm);
