import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {singleUserPath, getSingleUser} from '../../actions/user.actions'
import axios from 'axios'
import Posts from '../posts/Posts'
import EditPost from '../posts/EditPost'
import NewPostForm from '../posts/NewPostForm'
import Footer from '../styles/Footer'
import NavBar from '../styles/NavBar'
import {Image, Buttons} from 'semantic-ui-react'

const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #8f8d8d;
  color: rgba(#9a97b8, 0.61);
  font-family: cursive;
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
    border-radius: 6px;
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
     font-style: italic;
   }
`
class SingleUser extends Component {

  componentWillMount() {
    const userId = this.props.match.params.userId
    this.props.singleUserPath(userId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showNewUser: {
        id: this.props.match.params.userId,
        name: nextProps.showNewUser.name,
        age: nextProps.showNewUser.age,
        email: nextProps.showNewUser.email,
        photo: nextProps.showNewUser.photo,
        password: nextProps.showNewUser.password
      }
    })
  }
  state ={
    showNewUser: {
      name:'',
      age:'',
      email:'',
      photo:'',
      password:''
    }
  }

  render() {
    return (<div>
      <HomeContainer>
      <NavBar/>
      <ImageContainer className='pic' src={this.state.showNewUser.photo} alt={this.props.showNewUser.name}/>

      {/* <SingleUserPage> */}
        <h2>Hello, {this.state.showNewUser.name}!</h2>
        <InfoContainer>
          <h4>Account Info
          </h4>
          <h4>Age: {this.state.showNewUser.age}</h4>
          <h4>Email: {this.state.showNewUser.email}</h4>
          <h4>Posts: {this.state.showNewUser.post}</h4>

        </InfoContainer>
        <NewPostForm key={this.state.id} />
        {/* <Posts />
        <EditPost/> */}
      <Footer/>
      </HomeContainer>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {showNewUser: state.users[0]}
}
export default connect(mapStateToProps, {singleUserPath})(SingleUser)
// const mapStateToProps = (state, ownProps) => {
//   if (state.users.length === 0) {
//     //Get all the users from API when going directly to this page
//   }
//   const userId = ownProps.match.params.id
//   const user = state.users.find(user => {
//     return user.id === parseInt(userId)
//   })
//   console.log(user)
//   return {user}
// }
// export default connect(mapStateToProps, {push, singleUserPath, getSingleUser})(SingleUser)
