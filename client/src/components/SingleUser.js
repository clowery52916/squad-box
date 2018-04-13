import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {singleUserPath, getSingleUser} from '../actions/user.actions.js'
import EditUser from './EditUser'
import axios from 'axios'


class SingleUser extends Component {


  render() {
    return (<div>
      <h1>Profile</h1>

        <div>
          <h3>Welcome Back {this.props.user.name}</h3>
          <h3>Update your information</h3>
          <h4>age: {this.props.user.age}</h4>
          <h4>email: {this.props.user.email}</h4>
          <h4>Update your photo: </h4>
          <img width={200} src={this.props.user.photo} alt={this.props.user.name} />
        <EditUser/>
      </div>
    </div>)
  }
}
const mapStateToProps = (state, ownProps) => {
  if (state.users.length === 0){
    //Get all the users from API when going directly to this page
  }
  console.log(state)
  console.log(ownProps)
  const userId = ownProps.match.params.id
  console.log(userId)
  console.log(typeof userId)
  const user = state.users.find(user => {
    return user.id === parseInt(userId)
  })
  console.log(user)
  return {user}
}
export default connect(mapStateToProps, {push, singleUserPath, getSingleUser})(SingleUser)
