import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath, saveNewUser, singleUserPath} from '../actions/user.actions.js'
import {addPost, editToggle, editPost, deletePost} from '../actions/post.actions.js'
import axios from 'axios'
import NavBar from './NavBar'
import Footer from './Footer'

class NewsFeed extends Component {

  componentDidMount() {
    this.props.userPath()
    console.log(userPath)
  }

  render() {
    return (<div>
      }
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
              </div>

            </div>)
          })
        }

      </div>
      {/* <Footer/> */}
    </div>) } } const mapStateToProps = (state) => {return {users: state.users}}
    export default connect(mapStateToProps, {
      push,
      userPath,
      singleUserPath,
      saveNewUser,
      addPost,
      deletePost,
      editToggle,
      editPost
    })(NewsFeed)
