import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {killUser, singleUserPath, userPath} from '../../actions/user.actions.js'
import {deletePost, editToggle, editPost, addPost} from '../../actions/post.actions.js'
import axios from 'axios'
import NavBar from '../styles/NavBar'
import Footer from '../styles/Footer'
import NewPostForm from '../posts/NewPostForm'
import {Button} from 'semantic-ui-react'

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

  // handleChange() {
  //   this.props.singleUserPath()
  //   console.log(singleUserPath)
  // }

  render() {
    return (<div>
      <HomeContainer>
      <NavBar/>

      <h3>Add some friends!</h3>
      <div>
        <Button onClick={() => this.props.push(`/`)}>home</Button>
        <Button onClick={() => this.props.push('/users/new')}>new user</Button>
      </div>
      <div>

        {
          this.props.users.map((user, i) => {
            return (<div key={i}>

              <div onClick={() => this.props.push(`/users/${user.id}`)}>
                <img width={200} src={user.photo} alt={user.name}/>
                <br/> {user.name}
                <br/> {user.email}
                <br/> {user.age}
                <br/>{user.posts}
              </div>
              <div onClick={() => this.props.push(`/users/${user.id}/edit`)}>
                <img width={200} src={user.photo} alt={user.name}/>
                <br/> {user.name}
                <br/> {user.email}
                <br/> {user.age}
                <br/>{user.posts}
              </div>
              <div onClick={() => this.props.killUser(user)}>
              </div>
            </div>)
          })
        }

      </div>
      <NewPostForm/>
      <Footer/>
    </HomeContainer>
    </div>) } } const mapStateToProps = (state) => {return {users: state.users};{posts: state.posts}}
    export default connect(mapStateToProps, {
      push,
      singleUserPath, userPath,
    killUser })(NewsFeed)
