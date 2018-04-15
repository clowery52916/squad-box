import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Form, Message } from 'semantic-ui-react'
import {saveNewUser, saveEditUser, singleUserPath} from '../actions/user.actions.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

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

saveEditUser = () => {
  axios.patch('/api/users/:id', {editUser: this.state.editUser}).then((res) => {
    this.setState({ editUser: res.data})
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
    this.newUser()
    console.log('User submitted info')
  }
  handleSignUp = (e) => {
    e.preventDefault()
    this.saveNewUser()
  }

  handleUpdate = (e) => {
    const editUser = {
      ...this.props.editUser
    }

  }


  render() {
    if (this.state.redirectToAllUsers) {
      console.log("REDIRECTING TO ALL USERS", this.state.createdUser.id)
      return <Redirect to='/users' />
    }
    return (<div>

      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
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
        <button onClick={this.handleSignUp}>Log-in</button>
      </form>

    </div>)
  }
}
const mapStateToProps = (state) => {
  return {createdUser: state.createdUser}
}

export default connect(mapStateToProps, {push, saveNewUser, saveEditUser, singleUserPath})(LoginForm);
