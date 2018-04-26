import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath, saveNewUser, singleUserPath} from '../../actions/user.actions.js'
import axios from 'axios'
import NavBar from '../styles/NavBar'
import Footer from '../styles/Footer'
import Posts from '../posts/Posts'

const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #8f8d8d;
  color: rgba(#9a97b8, 0.61);
  font-family: 'Molengo', sans-serif;

  color: inherit;
`;
const Image = styled.img `
  border-radius: 50%;
  float:inherit;
`;
const Heading = styled.div `
  text-align: left;
`
// const TextContainer = styled.div`
//   display: inline-block;
// `

class NewsFeed extends Component {

  componentDidMount() {
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

          {
            this.props.users.map((userId) => {
              return (<div key={userId}>

                <div onClick={() => this.props.history.push(`/users/${userId.id}`)}>
                  <h4>{userId.name}</h4>
                  <Image width={100} src={userId.photo} alt={userId.name}></Image>

                </div>

              </div>)
            })
          }

        </div>
        <Footer/>
      </HomeContainer>
    </div>)
  }
}
const mapStateToProps = (state) => {
  return {users: state.users};
  {
    posts : state.posts
  }
}
export default connect(mapStateToProps, {
  push,
  userPath,
  singleUserPath,
  saveNewUser,
})(NewsFeed)
