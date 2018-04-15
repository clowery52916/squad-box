import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {saveNewUser, saveEditUser, singleUserPath} from '../actions/user.actions.js'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {Form, Input, Button} from "semantic-ui-react";

const FormContainer = styled.div `
  width: 60vw;
  margin: 20px auto;
`;

const ButtonSpacing = styled.div `
margin: 10px;
`

class EditUser extends Component {
  state = {
    user: {
      email: '',
      password: '',
      age: '',
      photo: '',
      name: ''
    },
    redirectToSingleUser: false
  }

  // saveEditUser = () => {
  //   axios.put('/api/users', {user: this.state.user}).then((res) => {
  //     this.setState({redirectToSingleUser: true, createdUser: res.data})
  //   })
  // }
  editUser = () => {
    axios.put(`/api/users/:id`, {user: this.state.user}).then((res) => {
      this.setState({redirectToSingleUser: true, user: res.data})
    })
  }

  handleChange = (e) => {
    const user = {
      ...this.state.user
    }
    user[e.target.name] = e.target.value
    this.setState({user})
    console.log(user)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState.saveEditUserInfo
    console.log('Edit User info')
  }

  handleUpdate = (e) => {
    const editUser = {
      ...this.props.editUser
    }

  }

  render() {
    if (this.state.redirectToSingleUser) {
      console.log("UPDATING  USER", this.state.user.id)
      return <Redirect to='/users'/>
    }
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
        </div>
        <Input placeholder="title" onChange={this.handleChange} type="text" name="title" required="required" value={this.state.saveEditUser}/>

        <div>
          <label>Comment</label>
        </div>
        <textarea placeholder="Comment must contain at least 20 characters." onChange={this.handleChange} type="text" name="comment" required="required" value={this.state.saveEditUser}/>
        <ButtonSpacing>
          <Button>Save Changes</Button>
          <Button onClick={this.props.editToggle}>Cancel</Button>
        </ButtonSpacing>
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
        </Form>
    </FormContainer>
  )
  }
}

const mapStateToProps = (state) => {
  return {editUser: state.saveEditUser}
}

export default connect(mapStateToProps, {push, saveEditUser, singleUserPath})(EditUser);
