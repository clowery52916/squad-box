import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveEditUser, deleteUser} from '../actions/user.actions'
import styled from 'styled-components'
import {Form, Input, Button} from "semantic-ui-react"
import { Redirect } from 'react-router-dom'

class EditUser extends Component {
  render() {
    const {
      dispatch,
      name,
      email,
      password,
      photo,
      id,
      comment,
      post,
    } = this.props;
    return (
      <Form>
        <Input id='name' type='text' defaultValue={name}/>
        <Input id='email' type='text' defaultValue={email}/>
        <Input id='password' type='text' defaultValue={password}/>
        <Input id='photo' type='text' defaultValue={photo}/>
        {/* <div>
        <Redirect to='/users/:id'>
          <Button onClick={() => {
              dispatch(saveEditUser(id, name.value, email.value, password.value, photo.value));
            }}></Button>
        </Redirect>
</div> */}
{/* <div>
        <Redirect to='/bye'>
          <Button onClick={() => {
              dispatch(deleteUser(id))
            }}></Button>
        </Redirect>
        </div> */}
      </Form>
)
}
}
export default connect()(EditUser)
