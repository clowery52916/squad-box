import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {userPath} from './../actions/user.actions.js'

class NewsFeed extends Component {
  componentWillMount() {
    this.props.userPath()
console.log(userPath)
  }

  render() {
    return (<div>

      <button onClick={() => this.props.history.push(`/user/:id`)}>
        Profile
      </button>
      <div>
        <button onClick={() => this.props.history.push(`/users`)}>

        </button>
      </div>
        <h3>Add some friends!</h3>
      <div>

        {
          this.props.users.map((user, i) => {
            return (
              <div>

              <div onClick={() => this.props.history.push(`/users/${user.id}`)}>
                <img width={200} src={user.photo} alt={user.name}/>
                <br/> {user.name}
                <br/>
                {user.email}
                <br/>
                {user.password}
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
export default connect(mapStateToProps, {push, userPath})(NewsFeed)
