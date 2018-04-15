import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {singleUserPath, getSingleUser} from '../actions/user.actions.js'
import axios from 'axios'
import NavBar from './NavBar'
import Footer from './Footer'
import Edit from './Edit'

class SingleUser extends Component {


  render() {
    return (<div>
      <NavBar />
      <h1>Profile</h1>

        <div>
          <h3>Welcome Back {this.props.user.name}</h3>
          <h3>Your Information</h3>
          <h6>age: {this.props.user.age}</h6>
          <h6>email: {this.props.user.email}</h6>
          <h6>Profile Picture: </h6>
          <img width={200} src={this.props.user.photo} alt={this.props.user.name} />
          <h6>Your Post History {this.props.user.post}</h6>
          <h6>Comments you've made {this.props.user.comment}</h6>
        {/* <Comments/> */}
        {/* <Posts /> */}
        <Edit/>
      </div>
      <Footer/>
    </div>)
  }
}
const mapStateToProps = (state, ownProps) => {
  if (state.users.length === 0){
    //Get all the users from API when going directly to this page
  }
  const userId = ownProps.match.params.id
  const user = state.users.find(user => {
    return user.id === parseInt(userId)
  })
  console.log(user)
  return {user}
}
export default connect(mapStateToProps, {push, singleUserPath, getSingleUser})(SingleUser)
