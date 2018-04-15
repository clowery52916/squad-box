import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath, saveNewUser, singleUserPath} from '../actions/user.actions.js'
import axios from 'axios'

class NewsFeed extends Component {
  componentWillMount() {
    this.props.saveNewUser()
    console.log(saveNewUser)
  }

  componentWillReceiveProps(nextProps) {
    this.props.userPath()
    console.log(userPath)
  }
  componentWillUpdate(nextProps, nextState) {
    this.props.singleUserPath()
    console.log(singleUserPath)
  }
 render() {
    return (<div>

      {/* <div onClick={() => this.props.history.push(`/user/${user}`)}>
        Profile
      </div>
      <div>
        <button onClick={() => this.props.history.push(`/users/${user}`)}>
        fuck off
        </button>
      </div> */
      }
      <h3>Add some friends!</h3>
      <div>

        {
          this.props.users.map((user) => {
            return (<div>

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

    </div>)
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {push, userPath, singleUserPath, saveNewUser})(NewsFeed)
