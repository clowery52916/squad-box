import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {singleUserPath, getSingleUser} from '../actions/user.actions.js'
import axios from 'axios'
import NavBar from './NavBar'
import Footer from './Footer'
import Edit from './Edit'
import {Image} from 'semantic-ui-react'

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
    max-height: 55vh;
    width: 100vw;
    border-radius: 6px;
    image-orientation: center;
    flex-basis: auto;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .5);
    margin-bottom: 20px;
`;
const InfoContainer = styled.div `
  display: flex;
  background-color: red;
  flex-direction: column;
  text-align: center;
  overflow-y: scroll;
  overflow-x:
   hidden;
   h3{
     font-style: italic;
   }
`;

// const UserCard = styled.div`
//   border: 1px solid #EAEAEA;
//   background: rgb(135, 138, 134);
//     width: 100vw;
// `

class SingleUser extends Component {

  render() {
    return (<div>
      <NavBar/>

      <ImageContainer className='pic' src={this.props.user.photo} alt={this.props.user.name}/>

      <SingleUserPage>
        <h2>Hello, {this.props.user.name}!</h2>
        <InfoContainer>
          <h4>About Me</h4>
          <h4>Age: {this.props.user.age}</h4>
          <h4>Emal: {this.props.user.email}</h4>
          <h4>Your Post History {this.props.user.postId}</h4>
          <h4>Comments you've made {this.props.user.commentId}</h4>
          {/* <Comments/> */}
          {/* <Posts /> */}
        </InfoContainer>
      </SingleUserPage>

      <Edit/>
      <Footer/>
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
