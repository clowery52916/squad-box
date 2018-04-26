import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {singleUserPath, getSingleUser} from '../../actions/user.actions'
import axios from 'axios'
import Posts from '../posts/Posts'
import EditPost from '../posts/EditPost'
import PostsForm from '../posts/PostsForm'
import Buttons from '../styles/Buttons'
import Footer from '../styles/Footer'
import NavBar from '../styles/NavBar'
import {Image} from 'semantic-ui-react'

const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: 'Molengo', sans-serif;

  background-color: #8f8d8d;
  color: rgba(#9a97b8, 0.61);
  color: inherit;
`;

const SingleUserPage = styled.div `
  padding: 10px;
  margin-top: 5px;
  justify-content: center;
  align-content: center;
  flex-flow: wrap;
  display: flex;
  height: 30vh;


`

const ImageContainer = styled.img `
    max-height: 30vh;
    width: 30vw;
    border-radius: 10%;
    image-orientation: center;
    flex-basis: auto;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .5);
    margin-bottom: 20px;
`;
const InfoContainer = styled.div `
  display: flex;
  border-style: ridge;
  flex-direction: column;
  text-align: center;
  overflow-y: scroll;
  overflow-x:
   hidden;
   h3{
     font-family: 'Molengo', sans-serif;

   }
`
class SingleUser extends Component {

  render() {
    return (<div>
      <HomeContainer>
      <NavBar/>
      <ImageContainer className='pic' src={this.props.user.photo} alt={this.props.user.name}/>

      {/* <SingleUserPage> */}
        <h2>Hello, {this.props.user.name}!</h2>
        <InfoContainer>
          <h4>Account Info
          </h4>
          <h4>Age: {this.props.user.age}</h4>
          <h4>Password: {this.props.user.password}</h4>

          <h4>Email: {this.props.user.email}</h4>
          <h4>Posts: {this.props.user.post}</h4>

        </InfoContainer>
      <Footer/>
      </HomeContainer>
    </div>)
  }
}
const mapStateToProps = (state, ownProps) => {
  if (state.users.length === 0) {
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
