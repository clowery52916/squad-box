import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath, saveEditUser, singleUserPath} from '../actions/user.actions.js'
import axios from 'axios'

class NewsFeed extends Component {
  componentWillMount() {
    this.props.userPath()
console.log(userPath)
  }

  componentWillReceiveProps(nextProps) {
    this.props.singleUserPath()
    console.log(singleUserPath)
  }
  componentWillUpdate(nextProps, nextState) {
    this.props.saveEditUser()
    console.log(saveEditUser)
  }
  componentd
  render() {
    return (<div>

      {/* <div onClick={() => this.props.history.push(`/user/${user}`)}>
        Profile
      </div>
      <div>
        <button onClick={() => this.props.history.push(`/users/${user}`)}>
        fuck off
        </button>
      </div> */}
        <h3>Add some friends!</h3>
      <div>

        {
          this.props.users.map((userId) => {
            return (
              <div>

              <div onClick={() => this.props.history.push(`/users/${userId.id}`)}>
                <img width={200} src={userId.photo} alt={userId.name}/>
                <br/> {userId.name}
                <br/>
                {userId.email}
                <br/>
                {userId.age}
              </div>

        </div> )
          })
        }

      </div>

    </div>)
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {push, userPath, singleUserPath, saveEditUser})(NewsFeed)
