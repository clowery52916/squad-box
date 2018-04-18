import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath, saveNewUser, singleUserPath} from '../../actions/user.actions.js'
import {deletePost, editToggle, editPost, addPost} from '../../actions/post.actions.js'
import axios from 'axios'
import NavBar from '../styles/NavBar'
import Footer from '../styles/Footer'

const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #8f8d8d;
  color: rgba(#9a97b8, 0.61);
  font-family: cursive;
  color: inherit;
`;


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
      <HomeContainer>
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
                <br/>{user.posts}
              </div>


            </div>)
          })
        }

      </div>
      <Footer/>
    </HomeContainer>
    </div>) } } const mapStateToProps = (state) => {return {users: state.users};{posts: state.posts}}
    export default connect(mapStateToProps, {
      push,
      userPath,
      singleUserPath,
      saveNewUser, deletePost, editToggle, editPost, addPost })(NewsFeed)
