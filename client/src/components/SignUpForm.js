import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Form, Message } from 'semantic-ui-react'
import {getSingleUser, saveEditUser, singleUserPath} from '../actions/user.actions.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class SingUpForm extends Component {
  state = {
   user: {
     name: '',
     email: '',
     password: '',
     age: '',
   },
   createdUser: {},
   redirectToSingleUser: false,
 }

 singleUserPath = (userId) => {
   axios.post(`/api/users/${userId}`, {user: this.state.user}).then((res) => {
     this.setState({redirectToSingleUser: true, createdUser: res.data})
   })
 }

 handleChange = (e) => {
   const userId = {
     ...this.state.userId
   }
   userId[e.target.name] = e.target.value
   this.setState({userId})
 }

 handleSubmit = (e) => {
   e.preventDefault()
   console.log('User submitted info')
 }
 handleSignUp = (e) => {
   e.preventDefault()
   this.singleUserPath()
 }

  render() {
    if (this.state.redirectToSingleUser) {
      console.log("REDIRECTING TO SINGLE USERS", this.state.createdUser.id)
      return <Redirect to='/users' />
    }
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={this.handleChange} name="email" type="text" value={this.state.email}/>
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input onChange={this.handleChange} name="age" type="text" value={this.state.age}/>
        </div>
        <button onClick={this.handleSignUp}>Sign Up</button>
      </form>

    </div>)
  }
}
const mapStateToProps = (state) => {
  return {newUser: state.newUser}
}

export default connect(mapStateToProps, {push, getSingleUser, saveEditUser, singleUserPath})(SingUpForm);
