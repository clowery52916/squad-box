import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath, saveNewUser, singleUserPath} from '../actions/user.actions.js'
import {deletePost, editToggle, editPost, addPost} from '../actions/post.actions.js'
import axios from 'axios'
import NavBar from './NavBar'
import Footer from './Footer'

class NewsFeed extends Component {

  componentWillMount() {
    this.props.userPath()
    console.log(userPath)
  }

  componentWillUpdate() {
    this.props.addPost()
    console.log(addPost)
  }

  render() {
    return (<div>
      <NavBar/>

      <h3>Add some friends!</h3>
      <div>

        {
          this.props.users.map((user) => {
            return (<div key={user.id}>

              <div onClick={() => this.props.history.push(`/users/${user.id}`)}>
                <img width={200} src={user.photo} alt={user.name}/>
                <br/> {user.name}
                <br/> {user.email}
                <br/> {user.age}
                <br/>{user.post}
              </div>


            </div>)
          })
        }

      </div>
      <Footer/>
    </div>) } } const mapStateToProps = (state) => {return {users: state.users};{posts: state.posts}}
    export default connect(mapStateToProps, {
      push,
      userPath,
      singleUserPath,
      saveNewUser, deletePost, editToggle, editPost, addPost })(NewsFeed)
