import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {getUserRoute} from '../actions/thunk.actions.js'

class UserComponent extends Component {
  componentWillMount() {
    this.props.getUserRoute()
  }

  render() {
    return (
      <div>
      <button onClick={() => this.props.history.push('/')}>
        Home
      </button>
      <div>
        <form>
          <input type="submit" name="user" />
        </form>
        <button onClick={() => this.props.history.push(`/users/:id`)}>
          Create User
        </button>
      </div>

{this.props.user}
        {
          this.props.users.map((user, i) => {
            return (<div key={i}>
              <div onClick={() => this.props.push(`/users/${user.id}/show`)}>
                <img src={user.photo} alt={user.name}/>
                <br/> {user.name}
              </div>
            </div>)
          })
        }


    </div>)
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {push, getUserRoute})(UserComponent)
//calling the state and getting the actions for the state and sending it to UserComponent
