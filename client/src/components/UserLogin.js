import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {getUserRoute} from '../actions/thunk.actions.js'

class UserLogin extends Component {
  componentWillMount() {
    this.props.getUserRoute()
  }

  render() {
    return (
      <div>
        <h3>Create an Account!</h3>
        <form>
          <input className="userLogin" type="text" name="name" placeholder='email'/>
          <br/>
          <input className="userLogin" type="text" name="name" placeholder='password'/>
          <br/>
          <button type="submit">submit</button>

        </form>
      {/* <button onClick={() => this.props.history.push('/')}>
        Home
      </button>
        <button onClick={() => this.props.history.push(`/users/:id`)}>
          Create User
        </button> */}
      </div>


)
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {push, getUserRoute})(UserLogin)
//calling the state and getting the actions for the state and sending it to UserLogin
